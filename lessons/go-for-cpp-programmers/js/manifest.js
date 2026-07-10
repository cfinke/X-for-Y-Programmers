// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",             blurb: "int/double/auto → int/float64 and :=, with no header/source split." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                       blurb: "std::string mutation → immutable strings and byte/rune slices." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                        blurb: "std::vector<T> → slices, with append() instead of push_back." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                          blurb: "std::unordered_map → built-in map[K]V, comma-ok instead of .find()." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                     blurb: "Overloading and default args → single signatures, multiple returns." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",             blurb: "Classes with member functions → structs with separate method receivers." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                      blurb: "Raw pointers and references → Go's GC'd pointers, no delete." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                    blurb: "Virtual base classes → implicit, structural interface satisfaction." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                        blurb: "try/catch/throw → returned error values checked with if err != nil." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",         blurb: "std::thread and mutexes → goroutines and channels for communication." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                      blurb: "Templates and instantiation → type parameters with constraints." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                      blurb: "Lambda capture lists ([&], [=]) → closures that just capture by reference." },
  { n: 13, file: "13-type-switches.html",               title: "Type Switches",                 blurb: "dynamic_cast and RTTI → switch v := x.(type) on interface values." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",        blurb: "RAII destructors → explicit defer; exceptions → panic/recover." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",       blurb: "Multiple inheritance → struct embedding and promoted methods." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                       blurb: "std::sort with comparators → sort.Slice and the sort.Interface trio." },
  { n: 17, file: "17-json.html",                        title: "JSON",                          blurb: "Hand-rolled parsing or nlohmann::json → struct tags and encoding/json." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",      blurb: "Custom exception hierarchies → error types plus %w wrapping and errors.Is." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",        blurb: "operator<< overloads → the String() method and fmt verbs." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                      blurb: "Putting it together: a small project built the Go way." },
];
