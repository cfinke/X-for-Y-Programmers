// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",             blurb: "Duck-typed locals → static types with var and full inference." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                       blurb: "\"#{interpolation}\" → $\"{interpolation}\", frozen vs. immutable strings." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                blurb: "Ruby's Array → List<T>, plus the type you must now declare." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                  blurb: "Hash literals and symbols → Dictionary<TKey, TValue>." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                       blurb: "def with no parens or types → static typing on every parameter." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",          blurb: "attr_accessor → auto-implemented { get; set; } properties." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",          blurb: "Everything-is-an-object gives way to value-type structs." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                    blurb: "Duck typing and modules → explicit, compiler-checked interfaces." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes", blurb: "< Superclass and modules → : Base plus abstract keywords." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                         blurb: "Symbols standing in for constants → a real, typed enum." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                      blurb: "Ruby never needed them; C# collections demand <T>." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",            blurb: ".select.map.reduce chains → LINQ's query and method syntax." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",           blurb: "Procs and blocks → Func<>, Action<>, and typed delegates." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",       blurb: "nil checks and &. → null, ?., ??, and nullable value types." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                    blurb: "begin/rescue/ensure → try/catch/finally, typed exceptions." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",              blurb: "case/in destructuring → switch expressions and patterns." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",       blurb: "Multiple return values and a, b = ... → (T1, T2) tuples." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",              blurb: "Enumerable and yield → IEnumerable<T> and C#'s own yield." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",          blurb: "==, eql?, <=> → Equals, GetHashCode, and IComparable<T>." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                      blurb: "One last project pulling every C# idiom together." },
];
