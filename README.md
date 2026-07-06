# X for Y Programmers

Interactive tutorial courses that teach one language to programmers who
already know another. Each lesson shows a familiar idiom from the language you
know beside a small problem to solve in the language you're learning, then
compiles and tests your answer directly in the browser — no toolchain
required, fully offline.

## Courses

- **[typescript-for-javascript-programmers](typescript-for-javascript-programmers/index.html)** — TypeScript for JavaScript Programmers (teaches the type layer; the runtime is assumed known)
- **[typescript-for-python-programmers](typescript-for-python-programmers/index.html)** — TypeScript for Python Programmers
- **[typescript-for-java-programmers](typescript-for-java-programmers/index.html)** — TypeScript for Java Programmers
- **[typescript-for-csharp-programmers](typescript-for-csharp-programmers/index.html)** — TypeScript for C# Programmers
- **[typescript-for-cpp-programmers](typescript-for-cpp-programmers/index.html)** — TypeScript for C++ Programmers
- **[typescript-for-php-programmers](typescript-for-php-programmers/index.html)** — TypeScript for PHP Programmers

Open a course's `index.html` in a browser, or serve the whole directory:

```sh
python3 -m http.server 8000
```

## Layout

```
X-for-Y-Programmers/
├── shared/                  libraries shared by every course
│   ├── css/style.css        theme (light/dark), generic .source-panel accent
│   ├── js/harness.js        renders lessons, compiles + tests learner code
│   ├── js/vendor/typescript.min.js   vendored TypeScript compiler (offline)
│   └── tools/validate.js    proves every lesson is solvable
└── <course>/                one directory per course, named x-for-y-programmers
    ├── index.html           lesson list with progress checkmarks
    ├── js/course.js         course config (see below)
    ├── js/manifest.js       lesson filenames/titles, drives nav + index
    └── lessons/NN-*.html    20 self-contained lesson pages
```

## Course config (`js/course.js`)

The shared harness is source-language-agnostic; each course tells it what to
display and which `LESSON` field holds the source-language snippet:

```js
const COURSE = {
  title: "TypeScript for PHP Programmers",   // page titles & breadcrumb
  sourceHeading: "The PHP you know",          // left-panel heading
  sourceField: "php",                         // LESSON field with source code
  cheatSheetTitle: "PHP ⇄ TypeScript cheat sheet",
  storageKey: "tsphp-completed",              // localStorage progress key
  accent: "#7a6fb0",                          // source-panel accent color
};
```

## How a lesson works

Every page in `lessons/` defines a single `LESSON` object:

| Field | Purpose |
| --- | --- |
| `intro` | HTML explaining the concept, anchored to the known language |
| `php` / `python` / … | Source-language snippet for the left panel (name set by `COURSE.sourceField`) |
| `task` | The problem statement |
| `starter` | Code pre-loaded into the editor |
| `requirements` | Regex checks that the answer uses the feature being taught |
| `tests` | Behavior tests run against the compiled code |
| `solution` | Reference solution, revealed on demand |
| `notes` | Cheat-sheet table |

Tests use the `expectEqual`, `expectDeepEqual`, `expectTruthy`, and
`expectThrows` helpers and pass unless they throw; async tests are awaited.

## Validating lessons

`shared/tools/validate.js` checks schema completeness, that the reference
solution satisfies its own requirement regexes, that starter and solution
compile, and that the solution passes all of the lesson's tests:

```sh
node shared/tools/validate.js                                  # every course
node shared/tools/validate.js typescript-for-php-programmers   # one course
node shared/tools/validate.js typescript-for-php-programmers/lessons/07-union-types.html
```

## Adding a course

1. Create `<x>-for-<y>-programmers/` with `js/course.js` (pick a new
   `sourceField`, `storageKey`, and accent), `js/manifest.js`, `index.html`
   (copy one from an existing course and edit the hero paragraph), and a
   `lessons/` directory.
2. Copy any existing lesson as a template — only the `<title>` and the inline
   `LESSON` object change; the `<script src>` paths stay the same.
3. Run `node shared/tools/validate.js <your-course>` until everything is `ok`.

## Adding a lesson to an existing course

1. Copy an existing lesson file and edit its `LESSON` object.
2. Add an entry to the course's `js/manifest.js`.
3. Run the validator.
