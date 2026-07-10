// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "No ownership/borrowing to track; let/mut → var and readonly." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "&str vs. String collapses into one immutable string, GC-managed." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                  blurb: "[i32; 3] and Vec<T> → fixed C# arrays and List<T>." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                    blurb: "HashMap<K, V> → Dictionary<K, V>, same hash-table semantics." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                         blurb: "One signature per fn → real overloading and optional params." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",            blurb: "Plain struct fields → auto-properties with hidden backing fields." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",           blurb: "Every struct is a value in Rust; C# splits class vs. struct." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                      blurb: "impl Trait for Type → nominal : IName, same explicit opt-in." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",  blurb: "No classical inheritance in Rust; traits → virtual/override." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                           blurb: "Data-carrying sum types shrink to int-backed named constants." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                        blurb: "Monomorphized at compile time in Rust; C# generics are reified." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",              blurb: "filter/map/fold iterator adapters → LINQ over IEnumerable<T>." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",              blurb: "fn pointers and impl Fn → named delegate types like Func<>." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",        blurb: "Option<T>'s Some/None → nullable references and int?." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                      blurb: "Result<T, E> and ? → throw/catch unwinding the call stack." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",                 blurb: "dyn Any + downcast_ref → the is-type pattern's test-and-cast." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",          blurb: "(i32, String) tuples → value tuples with named elements." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",                blurb: "Hand-rolled Iterator::next → yield return generating IEnumerable<T>." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",             blurb: "#[derive(PartialEq)] opt-in → == and Equals() on by default." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                         blurb: "A HashMap-backed repo, rebuilt with generics, LINQ, exceptions." },
];
