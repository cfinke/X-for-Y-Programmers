// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "No classes, package-level funcs → everything lives in a class." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                        blurb: "UTF-8 bytes and s[i] → UTF-16 code units and PascalCase methods." },
  { n: 3,  file: "03-arrays-and-lists.html",           title: "Arrays & Lists",                 blurb: "One growable slice → fixed T[] arrays plus resizable List<T>." },
  { n: 4,  file: "04-dictionaries.html",               title: "Dictionaries",                   blurb: "map[K]V builtin → Dictionary<K, V>, a real generic class." },
  { n: 5,  file: "05-methods.html",                    title: "Methods",                        blurb: "One name, one signature → overloads, defaults, named args." },
  { n: 6,  file: "06-classes-and-properties.html",     title: "Classes & Properties",            blurb: "Capitalized fields and getter methods → auto-properties." },
  { n: 7,  file: "07-structs-and-value-types.html",    title: "Structs & Value Types",           blurb: "Every struct is a value by default → class vs struct is a choice." },
  { n: 8,  file: "08-interfaces.html",                 title: "Interfaces",                      blurb: "Implicit structural satisfaction → nominal `: IShape` declarations." },
  { n: 9,  file: "09-inheritance-and-abstract.html",   title: "Inheritance & Abstract Classes",  blurb: "Interfaces + struct embedding → a real class hierarchy with `:`." },
  { n: 10, file: "10-enums.html",                      title: "Enums",                           blurb: "const blocks with iota → a first-class `enum` keyword." },
  { n: 11, file: "11-generics.html",                   title: "Generics",                        blurb: "Box[T any] and interface constraints → Box<T> and `where`." },
  { n: 12, file: "12-collections-and-linq.html",       title: "Collections & LINQ",              blurb: "Hand-written for-range loops → chained LINQ query methods." },
  { n: 13, file: "13-delegates-and-lambdas.html",      title: "Delegates & Lambdas",             blurb: "Bare func types → named delegate types like Func<> and Action<>." },
  { n: 14, file: "14-nullable-and-null.html",          title: "Nullable & Null Handling",        blurb: "No null, just zero values → nullable refs and Nullable<T> (`?`)." },
  { n: 15, file: "15-exceptions.html",                 title: "Exceptions",                      blurb: "Returned `error` values checked by hand → try/catch/throw." },
  { n: 16, file: "16-pattern-matching.html",           title: "Pattern Matching",                blurb: "Type switches and `x.(type)` → `is`-type patterns that bind." },
  { n: 17, file: "17-tuples-and-deconstruction.html",  title: "Tuples & Deconstruction",         blurb: "Ad hoc multi-return values → a real, storable ValueTuple type." },
  { n: 18, file: "18-iterators-and-yield.html",        title: "Iterators & yield",               blurb: "range-over-func with a yield callback → IEnumerable<T> + yield return." },
  { n: 19, file: "19-equality-and-comparable.html",    title: "Equality & Comparable",           blurb: "Field-by-field == with sharp edges → overridable Equals/CompareTo." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                        blurb: "A map[int]T repository, rebuilt with generics, LINQ, exceptions." },
];
