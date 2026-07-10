// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",             blurb: "let/const and duck typing → static, compile-checked types." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                       blurb: "Same immutable UTF-16 strings, PascalCase methods instead." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                blurb: "One resizable Array splits into fixed int[] and List<T>." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                  blurb: "Object/Map lookups → Dictionary<TKey, TValue>." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                       blurb: "Argument-branching functions → real overloaded methods." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",           blurb: "get/set accessors → auto-properties that read like fields." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",          blurb: "Everything-is-a-reference JS meets copy-by-value structs." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                     blurb: "Duck typing → nominal interfaces you must declare." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",  blurb: "Silent overriding → explicit virtual/override contracts." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                          blurb: "Object-of-string-constants → a real int-backed enum type." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                       blurb: "Dynamic \"works with anything\" → reified, checked Box<T>." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",             blurb: "filter/map/reduce chains → Where/Select/Aggregate (LINQ)." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",             blurb: "Functions as bare values → typed delegates like Func<>." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",       blurb: "Anything-can-be-null → nullable reference types, opt-in." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                     blurb: "throw any value → throw must derive from Exception." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",               blurb: "typeof/instanceof checks → is-patterns that bind a variable." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",        blurb: "Array/object literals for multi-returns → value tuples." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",               blurb: "function* / for...of → IEnumerable<T> / yield return / foreach." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",           blurb: "=== is always reference identity → overridable Equals/CompareTo." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Everything so far, combined into one final project." },
];
