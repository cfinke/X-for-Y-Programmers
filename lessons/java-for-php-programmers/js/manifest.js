// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                blurb: "$age = 36 → int age = 36; types are declared, not inferred by default." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                          blurb: "\"$name\" interpolation and .= → String.format and immutable StringBuilder." },
  { n: 3,  file: "03-arrays-and-lists.html",             title: "Arrays & Lists",                   blurb: "The one everyday array splits into fixed-length T[] and growable ArrayList<T>." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                             blurb: "Associative arrays → HashMap<K, V>, strongly typed on both keys and values." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                          blurb: "Top-level function → static/instance method living inside a class." },
  { n: 6,  file: "06-classes-and-objects.html",          title: "Classes & Objects",                blurb: "$this->balance → this.balance; same shape, no sigils, no arrows." },
  { n: 7,  file: "07-null-and-optional.html",            title: "Null & Optional",                  blurb: "Fatal null-call errors on both sides, but Java adds Optional<T> for explicit absence." },
  { n: 8,  file: "08-control-flow-and-switch.html",      title: "Control Flow & Switch",             blurb: "foreach → enhanced for; match-like switch expressions with exhaustiveness checks." },
  { n: 9,  file: "09-interfaces.html",                   title: "Interfaces",                       blurb: "Nominal implements carries over directly; default methods add real bodies." },
  { n: 10, file: "10-inheritance-and-abstract.html",     title: "Inheritance & Abstract Classes",    blurb: "extends and parent:: transfer as-is, plus an enforced @Override and final." },
  { n: 11, file: "11-enums.html",                        title: "Enums",                            blurb: "PHP 8.1 enum cases get methods; Java enum constants also get fields and a constructor." },
  { n: 12, file: "12-generics.html",                     title: "Generics",                         blurb: "PHPDoc @template hints nobody checks → compiler-enforced List<T>." },
  { n: 13, file: "13-collections-and-iteration.html",    title: "Collections & Iteration",           blurb: "One array for list/set/map duty splits into List, Set, and Map interfaces." },
  { n: 14, file: "14-streams.html",                      title: "Streams",                          blurb: "array_filter/array_map/array_reduce → .stream().filter().map().collect()." },
  { n: 15, file: "15-lambdas-and-functional.html",       title: "Lambdas & Functional Interfaces",   blurb: "Closures and fn() =&gt; … → lambdas typed against a single-method interface." },
  { n: 16, file: "16-records.html",                      title: "Records",                          blurb: "Promoted readonly properties → record, with equals/hashCode/toString generated free." },
  { n: 17, file: "17-exceptions.html",                   title: "Exceptions",                       blurb: "catch(\\Throwable) anything → checked exceptions the compiler forces you to declare." },
  { n: 18, file: "18-equals-hashcode-comparable.html",   title: "equals, hashCode & Comparable",     blurb: "Uncustomizable == and usort callbacks → overridable equals/hashCode and Comparable." },
  { n: 19, file: "19-sealed-and-pattern-matching.html",  title: "Sealed Types & Pattern Matching",   blurb: "instanceof-plus-cast on an open hierarchy → sealed types with exhaustive pattern matching." },
  { n: 20, file: "20-capstone.html",                     title: "Capstone",                          blurb: "A typed in-memory repository — records, interfaces, generics, and streams together." },
];
