// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "Duck-typed names → declared types; snake_case → camelCase." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "f-strings and % → string interpolation and $\"{ }\"." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                  blurb: "Dynamic list append/slice → typed List<T> and arrays." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                    blurb: "dict literals and .get() → Dictionary<K,V> and TryGetValue." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                         blurb: "def with *args/**kwargs → typed params, overloads, ref/out." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",             blurb: "__init__ and @property → constructors and auto-properties." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",            blurb: "Everything's a reference in Python; C# splits struct vs class." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                       blurb: "Duck typing and ABCs → explicit interface contracts." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",   blurb: "super() and ABC → base(), override, and abstract members." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                            blurb: "Python's Enum class → C#'s built-in enum keyword." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                         blurb: "Untyped containers → List<T> with real compile-time checks." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",               blurb: "List comprehensions → LINQ's .Where().Select() chains." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",              blurb: "Functions as values → typed delegates, Func<>, and Action<>." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",         blurb: "None everywhere → nullable value types and ?./?? operators." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                       blurb: "try/except/finally → try/catch/finally with typed catches." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",                 blurb: "match/case structural patterns → switch expressions and is." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",          blurb: "Tuple unpacking → named ValueTuples and deconstruction." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",                blurb: "Generators with yield → IEnumerable<T> iterator methods." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",            blurb: "__eq__/__lt__ dunders → Equals, GetHashCode, IComparable." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                         blurb: "Bringing it together in a final, idiomatic C# project." },
];
