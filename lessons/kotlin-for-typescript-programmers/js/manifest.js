// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",     title: "Variables & Types",                    blurb: "let/const and number/string → val/var and Int/String, explicitly typed." },
  { n: 2,  file: "02-strings.html",                 title: "Strings",                              blurb: "Template literals → Kotlin string templates with the same ${} syntax." },
  { n: 3,  file: "03-lists-and-collections.html",   title: "Lists & Collections",                  blurb: "array vs readonly array → List (immutable) vs MutableList." },
  { n: 4,  file: "04-maps.html",                    title: "Maps",                                 blurb: "Record<K, V> and Map<K, V> → Kotlin's Map/MutableMap with mapOf." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                            blurb: "Arrow functions and defaults → fun with default and named arguments." },
  { n: 6,  file: "06-null-safety.html",             title: "Null Safety",                          blurb: "string | null with ?. and ?? → String? with ?. and the ?: elvis operator." },
  { n: 7,  file: "07-classes-and-properties.html",  title: "Classes & Properties",                 blurb: "Constructor parameter properties → val/var straight in the primary constructor." },
  { n: 8,  file: "08-data-classes.html",            title: "Data Classes",                         blurb: "Interfaces plus hand-rolled equals → data class gives it all for free." },
  { n: 9,  file: "09-when-and-control-flow.html",   title: "when & Control Flow",                  blurb: "switch statements that fall through → when expressions that return a value." },
  { n: 10, file: "10-inheritance.html",             title: "Inheritance",                          blurb: "extends is unrestricted; Kotlin classes need open before they can be subclassed." },
  { n: 11, file: "11-interfaces.html",              title: "Interfaces",                           blurb: "Structural interfaces → nominal interfaces, now with default method bodies." },
  { n: 12, file: "12-sealed-classes.html",          title: "Sealed Classes",                       blurb: "Discriminated unions with a kind tag → sealed classes with exhaustive when." },
  { n: 13, file: "13-enums.html",                   title: "Enums",                                blurb: "String-literal unions and TS enums → enum class, a real type with methods." },
  { n: 14, file: "14-lambdas-and-higher-order.html", title: "Lambdas & Higher-Order Functions",     blurb: "(x) => x + 1 closures → { x -> x + 1 } with trailing-lambda call syntax." },
  { n: 15, file: "15-collection-operations.html",   title: "Collection Operations",                blurb: ".filter().map().reduce() chains → the same chain, Kotlin-flavored." },
  { n: 16, file: "16-extension-functions.html",     title: "Extension Functions",                  blurb: "Monkey-patching or free helper functions → fun String.shout(), called like a method." },
  { n: 17, file: "17-generics.html",                title: "Generics",                             blurb: "Structural <T> constraints → declaration-site variance with out/in." },
  { n: 18, file: "18-scope-functions.html",         title: "Scope Functions",                      blurb: "Optional chaining and IIFEs → let, also, apply, run, and with." },
  { n: 19, file: "19-objects-and-companions.html",  title: "Objects & Companions",                 blurb: "static members and module singletons → companion object and object declarations." },
  { n: 20, file: "20-capstone.html",                title: "Capstone",                             blurb: "A discriminated-union evaluator, rebuilt with sealed classes and when." },
];
