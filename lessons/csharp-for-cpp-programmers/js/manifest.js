// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "int/double and manual memory → var, with the GC watching." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                        blurb: "std::string concat and stringstream → $\"...\" interpolation." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                 blurb: "std::vector<T> and raw arrays → List<T> and T[]." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                   blurb: "std::unordered_map<K, V> → Dictionary<TKey, TValue>." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                        blurb: "Free functions and overload sets → methods with default params." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",            blurb: "Hand-written getters/setters → auto-implemented properties." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",           blurb: "struct is just a public-by-default class; C# makes it a real value type." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                     blurb: "Abstract classes with pure virtuals → the interface keyword." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",  blurb: "Multiple inheritance and virtual → single inheritance plus interfaces." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                           blurb: "enum class already scopes like C#'s enum, minus the switch sugar." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                        blurb: "Templates monomorphize per type; C# generics share one IL body." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",              blurb: "<algorithm> and iterator pairs → LINQ's fluent Where/Select chains." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",             blurb: "Function pointers and std::function → delegates, Func<>, Action<>." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",        blurb: "nullptr checks and dangling pointers → nullable refs and ?./??." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                      blurb: "RAII destructors for cleanup → try/finally and using." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",                blurb: "if/dynamic_cast chains → switch expressions and is patterns." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",         blurb: "std::tuple and std::tie → (T1, T2) tuples and var (a, b) =." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",               blurb: "Hand-rolled iterator classes with operator++ → yield return." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",           blurb: "operator== overloads and std::less → Equals, GetHashCode, IComparable<T>." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Templates and RAII behind you — a final project in idiomatic C#." },
];
