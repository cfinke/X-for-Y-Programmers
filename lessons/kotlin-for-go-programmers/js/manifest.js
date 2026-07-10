// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",      title: "Variables & Types",                    blurb: "var/short decl and zero values → val/var with real inference." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                              blurb: "fmt.Sprintf and + concat → \"$name\" string templates." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                  blurb: "[]T slices → List<T>/MutableList<T>, immutable by default." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                 blurb: "map[K]V and comma-ok → Map<K, V> with safe, null-checked gets." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                            blurb: "Multi-return funcs → default/named args, no more overload structs." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                          blurb: "nil and runtime panics → nullable types checked at compile time." },
  { n: 7,  file: "07-classes-and-properties.html",     title: "Classes & Properties",                 blurb: "Structs plus getter/setter funcs → classes with built-in properties." },
  { n: 8,  file: "08-data-classes.html",               title: "Data Classes",                         blurb: "Hand-written String()/Equal() → data class generates them for you." },
  { n: 9,  file: "09-when-and-control-flow.html",      title: "when & Control Flow",                  blurb: "switch statements → when as an exhaustive, value-producing expression." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                          blurb: "Struct embedding fakes it → open classes give you real extends." },
  { n: 11, file: "11-interfaces.html",                 title: "Interfaces",                           blurb: "Implicit satisfaction → explicit : Interface, checked at declaration." },
  { n: 12, file: "12-sealed-classes.html",              title: "Sealed Classes",                       blurb: "Interface + type switch guesswork → sealed class + exhaustive when." },
  { n: 13, file: "13-enums.html",                       title: "Enums",                                blurb: "iota constants → a real enum class with fields and methods." },
  { n: 14, file: "14-lambdas-and-higher-order.html",    title: "Lambdas & Higher-Order Functions",     blurb: "func values and closures → lambda literals and trailing-lambda syntax." },
  { n: 15, file: "15-collection-operations.html",       title: "Collection Operations",                blurb: "Manual for-loops over slices → chained .map/.filter/.reduce." },
  { n: 16, file: "16-extension-functions.html",         title: "Extension Functions",                  blurb: "No equivalent in Go — Kotlin lets you bolt methods onto any type." },
  { n: 17, file: "17-generics.html",                    title: "Generics",                             blurb: "any/comparable type params → generics with in/out variance." },
  { n: 18, file: "18-scope-functions.html",              title: "Scope Functions",                      blurb: "No equivalent in Go — let, run, apply, also, and with chain logic." },
  { n: 19, file: "19-objects-and-companions.html",       title: "Objects & Companions",                 blurb: "Package-level vars/funcs → object singletons and companion object." },
  { n: 20, file: "20-capstone.html",                     title: "Capstone",                             blurb: "One package and a main() → a small project tying it all together." },
];
