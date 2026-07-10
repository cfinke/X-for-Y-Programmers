// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",               blurb: "int/double/String → int/double/string; var replaces the type when it's obvious." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                          blurb: "String.format and + concat → interpolated $\"...\" strings." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                   blurb: "int[] and ArrayList<Integer> → int[] and List<int>, no boxing needed." },
  { n: 4,  file: "04-dictionaries.html",               title: "Dictionaries",                     blurb: "HashMap<K, V> → Dictionary<K, V>; TryGetValue replaces the getOrDefault dance." },
  { n: 5,  file: "05-methods.html",                    title: "Methods",                           blurb: "Overloads and varargs carry over; expression-bodied members trim the braces." },
  { n: 6,  file: "06-classes-and-properties.html",     title: "Classes & Properties",              blurb: "Getter/setter pairs collapse into { get; private set; } auto-properties." },
  { n: 7,  file: "07-structs-and-value-types.html",    title: "Structs & Value Types",             blurb: "Java has no value-type option; struct gives you a stack-allocated, copy-by-value class." },
  { n: 8,  file: "08-interfaces.html",                 title: "Interfaces",                        blurb: "implements and default methods map straight across, plus explicit interface impls." },
  { n: 9,  file: "09-inheritance-and-abstract.html",   title: "Inheritance & Abstract Classes",    blurb: "extends/abstract carry over; override is required, not just @Override-annotated." },
  { n: 10, file: "10-enums.html",                      title: "Enums",                             blurb: "Java's rich enum classes shrink to lightweight int-backed enums with extension methods." },
  { n: 11, file: "11-generics.html",                   title: "Generics",                          blurb: "List<T> instincts transfer, but where T : constraints replace bounded wildcards." },
  { n: 12, file: "12-collections-and-linq.html",       title: "Collections & LINQ",                blurb: ".stream().filter().map().collect() → .Where().Select() with no terminal collect." },
  { n: 13, file: "13-delegates-and-lambdas.html",      title: "Delegates & Lambdas",               blurb: "Functional interfaces → delegate types and Func<>/Action<>, lambdas either way." },
  { n: 14, file: "14-nullable-and-null.html",          title: "Nullable & Null Handling",          blurb: "Optional<T> and NPEs → int?, the null-conditional ?., and the ?? operator." },
  { n: 15, file: "15-exceptions.html",                 title: "Exceptions",                        blurb: "No checked exceptions in C#; catch clauses and finally still work the same." },
  { n: 16, file: "16-pattern-matching.html",            title: "Pattern Matching",                  blurb: "instanceof-and-cast → is-type patterns that test and bind in one step." },
  { n: 17, file: "17-tuples-and-deconstruction.html",  title: "Tuples & Deconstruction",           blurb: "What records hint at, formalized as (int Min, int Max) tuples and var (a, b) = ...." },
  { n: 18, file: "18-iterators-and-yield.html",        title: "Iterators & yield",                 blurb: "Hand-rolled Iterator<T> classes → yield return generating IEnumerable<T> lazily." },
  { n: 19, file: "19-equality-and-comparable.html",    title: "Equality & Comparable",             blurb: "equals/hashCode/Comparable → IEquatable<T>/IComparable<T> plus operator overloads." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                          blurb: "A generic repository with LINQ queries and custom exceptions ties it all together." },
];
