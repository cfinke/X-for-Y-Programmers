// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "No borrow checker, no compiler: let x = 1; x = \"one\" just runs." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                        blurb: "&str/String and UTF-8 bytes → one mutable String type over UTF-16." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                          blurb: "[i32; 3] and Vec<i32> collapse into one resizable, ownerless Array." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                         blurb: "No struct fields to declare — object literals are just runtime maps." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                       blurb: "fn signatures and traits → duck-typed functions, no compiler to check them." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",                blurb: "Fn/FnMut/FnOnce and move go away; JS closures just capture by reference." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",                  blurb: "No explicit &self — this is late-bound by call site and can detach." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                      blurb: "No vtable-at-compile-time: methods live on a shared, mutable prototype chain." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                         blurb: "pub-by-default fields replace Rust's private-by-default structs." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                     blurb: "No traits/composition-only — class/extends/super give real inheritance." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",          blurb: "Pattern matching without exhaustiveness checks; ...rest instead of a @ .." },
  { n: 12, file: "12-array-iteration.html",             title: "Array Iteration",                 blurb: "Lazy, type-checked iterator adapters → eager, untyped array methods." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",            blurb: "PartialEq and bool-only conditions give way to === and JS's falsy values." },
  { n: 14, file: "14-error-handling.html",              title: "Error Handling",                  blurb: "Result<T, E> and ? → thrown exceptions caught with try/catch." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",           blurb: "The Iterator trait's next() → Option<T> becomes Symbol.iterator's untyped protocol." },
  { n: 16, file: "16-promises.html",                    title: "Promises",                        blurb: "impl Future<Output = T> with a checked type → an untyped, self-driving Promise." },
  { n: 17, file: "17-async-await.html",                 title: "Async & Await",                   blurb: "Futures that need polling → async functions that start running immediately." },
  { n: 18, file: "18-modules.html",                     title: "Modules",                         blurb: "mod/pub/use compiled away → ES modules' runtime import/export." },
  { n: 19, file: "19-map-and-set.html",                 title: "Map & Set",                       blurb: "No Hash + Eq bound to satisfy — Map and Set take almost any key at runtime." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                        blurb: "A task store pulling classes, array methods, and thrown errors together." },
];
