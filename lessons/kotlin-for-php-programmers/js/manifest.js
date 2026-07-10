// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                    blurb: "Loose $vars and gettype() → val/var with real static types." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                              blurb: "\"$name\" interpolation and . concat → templates with ${expr}." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                  blurb: "PHP's one array type splits into List, MutableList, and more." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                 blurb: "Associative arrays → typed Map<K, V> and mapOf()." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                             blurb: "function/fn closures → fun, lambdas, and named/default args." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                          blurb: "isset()/?? guesswork → ?, ?:, and !! enforced by the compiler." },
  { n: 7,  file: "07-classes-and-properties.html",    title: "Classes & Properties",                  blurb: "Hand-written getters/setters → properties with backing fields." },
  { n: 8,  file: "08-data-classes.html",               title: "Data Classes",                         blurb: "Boilerplate __construct/__toString/equals → one data class line." },
  { n: 9,  file: "09-when-and-control-flow.html",      title: "when & Control Flow",                  blurb: "switch/match fall-through rules → exhaustive, expression-valued when." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                          blurb: "extends is open by default in PHP; Kotlin classes are final unless open." },
  { n: 11, file: "11-interfaces.html",                 title: "Interfaces",                           blurb: "interface + trait mixins → interfaces with real default methods." },
  { n: 12, file: "12-sealed-classes.html",             title: "Sealed Classes",                       blurb: "Abstract class hierarchies you hope are exhaustive → sealed ones that are." },
  { n: 13, file: "13-enums.html",                      title: "Enums",                                blurb: "PHP 8.1 backed enums → enum class with properties and methods." },
  { n: 14, file: "14-lambdas-and-higher-order.html",   title: "Lambdas & Higher-Order Functions",     blurb: "fn() => and use() capture → lambdas with implicit it and trailing syntax." },
  { n: 15, file: "15-collection-operations.html",      title: "Collection Operations",                blurb: "array_map/array_filter/array_reduce → chained .map/.filter/.reduce." },
  { n: 16, file: "16-extension-functions.html",        title: "Extension Functions",                  blurb: "No PHP equivalent — helper functions become methods via fun String.foo()." },
  { n: 17, file: "17-generics.html",                   title: "Generics",                             blurb: "Docblock @template hints → compiler-checked <T> with real bounds." },
  { n: 18, file: "18-scope-functions.html",             title: "Scope Functions",                      blurb: "No PHP equivalent — let/run/with/apply/also for chaining and null checks." },
  { n: 19, file: "19-objects-and-companions.html",     title: "Objects & Companions",                 blurb: "Static methods and singleton patterns → object and companion object." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                             blurb: "Putting it together: a PHP-shaped project rebuilt idiomatically in Kotlin." },
];
