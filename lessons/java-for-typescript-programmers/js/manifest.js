// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                    blurb: "let/const and number/string → typed declarations: int, double, String, final." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                              blurb: "Template literals and + → String.format, concat, and StringBuilder." },
  { n: 3,  file: "03-arrays-and-lists.html",            title: "Arrays & Lists",                       blurb: "number[] splits into int[] arrays and ArrayList<Integer>." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                                 blurb: "Record<string, V> and objects → HashMap<String, V>." },
  { n: 5,  file: "05-methods.html",                     title: "Methods",                              blurb: "Free functions and arrows → instance methods, overloads instead of default params." },
  { n: 6,  file: "06-classes-and-objects.html",         title: "Classes & Objects",                    blurb: "Terse TS classes → Java's explicit fields, getters, and constructors." },
  { n: 7,  file: "07-null-and-optional.html",           title: "Null & Optional",                      blurb: "string | null, ?., and ?? → Optional<T> and the NullPointerException you now avoid." },
  { n: 8,  file: "08-control-flow-and-switch.html",     title: "Control Flow & Switch",                blurb: "TS's loose switch and for loops → Java's break-by-default switch and typed for." },
  { n: 9,  file: "09-interfaces.html",                  title: "Interfaces",                           blurb: "Structural shapes → nominal interfaces you must implements explicitly." },
  { n: 10, file: "10-inheritance-and-abstract.html",    title: "Inheritance & Abstract Classes",       blurb: "extends, implements, abstract — the keywords you already know carry over." },
  { n: 11, file: "11-enums.html",                       title: "Enums",                                blurb: "TS enums and literal unions → Java's full enum classes with methods." },
  { n: 12, file: "12-generics.html",                    title: "Generics",                             blurb: "TS generics carry over, but Java's erasure adds real constraints." },
  { n: 13, file: "13-collections-and-iteration.html",   title: "Collections & Iteration",              blurb: "Arrays and for...of → List, Set, Map, and the Iterable/Iterator contract." },
  { n: 14, file: "14-streams.html",                     title: "Streams",                              blurb: ".filter().map() → .stream().filter().map().collect(), one step longer." },
  { n: 15, file: "15-lambdas-and-functional.html",      title: "Lambdas & Functional Interfaces",      blurb: "Arrow functions → lambdas typed against functional interfaces like Function<T,R>." },
  { n: 16, file: "16-records.html",                     title: "Records",                              blurb: "Plain object types → Java records with generated equals, hashCode, and toString." },
  { n: 17, file: "17-exceptions.html",                  title: "Exceptions",                           blurb: "catch (e: any) → typed exceptions, with checked ones the compiler enforces." },
  { n: 18, file: "18-equals-hashcode-comparable.html",  title: "equals, hashCode & Comparable",        blurb: "=== and structural equality → overriding equals, hashCode, and Comparable." },
  { n: 19, file: "19-sealed-and-pattern-matching.html", title: "Sealed Types & Pattern Matching",      blurb: "Discriminated unions + switch narrowing → sealed interfaces + pattern matching." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                             blurb: "ES modules → packages and imports, plus a final project." },
];
