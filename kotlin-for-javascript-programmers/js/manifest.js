// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                 blurb: "let/const guesswork → val/var with a real static type system." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                           blurb: "Template literals → string templates, with $var and ${expr}." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                blurb: "One mutable Array → List/MutableList and Set/Map, split by mutability." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                               blurb: "Object literals and Map → mapOf/mutableMapOf with typed keys." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                          blurb: "Arrow functions and defaults → fun with named args, no overloads needed." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                       blurb: "undefined/null and ?. → nullable types enforced at compile time." },
  { n: 7,  file: "07-classes-and-properties.html",     title: "Classes & Properties",               blurb: "this.x = x constructors → primary constructors with property declarations." },
  { n: 8,  file: "08-data-classes.html",               title: "Data Classes",                       blurb: "Hand-rolled equals/toString objects → data class gives you both free." },
  { n: 9,  file: "09-when-and-control-flow.html",      title: "when & Control Flow",                 blurb: "switch with fallthrough bugs → when as an exhaustive expression." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                        blurb: "extends on any class by default → open/override are opt-in, not implicit." },
  { n: 11, file: "11-interfaces.html",                 title: "Interfaces",                         blurb: "Duck-typed shapes → interfaces the compiler actually checks." },
  { n: 12, file: "12-sealed-classes.html",             title: "Sealed Classes",                     blurb: "Tagged unions by convention → sealed class hierarchies the compiler closes." },
  { n: 13, file: "13-enums.html",                      title: "Enums",                              blurb: "String-literal unions and frozen objects → a real enum class with methods." },
  { n: 14, file: "14-lambdas-and-higher-order.html",   title: "Lambdas & Higher-Order Functions",   blurb: "Callback-shaped functions → lambdas with trailing-lambda syntax." },
  { n: 15, file: "15-collection-operations.html",      title: "Collection Operations",              blurb: ".filter().map().reduce() → the same chain, but lazily with sequences too." },
  { n: 16, file: "16-extension-functions.html",        title: "Extension Functions",                blurb: "Monkey-patching prototypes → extension functions that don't touch the class." },
  { n: 17, file: "17-generics.html",                   title: "Generics",                           blurb: "Generics as documentation only → generics enforced with variance annotations." },
  { n: 18, file: "18-scope-functions.html",             title: "Scope Functions",                    blurb: "Chained optional-chaining and IIFEs → let/run/with/apply/also idioms." },
  { n: 19, file: "19-objects-and-companions.html",      title: "Objects & Companions",                blurb: "Static methods and singletons-by-convention → object and companion object." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                           blurb: "Pulling every idiom together into one final project." },
];
