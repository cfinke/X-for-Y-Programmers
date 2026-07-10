// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "val/var and Int/String → var/explicit types, no top-level functions." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                        blurb: "\"$name is $age\" template strings → $\"{name} is {age}\" interpolation." },
  { n: 3,  file: "03-arrays-and-lists.html",           title: "Arrays & Lists",                 blurb: "listOf/mutableListOf → List<T>/List<T> with a different mutability split." },
  { n: 4,  file: "04-dictionaries.html",               title: "Dictionaries",                   blurb: "mapOf and Map<K, V> → Dictionary<K, V> and its indexer syntax." },
  { n: 5,  file: "05-methods.html",                    title: "Methods",                        blurb: "Top-level fun and default args → static methods and optional params." },
  { n: 6,  file: "06-classes-and-properties.html",     title: "Classes & Properties",            blurb: "data class and free-standing properties → records and { get; set; }." },
  { n: 7,  file: "07-structs-and-value-types.html",    title: "Structs & Value Types",           blurb: "Kotlin has no structs — C#'s struct and value semantics are new territory." },
  { n: 8,  file: "08-interfaces.html",                 title: "Interfaces",                      blurb: "Interfaces with default bodies transfer almost line for line." },
  { n: 9,  file: "09-inheritance-and-abstract.html",   title: "Inheritance & Abstract Classes",  blurb: "open/override discipline → virtual/override, sealed-by-default either way." },
  { n: 10, file: "10-enums.html",                      title: "Enums",                           blurb: "enum class with properties → enum with only int-backed members." },
  { n: 11, file: "11-generics.html",                   title: "Generics",                        blurb: "in/out declaration-site variance → where constraints and no built-in variance keywords." },
  { n: 12, file: "12-collections-and-linq.html",       title: "Collections & LINQ",              blurb: ".filter().map() chains → LINQ's .Where().Select() (and query syntax)." },
  { n: 13, file: "13-delegates-and-lambdas.html",      title: "Delegates & Lambdas",             blurb: "Function types and lambdas → delegates, Func<T>/Action, and events." },
  { n: 14, file: "14-nullable-and-null.html",          title: "Nullable & Null Handling",        blurb: "String? and ?., ?: → nullable reference types with the same operators." },
  { n: 15, file: "15-exceptions.html",                 title: "Exceptions",                      blurb: "All-unchecked try/catch carries over; no checked-exception surprises either way." },
  { n: 16, file: "16-pattern-matching.html",           title: "Pattern Matching",                blurb: "when expressions and sealed classes → switch expressions and pattern types." },
  { n: 17, file: "17-tuples-and-deconstruction.html",  title: "Tuples & Deconstruction",         blurb: "Pair/Triple and destructuring → value tuples and deconstructing patterns." },
  { n: 18, file: "18-iterators-and-yield.html",        title: "Iterators & yield",               blurb: "sequence { yield(...) } → IEnumerable<T> with C#'s own yield return." },
  { n: 19, file: "19-equality-and-comparable.html",    title: "Equality & Comparable",           blurb: "data class equals()/== → Equals/GetHashCode overrides and IComparable<T>." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                        blurb: "A final project pulling together classes, LINQ, nullability, and pattern matching." },
];
