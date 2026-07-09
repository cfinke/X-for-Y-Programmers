// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",             blurb: "val/var and compile-time types → let/const and typeof at runtime." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                       blurb: "String templates carry over almost unchanged, minus the type checks." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                        blurb: "Array<T>/List<T> split → a single mutable, resizable Array." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                       blurb: "data class and Map<String, V> collapse into plain object literals." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                     blurb: "fun and lambdas → function declarations and arrows, no overloads." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",              blurb: "Same closure semantics as Kotlin lambdas, minus the compiler's help." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",                blurb: "Lexical this@Outer → call-site this, tamed with arrows and bind." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                    blurb: "Real JVM classes → constructor functions and shared prototype objects." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                       blurb: "class syntax looks familiar; fields and constructors lose their rigor." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                   blurb: "open/override → extends/super, without the compiler enforcing overrides." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",         blurb: "componentN() destructuring by position → by-name, untyped in JS." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",               blurb: "Kotlin's collection functions map almost 1:1 onto Array methods." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",          blurb: "== is structural in Kotlin, referential-then-coercive in JS." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",                 blurb: "Checked-free exceptions carry over; catch loses its declared type." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",          blurb: "Iterable/Sequence duck-typing → Symbol.iterator and function*." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                       blurb: "Deferred/suspend results → a single-shot, eagerly-running Promise." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                  blurb: "suspend fun and coroutines → async/await over Promises." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                        blurb: "package/import by name → ES modules keyed on file paths." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                      blurb: "MutableMap<K, V>/MutableSet<T> → untyped built-in Map and Set." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                       blurb: "A final project pulling every Kotlin-to-JS idiom together." },
];
