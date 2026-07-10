// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",             title: "Variables & Types",                 blurb: "Loose $vars everywhere → declared, statically-typed int/double/std::string." },
  { n: 2,  file: "02-strings.html",                         title: "Strings",                           blurb: "Mutable interpolated $str.\"..\" → std::string, concatenation, and streams." },
  { n: 3,  file: "03-vectors.html",                         title: "Vectors",                           blurb: "The all-purpose PHP array → std::vector<T> with a fixed element type." },
  { n: 4,  file: "04-maps.html",                             title: "Maps",                              blurb: "Same array doing key-value duty → std::map/unordered_map<K, V>." },
  { n: 5,  file: "05-functions.html",                       title: "Functions",                         blurb: "function foo($x) with loose types → signatures with real parameter types." },
  { n: 6,  file: "06-references-and-pointers.html",         title: "References & Pointers",             blurb: "PHP's &$ref hints at what & and * make explicit and unavoidable." },
  { n: 7,  file: "07-classes.html",                          title: "Classes",                           blurb: "class with public/private → the same idea, but sizes and layout matter." },
  { n: 8,  file: "08-constructors-and-raii.html",            title: "Constructors & RAII",               blurb: "__construct/__destruct → constructors plus deterministic destructors (RAII)." },
  { n: 9,  file: "09-operator-overloading.html",             title: "Operator Overloading",              blurb: "No operator overloading in PHP → operator+ and friends defined on your types." },
  { n: 10, file: "10-inheritance-and-virtual.html",          title: "Inheritance & Virtual Functions",   blurb: "extends and public functions → virtual dispatch you must opt into." },
  { n: 11, file: "11-templates.html",                        title: "Templates",                         blurb: "Duck-typed functions that work on anything → templates, checked at compile time." },
  { n: 12, file: "12-smart-pointers.html",                   title: "Smart Pointers",                    blurb: "Refcounted objects with a garbage collector → unique_ptr/shared_ptr doing it by hand." },
  { n: 13, file: "13-stl-algorithms.html",                   title: "STL Algorithms",                    blurb: "array_map/array_filter/usort → <algorithm>'s transform, copy_if, and sort." },
  { n: 14, file: "14-lambdas.html",                          title: "Lambdas",                           blurb: "function() use ($x) closures → [x] capture lists on C++ lambdas." },
  { n: 15, file: "15-enums-and-variant.html",                title: "Enums & Variant",                   blurb: "PHP 8.1 enums and loose unions → scoped enum class and std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",          title: "Optional & Exceptions",             blurb: "null-return and try/catch → std::optional<T> plus typed exceptions." },
  { n: 17, file: "17-move-semantics.html",                   title: "Move Semantics",                    blurb: "Copy-on-write arrays under the hood → explicit moves and std::move." },
  { n: 18, file: "18-tuples-and-structured-bindings.html",   title: "Tuples & Structured Bindings",      blurb: "list() destructuring an array → std::tie and structured bindings on a tuple." },
  { n: 19, file: "19-iterators.html",                        title: "Iterators",                         blurb: "Iterator interface and foreach → begin()/end() and the iterator protocol." },
  { n: 20, file: "20-capstone.html",                         title: "Capstone",                          blurb: "Pulling it together: a small project built the C++ way, not the PHP way." },
];
