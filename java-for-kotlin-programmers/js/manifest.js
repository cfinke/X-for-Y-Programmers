// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",          title: "Variables & Types",                 blurb: "var/val inference → explicit int/String; no free functions, just static methods." },
  { n: 2,  file: "02-strings.html",                       title: "Strings",                           blurb: "No string templates: \"$a and $b\" → String.format, and += needs StringBuilder." },
  { n: 3,  file: "03-arrays-and-lists.html",               title: "Arrays & Lists",                    blurb: "IntArray vs MutableList, same split as T[] vs ArrayList<T>, just more ceremony." },
  { n: 4,  file: "04-maps.html",                           title: "Maps",                              blurb: "Map/MutableMap collapse into one Map interface; m[\"a\"] becomes m.put/m.get." },
  { n: 5,  file: "05-methods.html",                        title: "Methods",                           blurb: "Default/named params disappear; overloading and static do the work instead." },
  { n: 6,  file: "06-classes-and-objects.html",             title: "Classes & Objects",                 blurb: "Constructor properties in the header vanish — Java wants fields, a constructor, and this." },
  { n: 7,  file: "07-null-and-optional.html",               title: "Null & Optional",                  blurb: "String? enforced by the compiler → any reference can be null; Optional<T> opts back in." },
  { n: 8,  file: "08-control-flow-and-switch.html",         title: "Control Flow & Switch",             blurb: "for (x in coll) → enhanced for; when → an exhaustive, arrow-style switch expression." },
  { n: 9,  file: "09-interfaces.html",                      title: "Interfaces",                        blurb: ": Shape → implements Shape; default methods replace body-having interface members." },
  { n: 10, file: "10-inheritance-and-abstract.html",        title: "Inheritance & Abstract Classes",    blurb: "final-by-default flips: Java classes are open unless you say final, plus @Override." },
  { n: 11, file: "11-enums.html",                           title: "Enums",                             blurb: "Constructor params as val properties → a separate field and constructor per constant." },
  { n: 12, file: "12-generics.html",                        title: "Generics",                          blurb: "Same angle brackets, different bound keyword: T : Comparable<T> → T extends Comparable<T>." },
  { n: 13, file: "13-collections-and-iteration.html",       title: "Collections & Iteration",           blurb: "List/MutableList → List/ArrayList: program to the interface, pick the implementation." },
  { n: 14, file: "14-streams.html",                          title: "Streams",                           blurb: "list.filter{}.map{} → list.stream().filter().map(), collected instead of returned." },
  { n: 15, file: "15-lambdas-and-functional.html",          title: "Lambdas & Functional Interfaces",   blurb: "No standalone (Int) -> Int type — every lambda targets a single-method functional interface." },
  { n: 16, file: "16-records.html",                          title: "Records",                          blurb: "data class's free equals/hashCode/copy → record, minus var fields and copy()." },
  { n: 17, file: "17-exceptions.html",                       title: "Exceptions",                       blurb: "Kotlin dropped checked exceptions; Java still enforces catch-or-declare throws." },
  { n: 18, file: "18-equals-hashcode-comparable.html",       title: "equals, hashCode & Comparable",     blurb: "== calling equals() for free → override equals/hashCode yourself; sortedBy → Comparable." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",      title: "Sealed Types & Pattern Matching",   blurb: "sealed + exhaustive when → sealed interfaces + Java's typed, binding pattern matching." },
  { n: 20, file: "20-capstone.html",                         title: "Capstone",                          blurb: "Records, interfaces, generics, streams, and exceptions combined into one typed repository." },
];
