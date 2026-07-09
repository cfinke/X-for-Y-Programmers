// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",          title: "Variables & Types",                 blurb: "val/var and inferred types → auto plus explicit int, double, std::string." },
  { n: 2,  file: "02-strings.html",                      title: "Strings",                           blurb: "String templates \"$name\" → concatenation, std::format, or stringstream." },
  { n: 3,  file: "03-vectors.html",                      title: "Vectors",                           blurb: "List/MutableList<T> → std::vector<T>, with manual capacity and iterators." },
  { n: 4,  file: "04-maps.html",                         title: "Maps",                               blurb: "mapOf/mutableMapOf → std::map/std::unordered_map, no literal syntax." },
  { n: 5,  file: "05-functions.html",                    title: "Functions",                         blurb: "Default and named args → overloads and separate declarations/definitions." },
  { n: 6,  file: "06-references-and-pointers.html",      title: "References & Pointers",              blurb: "Kotlin hides the reference entirely → C++ splits it into &, *, and arithmetic." },
  { n: 7,  file: "07-classes.html",                      title: "Classes",                           blurb: "Concise primary constructors → verbose class bodies with separate members." },
  { n: 8,  file: "08-constructors-and-raii.html",        title: "Constructors & RAII",                blurb: "The GC cleans up for you → RAII ties resource release to destructors." },
  { n: 9,  file: "09-operator-overloading.html",         title: "Operator Overloading",                blurb: "operator fun plus(...) → operator+(...), same intent, more ceremony." },
  { n: 10, file: "10-inheritance-and-virtual.html",      title: "Inheritance & Virtual Functions",     blurb: "open/override → virtual/override, but vtables and slicing become visible." },
  { n: 11, file: "11-templates.html",                    title: "Templates",                          blurb: "Generics erased at runtime → templates instantiated at compile time." },
  { n: 12, file: "12-smart-pointers.html",                title: "Smart Pointers",                     blurb: "The GC → unique_ptr and shared_ptr, where ownership is explicit and typed." },
  { n: 13, file: "13-stl-algorithms.html",                title: "STL Algorithms",                     blurb: "map/filter/reduce on collections → <algorithm> functions over iterator ranges." },
  { n: 14, file: "14-lambdas.html",                       title: "Lambdas",                            blurb: "{ x -> x * 2 } → [](int x) { return x * 2; }, with explicit captures." },
  { n: 15, file: "15-enums-and-variant.html",             title: "Enums & Variant",                    blurb: "sealed classes and enum class → enum class plus std::variant for sum types." },
  { n: 16, file: "16-optional-and-exceptions.html",       title: "Optional & Exceptions",               blurb: "?, !!, and null checks → std::optional<T> and real try/catch exceptions." },
  { n: 17, file: "17-move-semantics.html",                title: "Move Semantics",                     blurb: "GC makes ownership a non-issue → std::move and rvalue references matter." },
  { n: 18, file: "18-tuples-and-structured-bindings.html",title: "Tuples & Structured Bindings",        blurb: "Data classes and destructuring → std::tuple and C++17 structured bindings." },
  { n: 19, file: "19-iterators.html",                     title: "Iterators",                          blurb: "Iterator interface and for-each sugar → begin()/end() and the iterator protocol." },
  { n: 20, file: "20-capstone.html",                      title: "Capstone",                           blurb: "Kotlin's package system → C++ headers and namespaces, plus a final project." },
];
