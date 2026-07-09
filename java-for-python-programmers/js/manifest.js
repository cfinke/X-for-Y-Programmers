// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                    blurb: "Dynamic, no declarations → static types and explicit int/double/String." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                              blurb: "f-strings and slicing → String.format and substring calls." },
  { n: 3,  file: "03-arrays-and-lists.html",             title: "Arrays & Lists",                       blurb: "One flexible list → fixed-size arrays plus resizable ArrayList<T>." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                                 blurb: "dict literals and .get() → HashMap<K, V> with typed puts and gets." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                              blurb: "def with defaults/*args → overloads and varargs, no keyword args." },
  { n: 6,  file: "06-classes-and-objects.html",          title: "Classes & Objects",                    blurb: "__init__ and self → constructors, fields, and an explicit this." },
  { n: 7,  file: "07-null-and-optional.html",            title: "Null & Optional",                      blurb: "None checks everywhere → NPEs, null, and Optional<T>." },
  { n: 8,  file: "08-control-flow-and-switch.html",       title: "Control Flow & Switch",                blurb: "if/elif chains → if/else plus a real switch with pattern matching." },
  { n: 9,  file: "09-interfaces.html",                   title: "Interfaces",                           blurb: "Duck typing and ABCs → nominal interfaces you must implements." },
  { n: 10, file: "10-inheritance-and-abstract.html",      title: "Inheritance & Abstract Classes",       blurb: "Multiple inheritance and ABC → single extends plus abstract classes." },
  { n: 11, file: "11-enums.html",                        title: "Enums",                                blurb: "Enum class from python's enum → Java's built-in enum type." },
  { n: 12, file: "12-generics.html",                     title: "Generics",                             blurb: "Untyped containers and hints → List<T> and compile-time erasure." },
  { n: 13, file: "13-collections-and-iteration.html",     title: "Collections & Iteration",              blurb: "list/dict/set comprehensions → Collections framework and for-each." },
  { n: 14, file: "14-streams.html",                      title: "Streams",                              blurb: "map/filter and comprehensions → .stream().filter().map().collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",        title: "Lambdas & Functional Interfaces",      blurb: "lambda x: x+1 → typed lambdas bound to functional interfaces." },
  { n: 16, file: "16-records.html",                      title: "Records",                              blurb: "@dataclass → record, with the boilerplate generated for you." },
  { n: 17, file: "17-exceptions.html",                   title: "Exceptions",                           blurb: "try/except/raise → try/catch/throws and checked exceptions." },
  { n: 18, file: "18-equals-hashcode-comparable.html",    title: "equals, hashCode & Comparable",        blurb: "__eq__/__hash__/__lt__ → equals, hashCode, and Comparable<T>." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",   title: "Sealed Types & Pattern Matching",      blurb: "match statements → sealed interfaces with exhaustive switch." },
  { n: 20, file: "20-capstone.html",                     title: "Capstone",                             blurb: "Put it together: types, classes, streams, and null-safety." },
];
