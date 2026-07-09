// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                    blurb: "No more duck typing everywhere — int, String, and friends are declared and fixed." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                              blurb: "Interpolation and heredocs give way to + concat and String.format." },
  { n: 3,  file: "03-arrays-and-lists.html",             title: "Arrays & Lists",                       blurb: "Array's do-anything mixins split into typed arrays and List<T>." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                                 blurb: "Hash literals and symbol keys → HashMap<K, V> with explicit types." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                               blurb: "Implicit returns and keyword args → explicit return and overloads." },
  { n: 6,  file: "06-classes-and-objects.html",         title: "Classes & Objects",                    blurb: "attr_accessor and initialize → fields, getters, and constructors." },
  { n: 7,  file: "07-null-and-optional.html",           title: "Null & Optional",                      blurb: "nil checks and &. → NullPointerException and Optional<T>." },
  { n: 8,  file: "08-control-flow-and-switch.html",     title: "Control Flow & Switch",                 blurb: "case/when and unless → switch expressions and braced blocks." },
  { n: 9,  file: "09-interfaces.html",                  title: "Interfaces",                           blurb: "Duck typing and modules → nominal interfaces you implement." },
  { n: 10, file: "10-inheritance-and-abstract.html",    title: "Inheritance & Abstract Classes",       blurb: "Single inheritance plus mixins → extends, implements, and abstract." },
  { n: 11, file: "11-enums.html",                       title: "Enums",                                blurb: "Symbols standing in for constants → real, typed Java enums." },
  { n: 12, file: "12-generics.html",                    title: "Generics",                             blurb: "Ruby's anything-goes collections → List<T> and compile-time checks." },
  { n: 13, file: "13-collections-and-iteration.html",   title: "Collections & Iteration",              blurb: "each/map/select blocks → for-each loops and the Collection API." },
  { n: 14, file: "14-streams.html",                     title: "Streams",                              blurb: "Enumerable chains → .stream().filter().map().collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",      title: "Lambdas & Functional Interfaces",      blurb: "Procs and blocks → lambdas typed against functional interfaces." },
  { n: 16, file: "16-records.html",                     title: "Records",                              blurb: "Struct.new → record, with equals/hashCode generated for free." },
  { n: 17, file: "17-exceptions.html",                  title: "Exceptions",                            blurb: "begin/rescue/ensure → try/catch/finally, plus checked exceptions." },
  { n: 18, file: "18-equals-hashcode-comparable.html",  title: "equals, hashCode & Comparable",        blurb: "== and <=> overrides → equals(), hashCode(), and Comparable<T>." },
  { n: 19, file: "19-sealed-and-pattern-matching.html", title: "Sealed Types & Pattern Matching",      blurb: "case/in destructuring → sealed interfaces and switch patterns." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                              blurb: "Bring it together: a small Ruby idea rebuilt as typed, compiled Java." },
];
