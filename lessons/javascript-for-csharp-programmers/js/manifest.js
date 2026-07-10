// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",           blurb: "Compile-time types and var-inference → values with no declared type at all." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                      blurb: "string as a real CLR class → a primitive auto-boxed for String.prototype calls." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                        blurb: "int[]/List<T> with a static element type → one Array that holds anything." },
  { n: 4,  file: "04-objects.html",                   title: "Objects",                       blurb: "class/record instances with known members → a bag of string keys, no backing type." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                     blurb: "Typed params enforced by the CLR → a signature that's just whatever runs." },
  { n: 6,  file: "06-scope-and-closures.html",        title: "Scope & Closures",              blurb: "Func<>/Action<> delegates capturing scope → the same closure, no delegate type." },
  { n: 7,  file: "07-this-and-binding.html",          title: "this & Binding",                blurb: "this fixed to the instance by the compiler → this decided by how a function is called." },
  { n: 8,  file: "08-prototypes.html",                title: "Prototypes",                    blurb: "class as real CLR metadata → sugar over constructor functions and prototype objects." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                       blurb: "public/private/protected enforced by the CLR → no access modifiers at all." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                   blurb: "abstract, virtual/override, sealed → extends and super with no compiler backing them." },
  { n: 11, file: "11-destructuring-and-spread.html",  title: "Destructuring & Spread",         blurb: "Deconstruct and record with — compiler-checked → pure runtime syntax, nothing verified." },
  { n: 12, file: "12-array-iteration.html",           title: "Array Iteration",                blurb: "LINQ's Select/Where/Aggregate, lazy → map/filter/reduce on arrays, eager." },
  { n: 13, file: "13-equality-and-truthiness.html",   title: "Equality & Truthiness",          blurb: "== requiring compatible types → == that coerces anything, plus JS falsy values." },
  { n: 14, file: "14-error-handling.html",             title: "Error Handling",                blurb: "throw must derive from Exception → throw accepts literally anything." },
  { n: 15, file: "15-iterators-and-generators.html",   title: "Iterators & Generators",         blurb: "IEnumerable<T>/yield return → the Symbol.iterator protocol and function*." },
  { n: 16, file: "16-promises.html",                   title: "Promises",                       blurb: "Task<T> with a compiler-checked payload → Promise with no generic parameter." },
  { n: 17, file: "17-async-await.html",                title: "Async & Await",                  blurb: "async Task<T>/await unwrapping T → the same event loop, minus the type label." },
  { n: 18, file: "18-modules.html",                    title: "Modules",                        blurb: "namespaces/assemblies and public/internal → ES modules with explicit export/import." },
  { n: 19, file: "19-map-and-set.html",                title: "Map & Set",                      blurb: "Dictionary<TKey,TValue>/HashSet<T>, typed → Map and Set with no generics at all." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                       blurb: "Same class/query/error instincts from C#, wired together with no compiler net." },
];
