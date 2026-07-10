// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",           blurb: "var/const with static types → let/const with dynamic ones." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                     blurb: "fmt.Sprintf and + concat → template literals." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                      blurb: "Fixed arrays and slices → one resizable Array type." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                     blurb: "structs and map[string]T → object literals, no declared shape." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                   blurb: "Multiple return values → objects, arrays, or thrown errors." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",             blurb: "Same capture-by-reference closures, minus the explicit func type." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",               blurb: "No receiver arg — this is dynamic and needs bind/arrow discipline." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                   blurb: "Struct embedding → prototype chains, a different kind of reuse." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                      blurb: "structs + methods with receivers → class fields and methods." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                  blurb: "No embedding-as-inheritance — extends gives real subclassing." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",       blurb: "Multi-assign and append(...) → destructuring and the spread operator." },
  { n: 12, file: "12-array-iteration.html",             title: "Array Iteration",              blurb: "for range loops → .map/.filter/.reduce chains." },
  { n: 13, file: "13-equality-and-truthiness.html",     title: "Equality & Truthiness",         blurb: "Strict, typed == → ==/=== plus truthy/falsy coercion rules." },
  { n: 14, file: "14-error-handling.html",              title: "Error Handling",               blurb: "if err != nil returns → try/catch and thrown exceptions." },
  { n: 15, file: "15-iterators-and-generators.html",    title: "Iterators & Generators",        blurb: "Channels and range-over-func → the iterator protocol and function*." },
  { n: 16, file: "16-promises.html",                    title: "Promises",                     blurb: "Goroutines and channels → a single-threaded Promise state machine." },
  { n: 17, file: "17-async-await.html",                 title: "Async & Await",                blurb: "go func() concurrency → async/await sequencing on one thread." },
  { n: 18, file: "18-modules.html",                     title: "Modules",                      blurb: "package/import by path → ES import/export, no GOPATH conventions." },
  { n: 19, file: "19-map-and-set.html",                 title: "Map & Set",                    blurb: "Built-in map[K]V → the Map and Set classes, plus object caveats." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                     blurb: "Put it together: idiomatic JS for a Go developer, one project." },
];
