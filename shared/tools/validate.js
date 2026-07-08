#!/usr/bin/env node
/*
 * Validates lesson pages for any course under X-for-Y-Programmers/.
 * Extracts each LESSON object, checks the schema, verifies the reference
 * solution satisfies every requirement regex, compiles the starter and
 * solution with the vendored TypeScript compiler, and runs the lesson's
 * tests against the compiled solution.
 *
 * Course config (which field holds the source-language snippet, etc.) is
 * read from each course's js/course.js.
 *
 * Usage:
 *   node shared/tools/validate.js                     # every course
 *   node shared/tools/validate.js typescript-for-php-programmers
 *   node shared/tools/validate.js <course>/lessons/03-arrays.html ...
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const SHARED = path.join(__dirname, "..");
const ROOT = path.join(SHARED, "..");
const tsSource = fs.readFileSync(path.join(SHARED, "js/vendor/typescript.min.js"), "utf8");
const tsSandbox = {};
vm.createContext(tsSandbox);
vm.runInContext(tsSource + "\n;globalThis.__ts = ts;", tsSandbox);
const ts = tsSandbox.__ts;

const helpers = {
  expectEqual(actual, expected) {
    if (actual !== expected) throw new Error(`expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  },
  expectDeepEqual(actual, expected) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  },
  expectTruthy(actual) {
    if (!actual) throw new Error(`expected a truthy value but got ${JSON.stringify(actual)}`);
  },
  expectThrows(fn) {
    try { fn(); } catch (e) { return; }
    throw new Error("expected the call to throw, but it did not");
  },
};

const courseCache = new Map();
function loadCourse(courseRoot) {
  if (!courseCache.has(courseRoot)) {
    const src = fs.readFileSync(path.join(courseRoot, "js/course.js"), "utf8");
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(src + "\n;globalThis.__course = COURSE;", sandbox);
    courseCache.set(courseRoot, sandbox.__course);
  }
  return courseCache.get(courseRoot);
}

function extractLesson(html, file) {
  const m = html.match(/<script>\s*([\s\S]*?)<\/script>/);
  if (!m) throw new Error("no inline <script> with LESSON found");
  const sandbox = { ...helpers };
  vm.createContext(sandbox);
  vm.runInContext(m[1] + "\n;globalThis.__lesson = LESSON;", sandbox, { filename: file });
  return sandbox.__lesson;
}

function transpile(source) {
  const out = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, experimentalDecorators: true },
    reportDiagnostics: true,
  });
  const errors = (out.diagnostics || []).filter((d) => d.category === 1);
  if (errors.length) {
    throw new Error(errors.map((d) => ts.flattenDiagnosticMessageText(d.messageText, " ")).join("; "));
  }
  return out.outputText;
}

function runCompiled(js, exportNames) {
  const collector = "\n;return {" + exportNames.map((n) =>
    `${JSON.stringify(n)}: (typeof ${n} !== 'undefined') ? ${n} : exports[${JSON.stringify(n)}]`
  ).join(",") + "};";
  const fn = new Function("exports", "require", "module", "console", js + collector);
  const exportsObj = {};
  const silentConsole = { log() {}, error() {}, warn() {}, info() {} };
  return fn(exportsObj, () => ({}), { exports: exportsObj }, silentConsole);
}

/* ---------- Rust target support ---------- */

function buildRustProgram(userCode, tests) {
  let out = "#![allow(unused)]\n" + userCode + "\n\n";
  tests.forEach((t, i) => {
    out += "fn __lesson_test_" + i + "() {\n" + t.code + "\n}\n\n";
  });
  out += "fn main() {\n";
  out += "    std::panic::set_hook(Box::new(|_| {}));\n";
  out += "    let tests: &[fn()] = &[" + tests.map((_, i) => "__lesson_test_" + i).join(", ") + "];\n";
  out += "    for (i, t) in tests.iter().enumerate() {\n";
  out += "        match std::panic::catch_unwind(*t) {\n";
  out += "            Ok(_) => println!(\"::PASS::{}\", i),\n";
  out += "            Err(e) => {\n";
  out += "                let msg = if let Some(s) = e.downcast_ref::<&str>() { s.to_string() }\n";
  out += "                    else if let Some(s) = e.downcast_ref::<String>() { s.clone() }\n";
  out += "                    else { String::from(\"panicked\") };\n";
  out += "                println!(\"::FAIL::{}::{}\", i, msg.replace('\\n', \" \"));\n";
  out += "            }\n";
  out += "        }\n";
  out += "    }\n";
  out += "}\n";
  return out;
}

let rustWorkDir = null;
function compileRust(program, label) {
  if (!rustWorkDir) rustWorkDir = fs.mkdtempSync(path.join(os.tmpdir(), "lesson-rustc-"));
  const src = path.join(rustWorkDir, label + ".rs");
  const bin = path.join(rustWorkDir, label);
  fs.writeFileSync(src, program);
  try {
    execFileSync("rustc", ["--edition", "2021", "-o", bin, src], {
      stdio: ["ignore", "pipe", "pipe"],
      timeout: 60000,
    });
  } catch (e) {
    const err = new Error((e.stderr || "").toString().split("\n")
      .filter((l) => /error(\[|:)/.test(l)).slice(0, 8).join("; ") || "rustc failed");
    err.isCompileError = true;
    throw err;
  }
  return bin;
}

function runRustBinary(bin) {
  try {
    return execFileSync(bin, [], { stdio: ["ignore", "pipe", "pipe"], timeout: 15000 }).toString();
  } catch (e) {
    // Non-zero exit still produced stdout worth parsing (e.g. a stray panic).
    if (e.stdout) return e.stdout.toString();
    throw new Error("test binary failed: " + (e.message || "unknown error"));
  }
}

async function validateRust(html, file, course) {
  const problems = [];
  for (const ref of [
    "../../shared/css/style.css",
    "../js/course.js",
    "../js/manifest.js",
    "../../shared/js/harness.js",
  ]) {
    if (!html.includes(ref)) problems.push(`missing reference to ${ref}`);
  }
  if (html.includes("typescript.min.js")) problems.push("Rust lesson should not load the TypeScript compiler");

  let lesson;
  try {
    lesson = extractLesson(html, file);
  } catch (e) {
    return [`LESSON script failed to evaluate: ${e.message}`];
  }

  const fields = ["number", "title", "intro", course.sourceField, "task", "starter", "requirements", "tests", "solution", "notes"];
  for (const field of fields) {
    if (lesson[field] === undefined) problems.push(`missing field: ${field}`);
  }
  if (problems.length) return problems;

  const prefix = parseInt(path.basename(file).slice(0, 2), 10);
  if (lesson.number !== prefix) problems.push(`number ${lesson.number} does not match filename prefix ${prefix}`);
  if (!Array.isArray(lesson.tests) || lesson.tests.length < 3) problems.push("needs at least 3 tests");
  if (!Array.isArray(lesson.requirements) || lesson.requirements.length < 1) problems.push("needs at least 1 requirement");
  for (const t of lesson.tests || []) {
    if (typeof t.name !== "string" || typeof t.code !== "string") {
      problems.push("rust tests need { name: string, code: string (Rust statements) }");
    }
  }
  if (/fn\s+main\s*\(/.test(lesson.starter) || /fn\s+main\s*\(/.test(lesson.solution)) {
    problems.push("starter/solution must not define fn main (the harness appends its own)");
  }

  for (const req of lesson.requirements || []) {
    if (!req.pattern || typeof req.pattern.test !== "function" || typeof req.message !== "string") {
      problems.push("requirement entries need { pattern: RegExp, message: string }");
    } else if (!req.pattern.test(lesson.solution)) {
      problems.push(`solution does not satisfy requirement: "${req.message}" (${req.pattern})`);
    }
  }
  if (problems.length) return problems;

  const label = path.basename(file).replace(/\W/g, "_");
  try {
    compileRust(buildRustProgram(lesson.starter, lesson.tests), label + "_starter");
  } catch (e) {
    problems.push(`starter (with tests appended) does not compile: ${e.message}`);
  }

  let stdout;
  try {
    const bin = compileRust(buildRustProgram(lesson.solution, lesson.tests), label + "_solution");
    stdout = runRustBinary(bin);
  } catch (e) {
    problems.push(`solution failed to ${e.isCompileError ? "compile" : "run"}: ${e.message}`);
    return problems;
  }

  const outcomes = {};
  stdout.split("\n").forEach((line) => {
    let m = line.match(/^::PASS::(\d+)$/);
    if (m) { outcomes[m[1]] = { ok: true }; return; }
    m = line.match(/^::FAIL::(\d+)::(.*)$/);
    if (m) outcomes[m[1]] = { ok: false, detail: m[2] };
  });
  lesson.tests.forEach((t, i) => {
    const o = outcomes[i];
    if (!o) problems.push(`solution test "${t.name}" produced no result`);
    else if (!o.ok) problems.push(`solution fails test "${t.name}": ${o.detail}`);
  });

  return problems;
}

/* ---------- PHP target support ---------- */

function buildPhpProgram(userCode, tests) {
  const user = userCode.replace(/^\s*<\?php\s*/, "");
  let out = "<?php\n";
  out += "function expect_eq($actual, $expected) { if ($actual !== $expected) { throw new Exception('expected ' . var_export($expected, true) . ' but got ' . var_export($actual, true)); } }\n";
  out += "function expect_true($cond) { if (!$cond) { throw new Exception('expected a truthy value'); } }\n\n";
  out += user + "\n\n";
  tests.forEach((t, i) => {
    out += "try { (function () {\n" + t.code + "\n})(); echo \"::PASS::" + i + "\\n\"; } catch (Throwable $e) { echo \"::FAIL::" + i + "::\" . str_replace(\"\\n\", \" \", $e->getMessage()) . \"\\n\"; }\n";
  });
  return out;
}

function runPhp(program, label) {
  if (!rustWorkDir) rustWorkDir = fs.mkdtempSync(path.join(os.tmpdir(), "lesson-rustc-"));
  const src = path.join(rustWorkDir, label + ".php");
  fs.writeFileSync(src, program);
  try {
    return execFileSync("php", [src], { stdio: ["ignore", "pipe", "pipe"], timeout: 15000 }).toString();
  } catch (e) {
    const err = new Error(((e.stderr || "").toString() + (e.stdout || "").toString())
      .split("\n").filter((l) => /error/i.test(l)).slice(0, 5).join("; ") || "php failed");
    err.isCompileError = true;
    throw err;
  }
}

async function validatePhp(html, file, course) {
  const problems = [];
  for (const ref of [
    "../../shared/css/style.css",
    "../js/course.js",
    "../js/manifest.js",
    "../../shared/js/harness.js",
  ]) {
    if (!html.includes(ref)) problems.push(`missing reference to ${ref}`);
  }
  if (html.includes("typescript.min.js")) problems.push("PHP lesson should not load the TypeScript compiler");

  let lesson;
  try {
    lesson = extractLesson(html, file);
  } catch (e) {
    return [`LESSON script failed to evaluate: ${e.message}`];
  }

  const fields = ["number", "title", "intro", course.sourceField, "task", "starter", "requirements", "tests", "solution", "notes"];
  for (const field of fields) {
    if (lesson[field] === undefined) problems.push(`missing field: ${field}`);
  }
  if (problems.length) return problems;

  const prefix = parseInt(path.basename(file).slice(0, 2), 10);
  if (lesson.number !== prefix) problems.push(`number ${lesson.number} does not match filename prefix ${prefix}`);
  if (!Array.isArray(lesson.tests) || lesson.tests.length < 3) problems.push("needs at least 3 tests");
  if (!Array.isArray(lesson.requirements) || lesson.requirements.length < 1) problems.push("needs at least 1 requirement");
  for (const t of lesson.tests || []) {
    if (typeof t.name !== "string" || typeof t.code !== "string") {
      problems.push("php tests need { name: string, code: string (PHP statements) }");
    }
  }
  for (const [name, code] of [["starter", lesson.starter], ["solution", lesson.solution]]) {
    if (!/^\s*<\?php/.test(code)) problems.push(`${name} must begin with <?php`);
  }

  for (const req of lesson.requirements || []) {
    if (!req.pattern || typeof req.pattern.test !== "function" || typeof req.message !== "string") {
      problems.push("requirement entries need { pattern: RegExp, message: string }");
    } else if (!req.pattern.test(lesson.solution)) {
      problems.push(`solution does not satisfy requirement: "${req.message}" (${req.pattern})`);
    }
  }
  if (problems.length) return problems;

  const label = path.basename(file).replace(/\W/g, "_");
  try {
    const out = runPhp(buildPhpProgram(lesson.starter, lesson.tests), label + "_starter");
    if (!/::(PASS|FAIL)::/.test(out)) problems.push("starter (with tests appended) produced no test output — likely a parse or fatal error");
  } catch (e) {
    problems.push(`starter (with tests appended) failed to run: ${e.message}`);
  }

  let stdout;
  try {
    stdout = runPhp(buildPhpProgram(lesson.solution, lesson.tests), label + "_solution");
  } catch (e) {
    problems.push(`solution failed to run: ${e.message}`);
    return problems;
  }

  const outcomes = {};
  stdout.split("\n").forEach((line) => {
    let m = line.match(/^::PASS::(\d+)$/);
    if (m) { outcomes[m[1]] = { ok: true }; return; }
    m = line.match(/^::FAIL::(\d+)::(.*)$/);
    if (m) outcomes[m[1]] = { ok: false, detail: m[2] };
  });
  lesson.tests.forEach((t, i) => {
    const o = outcomes[i];
    if (!o) problems.push(`solution test "${t.name}" produced no result`);
    else if (!o.ok) problems.push(`solution fails test "${t.name}": ${o.detail}`);
  });

  return problems;
}

/* ---------- Ruby target support ---------- */

let rubyBin = null;
function findRuby() {
  if (rubyBin) return rubyBin;
  for (const candidate of [process.env.RUBY_BIN, "/opt/homebrew/opt/ruby/bin/ruby", "ruby"].filter(Boolean)) {
    try {
      const v = execFileSync(candidate, ["--version"], { stdio: ["ignore", "pipe", "pipe"] }).toString();
      const major = parseInt((v.match(/ruby (\d+)/) || [])[1], 10);
      if (major >= 3) { rubyBin = candidate; return rubyBin; }
    } catch (e) { /* try next */ }
  }
  throw new Error("no ruby >= 3 found (brew install ruby, or set RUBY_BIN)");
}

function buildRubyProgram(userCode, tests) {
  let out = "";
  out += "def expect_eq(actual, expected)\n";
  out += "  raise \"expected #{expected.inspect} but got #{actual.inspect}\" unless actual == expected\n";
  out += "end\n\n";
  out += "def expect_true(cond)\n";
  out += "  raise \"expected a truthy value\" unless cond\n";
  out += "end\n\n";
  out += userCode + "\n\n";
  tests.forEach((t, i) => {
    out += "begin\n" + t.code + "\n  puts \"::PASS::" + i + "\"\n";
    out += "rescue Exception => e\n  puts \"::FAIL::" + i + "::\" + e.message.to_s.split(\"\\n\").join(\" \")\nend\n";
  });
  return out;
}

function runRuby(program, label) {
  if (!rustWorkDir) rustWorkDir = fs.mkdtempSync(path.join(os.tmpdir(), "lesson-rustc-"));
  const src = path.join(rustWorkDir, label + ".rb");
  fs.writeFileSync(src, program);
  try {
    return execFileSync(findRuby(), [src], { stdio: ["ignore", "pipe", "pipe"], timeout: 15000 }).toString();
  } catch (e) {
    const err = new Error(((e.stderr || "").toString() + (e.stdout || "").toString())
      .split("\n").filter((l) => l.trim()).slice(0, 5).join("; ") || "ruby failed");
    err.isCompileError = true;
    throw err;
  }
}

async function validateRuby(html, file, course) {
  const problems = [];
  for (const ref of [
    "../../shared/css/style.css",
    "../js/course.js",
    "../js/manifest.js",
    "../../shared/js/harness.js",
  ]) {
    if (!html.includes(ref)) problems.push(`missing reference to ${ref}`);
  }
  if (html.includes("typescript.min.js")) problems.push("Ruby lesson should not load the TypeScript compiler");

  let lesson;
  try {
    lesson = extractLesson(html, file);
  } catch (e) {
    return [`LESSON script failed to evaluate: ${e.message}`];
  }

  const fields = ["number", "title", "intro", course.sourceField, "task", "starter", "requirements", "tests", "solution", "notes"];
  for (const field of fields) {
    if (lesson[field] === undefined) problems.push(`missing field: ${field}`);
  }
  if (problems.length) return problems;

  const prefix = parseInt(path.basename(file).slice(0, 2), 10);
  if (lesson.number !== prefix) problems.push(`number ${lesson.number} does not match filename prefix ${prefix}`);
  if (!Array.isArray(lesson.tests) || lesson.tests.length < 3) problems.push("needs at least 3 tests");
  if (!Array.isArray(lesson.requirements) || lesson.requirements.length < 1) problems.push("needs at least 1 requirement");
  for (const t of lesson.tests || []) {
    if (typeof t.name !== "string" || typeof t.code !== "string") {
      problems.push("ruby tests need { name: string, code: string (Ruby statements) }");
    }
  }

  for (const req of lesson.requirements || []) {
    if (!req.pattern || typeof req.pattern.test !== "function" || typeof req.message !== "string") {
      problems.push("requirement entries need { pattern: RegExp, message: string }");
    } else if (!req.pattern.test(lesson.solution)) {
      problems.push(`solution does not satisfy requirement: "${req.message}" (${req.pattern})`);
    }
  }
  if (problems.length) return problems;

  const label = path.basename(file).replace(/\W/g, "_");
  try {
    const out = runRuby(buildRubyProgram(lesson.starter, lesson.tests), label + "_starter");
    if (!/::(PASS|FAIL)::/.test(out)) problems.push("starter (with tests appended) produced no test output — likely a syntax error");
  } catch (e) {
    problems.push(`starter (with tests appended) failed to run: ${e.message}`);
  }

  let stdout;
  try {
    stdout = runRuby(buildRubyProgram(lesson.solution, lesson.tests), label + "_solution");
  } catch (e) {
    problems.push(`solution failed to run: ${e.message}`);
    return problems;
  }

  const outcomes = {};
  stdout.split("\n").forEach((line) => {
    let m = line.match(/^::PASS::(\d+)$/);
    if (m) { outcomes[m[1]] = { ok: true }; return; }
    m = line.match(/^::FAIL::(\d+)::(.*)$/);
    if (m) outcomes[m[1]] = { ok: false, detail: m[2] };
  });
  lesson.tests.forEach((t, i) => {
    const o = outcomes[i];
    if (!o) problems.push(`solution test "${t.name}" produced no result`);
    else if (!o.ok) problems.push(`solution fails test "${t.name}": ${o.detail}`);
  });

  return problems;
}

async function validate(file) {
  const problems = [];
  const html = fs.readFileSync(file, "utf8");
  const courseRoot = path.dirname(path.dirname(file));
  const course = loadCourse(courseRoot);

  if ((course.target || "typescript") === "rust") {
    return validateRust(html, file, course);
  }
  if ((course.target || "typescript") === "php") {
    return validatePhp(html, file, course);
  }
  if ((course.target || "typescript") === "ruby") {
    return validateRuby(html, file, course);
  }

  for (const ref of [
    "../../shared/css/style.css",
    "../../shared/js/vendor/typescript.min.js",
    "../js/course.js",
    "../js/manifest.js",
    "../../shared/js/harness.js",
  ]) {
    if (!html.includes(ref)) problems.push(`missing reference to ${ref}`);
  }

  let lesson;
  try {
    lesson = extractLesson(html, file);
  } catch (e) {
    return [`LESSON script failed to evaluate: ${e.message}`];
  }

  const fields = ["number", "title", "intro", course.sourceField, "task", "starter", "exportNames", "requirements", "tests", "solution", "notes"];
  for (const field of fields) {
    if (lesson[field] === undefined) problems.push(`missing field: ${field}`);
  }
  if (problems.length) return problems;

  const prefix = parseInt(path.basename(file).slice(0, 2), 10);
  if (lesson.number !== prefix) problems.push(`number ${lesson.number} does not match filename prefix ${prefix}`);
  if (!Array.isArray(lesson.tests) || lesson.tests.length < 3) problems.push("needs at least 3 tests");
  if (!Array.isArray(lesson.requirements) || lesson.requirements.length < 1) problems.push("needs at least 1 requirement");
  if (!Array.isArray(lesson.exportNames) || lesson.exportNames.length < 1) problems.push("needs at least 1 exportName");

  for (const req of lesson.requirements || []) {
    if (!req.pattern || typeof req.pattern.test !== "function" || typeof req.message !== "string") {
      problems.push("requirement entries need { pattern: RegExp, message: string }");
    } else if (!req.pattern.test(lesson.solution)) {
      problems.push(`solution does not satisfy requirement: "${req.message}" (${req.pattern})`);
    }
  }

  try {
    transpile(lesson.starter);
  } catch (e) {
    problems.push(`starter has syntax errors: ${e.message}`);
  }

  let exported;
  try {
    const js = transpile(lesson.solution);
    exported = runCompiled(js, lesson.exportNames);
  } catch (e) {
    problems.push(`solution failed to compile/run: ${e.message}`);
    return problems;
  }

  for (const name of lesson.exportNames) {
    if (exported[name] === undefined) problems.push(`solution does not define exported symbol: ${name}`);
  }

  for (const test of lesson.tests) {
    try {
      await test.run(exported);
    } catch (e) {
      problems.push(`solution fails test "${test.name}": ${e.message}`);
    }
  }

  return problems;
}

function discoverCourses() {
  return fs.readdirSync(ROOT)
    .map((d) => path.join(ROOT, d))
    .filter((d) => fs.existsSync(path.join(d, "js/course.js")))
    .sort();
}

function lessonsIn(courseDir) {
  const dir = path.join(courseDir, "lessons");
  return fs.readdirSync(dir).filter((f) => f.endsWith(".html")).sort().map((f) => path.join(dir, f));
}

(async () => {
  const args = process.argv.slice(2);
  let files = [];
  if (!args.length) {
    for (const course of discoverCourses()) files.push(...lessonsIn(course));
  } else {
    for (const arg of args) {
      const p = path.resolve(arg);
      if (fs.statSync(p).isDirectory()) files.push(...lessonsIn(p));
      else files.push(p);
    }
  }

  let failed = 0;
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    try {
      const problems = await validate(file);
      if (problems.length) {
        failed++;
        console.log(`FAIL ${rel}`);
        problems.forEach((p) => console.log(`  - ${p}`));
      } else {
        console.log(`ok   ${rel}`);
      }
    } catch (e) {
      failed++;
      console.log(`FAIL ${rel}\n  - validator crashed: ${e.message}`);
    }
  }
  console.log(failed ? `\n${failed} file(s) failed` : `\nAll ${files.length} lessons valid`);
  process.exit(failed ? 1 : 0);
})();
