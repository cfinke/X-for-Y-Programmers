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
 * }
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
  app.appendChild(taskPanel);

  const compare = el("section", "compare");
  const srcPanel = el("div", "panel source-panel");
  srcPanel.appendChild(el("h2", null, escapeHtml(COURSE.sourceHeading)));
  const srcPre = el("pre", "code-block source-code");
  const srcCode = document.createElement("code");
  srcCode.textContent = LESSON[COURSE.sourceField];
  srcPre.appendChild(srcCode);
  srcPanel.appendChild(srcPre);
  compare.appendChild(srcPanel);

  const editorPanel = el("div", "panel editor-panel");
  editorPanel.appendChild(el("h2", null, "Write your TypeScript"));
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

  // 2. Compile & execute
  let runResult = null;
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

  // 3. Behavior tests
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
