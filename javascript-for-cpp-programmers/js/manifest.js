// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "int/double/bool, compiler-checked → let/const and dynamic typing." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "Mutable std::string buffers → immutable JS strings and templates." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                          blurb: "vector<int>'s fixed element type → arrays that hold anything." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                         blurb: "struct/class layouts, compiler-checked → object literals, open shape." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                       blurb: "Fixed signatures and overloads → one function, optional/default args." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",                blurb: "Explicit [] capture lists → closures that just grab outer variables." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",                  blurb: "this fixed at compile time → this decided by how a function is called." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                       blurb: "Fixed layout + vtable → prototype chain, methods shared by lookup." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                         blurb: "Compiler-enforced private members → # fields, a runtime convention." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                     blurb: "Virtual dispatch resolved at compile time → extends, resolved at runtime." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",          blurb: "Structured bindings & initializer lists → destructuring and ...spread." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",                 blurb: "<algorithm>/<numeric>, templated → .map/.filter/.reduce, untyped." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",            blurb: "Overload-resolved == → coercing == vs strict ===, plus truthy/falsy." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",                  blurb: "Typed catch clauses, std::exception → catch anything, Error by convention." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",           blurb: "begin()/end() and operator++ → Symbol.iterator and function*." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                        blurb: "std::future/std::promise<T> → Promise, chained with .then." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                   blurb: "std::async + blocking .get() → non-blocking async/await over Promises." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                         blurb: "Headers for the compiler, no runtime concept → export/import at runtime." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                       blurb: "unordered_map<K,V>/unordered_set<T>, typed → Map and Set, any key." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                        blurb: "Bringing classes, iteration, and async together in one project." },
];
