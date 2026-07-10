// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",           title: "Variables & Types",                blurb: "No declarations, duck typing → static types you must spell out." },
  { n: 2,  file: "02-strings.html",                       title: "Strings",                          blurb: "Interpolation with #{} → std::string, streams, and concatenation." },
  { n: 3,  file: "03-vectors.html",                       title: "Vectors",                          blurb: "Array, no type worries → std::vector<T>, one element type." },
  { n: 4,  file: "04-maps.html",                          title: "Maps",                             blurb: "Hash with any key → std::map/unordered_map, typed keys and values." },
  { n: 5,  file: "05-functions.html",                     title: "Functions",                        blurb: "def with implicit return, blocks → typed signatures, explicit return." },
  { n: 6,  file: "06-references-and-pointers.html",       title: "References & Pointers",            blurb: "Everything's a reference → explicit &, *, and pointer arithmetic." },
  { n: 7,  file: "07-classes.html",                       title: "Classes",                          blurb: "attr_accessor, reopenable classes → public/private sections, sealed at compile time." },
  { n: 8,  file: "08-constructors-and-raii.html",         title: "Constructors & RAII",              blurb: "initialize plus a garbage collector → constructors, destructors, and RAII cleanup." },
  { n: 9,  file: "09-operator-overloading.html",          title: "Operator Overloading",             blurb: "def +(other) on any object → operator+ overloads with explicit types." },
  { n: 10, file: "10-inheritance-and-virtual.html",       title: "Inheritance & Virtual Functions",  blurb: "Single inheritance plus mixins → virtual/override and true multiple inheritance." },
  { n: 11, file: "11-templates.html",                     title: "Templates",                        blurb: "Duck typing at runtime → templates checked and instantiated at compile time." },
  { n: 12, file: "12-smart-pointers.html",                title: "Smart Pointers",                   blurb: "GC frees objects for you → unique_ptr/shared_ptr make ownership explicit." },
  { n: 13, file: "13-stl-algorithms.html",                title: "STL Algorithms",                   blurb: "Enumerable's map/select/reduce → <algorithm> functions over iterator pairs." },
  { n: 14, file: "14-lambdas.html",                       title: "Lambdas",                          blurb: "Blocks, procs, and lambdas → one syntax: [capture](args){body}." },
  { n: 15, file: "15-enums-and-variant.html",              title: "Enums & Variant",                  blurb: "Symbols as lightweight tags → enum class and type-safe std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",       title: "Optional & Exceptions",            blurb: "nil and begin/rescue → std::optional and try/catch with typed exceptions." },
  { n: 17, file: "17-move-semantics.html",                title: "Move Semantics",                   blurb: "No ownership to transfer → move constructors, std::move, and stolen resources." },
  { n: 18, file: "18-tuples-and-structured-bindings.html", title: "Tuples & Structured Bindings",     blurb: "a, b = 1, 2 multiple assignment → std::tuple and structured bindings." },
  { n: 19, file: "19-iterators.html",                     title: "Iterators",                        blurb: "each and Enumerable mixins → iterator objects, begin()/end(), and ranges." },
  { n: 20, file: "20-capstone.html",                      title: "Capstone",                         blurb: "Bringing it together — a Ruby script's logic, rebuilt as compiled C++." },
];
