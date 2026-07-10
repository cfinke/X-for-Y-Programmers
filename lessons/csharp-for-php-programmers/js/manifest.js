// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",               blurb: "$age = 36 → int age = 36; compile-time types, no $ sigil." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                          blurb: "strtoupper/substr free functions → PascalCase methods on string." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                   blurb: "One do-everything array splits into fixed int[] and List<T>." },
  { n: 4,  file: "04-dictionaries.html",              title: "Dictionaries",                     blurb: "Associative arrays → Dictionary<K,V>, typed keys, throws on miss." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                          blurb: "&$x ref params gain a stricter cousin: out, plus real overloading." },
  { n: 6,  file: "06-classes-and-properties.html",    title: "Classes & Properties",              blurb: "__get/__set and readonly props → { get; set; } auto-properties." },
  { n: 7,  file: "07-structs-and-value-types.html",   title: "Structs & Value Types",             blurb: "PHP objects always share; a C# struct copies like a scalar." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                        blurb: "implements Shape → : IShape; same nominal contract, new spelling." },
  { n: 9,  file: "09-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",    blurb: "Overridable-by-default methods become opt-in virtual/override." },
  { n: 10, file: "10-enums.html",                     title: "Enums",                             blurb: "Class-constant habits give way to C#'s everyday int-backed enum." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                          blurb: "No PHP generics at all → reified Box<T> with where constraints." },
  { n: 12, file: "12-collections-and-linq.html",      title: "Collections & LINQ",                blurb: "array_filter/array_map free functions → chained LINQ extension methods." },
  { n: 13, file: "13-delegates-and-lambdas.html",     title: "Delegates & Lambdas",               blurb: "callable/Closure → named delegate types: Func<>, Action<>, Predicate<>." },
  { n: 14, file: "14-nullable-and-null.html",         title: "Nullable & Null Handling",          blurb: "?int works PHP-wide; C# splits value types from reference types." },
  { n: 15, file: "15-exceptions.html",                title: "Exceptions",                        blurb: "try/catch/throw transfers almost verbatim, minus a Throwable base." },
  { n: 16, file: "16-pattern-matching.html",          title: "Pattern Matching",                  blurb: "instanceof-then-use → `is Type n` binds a typed local in one step." },
  { n: 17, file: "17-tuples-and-deconstruction.html", title: "Tuples & Deconstruction",           blurb: "[$a, $b] = $pair and assoc-array returns → typed value tuples." },
  { n: 18, file: "18-iterators-and-yield.html",       title: "Iterators & yield",                 blurb: "Generator/yield → IEnumerable<T> methods with yield return." },
  { n: 19, file: "19-equality-and-comparable.html",   title: "Equality & Comparable",             blurb: "Hand-rolled ==/usort() comparators → Equals/IComparable hooks." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                          blurb: "An assoc-array repository rebuilt as generics + LINQ + exceptions." },
];
