// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "let/number → var/int, plus real distinct numeric types." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                        blurb: "toUpperCase/includes → PascalCase ToUpper/Contains." },
  { n: 3,  file: "03-arrays-and-lists.html",           title: "Arrays & Lists",                 blurb: "One resizable Array splits into fixed int[] and List<T>." },
  { n: 4,  file: "04-dictionaries.html",               title: "Dictionaries",                   blurb: "Map<K, V> → Dictionary<K, V>; indexer throws instead of undefined." },
  { n: 5,  file: "05-methods.html",                    title: "Methods",                        blurb: "Overload signatures → real overloading, plus named arguments." },
  { n: 6,  file: "06-classes-and-properties.html",     title: "Classes & Properties",            blurb: "get/set accessors → auto-properties that read like fields." },
  { n: 7,  file: "07-structs-and-value-types.html",    title: "Structs & Value Types",           blurb: "Everything-by-reference splits into class (ref) and struct (value)." },
  { n: 8,  file: "08-interfaces.html",                 title: "Interfaces",                      blurb: "Structural duck typing → nominal interfaces declared with : IName." },
  { n: 9,  file: "09-inheritance-and-abstract.html",   title: "Inheritance & Abstract Classes",  blurb: "Silent overriding → explicit virtual/override, no shadowing surprises." },
  { n: 10, file: "10-enums.html",                       title: "Enums",                           blurb: "String-literal unions give way to a first-class, everyday enum." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                        blurb: "Box<T> reads the same, but C# generics are reified, not erased." },
  { n: 12, file: "12-collections-and-linq.html",       title: "Collections & LINQ",              blurb: "filter/map/reduce → Where/Select/Aggregate via LINQ." },
  { n: 13, file: "13-delegates-and-lambdas.html",      title: "Delegates & Lambdas",             blurb: "Function types → named delegate types like Func<> and Action<>." },
  { n: 14, file: "14-nullable-and-null.html",          title: "Nullable & Null Handling",        blurb: "number | null → int?; value types opt into null explicitly." },
  { n: 15, file: "15-exceptions.html",                  title: "Exceptions",                      blurb: "throw any value → only Exception subtypes, caught by type." },
  { n: 16, file: "16-pattern-matching.html",           title: "Pattern Matching",                blurb: "typeof/instanceof-then-cast collapses into `if (o is int n)`." },
  { n: 17, file: "17-tuples-and-deconstruction.html",  title: "Tuples & Deconstruction",         blurb: "[number, string] tuples → value tuples with named elements." },
  { n: 18, file: "18-iterators-and-yield.html",        title: "Iterators & yield",               blurb: "function*/yield and for…of → IEnumerable<T>/yield return/foreach." },
  { n: 19, file: "19-equality-and-comparable.html",    title: "Equality & Comparable",           blurb: "=== is always reference identity; C# lets a type define == itself." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                        blurb: "A Map-backed repository class rebuilt with generics, LINQ, exceptions." },
];
