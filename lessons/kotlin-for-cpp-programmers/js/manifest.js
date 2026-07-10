// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",      title: "Variables & Types",                blurb: "int/double, auto → val/var with real type inference." },
  { n: 2,  file: "02-strings.html",                  title: "Strings",                          blurb: "std::string concat and stringstream → string templates." },
  { n: 3,  file: "03-lists-and-collections.html",    title: "Lists & Collections",              blurb: "std::vector<T> → List<T>/MutableList<T>, no manual memory." },
  { n: 4,  file: "04-maps.html",                     title: "Maps",                             blurb: "std::unordered_map<K,V> → Map<K,V> and mapOf/mutableMapOf." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                        blurb: "Overloads and default args → named args, one signature." },
  { n: 6,  file: "06-null-safety.html",               title: "Null Safety",                      blurb: "nullptr and segfaults → ?, ?., and ?: in the type system." },
  { n: 7,  file: "07-classes-and-properties.html",   title: "Classes & Properties",             blurb: "Hand-written getters/setters → properties with backing fields." },
  { n: 8,  file: "08-data-classes.html",              title: "Data Classes",                     blurb: "Hand-rolled ==, hash, and operator<< → data class does it." },
  { n: 9,  file: "09-when-and-control-flow.html",    title: "when & Control Flow",              blurb: "switch/case fallthrough → when as an exhaustive expression." },
  { n: 10, file: "10-inheritance.html",               title: "Inheritance",                      blurb: "virtual/override, multiple inheritance → open, single base." },
  { n: 11, file: "11-interfaces.html",                title: "Interfaces",                       blurb: "Pure virtual abstract base classes → interfaces with defaults." },
  { n: 12, file: "12-sealed-classes.html",            title: "Sealed Classes",                   blurb: "std::variant plus visitors → sealed classes with exhaustive when." },
  { n: 13, file: "13-enums.html",                     title: "Enums",                            blurb: "enum class as a glorified int → enums with fields and methods." },
  { n: 14, file: "14-lambdas-and-higher-order.html",  title: "Lambdas & Higher-Order Functions", blurb: "[capture](){} and std::function → trailing-lambda syntax." },
  { n: 15, file: "15-collection-operations.html",     title: "Collection Operations",            blurb: "<algorithm>'s transform/copy_if → chainable map/filter/fold." },
  { n: 16, file: "16-extension-functions.html",       title: "Extension Functions",              blurb: "Free functions and friend hacks → extension functions on types." },
  { n: 17, file: "17-generics.html",                  title: "Generics",                         blurb: "Compile-time templates and duck typing → bounded, erased generics." },
  { n: 18, file: "18-scope-functions.html",           title: "Scope Functions",                  blurb: "Manual temp variables and chaining → let, run, apply, also, with." },
  { n: 19, file: "19-objects-and-companions.html",    title: "Objects & Companions",             blurb: "Static members and Meyers' singleton → object/companion object." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                         blurb: "#include and headers → packages/imports, plus a final project." },
];
