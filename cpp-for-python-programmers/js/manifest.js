// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",                blurb: "x = 5, dynamic typing → int x = 5; the compiler wants types up front." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                          blurb: "str and f-strings → std::string, + concatenation, no built-in interpolation." },
  { n: 3,  file: "03-vectors.html",                     title: "Vectors",                          blurb: "list → std::vector<T>; .append() becomes .push_back(), now typed." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                             blurb: "dict → std::map / unordered_map, with lookup and iteration syntax to match." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                        blurb: "def with default args → overloads and defaults, all type-checked." },
  { n: 6,  file: "06-references-and-pointers.html",     title: "References & Pointers",            blurb: "Everything's a reference in Python; C++ makes you choose value, &, or *." },
  { n: 7,  file: "07-classes.html",                     title: "Classes",                          blurb: "self and __init__ → explicit this and constructors you declare yourself." },
  { n: 8,  file: "08-constructors-and-raii.html",       title: "Constructors & RAII",              blurb: "__init__/__del__ and context managers → constructors, destructors, RAII." },
  { n: 9,  file: "09-operator-overloading.html",        title: "Operator Overloading",             blurb: "__add__ and friends → operator+ overloads, declared explicitly." },
  { n: 10, file: "10-inheritance-and-virtual.html",     title: "Inheritance & Virtual Functions",  blurb: "Duck-typed polymorphism → virtual, override, and vtables." },
  { n: 11, file: "11-templates.html",                   title: "Templates",                        blurb: "Duck typing at call time → templates checked (mostly) at compile time." },
  { n: 12, file: "12-smart-pointers.html",               title: "Smart Pointers",                   blurb: "Reference-counted GC → unique_ptr and shared_ptr make ownership explicit." },
  { n: 13, file: "13-stl-algorithms.html",               title: "STL Algorithms",                   blurb: "List comprehensions and itertools → <algorithm> and iterator pairs." },
  { n: 14, file: "14-lambdas.html",                      title: "Lambdas",                          blurb: "lambda x: ... → [captures](params){ ... }, with explicit capture lists." },
  { n: 15, file: "15-enums-and-variant.html",            title: "Enums & Variant",                  blurb: "Enum and Union types → enum class and std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",      title: "Optional & Exceptions",            blurb: "None checks and try/except → std::optional and C++ exceptions." },
  { n: 17, file: "17-move-semantics.html",               title: "Move Semantics",                   blurb: "No copies to think about in Python → move vs copy is now your call." },
  { n: 18, file: "18-tuples-and-structured-bindings.html", title: "Tuples & Structured Bindings",   blurb: "Tuple unpacking → std::tuple with structured bindings (C++17)." },
  { n: 19, file: "19-iterators.html",                    title: "Iterators",                        blurb: "for x in obj → begin()/end() and the iterator protocol made explicit." },
  { n: 20, file: "20-capstone.html",                     title: "Capstone",                         blurb: "Put it together: types, RAII, templates, and STL in one project." },
];
