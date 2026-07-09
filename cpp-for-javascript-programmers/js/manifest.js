// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",            title: "Variables & Types",                 blurb: "let/const and dynamic typing → static types you must declare." },
  { n: 2,  file: "02-strings.html",                        title: "Strings",                           blurb: "Template literals → std::string concatenation and streams." },
  { n: 3,  file: "03-vectors.html",                        title: "Vectors",                           blurb: "Arrays with push/map → std::vector<T> and its API." },
  { n: 4,  file: "04-maps.html",                            title: "Maps",                               blurb: "Object/Map key-value pairs → std::map and std::unordered_map." },
  { n: 5,  file: "05-functions.html",                      title: "Functions",                         blurb: "Loosely-typed functions → signatures with fixed param/return types." },
  { n: 6,  file: "06-references-and-pointers.html",        title: "References & Pointers",             blurb: "Everything's a reference in JS → explicit &refs and *pointers in C++." },
  { n: 7,  file: "07-classes.html",                        title: "Classes",                           blurb: "class fields and methods → C++ classes with access specifiers." },
  { n: 8,  file: "08-constructors-and-raii.html",          title: "Constructors & RAII",               blurb: "GC cleans up eventually → destructors free resources deterministically." },
  { n: 9,  file: "09-operator-overloading.html",           title: "Operator Overloading",              blurb: "No custom +  for objects in JS → C++ lets you overload operators." },
  { n: 10, file: "10-inheritance-and-virtual.html",        title: "Inheritance & Virtual Functions",   blurb: "extends and prototype dispatch → virtual functions and vtables." },
  { n: 11, file: "11-templates.html",                      title: "Templates",                         blurb: "Functions just work on anything → templates instantiate per type." },
  { n: 12, file: "12-smart-pointers.html",                 title: "Smart Pointers",                    blurb: "GC-managed objects → unique_ptr/shared_ptr manage ownership by hand." },
  { n: 13, file: "13-stl-algorithms.html",                 title: "STL Algorithms",                    blurb: "Array.prototype methods → <algorithm> functions over iterators." },
  { n: 14, file: "14-lambdas.html",                        title: "Lambdas",                           blurb: "Arrow functions closing over scope → lambdas with explicit capture lists." },
  { n: 15, file: "15-enums-and-variant.html",               title: "Enums & Variant",                   blurb: "String unions and tagged objects → enum class and std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",        title: "Optional & Exceptions",              blurb: "undefined/null and try/catch → std::optional and typed exceptions." },
  { n: 17, file: "17-move-semantics.html",                 title: "Move Semantics",                    blurb: "Objects always copy by reference → C++ chooses between copy and move." },
  { n: 18, file: "18-tuples-and-structured-bindings.html", title: "Tuples & Structured Bindings",      blurb: "Array/object destructuring → std::tuple with structured bindings." },
  { n: 19, file: "19-iterators.html",                      title: "Iterators",                         blurb: "for...of and Symbol.iterator → begin()/end() iterator pairs." },
  { n: 20, file: "20-capstone.html",                        title: "Capstone",                          blurb: "Pull it together: a small project written the C++ way." },
];
