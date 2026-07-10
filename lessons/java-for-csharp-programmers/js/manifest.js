// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                    blurb: "var/int/string → var/int/String; value types stay similar, refs don't." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                              blurb: "$\"interpolation\" → String.format/text blocks; + still concatenates." },
  { n: 3,  file: "03-arrays-and-lists.html",             title: "Arrays & Lists",                       blurb: "List<T> → ArrayList<T>; no LINQ, streams do the heavy lifting." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                                 blurb: "Dictionary<TKey, TValue> → Map<K, V>, an interface backed by HashMap." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                               blurb: "No default params or ref/out — overloads and wrapper objects instead." },
  { n: 6,  file: "06-classes-and-objects.html",         title: "Classes & Objects",                    blurb: "Auto-properties disappear; you write getters/setters or reach for records." },
  { n: 7,  file: "07-null-and-optional.html",           title: "Null & Optional",                      blurb: "Nullable reference types and ?. → NPEs by default and Optional<T>." },
  { n: 8,  file: "08-control-flow-and-switch.html",     title: "Control Flow & Switch",                blurb: "foreach → enhanced for; switch expressions arrived in Java too." },
  { n: 9,  file: "09-interfaces.html",                  title: "Interfaces",                           blurb: "No explicit implementation or default access modifiers on members." },
  { n: 10, file: "10-inheritance-and-abstract.html",    title: "Inheritance & Abstract Classes",       blurb: "extends/implements carry over; every class is virtual unless final." },
  { n: 11, file: "11-enums.html",                       title: "Enums",                                blurb: "Java enums are full classes — fields, methods, and constant bodies." },
  { n: 12, file: "12-generics.html",                    title: "Generics",                             blurb: "No reified generics: type erasure replaces C#'s runtime-aware generics." },
  { n: 13, file: "13-collections-and-iteration.html",   title: "Collections & Iteration",              blurb: "IEnumerable<T> → Iterable<T>; Collections is the static-helper equivalent." },
  { n: 14, file: "14-streams.html",                     title: "Streams",                              blurb: "LINQ's fluent .Where().Select() → Stream's .filter().map().collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",      title: "Lambdas & Functional Interfaces",      blurb: "Func<T>/Action<T> → named functional interfaces like Function<T, R>." },
  { n: 16, file: "16-records.html",                     title: "Records",                              blurb: "record Point(int X, int Y) → record Point(int x, int y), same idea." },
  { n: 17, file: "17-exceptions.html",                  title: "Exceptions",                           blurb: "Unchecked-only in C# → Java adds checked exceptions you must declare." },
  { n: 18, file: "18-equals-hashcode-comparable.html",  title: "equals, hashCode & Comparable",        blurb: "Override Equals/GetHashCode/IComparable → equals/hashCode/Comparable." },
  { n: 19, file: "19-sealed-and-pattern-matching.html", title: "Sealed Types & Pattern Matching",      blurb: "Record hierarchies + switch patterns → sealed interfaces + switch." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                             blurb: "Records, interfaces, generics, and streams combined into one project." },
];
