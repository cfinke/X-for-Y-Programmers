// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",           title: "Variables & Types",              blurb: "var and the GC's value/ref split → auto, static types, and the stack." },
  { n: 2,  file: "02-strings.html",                       title: "Strings",                        blurb: "Immutable string → mutable std::string with its own buffer." },
  { n: 3,  file: "03-vectors.html",                       title: "Vectors",                        blurb: "List<T> → std::vector<T>, minus the garbage collector." },
  { n: 4,  file: "04-maps.html",                          title: "Maps",                           blurb: "Dictionary<K,V> → std::map / std::unordered_map." },
  { n: 5,  file: "05-functions.html",                     title: "Functions",                      blurb: "Methods and overloads → free functions and default arguments." },
  { n: 6,  file: "06-references-and-pointers.html",       title: "References & Pointers",          blurb: "ref/out and managed refs → C++'s &, *, and real pointer arithmetic." },
  { n: 7,  file: "07-classes.html",                       title: "Classes",                        blurb: "Classes are always heap objects in C#; in C++ they're value types by default." },
  { n: 8,  file: "08-constructors-and-raii.html",         title: "Constructors & RAII",            blurb: "using/IDisposable → destructors and RAII doing cleanup automatically." },
  { n: 9,  file: "09-operator-overloading.html",          title: "Operator Overloading",           blurb: "operator+ syntax carries over; C++ adds <<, ->, and more to overload." },
  { n: 10, file: "10-inheritance-and-virtual.html",       title: "Inheritance & Virtual Functions", blurb: "virtual/override by default → C++ requires opting in to each explicitly." },
  { n: 11, file: "11-templates.html",                     title: "Templates",                      blurb: "Generics are runtime constructs; templates are compiled per type." },
  { n: 12, file: "12-smart-pointers.html",                title: "Smart Pointers",                 blurb: "No GC to lean on: unique_ptr and shared_ptr manage lifetime by hand." },
  { n: 13, file: "13-stl-algorithms.html",                title: "STL Algorithms",                 blurb: "LINQ's .Where().Select() → <algorithm> functions over iterators." },
  { n: 14, file: "14-lambdas.html",                       title: "Lambdas",                        blurb: "Lambdas close over variables implicitly; C++ makes you spell out captures." },
  { n: 15, file: "15-enums-and-variant.html",             title: "Enums & Variant",                blurb: "Named ints → enum class, plus std::variant for real tagged unions." },
  { n: 16, file: "16-optional-and-exceptions.html",       title: "Optional & Exceptions",          blurb: "Nullable<T> and exceptions → std::optional and C++'s own throw/catch." },
  { n: 17, file: "17-move-semantics.html",                title: "Move Semantics",                 blurb: "A concept the GC hides entirely: move constructors, std::move, rvalue refs." },
  { n: 18, file: "18-tuples-and-structured-bindings.html", title: "Tuples & Structured Bindings",  blurb: "Tuple deconstruction → std::tuple with structured bindings." },
  { n: 19, file: "19-iterators.html",                     title: "Iterators",                      blurb: "IEnumerable and yield → begin()/end() iterator pairs and ranges." },
  { n: 20, file: "20-capstone.html",                      title: "Capstone",                       blurb: "A final project pulling ownership, templates, and the STL together." },
];
