// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                    blurb: "var and := → explicit int, String, and boolean declarations." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                              blurb: "fmt.Sprintf and + → String.format and immutable String concatenation." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                       blurb: "Slices and append() → arrays and ArrayList<T>, with autoboxing underneath." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                 blurb: "map[K]V and comma-ok → HashMap<K,V> with containsKey and getOrDefault." },
  { n: 5,  file: "05-methods.html",                   title: "Methods",                              blurb: "Receiver functions func (s S) M() → instance methods living inside a class." },
  { n: 6,  file: "06-classes-and-objects.html",       title: "Classes & Objects",                    blurb: "Structs plus a NewFoo() constructor → classes with real constructors and fields." },
  { n: 7,  file: "07-null-and-optional.html",         title: "Null & Optional",                      blurb: "nil and zero values → null and Optional<T>, with NPEs instead of nil panics." },
  { n: 8,  file: "08-control-flow-and-switch.html",   title: "Control Flow & Switch",                blurb: "One fallthrough-free for/switch → Java's for/while/do and a switch that falls through." },
  { n: 9,  file: "09-interfaces.html",                title: "Interfaces",                           blurb: "Implicit, structural interface satisfaction → explicit implements declarations." },
  { n: 10, file: "10-inheritance-and-abstract.html",  title: "Inheritance & Abstract Classes",       blurb: "No inheritance, just struct embedding → real extends and abstract classes." },
  { n: 11, file: "11-enums.html",                     title: "Enums",                                blurb: "iota constants → a true enum type with fields and methods of its own." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                             blurb: "Type parameters with constraints → generics with bounds, erased at runtime." },
  { n: 13, file: "13-collections-and-iteration.html", title: "Collections & Iteration",              blurb: "range over slices and maps → the Collections framework, Iterator, and for-each." },
  { n: 14, file: "14-streams.html",                   title: "Streams",                              blurb: "Hand-rolled filter/map loops → .stream().filter().map().collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",    title: "Lambdas & Functional Interfaces",      blurb: "Func values and closures → lambdas backed by a functional interface type." },
  { n: 16, file: "16-records.html",                   title: "Records",                              blurb: "Plain structs → records, with equals, hashCode, and toString generated for you." },
  { n: 17, file: "17-exceptions.html",                title: "Exceptions",                           blurb: "if err != nil returns → try/catch/throw and exceptions as control flow." },
  { n: 18, file: "18-equals-hashcode-comparable.html",title: "equals, hashCode & Comparable",        blurb: "== and hand-written sort.Slice funcs → equals, hashCode, and Comparable contracts." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",title: "Sealed Types & Pattern Matching",     blurb: "Type switches on interfaces → sealed interfaces with exhaustive switch patterns." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                             blurb: "Everything from receivers to sealed switches, brought together in one final project." },
];
