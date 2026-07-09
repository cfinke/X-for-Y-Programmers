// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",     title: "Variables & Types",             blurb: "int/double/String, final → let/const and dynamic typing." },
  { n: 2,  file: "02-strings.html",                 title: "Strings",                       blurb: "String.format and + concat → template literals." },
  { n: 3,  file: "03-arrays.html",                  title: "Arrays",                        blurb: "Fixed-size int[] and ArrayList<T> → one resizable Array type." },
  { n: 4,  file: "04-objects.html",                 title: "Objects",                       blurb: "HashMap<String, V> and POJOs collapse into object literals." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                     blurb: "Overloaded methods, lambdas → arrows and default params." },
  { n: 6,  file: "06-scope-and-closures.html",       title: "Scope & Closures",              blurb: "Block-scoped effectively-final capture → real closures over var." },
  { n: 7,  file: "07-this-and-binding.html",         title: "this & Binding",                blurb: "Java's this is fixed; JS's this depends on how a function is called." },
  { n: 8,  file: "08-prototypes.html",               title: "Prototypes",                    blurb: "Class-based inheritance → prototype chains under the hood." },
  { n: 9,  file: "09-classes.html",                  title: "Classes",                       blurb: "Same class keyword, no access modifiers or method overloading." },
  { n: 10, file: "10-inheritance.html",              title: "Inheritance",                   blurb: "extends and super carry over; no interfaces or abstract keyword." },
  { n: 11, file: "11-destructuring-and-spread.html", title: "Destructuring & Spread",        blurb: "What record patterns hint at, done for every array and object." },
  { n: 12, file: "12-array-iteration.html",          title: "Array Iteration",               blurb: ".stream().filter().map().collect() → .filter().map() directly." },
  { n: 13, file: "13-equality-and-truthiness.html",  title: "Equality & Truthiness",         blurb: ".equals() vs == → ===, plus JS's truthy/falsy coercion rules." },
  { n: 14, file: "14-error-handling.html",           title: "Error Handling",                blurb: "Checked exceptions and try/catch → unchecked throw and try/catch." },
  { n: 15, file: "15-iterators-and-generators.html", title: "Iterators & Generators",        blurb: "Iterable<T>/Iterator<T> → Symbol.iterator and function*." },
  { n: 16, file: "16-promises.html",                 title: "Promises",                      blurb: "CompletableFuture chains → Promise, .then(), and combinators." },
  { n: 17, file: "17-async-await.html",              title: "Async & Await",                 blurb: "get()/join() blocking calls → non-blocking await on Promises." },
  { n: 18, file: "18-modules.html",                  title: "Modules",                       blurb: "packages/import and classpath → ES modules with import/export." },
  { n: 19, file: "19-map-and-set.html",              title: "Map & Set",                     blurb: "HashMap<K,V> and HashSet<T> → built-in Map and Set objects." },
  { n: 20, file: "20-capstone.html",                 title: "Capstone",                      blurb: "A final project pulling every lesson together." },
];
