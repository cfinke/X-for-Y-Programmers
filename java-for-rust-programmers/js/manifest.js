// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
//
// NOTE: lessons/02-*.html does not exist in this course yet — numbering
// jumps from 01 to 03 in the source lesson files themselves, so this
// manifest reflects that gap rather than inventing a lesson 2.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",           title: "Variables & Types",                  blurb: "let/mut and inference → explicit types, mutable unless final." },
  { n: 3,  file: "03-arrays-and-lists.html",               title: "Arrays & Lists",                     blurb: "[T; N] and Vec<T> → T[] and ArrayList<T>, minus the const N." },
  { n: 4,  file: "04-maps.html",                           title: "Maps",                               blurb: "HashMap stays HashMap, now behind the Map<K, V> interface." },
  { n: 5,  file: "05-methods.html",                        title: "Methods",                             blurb: "Free fns and impl blocks → every method lives inside a class." },
  { n: 6,  file: "06-classes-and-objects.html",             title: "Classes & Objects",                  blurb: "struct + impl + &self merge into one class body with this." },
  { n: 7,  file: "07-null-and-optional.html",               title: "Null & Optional",                    blurb: "Option<T> forces handling; Java's null doesn't, Optional<T> opts back in." },
  { n: 8,  file: "08-control-flow-and-switch.html",         title: "Control Flow & Switch",               blurb: "for x in coll and match → enhanced for and exhaustive switch expressions." },
  { n: 9,  file: "09-interfaces.html",                      title: "Interfaces",                          blurb: "impl Trait for Type → implements — nominal contracts either way." },
  { n: 10, file: "10-inheritance-and-abstract.html",        title: "Inheritance & Abstract Classes",      blurb: "No structs, only traits → real abstract classes and @Override." },
  { n: 11, file: "11-enums.html",                           title: "Enums",                               blurb: "Data-carrying variants + impl → enum constants as singleton objects." },
  { n: 12, file: "12-generics.html",                        title: "Generics",                            blurb: "Monomorphized <T> → type-erased <T>, same angle brackets underneath." },
  { n: 13, file: "13-collections-and-iteration.html",       title: "Collections & Iteration",             blurb: "Vec/HashSet/HashMap → List/Set/Map interfaces over concrete classes." },
  { n: 14, file: "14-streams.html",                         title: "Streams",                             blurb: "Iterator adapters (.filter/.map/.fold) → the lazy Stream pipeline." },
  { n: 15, file: "15-lambdas-and-functional.html",          title: "Lambdas & Functional Interfaces",     blurb: "Closures as Fn/FnMut/FnOnce → lambdas typed by a single-method interface." },
  { n: 16, file: "16-records.html",                         title: "Records",                             blurb: "#[derive(...)] on a struct → record, generating equals/hashCode/toString." },
  { n: 17, file: "17-exceptions.html",                      title: "Exceptions",                          blurb: "Result<T, E> and ? → thrown exceptions, checked and unchecked." },
  { n: 18, file: "18-equals-hashcode-comparable.html",      title: "equals, hashCode & Comparable",       blurb: "derive(PartialEq, Hash, Ord) → hand-honored equals/hashCode contracts." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",     title: "Sealed Types & Pattern Matching",     blurb: "Closed enum + match → sealed interfaces + exhaustive pattern matching." },
  { n: 20, file: "20-capstone.html",                        title: "Capstone",                            blurb: "Records, generics, streams, exceptions combined into one repository." },
];
