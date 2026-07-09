/*
 * Shared lesson harness, used by every course under X-for-Y-Programmers/.
 *
 * Each lesson page loads, in order:
 *   ../../shared/js/vendor/typescript.min.js
 *   ../js/course.js     — defines COURSE (course-level config)
 *   ../js/manifest.js   — defines MANIFEST (lesson list for nav/index)
 *   ../../shared/js/harness.js
 * and defines a global LESSON object in an inline script.
 *
 * COURSE schema:
 * {
 *   title: "TypeScript for PHP Programmers",   // page titles & breadcrumb
 *   sourceHeading: "The PHP you know",          // left-panel heading
 *   sourceField: "php",                         // LESSON field with source-language code
 *   cheatSheetTitle: "PHP ⇄ TypeScript cheat sheet",
 *   storageKey: "tsphp-completed",              // localStorage progress key
 *   accent: "#7a6fb0",                          // source-panel accent color (optional)
 *   target: "typescript",                       // language being taught: "typescript"
 *                                               // (default, runs in-browser) or "rust"
 *                                               // (runs via the Rust Playground API)
 *   targetName: "TypeScript",                   // editor heading: "Write your <targetName>"
 * }
 *
 * For target "rust", LESSON.tests entries are { name, code } where `code` is
 * Rust statements (typically assert_eq!/assert!) run against the learner's
 * code, and there is no exportNames field. Learner code must not define main.
 *
 * LESSON schema:
 * {
 *   number: 1,
 *   title: "Variables & Basic Types",
 *   intro: "<p>HTML explaining the concept, source-language-first…</p>",
 *   [COURSE.sourceField]: "… raw source-language code (rendered as text, no escaping needed)",
 *   task: "<p>HTML describing the problem to solve…</p>",
 *   starter: "// TypeScript starter code placed in the editor",
 *   exportNames: ["fnA", "fnB"],   // symbols the tests need
 *   requirements: [                // static checks against the source
 *     { pattern: /:\s*string/, message: "Annotate the parameter as string" },
 *   ],
 *   tests: [                       // pass unless run() throws (async run() is awaited)
 *     { name: "greet('World')", run: (x) => expectEqual(x.greet("World"), "Hello, World!") },
 *   ],
 *   solution: "// reference solution shown on demand",
 *   notes: "<table>…</table>"      // cheat-sheet table
 * }
 */

/* ---------- assertion helpers (available to lesson tests) ---------- */

function expectEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error("expected " + show(expected) + " but got " + show(actual));
  }
}

function expectDeepEqual(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error("expected " + show(expected) + " but got " + show(actual));
  }
}

function expectTruthy(actual) {
  if (!actual) {
    throw new Error("expected a truthy value but got " + show(actual));
  }
}

function expectThrows(fn) {
  try {
    fn();
  } catch (e) {
    return;
  }
  throw new Error("expected the call to throw, but it did not");
}

function show(v) {
  if (typeof v === "string") return JSON.stringify(v);
  if (v === undefined) return "undefined";
  try { return JSON.stringify(v); } catch (e) { return String(v); }
}

/* ---------- progress tracking ---------- */

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(COURSE.storageKey)) || []; }
  catch (e) { return []; }
}

function markComplete(n) {
  const done = loadProgress();
  if (!done.includes(n)) {
    done.push(n);
    localStorage.setItem(COURSE.storageKey, JSON.stringify(done));
  }
}

/* ---------- compilation & execution ---------- */

function compileAndRun(source, exportNames) {
  if (typeof ts === "undefined") {
    throw new Error("The TypeScript compiler failed to load. Check that shared/js/vendor/typescript.min.js exists.");
  }
  const out = ts.transpileModule(source, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.CommonJS,
      experimentalDecorators: true,
    },
    reportDiagnostics: true,
  });
  const syntaxErrors = (out.diagnostics || []).filter(function (d) { return d.category === 1; });
  if (syntaxErrors.length) {
    const msgs = syntaxErrors.map(function (d) {
      let where = "";
      if (d.file && typeof d.start === "number") {
        const pos = d.file.getLineAndCharacterOfPosition(d.start);
        where = "line " + (pos.line + 1) + ": ";
      }
      return where + ts.flattenDiagnosticMessageText(d.messageText, " ");
    });
    const err = new Error(msgs.join("\n"));
    err.isCompileError = true;
    throw err;
  }

  // Collect symbols whether they are plain declarations or `export`ed
  // (export compiles to assignments on the CommonJS `exports` object).
  const collector = "\n;return {" + exportNames.map(function (n) {
    return JSON.stringify(n) + ": (typeof " + n + " !== 'undefined') ? " + n + " : exports[" + JSON.stringify(n) + "]";
  }).join(",") + "};";

  const logs = [];
  const fakeConsole = {
    log: function () { logs.push(fmtArgs(arguments)); },
    error: function () { logs.push("[error] " + fmtArgs(arguments)); },
    warn: function () { logs.push("[warn] " + fmtArgs(arguments)); },
    info: function () { logs.push(fmtArgs(arguments)); },
  };
  const exportsObj = {};
  const fn = new Function("exports", "require", "module", "console", out.outputText + collector);
  const exported = fn(exportsObj, function () { return {}; }, { exports: exportsObj }, fakeConsole);
  return { exported: exported, logs: logs };
}

function fmtArgs(args) {
  return Array.prototype.map.call(args, function (a) {
    return typeof a === "string" ? a : show(a);
  }).join(" ");
}

/* ---------- Rust runner (target: "rust") ---------- */

/*
 * Builds one Rust program from the learner's code plus the lesson's tests.
 * Each test becomes its own fn run under catch_unwind, so one failing
 * assert doesn't hide the others. Results are printed as ::PASS::<i> /
 * ::FAIL::<i>::<message> lines and parsed back out of stdout.
 */
function buildRustProgram(userCode, tests) {
  let out = "#![allow(unused)]\n" + userCode + "\n\n";
  tests.forEach(function (t, i) {
    out += "fn __lesson_test_" + i + "() {\n" + t.code + "\n}\n\n";
  });
  out += "fn main() {\n";
  out += "    std::panic::set_hook(Box::new(|_| {}));\n";
  out += "    let tests: &[fn()] = &[" + tests.map(function (_, i) { return "__lesson_test_" + i; }).join(", ") + "];\n";
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

async function runRustProgram(program) {
  const resp = await fetch("https://play.rust-lang.org/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      channel: "stable",
      mode: "debug",
      edition: "2021",
      crateType: "bin",
      tests: false,
      code: program,
      backtrace: false,
    }),
  });
  if (!resp.ok) {
    throw new Error("The Rust Playground returned HTTP " + resp.status + ". Try again in a moment.");
  }
  return resp.json(); // { success, stdout, stderr }
}

function rustCompileErrors(stderr) {
  const lines = (stderr || "").split("\n").filter(function (l) {
    return !/^\s*(Compiling|Finished|Running|warning: unused)/.test(l);
  });
  const text = lines.join("\n").trim();
  return text.length > 4000 ? text.slice(0, 4000) + "\n…" : text;
}

/* ---------- PHP runner (target: "php") ---------- */

/*
 * Same shape as the Rust runner: one PHP program from the learner's code
 * plus the lesson's tests, each test isolated in a closure with Throwable
 * caught, results printed as ::PASS::<i> / ::FAIL::<i>::<message> lines.
 * Lesson code starts with <?php (stripped here); tests use the expect_eq /
 * expect_true helpers defined below. Executed on wandbox.org.
 */
function buildPhpProgram(userCode, tests) {
  const user = userCode.replace(/^\s*<\?php\s*/, "");
  let out = "<?php\n";
  out += "function expect_eq($actual, $expected) { if ($actual !== $expected) { throw new Exception('expected ' . var_export($expected, true) . ' but got ' . var_export($actual, true)); } }\n";
  out += "function expect_true($cond) { if (!$cond) { throw new Exception('expected a truthy value'); } }\n\n";
  out += user + "\n\n";
  tests.forEach(function (t, i) {
    out += "try { (function () {\n" + t.code + "\n})(); echo \"::PASS::" + i + "\\n\"; } catch (Throwable $e) { echo \"::FAIL::" + i + "::\" . str_replace(\"\\n\", \" \", $e->getMessage()) . \"\\n\"; }\n";
  });
  return out;
}

async function runWandbox(compiler, program, optionRaw) {
  const body = { code: program, compiler: compiler };
  if (optionRaw) body["compiler-option-raw"] = optionRaw;
  const resp = await fetch("https://wandbox.org/api/compile.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!resp.ok) {
    throw new Error("Wandbox returned HTTP " + resp.status + ". Try again in a moment.");
  }
  const data = await resp.json();
  // Normalize to the { stdout, stderr } shape the marker parser expects.
  return {
    stdout: data.program_output || "",
    stderr: (data.compiler_error || "") + (data.program_error || ""),
  };
}

function runPhpProgram(program) {
  return runWandbox("php-8.3.12", program);
}

/* ---------- Ruby runner (target: "ruby") ---------- */

/*
 * Same shape as the PHP runner: one Ruby program from the learner's code
 * plus the lesson's tests, each test isolated in a begin/rescue that catches
 * Exception (so NotImplementedError TODO stubs fail gracefully), results
 * printed as ::PASS::<i> / ::FAIL::<i>::<message> lines. Tests use the
 * expect_eq / expect_true helpers defined below. Executed on wandbox.org.
 */
function buildRubyProgram(userCode, tests) {
  let out = "";
  out += "def expect_eq(actual, expected)\n";
  out += "  raise \"expected #{expected.inspect} but got #{actual.inspect}\" unless actual == expected\n";
  out += "end\n\n";
  out += "def expect_true(cond)\n";
  out += "  raise \"expected a truthy value\" unless cond\n";
  out += "end\n\n";
  out += userCode + "\n\n";
  tests.forEach(function (t, i) {
    out += "begin\n" + t.code + "\n  puts \"::PASS::" + i + "\"\n";
    out += "rescue Exception => e\n  puts \"::FAIL::" + i + "::\" + e.message.to_s.split(\"\\n\").join(\" \")\nend\n";
  });
  return out;
}

function runRubyProgram(program) {
  return runWandbox("ruby-3.4.9", program);
}

/* ---------- Java runner (target: "java") ---------- */

/*
 * Same shape as the other Wandbox runners. The learner writes top-level,
 * package-private types (classes/interfaces/enums/records) — no `public`
 * modifier and no `main` — and the harness appends a non-public `Main` class
 * holding the expect_eq / expect_true helpers and a main() that runs each test
 * in its own try/catch, printing ::PASS::<i> / ::FAIL::<i>::<message> lines.
 * (Main is non-public because Wandbox compiles the file as prog.java, which a
 * public class named Main would reject.) Executed on wandbox.org.
 */
function buildJavaProgram(userCode, tests) {
  let out = "";
  out += "import java.util.*;\n";
  out += "import java.util.stream.*;\n\n";
  out += userCode + "\n\n";
  out += "class Main {\n";
  out += "  static String __s(Object o){ return o == null ? \"null\" : o.toString(); }\n";
  out += "  static void expect_eq(Object a, Object b){ if(!Objects.equals(a, b)) throw new RuntimeException(\"expected \" + __s(b) + \" but got \" + __s(a)); }\n";
  out += "  static void expect_true(boolean c){ if(!c) throw new RuntimeException(\"expected a truthy value\"); }\n";
  out += "  public static void main(String[] args){\n";
  tests.forEach(function (t, i) {
    out += "    try {\n" + t.code + "\n      System.out.println(\"::PASS::" + i + "\");\n";
    out += "    } catch (Throwable e){ System.out.println(\"::FAIL::" + i + "::\" + String.valueOf(e.getMessage()).replace(\"\\n\", \" \")); }\n";
  });
  out += "  }\n}\n";
  return out;
}

function runJavaProgram(program) {
  return runWandbox("openjdk-jdk-21+35", program);
}

/* ---------- C++ runner (target: "cpp") ---------- */

/*
 * Same shape as the other Wandbox runners. The learner writes top-level code
 * (free functions, classes, structs) but NOT a main; the harness prepends a
 * broad set of standard includes and appends the expect_eq / expect_true
 * helpers plus a main() that runs each test in its own try/catch, printing
 * ::PASS::<i> / ::FAIL::<i>::<message> lines. Compiled with -std=c++20 on
 * wandbox.org (gcc).
 */
function buildCppProgram(userCode, tests) {
  let out = "";
  const headers = ["iostream", "string", "vector", "map", "unordered_map", "set",
    "unordered_set", "algorithm", "numeric", "memory", "optional", "variant",
    "functional", "stdexcept", "sstream", "tuple", "array", "cstdint", "cctype", "cmath"];
  headers.forEach(function (h) { out += "#include <" + h + ">\n"; });
  out += "\n" + userCode + "\n\n";
  out += "template<class A, class B> static void expect_eq(const A& a, const B& b){ if(!(a == b)) throw std::runtime_error(\"expected values to be equal\"); }\n";
  out += "static void expect_true(bool c){ if(!c) throw std::runtime_error(\"expected a truthy value\"); }\n\n";
  out += "int main(){\n";
  tests.forEach(function (t, i) {
    out += "  try {\n" + t.code + "\n    std::cout << \"::PASS::" + i + "\\n\";\n";
    out += "  } catch (const std::exception& e){ std::cout << \"::FAIL::" + i + "::\" << e.what() << \"\\n\"; }\n";
    out += "  catch (...) { std::cout << \"::FAIL::" + i + "::unknown error\\n\"; }\n";
  });
  out += "  return 0;\n}\n";
  return out;
}

function runCppProgram(program) {
  return runWandbox("gcc-13.2.0", program, "-std=c++20");
}

/* ---------- Python runner (target: "python") ---------- */

/*
 * Same shape as the other Wandbox runners. The learner writes top-level Python
 * (functions, classes); the harness prepends the expect_eq / expect_true
 * helpers and appends one function per test (Python is whitespace-sensitive, so
 * each test's code sits in its own def body) run inside try/except, printing
 * ::PASS::<i> / ::FAIL::<i>::<message> lines. Executed on wandbox.org.
 */
function buildPythonProgram(userCode, tests) {
  let out = "";
  out += "def expect_eq(actual, expected):\n";
  out += "    if actual != expected:\n";
  out += "        raise AssertionError(f\"expected {expected!r} but got {actual!r}\")\n\n";
  out += "def expect_true(cond):\n";
  out += "    if not cond:\n";
  out += "        raise AssertionError(\"expected a truthy value\")\n\n";
  out += userCode + "\n\n";
  out += "def __run(fn, i):\n";
  out += "    try:\n";
  out += "        fn()\n";
  out += "        print(f\"::PASS::{i}\")\n";
  out += "    except Exception as e:\n";
  out += "        print(f\"::FAIL::{i}::\" + str(e).replace(chr(10), ' '))\n\n";
  tests.forEach(function (t, i) {
    out += "def __t" + i + "():\n" + t.code + "\n";
    out += "__run(__t" + i + ", " + i + ")\n";
  });
  return out;
}

function runPythonProgram(program) {
  return runWandbox("cpython-3.13.8", program);
}

/* ---------- C# runner (target: "csharp") ---------- */

/*
 * Same shape as the other Wandbox runners. The learner writes top-level C#
 * types (classes, structs, enums, interfaces) but NOT a Main; the harness
 * prepends common `using`s and appends a `Program` class holding the
 * expect_eq / expect_true helpers and a Main() that runs each test in its own
 * try/catch, printing ::PASS::<i> / ::FAIL::<i>::<message> lines. Compiled with
 * mono (C# 7.3) on wandbox.org.
 */
function buildCsharpProgram(userCode, tests) {
  let out = "";
  ["System", "System.Collections", "System.Collections.Generic", "System.Linq", "System.Text"]
    .forEach(function (u) { out += "using " + u + ";\n"; });
  out += "\n" + userCode + "\n\n";
  out += "class Program {\n";
  out += "  static void expect_eq(object a, object b){ if(!object.Equals(a, b)) throw new Exception($\"expected {b} but got {a}\"); }\n";
  out += "  static void expect_true(bool c){ if(!c) throw new Exception(\"expected a truthy value\"); }\n";
  out += "  static void Main(){\n";
  tests.forEach(function (t, i) {
    out += "    try {\n" + t.code + "\n      Console.WriteLine(\"::PASS::" + i + "\");\n";
    out += "    } catch (Exception e){ Console.WriteLine(\"::FAIL::" + i + "::\" + e.Message.Replace(\"\\n\", \" \")); }\n";
  });
  out += "  }\n}\n";
  return out;
}

function runCsharpProgram(program) {
  return runWandbox("mono-6.12.0.199", program, "-langversion:latest");
}

/* ---------- Go runner (target: "go") ---------- */

/*
 * Same shape as the other Wandbox runners. The learner writes package-level Go
 * (functions, types) but NOT `package`, `import`, or `main`. The harness wraps
 * it in `package main`, an import block containing only the standard packages
 * the code actually references (fmt and reflect are always present, for the
 * helpers), the expect_eq / expect_true helpers, and a main() that runs each
 * test in its own closure with recover(), printing ::PASS::<i> / ::FAIL::<i>::
 * lines. Compiled with go on wandbox.org.
 */
var GO_CANDIDATE_PKGS = {
  strings: "strings", strconv: "strconv", sort: "sort", errors: "errors",
  math: "math", unicode: "unicode", utf8: "unicode/utf8", sync: "sync",
  time: "time", bytes: "bytes", json: "encoding/json", regexp: "regexp",
  bufio: "bufio", io: "io", os: "os", slices: "slices", maps: "maps", cmp: "cmp",
};

function buildGoProgram(userCode, tests) {
  let scan = userCode + "\n" + tests.map(function (t) { return t.code; }).join("\n");
  scan = scan.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const imports = ['"fmt"', '"reflect"'];
  Object.keys(GO_CANDIDATE_PKGS).forEach(function (sym) {
    if (new RegExp("\\b" + sym + "\\.").test(scan)) imports.push('"' + GO_CANDIDATE_PKGS[sym] + '"');
  });
  const uniq = imports.filter(function (v, i) { return imports.indexOf(v) === i; });
  let out = "package main\n\nimport (\n" + uniq.map(function (i) { return "\t" + i; }).join("\n") + "\n)\n\n";
  out += userCode + "\n\n";
  out += "func expect_eq(a, b interface{}) {\n\tif !reflect.DeepEqual(a, b) {\n\t\tpanic(fmt.Sprintf(\"expected %v but got %v\", b, a))\n\t}\n}\n\n";
  out += "func expect_true(c bool) {\n\tif !c {\n\t\tpanic(\"expected a truthy value\")\n\t}\n}\n\n";
  out += "func runTest(i int, fn func()) {\n\tdefer func() {\n\t\tif r := recover(); r != nil {\n\t\t\tfmt.Printf(\"::FAIL::%d::%v\\n\", i, r)\n\t\t}\n\t}()\n\tfn()\n\tfmt.Printf(\"::PASS::%d\\n\", i)\n}\n\n";
  out += "func main() {\n";
  tests.forEach(function (t, i) { out += "\trunTest(" + i + ", func() {\n" + t.code + "\n\t})\n"; });
  out += "}\n";
  return out;
}

function runGoProgram(program) {
  return runWandbox("go-1.23.2", program);
}

/* ---------- Kotlin runner (target: "kotlin") ---------- */

/*
 * Kotlin has no Wandbox compiler, so it runs on the Kotlin Playground service
 * (api.kotlinlang.org), the same backend the official playground widget uses.
 * The learner writes top-level Kotlin (functions, classes, and — at the very
 * top — any needed imports) but NOT main; the harness appends the expect_eq /
 * expect_true helpers and a main() that runs each test in its own lambda with a
 * try/catch, printing ::PASS::<i> / ::FAIL::<i>:: lines. Program output comes
 * back wrapped in <outStream> tags.
 */
function buildKotlinProgram(userCode, tests) {
  let out = userCode + "\n\n";
  out += "fun expect_eq(a: Any?, b: Any?) { if (a != b) throw RuntimeException(\"expected $b but got $a\") }\n";
  out += "fun expect_true(c: Boolean) { if (!c) throw RuntimeException(\"expected a truthy value\") }\n";
  out += "fun runTest(i: Int, fn: () -> Unit) {\n";
  out += "    try { fn(); println(\"::PASS::$i\") } catch (e: Throwable) { println(\"::FAIL::$i::\" + (e.message ?: e.toString()).replace(\"\\n\", \" \")) }\n";
  out += "}\n\n";
  out += "fun main() {\n";
  tests.forEach(function (t, i) { out += "    runTest(" + i + ") {\n" + t.code + "\n    }\n"; });
  out += "}\n";
  return out;
}

async function runKotlinProgram(program) {
  const resp = await fetch("https://api.kotlinlang.org/api/2.0.20/compiler/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ args: "", files: [{ name: "File.kt", text: program }] }),
  });
  if (!resp.ok) {
    throw new Error("The Kotlin Playground returned HTTP " + resp.status + ". Try again in a moment.");
  }
  const data = await resp.json();
  const text = data.text || "";
  const stdout = (text.match(/<outStream>([\s\S]*?)<\/outStream>/g) || [])
    .map(function (m) { return m.replace(/<\/?outStream>/g, ""); }).join("");
  let stderr = (text.match(/<errStream>([\s\S]*?)<\/errStream>/g) || [])
    .map(function (m) { return m.replace(/<\/?errStream>/g, ""); }).join("");
  const errs = (data.errors && data.errors["File.kt"]) || [];
  const compileErrs = errs.filter(function (e) { return e.severity === "ERROR"; }).map(function (e) { return e.message; });
  if (compileErrs.length) stderr += " " + compileErrs.join("; ");
  if (data.exception) stderr += " " + (data.exception.message || "runtime exception");
  return { stdout: stdout, stderr: stderr };
}

/* ---------- rendering ---------- */

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderLesson() {
  const app = document.getElementById("app");
  const idx = MANIFEST.findIndex(function (m) { return m.n === LESSON.number; });
  const prev = idx > 0 ? MANIFEST[idx - 1] : null;
  const next = idx < MANIFEST.length - 1 ? MANIFEST[idx + 1] : null;

  if (COURSE.accent) {
    document.documentElement.style.setProperty("--source-accent", COURSE.accent);
  }
  document.title = "Lesson " + LESSON.number + ": " + LESSON.title + " — " + COURSE.title;

  const header = el("header", "lesson-header");
  header.appendChild(el("p", "crumb", '<a href="../index.html">' + escapeHtml(COURSE.title) + "</a> · Lesson " +
    LESSON.number + " of " + MANIFEST.length));
  header.appendChild(el("h1", null, "Lesson " + LESSON.number + ": " + escapeHtml(LESSON.title)));
  app.appendChild(header);

  app.appendChild(el("section", "intro", LESSON.intro));

  const taskPanel = el("section", "panel task-panel task-standalone");
  taskPanel.appendChild(el("h2", null, "Your task"));
  taskPanel.appendChild(el("div", "task-body", LESSON.task));
  taskPanel.appendChild(el("p", "task-ref",
    "Need a reference? Open <strong>" + escapeHtml(COURSE.sourceHeading) +
    "</strong> beneath the editor to see the original."));
  app.appendChild(taskPanel);

  const compare = el("section", "compare");

  const editorPanel = el("div", "panel editor-panel");
  editorPanel.appendChild(el("h2", null, "Write your " + escapeHtml(COURSE.targetName || "TypeScript")));
  const editor = document.createElement("textarea");
  editor.id = "editor";
  editor.spellcheck = false;
  editor.value = LESSON.starter;
  editor.addEventListener("keydown", handleEditorKeys);
  editorPanel.appendChild(editor);

  const controls = el("div", "controls");
  const runBtn = el("button", "btn btn-run", "▶ Run tests");
  runBtn.addEventListener("click", function () { runTests(editor, runBtn); });
  controls.appendChild(runBtn);

  const resetBtn = el("button", "btn btn-ghost", "Reset code");
  resetBtn.addEventListener("click", function () {
    if (confirm("Replace the editor contents with the starter code?")) {
      editor.value = LESSON.starter;
      document.getElementById("results").innerHTML = "";
    }
  });
  controls.appendChild(resetBtn);
  controls.appendChild(el("span", "hint-key", "Tip: Ctrl/Cmd+Enter runs the tests"));
  editorPanel.appendChild(controls);
  compare.appendChild(editorPanel);

  // The source language the reader already knows sits below the editor,
  // collapsed by default — a reference to reach for, not the main event.
  const srcPanel = document.createElement("details");
  srcPanel.className = "panel source-panel";
  srcPanel.appendChild(el("summary", null, escapeHtml(COURSE.sourceHeading)));
  const srcPre = el("pre", "code-block source-code");
  const srcCode = document.createElement("code");
  srcCode.textContent = LESSON[COURSE.sourceField];
  srcPre.appendChild(srcCode);
  srcPanel.appendChild(srcPre);
  compare.appendChild(srcPanel);

  app.appendChild(compare);

  const workspace = el("section", "workspace results-area");
  const results = el("div", null, "");
  results.id = "results";
  workspace.appendChild(results);

  const details = document.createElement("details");
  details.className = "solution";
  const summary = el("summary", null, "Stuck? Show a reference solution");
  details.appendChild(summary);
  const solPre = el("pre", "code-block ts-code");
  const solCode = document.createElement("code");
  solCode.textContent = LESSON.solution;
  solPre.appendChild(solCode);
  details.appendChild(solPre);
  const loadBtn = el("button", "btn btn-ghost", "Copy solution into editor");
  loadBtn.addEventListener("click", function () { editor.value = LESSON.solution; });
  details.appendChild(loadBtn);
  workspace.appendChild(details);
  app.appendChild(workspace);

  if (LESSON.notes) {
    const notes = el("section", "notes");
    notes.appendChild(el("h2", null, escapeHtml(COURSE.cheatSheetTitle)));
    notes.appendChild(el("div", null, LESSON.notes));
    app.appendChild(notes);
  }

  const nav = el("nav", "lesson-nav");
  nav.appendChild(prev
    ? el("span", null, '<a href="' + prev.file + '">← Lesson ' + prev.n + ": " + escapeHtml(prev.title) + "</a>")
    : el("span", null, '<a href="../index.html">← Course index</a>'));
  nav.appendChild(next
    ? el("span", null, '<a href="' + next.file + '">Lesson ' + next.n + ": " + escapeHtml(next.title) + " →</a>")
    : el("span", null, '<a href="../index.html">Back to the course index →</a>'));
  app.appendChild(nav);

  app.appendChild(el("footer", "site-footer",
    '<a href="../../index.html">Home</a> · <a href="mailto:cfinke@gmail.com">Contact</a>'));

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      runTests(editor, runBtn);
    }
  });
}

function handleEditorKeys(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const t = e.target;
    const start = t.selectionStart;
    t.value = t.value.slice(0, start) + "  " + t.value.slice(t.selectionEnd);
    t.selectionStart = t.selectionEnd = start + 2;
  }
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- test runner ---------- */

async function runTests(editor, runBtn) {
  const results = document.getElementById("results");
  results.innerHTML = "";
  runBtn.disabled = true;

  const source = editor.value;
  const items = [];
  let allPassed = true;

  // 1. Static requirements
  (LESSON.requirements || []).forEach(function (req) {
    const ok = req.pattern.test(source);
    if (!ok) allPassed = false;
    items.push({ ok: ok, label: req.message, detail: ok ? "" : "not found in your code yet" });
  });

  // 2 & 3. Compile & execute, then behavior tests (per target language)
  let runResult = null;
  const target = COURSE.target || "typescript";
  if (target === "rust" || target === "php" || target === "ruby" || target === "java" || target === "cpp" || target === "python" || target === "csharp" || target === "go" || target === "kotlin") {
    const service = target === "rust" ? "the Rust Playground" : target === "kotlin" ? "the Kotlin Playground" : "Wandbox";
    const status = el("p", "run-status", "Compiling and running on " + service + "…");
    results.appendChild(status);
    try {
      const program = target === "rust" ? buildRustProgram(source, LESSON.tests)
        : target === "php" ? buildPhpProgram(source, LESSON.tests)
        : target === "ruby" ? buildRubyProgram(source, LESSON.tests)
        : target === "java" ? buildJavaProgram(source, LESSON.tests)
        : target === "cpp" ? buildCppProgram(source, LESSON.tests)
        : target === "python" ? buildPythonProgram(source, LESSON.tests)
        : target === "csharp" ? buildCsharpProgram(source, LESSON.tests)
        : target === "go" ? buildGoProgram(source, LESSON.tests)
        : buildKotlinProgram(source, LESSON.tests);
      const data = target === "rust" ? await runRustProgram(program)
        : target === "php" ? await runPhpProgram(program)
        : target === "ruby" ? await runRubyProgram(program)
        : target === "java" ? await runJavaProgram(program)
        : target === "cpp" ? await runCppProgram(program)
        : target === "python" ? await runPythonProgram(program)
        : target === "csharp" ? await runCsharpProgram(program)
        : target === "go" ? await runGoProgram(program)
        : await runKotlinProgram(program);
      const outcomes = {};
      const logs = [];
      (data.stdout || "").split("\n").forEach(function (line) {
        let m = line.match(/^::PASS::(\d+)$/);
        if (m) { outcomes[m[1]] = { ok: true }; return; }
        m = line.match(/^::FAIL::(\d+)::(.*)$/);
        if (m) { outcomes[m[1]] = { ok: false, detail: m[2] }; return; }
        if (line.trim()) logs.push(line);
      });
      if (Object.keys(outcomes).length === 0) {
        allPassed = false;
        const errText = target === "rust" ? rustCompileErrors(data.stderr) : (data.stderr || "").trim();
        items.push({
          ok: false,
          label: target === "rust" || target === "java" || target === "cpp" || target === "csharp" || target === "go" || target === "kotlin" ? "Your code must compile" : "Your code must parse and run",
          detail: errText || "The program produced no test output.",
        });
      } else {
        LESSON.tests.forEach(function (test, i) {
          const o = outcomes[i];
          if (o && o.ok) {
            items.push({ ok: true, label: test.name, detail: "" });
          } else {
            allPassed = false;
            items.push({ ok: false, label: test.name, detail: (o && o.detail) || "did not run" });
          }
        });
      }
      if (logs.length) runResult = { logs: logs };
    } catch (e) {
      allPassed = false;
      items.push({
        ok: false,
        label: "Could not reach " + service,
        detail: e.message + " — running these lessons requires an internet connection.",
      });
    }
    results.removeChild(status);
  } else {
    try {
      runResult = compileAndRun(source, LESSON.exportNames);
    } catch (e) {
      allPassed = false;
      items.push({
        ok: false,
        label: e.isCompileError ? "Your code must compile" : "Your code must run without crashing",
        detail: e.message,
      });
    }
    if (runResult) {
      for (const test of LESSON.tests) {
        try {
          await test.run(runResult.exported);
          items.push({ ok: true, label: test.name, detail: "" });
        } catch (e) {
          allPassed = false;
          items.push({ ok: false, label: test.name, detail: e.message });
        }
      }
    }
  }

  const list = el("ul", "test-results");
  items.forEach(function (item) {
    const li = el("li", item.ok ? "pass" : "fail");
    li.appendChild(el("span", "mark", item.ok ? "✓" : "✗"));
    const text = el("span", "label");
    text.textContent = item.label;
    li.appendChild(text);
    if (item.detail) {
      const d = el("div", "detail");
      d.textContent = item.detail;
      li.appendChild(d);
    }
    list.appendChild(li);
  });
  results.appendChild(list);

  if (runResult && runResult.logs.length) {
    const con = el("div", "console-out");
    con.appendChild(el("h3", null, "Console output"));
    const pre = document.createElement("pre");
    pre.textContent = runResult.logs.join("\n");
    con.appendChild(pre);
    results.appendChild(con);
  }

  if (allPassed) {
    markComplete(LESSON.number);
    const idx = MANIFEST.findIndex(function (m) { return m.n === LESSON.number; });
    const next = idx < MANIFEST.length - 1 ? MANIFEST[idx + 1] : null;
    const banner = el("div", "success-banner",
      "🎉 <strong>All tests pass!</strong> " +
      (next
        ? 'Ready for <a href="' + next.file + '">Lesson ' + next.n + ": " + escapeHtml(next.title) + "</a>?"
        : "You finished the course — nicely done."));
    results.appendChild(banner);
  }

  runBtn.disabled = false;
}

document.addEventListener("DOMContentLoaded", renderLesson);
