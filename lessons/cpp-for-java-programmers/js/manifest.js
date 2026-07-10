// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",            title: "Variables & Types",                  blurb: "int/double/String → int/double/std::string; no GC to lean on." },
  { n: 2,  file: "02-strings.html",                        title: "Strings",                            blurb: "Immutable String → mutable std::string, with owned char buffers." },
  { n: 3,  file: "03-vectors.html",                        title: "Vectors",                             blurb: "ArrayList<T> → std::vector<T>, minus the autoboxing." },
  { n: 4,  file: "04-maps.html",                           title: "Maps",                                blurb: "HashMap<K,V> → std::unordered_map<K,V>; iteration order shifts." },
  { n: 5,  file: "05-functions.html",                      title: "Functions",                           blurb: "Overloads still work, but pass-by-value now copies your objects." },
  { n: 6,  file: "06-references-and-pointers.html",        title: "References & Pointers",               blurb: "Java's implicit references → explicit &refs and raw *pointers." },
  { n: 7,  file: "07-classes.html",                        title: "Classes",                             blurb: "public/private fields plus a stack-vs-heap decision Java never asks." },
  { n: 8,  file: "08-constructors-and-raii.html",          title: "Constructors & RAII",                 blurb: "No finalizers or try-with-resources — destructors clean up on scope exit." },
  { n: 9,  file: "09-operator-overloading.html",           title: "Operator Overloading",                blurb: "compareTo/equals conventions → operator==, operator<, operator<<." },
  { n: 10, file: "10-inheritance-and-virtual.html",        title: "Inheritance & Virtual Functions",     blurb: "extends and @Override → : public and an explicit virtual keyword." },
  { n: 11, file: "11-templates.html",                      title: "Templates",                           blurb: "List<T> instincts transfer, but templates compile per-type, no erasure." },
  { n: 12, file: "12-smart-pointers.html",                 title: "Smart Pointers",                      blurb: "The GC's job, done by hand: unique_ptr and shared_ptr own memory." },
  { n: 13, file: "13-stl-algorithms.html",                 title: "STL Algorithms",                      blurb: "Stream().filter().map() → <algorithm> functions over iterator pairs." },
  { n: 14, file: "14-lambdas.html",                        title: "Lambdas",                             blurb: "Lambda syntax looks familiar; capture lists replace effectively-final." },
  { n: 15, file: "15-enums-and-variant.html",               title: "Enums & Variant",                     blurb: "Java's rich enum classes → plain enum class plus std::variant." },
  { n: 16, file: "16-optional-and-exceptions.html",        title: "Optional & Exceptions",               blurb: "Optional<T> carries over; checked exceptions don't — C++ has none." },
  { n: 17, file: "17-move-semantics.html",                 title: "Move Semantics",                      blurb: "A concept Java doesn't need: transferring ownership instead of copying." },
  { n: 18, file: "18-tuples-and-structured-bindings.html", title: "Tuples & Structured Bindings",        blurb: "No built-in Pair/Tuple in Java — std::tuple plus auto [a, b] unpacking." },
  { n: 19, file: "19-iterators.html",                      title: "Iterators",                           blurb: "Iterator<T>.hasNext()/next() → begin()/end() and pointer-like ++it." },
  { n: 20, file: "20-capstone.html",                       title: "Capstone",                            blurb: "A final project pulling ownership, templates, and STL together." },
];
