// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",             blurb: "No sigils or symbols to track; let/const replace implicit globals." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                       blurb: "\"#{interpolation}\" → `${template literals}`; frozen strings → primitives." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                        blurb: "Array#map/select/each → .map/.filter/.forEach, minus blocks." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                       blurb: "Hashes with symbol keys → plain object literals and Map." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                     blurb: "def/end and blocks/procs/lambdas → function and arrow syntax." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",              blurb: "Block-local variables and no implicit closures over instance state." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",                blurb: "self is stable; JS's this shifts with call site, needing bind/arrows." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                    blurb: "Ruby's class-based lookup vs JS's prototype chain under the hood." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                       blurb: "class/initialize/attr_accessor → class/constructor/fields." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                   blurb: "< Superclass and super → extends and super(), same idea." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",         blurb: "Multiple assignment and splat args → array/object destructuring." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",               blurb: "reduce/inject and each_with_index → reduce and forEach with index." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",          blurb: "Only nil/false are falsy in Ruby; JS adds 0, '', NaN, undefined." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",                 blurb: "begin/rescue/ensure → try/catch/finally, raise → throw." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",         blurb: "Enumerator and yield → function* generators and the iterator protocol." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                       blurb: "No native futures in Ruby; Promise formalizes async callbacks." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                  blurb: "Threads/Fibers give way to a single-threaded event loop and await." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                        blurb: "require and Ruby Modules/mixins → import/export and ES modules." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                      blurb: "Hash and Set-via-require → built-in Map and Set with any key type." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                        blurb: "A final project pulling every prior lesson together." },
];
