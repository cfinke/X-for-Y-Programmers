// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                 blurb: "No pointers or stack objects — everything non-primitive is a GC'd reference." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                           blurb: "std::string mutates in place; String is immutable, every op returns new." },
  { n: 3,  file: "03-arrays-and-lists.html",             title: "Arrays & Lists",                    blurb: "T[]/std::array and std::vector split into T[] and ArrayList<T>." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                               blurb: "std::unordered_map/std::map → HashMap and TreeMap behind Map<K,V>." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                            blurb: "Free functions go away; overloading stays, but every method needs a class." },
  { n: 6,  file: "06-classes-and-objects.html",          title: "Classes & Objects",                 blurb: "Same fields/constructors/this, minus init lists and access-section blocks." },
  { n: 7,  file: "07-null-and-optional.html",            title: "Null & Optional",                   blurb: "std::optional<T> is explicit; Java null lurks on any reference until NPE." },
  { n: 8,  file: "08-control-flow-and-switch.html",      title: "Control Flow & Switch",              blurb: "Range-based for and switch level up into enhanced-for and arrow-switch expressions." },
  { n: 9,  file: "09-interfaces.html",                   title: "Interfaces",                        blurb: "Pure-virtual abstract classes get a dedicated, still-nominal interface keyword." },
  { n: 10, file: "10-inheritance-and-abstract.html",     title: "Inheritance & Abstract Classes",    blurb: "extends replaces : public Base, and every method is virtual by default." },
  { n: 11, file: "11-enums.html",                        title: "Enums",                             blurb: "enum class is int-backed; Java enums are full classes with fields and methods." },
  { n: 12, file: "12-generics.html",                     title: "Generics",                          blurb: "Templates compile per-type; generics erase to Object, bounds use extends." },
  { n: 13, file: "13-collections-and-iteration.html",    title: "Collections & Iteration",           blurb: "vector/set/map become interfaces — List, Set, Map — over swappable impls." },
  { n: 14, file: "14-streams.html",                      title: "Streams",                           blurb: "<algorithm> functions on iterators → chained .stream().filter().map()." },
  { n: 15, file: "15-lambdas-and-functional.html",        title: "Lambdas & Functional Interfaces",   blurb: "No std::function type — every lambda targets a single-method functional interface." },
  { n: 16, file: "16-records.html",                      title: "Records",                           blurb: "struct + hand-rolled operator== → record with equals/hashCode for free." },
  { n: 17, file: "17-exceptions.html",                    title: "Exceptions",                        blurb: "throw anything, catch(...) → typed hierarchies, checked exceptions in the signature." },
  { n: 18, file: "18-equals-hashcode-comparable.html",     title: "equals, hashCode & Comparable",     blurb: "No operator== or operator< by default — override equals/hashCode/compareTo instead." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",    title: "Sealed Types & Pattern Matching",   blurb: "std::variant + std::visit → sealed interfaces with exhaustive switch patterns." },
  { n: 20, file: "20-capstone.html",                      title: "Capstone",                          blurb: "Records, interfaces, generics, and streams combine into a typed in-memory repo." },
];
