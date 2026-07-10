// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",          title: "Variables & Types",                     blurb: "One number type splits into int, long, double; let/const → typed locals." },
  { n: 2,  file: "02-strings.html",                      title: "Strings",                               blurb: "Template literals → + concat and String.format; += in a loop wants StringBuilder." },
  { n: 3,  file: "03-arrays-and-lists.html",              title: "Arrays & Lists",                       blurb: "One growable array splits into fixed-length T[] and ArrayList<T>." },
  { n: 4,  file: "04-maps.html",                          title: "Maps",                                  blurb: "Object/Map grab-bag → strongly typed Map<K, V> and HashMap." },
  { n: 5,  file: "05-methods.html",                       title: "Methods",                               blurb: "Free-floating functions → methods that always live inside a type." },
  { n: 6,  file: "06-classes-and-objects.html",           title: "Classes & Objects",                     blurb: "Same field/constructor/this vocabulary, minus the shorthand and dynamic shape-shifting." },
  { n: 7,  file: "07-null-and-optional.html",             title: "Null & Optional",                       blurb: "null/undefined + TypeError → null + NullPointerException, tamed with Optional." },
  { n: 8,  file: "08-control-flow-and-switch.html",       title: "Control Flow & Switch",                 blurb: "for...of → enhanced for; switch becomes an exhaustive, fall-through-free expression." },
  { n: 9,  file: "09-interfaces.html",                    title: "Interfaces",                            blurb: "Duck typing → nominal interfaces you must explicitly implements." },
  { n: 10, file: "10-inheritance-and-abstract.html",      title: "Inheritance & Abstract Classes",        blurb: "Same extends/super model, plus a real abstract, @Override, and final." },
  { n: 11, file: "11-enums.html",                         title: "Enums",                                 blurb: "Frozen objects of string constants → real enum classes with fields and methods." },
  { n: 12, file: "12-generics.html",                      title: "Generics",                              blurb: "Untyped-by-default containers → generics the compiler actually checks." },
  { n: 13, file: "13-collections-and-iteration.html",     title: "Collections & Iteration",               blurb: "Array/Set/Map → the List/Set/Map interfaces over ArrayList/HashSet/HashMap." },
  { n: 14, file: "14-streams.html",                       title: "Streams",                               blurb: ".filter().map().reduce() chains → .stream() pipelines ending in .collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",        title: "Lambdas & Functional Interfaces",       blurb: "Arrows as free values → lambdas typed against a single-method functional interface." },
  { n: 16, file: "16-records.html",                       title: "Records",                               blurb: "Plain object literals → record, one line instead of a hand-written POJO." },
  { n: 17, file: "17-exceptions.html",                    title: "Exceptions",                            blurb: "throw-and-catch-anything → unchecked exceptions plus compiler-enforced checked ones." },
  { n: 18, file: "18-equals-hashcode-comparable.html",    title: "equals, hashCode & Comparable",         blurb: "=== identity and a sort callback → overridden equals/hashCode and Comparable." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",   title: "Sealed Types & Pattern Matching",       blurb: "Discriminant-field objects and switch → sealed hierarchies with exhaustive pattern matching." },
  { n: 20, file: "20-capstone.html",                      title: "Capstone",                              blurb: "Records, interfaces, generics, streams, and exceptions combined in one typed repository." },
];
