// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",              title: "Variables & Types",                blurb: "number splits into int/double/long; auto infers like let." },
  { n: 2,  file: "02-strings.html",                          title: "Strings",                          blurb: "Immutable string → mutable, owning std::string." },
  { n: 3,  file: "03-vectors.html",                          title: "Vectors",                          blurb: "Array<T> → std::vector<T>, one element type, fixed at compile time." },
  { n: 4,  file: "04-maps.html",                             title: "Maps",                              blurb: "Map/object → std::map (sorted) and std::unordered_map (hashed)." },
  { n: 5,  file: "05-functions.html",                        title: "Functions",                        blurb: "Free functions carry over, plus real compile-time overloading." },
  { n: 6,  file: "06-references-and-pointers.html",          title: "References & Pointers",            blurb: "One binding style splits into references and pointers." },
  { n: 7,  file: "07-classes.html",                          title: "Classes",                          blurb: "Public by default flips to private; you write public: yourself." },
  { n: 8,  file: "08-constructors-and-raii.html",            title: "Constructors & RAII",              blurb: "GC cleanup 'someday' → destructors that run at a precise moment." },
  { n: 9,  file: "09-operator-overloading.html",             title: "Operator Overloading",             blurb: ".equals()/.compareTo() → ==, <, + defined per type." },
  { n: 10, file: "10-inheritance-and-virtual.html",          title: "Inheritance & Virtual Functions",  blurb: "Always-virtual methods → dispatch is static unless marked virtual." },
  { n: 11, file: "11-templates.html",                        title: "Templates",                        blurb: "Erased generics → templates the compiler stamps out per type." },
  { n: 12, file: "12-smart-pointers.html",                   title: "Smart Pointers",                   blurb: "GC-owned objects → unique_ptr/shared_ptr own the delete for you." },
  { n: 13, file: "13-stl-algorithms.html",                   title: "STL Algorithms",                   blurb: ".filter/.map/.sort methods → free functions over iterator pairs." },
  { n: 14, file: "14-lambdas.html",                          title: "Lambdas",                          blurb: "Implicit closures → an explicit [=]/[&] capture list." },
  { n: 15, file: "15-enums-and-variant.html",                title: "Enums & Variant",                  blurb: "enum and tagged unions → enum class and std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",          title: "Optional & Exceptions",            blurb: "T | undefined and throw → std::optional<T> and real exceptions." },
  { n: 17, file: "17-move-semantics.html",                   title: "Move Semantics",                   blurb: "Copying a handle → deep-copying data, unless you std::move it." },
  { n: 18, file: "18-tuples-and-structured-bindings.html",   title: "Tuples & Structured Bindings",     blurb: "[string, number] destructuring → pair/tuple with structured bindings." },
  { n: 19, file: "19-iterators.html",                        title: "Iterators",                        blurb: "Invisible for..of protocol → explicit begin()/end() iterators." },
  { n: 20, file: "20-capstone.html",                         title: "Capstone",                         blurb: "Build an expression evaluator: classes, owned trees, error handling." },
];
