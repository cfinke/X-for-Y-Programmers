// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",              title: "Variables & Types",                  blurb: "let/mut and i32/f64 → auto, const, and the built-in numeric types." },
  { n: 2,  file: "02-strings.html",                          title: "Strings",                            blurb: "String vs &str → std::string and const char*/string_view." },
  { n: 3,  file: "03-vectors.html",                          title: "Vectors",                            blurb: "Vec<T> and its methods carry over almost directly to std::vector." },
  { n: 4,  file: "04-maps.html",                             title: "Maps",                                blurb: "HashMap<K, V> → std::unordered_map, minus the entry-API sugar." },
  { n: 5,  file: "05-functions.html",                        title: "Functions",                          blurb: "fn signatures and closures → C++ functions and lambda captures." },
  { n: 6,  file: "06-references-and-pointers.html",          title: "References & Pointers",              blurb: "The borrow checker's rules, without the borrow checker enforcing them." },
  { n: 7,  file: "07-classes.html",                          title: "Classes",                            blurb: "struct + impl → class, now with access specifiers and no traits split." },
  { n: 8,  file: "08-constructors-and-raii.html",             title: "Constructors & RAII",                blurb: "Drop and ::new() → destructors and constructors, same RAII idea." },
  { n: 9,  file: "09-operator-overloading.html",              title: "Operator Overloading",               blurb: "impl Add<> and friends → operator+ member and free functions." },
  { n: 10, file: "10-inheritance-and-virtual.html",           title: "Inheritance & Virtual Functions",    blurb: "Trait objects and dyn → base classes and virtual dispatch." },
  { n: 11, file: "11-templates.html",                         title: "Templates",                          blurb: "Monomorphized generics<T> → templates, checked at instantiation, not before." },
  { n: 12, file: "12-smart-pointers.html",                    title: "Smart Pointers",                     blurb: "Box, Rc, and Arc → unique_ptr, shared_ptr, and weak_ptr." },
  { n: 13, file: "13-stl-algorithms.html",                    title: "STL Algorithms",                     blurb: "Iterator adaptor chains → <algorithm> functions over begin/end." },
  { n: 14, file: "14-lambdas.html",                           title: "Lambdas",                            blurb: "|x| x + 1 closures → [captures](params){...}, move included." },
  { n: 15, file: "15-enums-and-variant.html",                 title: "Enums & Variant",                    blurb: "Data-carrying enums and match → std::variant and std::visit." },
  { n: 16, file: "16-optional-and-exceptions.html",           title: "Optional & Exceptions",              blurb: "Option/Result and ? → std::optional plus try/catch exceptions." },
  { n: 17, file: "17-move-semantics.html",                    title: "Move Semantics",                     blurb: "Moves-by-default → std::move as an opt-in, with a moved-from state." },
  { n: 18, file: "18-tuples-and-structured-bindings.html",     title: "Tuples & Structured Bindings",       blurb: "Tuple patterns in let → std::tuple with structured bindings." },
  { n: 19, file: "19-iterators.html",                         title: "Iterators",                          blurb: "The Iterator trait's next() → begin()/end() and iterator categories." },
  { n: 20, file: "20-capstone.html",                          title: "Capstone",                           blurb: "A final project pulling it all together, no borrow checker to lean on." },
];
