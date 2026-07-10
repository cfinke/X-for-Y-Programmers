// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",             blurb: "$sigil and gettype() → let/const and typeof, same loose typing." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                        blurb: "\"$name is $age\" interpolation → `${name} is ${age}` template literals." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                         blurb: "One array type for everything → a true list, always 0-indexed." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                        blurb: "['name' => 'Pen'] associative arrays → { name: \"Pen\" } object literals." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                      blurb: "function/fn and named args → arrow functions and default params." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",               blurb: "use (&$var) capture lists → every outer binding closes over automatically." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",                 blurb: "$this always bound to the instance → this decided fresh at each call site." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                     blurb: "class method tables baked in → an inspectable, walkable prototype chain." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                        blurb: "private enforced by the engine → # fields, or just an unenforced convention." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                    blurb: "abstract classes and interfaces → plain extends, nothing stops a skipped override." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",         blurb: "list()/... unpacking arrays only → destructuring and spread work on objects too." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",                blurb: "array_map/array_filter/array_reduce(fn, $arr) → arr.map/filter/reduce(fn), chainable." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",           blurb: "\"0\" is falsy in PHP, truthy in JS; ?? and || split differently too." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",                  blurb: "typed catch (Exception $e) → catch (e) with no type filtering, check yourself." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",          blurb: "Iterator interface's three methods → one next() returning { value, done }." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                       blurb: "synchronous returns (or ReactPHP promises) → a built-in Promise every API returns." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                  blurb: "Fibers/ReactPHP async()/await() as a library → async/await baked into the language." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                        blurb: "namespace/use + Composer autoload → import/export understood by the engine itself." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                      blurb: "one associative array for maps and sets → dedicated Map and Set with any-value keys." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                       blurb: "a class + array property + throw → the same shape, plus a final project." },
];
