// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",           blurb: "No declarations, duck typing → let/const and typeof surprises." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                     blurb: "f-strings and .format() → template literals and string methods." },
  { n: 3,  file: "03-arrays.html",                     title: "Arrays",                       blurb: "list slicing and negative indices → .slice() without the shortcuts." },
  { n: 4,  file: "04-objects.html",                    title: "Objects",                      blurb: "dict literals and .get() → object literals and optional chaining." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                    blurb: "def with keyword args and *args/**kwargs → arrows and rest params." },
  { n: 6,  file: "06-scope-and-closures.html",         title: "Scope & Closures",             blurb: "nonlocal/global juggling → block-scoped let/const closures." },
  { n: 7,  file: "07-this-and-binding.html",           title: "this & Binding",               blurb: "explicit self parameter → implicit, context-shifting this." },
  { n: 8,  file: "08-prototypes.html",                 title: "Prototypes",                   blurb: "class-based MRO → the prototype chain under every JS object." },
  { n: 9,  file: "09-classes.html",                    title: "Classes",                      blurb: "__init__ and self → constructor and this, no self param needed." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                  blurb: "multiple inheritance and super() → single extends chains and mixins." },
  { n: 11, file: "11-destructuring-and-spread.html",   title: "Destructuring & Spread",       blurb: "tuple unpacking and *args → array/object destructuring and spread." },
  { n: 12, file: "12-array-iteration.html",            title: "Array Iteration",              blurb: "list comprehensions → chained .map(), .filter(), and .reduce()." },
  { n: 13, file: "13-equality-and-truthiness.html",    title: "Equality & Truthiness",        blurb: "==/is and a short falsy list → ===/== and a quirkier falsy set." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",               blurb: "try/except/raise → try/catch/throw and Error subclasses." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",       blurb: "yield and the iterator protocol map onto Symbol.iterator." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                     blurb: "asyncio.Future and callbacks → the Promise object and .then()." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                blurb: "async def/await and asyncio.gather → await and Promise.all." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                      blurb: "import/from and __init__.py → ES modules' import/export." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                    blurb: "dict and set built-ins → dedicated Map and Set objects." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                     blurb: "Python instincts, JS syntax — a final project ties it together." },
];
