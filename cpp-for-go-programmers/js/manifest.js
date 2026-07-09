// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",             title: "Variables & Types",                    blurb: "var x int and := inference → explicit types, plus auto for the rest." },
  { n: 2,  file: "02-strings.html",                         title: "Strings",                              blurb: "Immutable UTF-8 string → mutable std::string with no built-in encoding smarts." },
  { n: 3,  file: "03-vectors.html",                         title: "Vectors",                              blurb: "Go's slice header (len/cap) → std::vector<T>, which manages growth for you." },
  { n: 4,  file: "04-maps.html",                            title: "Maps",                                 blurb: "v, ok := m[k] lookups → .find() iterators, no built-in comma-ok." },
  { n: 5,  file: "05-functions.html",                       title: "Functions",                            blurb: "Multiple return values → single return (or std::tuple), plus real overloading." },
  { n: 6,  file: "06-references-and-pointers.html",         title: "References & Pointers",                blurb: "Safe, GC'd *T → raw pointers and references, plus arithmetic and no GC." },
  { n: 7,  file: "07-classes.html",                         title: "Classes",                              blurb: "Structs with methods → classes with access specifiers and real constructors." },
  { n: 8,  file: "08-constructors-and-raii.html",           title: "Constructors & RAII",                  blurb: "Zero values and defer for cleanup → constructors and destructors that run automatically." },
  { n: 9,  file: "09-operator-overloading.html",            title: "Operator Overloading",                 blurb: "No operator overloading at all → operator+ and friends defined on your own types." },
  { n: 10, file: "10-inheritance-and-virtual.html",         title: "Inheritance & Virtual Functions",      blurb: "Struct embedding and interfaces → class inheritance and explicit virtual dispatch." },
  { n: 11, file: "11-templates.html",                       title: "Templates",                            blurb: "Go's generics with constraints → templates, compiled per instantiation." },
  { n: 12, file: "12-smart-pointers.html",                  title: "Smart Pointers",                       blurb: "GC does the cleanup → unique_ptr/shared_ptr make ownership explicit." },
  { n: 13, file: "13-stl-algorithms.html",                  title: "STL Algorithms",                       blurb: "Manual loops and the slices package → std::sort, std::find, and iterator-based algorithms." },
  { n: 14, file: "14-lambdas.html",                         title: "Lambdas",                              blurb: "func literals that just close over vars → lambdas with explicit [=]/[&] captures." },
  { n: 15, file: "15-enums-and-variant.html",               title: "Enums & Variant",                      blurb: "iota-based constants → enum class, plus std::variant for real sum types." },
  { n: 16, file: "16-optional-and-exceptions.html",         title: "Optional & Exceptions",                blurb: "error return values → std::optional, exceptions, and try/catch." },
  { n: 17, file: "17-move-semantics.html",                  title: "Move Semantics",                       blurb: "Values just get copied or GC'd → std::move and rvalue references matter." },
  { n: 18, file: "18-tuples-and-structured-bindings.html",  title: "Tuples & Structured Bindings",         blurb: "a, b := f() unpacking → structured bindings over std::tuple/std::pair." },
  { n: 19, file: "19-iterators.html",                       title: "Iterators",                            blurb: "range over slices and maps → begin()/end() iterator pairs, even for your own types." },
  { n: 20, file: "20-capstone.html",                        title: "Capstone",                             blurb: "Packages and go build → headers, translation units, and a final project." },
];
