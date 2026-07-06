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
const path = require("path");
const vm = require("vm");

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

async function validate(file) {
  const problems = [];
  const html = fs.readFileSync(file, "utf8");
  const courseRoot = path.dirname(path.dirname(file));
  const course = loadCourse(courseRoot);

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
