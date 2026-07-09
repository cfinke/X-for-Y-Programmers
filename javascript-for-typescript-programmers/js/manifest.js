// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",           blurb: "Type annotations disappear; let/const and typeof do the work at runtime." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                     blurb: "Template literals and string methods work the same, minus the type checking." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                       blurb: "Array<T> and tuples collapse into plain arrays — no compiler to catch mismatches." },
  { n: 4,  file: "04-objects.html",                   title: "Objects",                      blurb: "Interfaces vanish; object shapes are enforced by convention, not the compiler." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                    blurb: "Parameter types and overload signatures disappear; JSDoc is the closest substitute." },
  { n: 6,  file: "06-scope-and-closures.html",        title: "Scope & Closures",             blurb: "Same var/let/const scoping rules, just without type-checked captures." },
  { n: 7,  file: "07-this-and-binding.html",          title: "this & Binding",               blurb: "TS's inferred this typing goes away — you track it yourself again." },
  { n: 8,  file: "08-prototypes.html",                title: "Prototypes",                   blurb: "What classes hide in TS, prototypal inheritance exposes directly." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                      blurb: "Same class syntax, but public/private/readonly modifiers are gone." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                  blurb: "extends and super carry over; abstract classes and access modifiers don't." },
  { n: 11, file: "11-destructuring-and-spread.html",  title: "Destructuring & Spread",        blurb: "Same syntax, no destructured parameter types to lean on." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",              blurb: "map/filter/reduce infer nothing now — you track the shapes by hand." },
  { n: 13, file: "13-equality-and-truthiness.html",   title: "Equality & Truthiness",         blurb: "Without exhaustive type checks, == and truthy pitfalls matter more." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",               blurb: "catch (e) loses its unknown type — checking e before use is on you." },
  { n: 15, file: "15-iterators-and-generators.html",  title: "Iterators & Generators",        blurb: "Same iterable protocol, minus the Iterator<T> and Generator<T, R> types." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                     blurb: "Promise<T> becomes just Promise — resolved value types are your job now." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                blurb: "Same async/await syntax; await now yields any, not the awaited type." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                      blurb: "Same import/export syntax, but no type-only imports or .d.ts files." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                    blurb: "Map<K, V> and Set<T> keep their API, minus the generic type parameters." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                     blurb: "Put it together in vanilla JS, with tests standing in for the compiler." },
];
