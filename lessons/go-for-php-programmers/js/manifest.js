// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",              blurb: "$name needs no declaration; Go is compiler-checked and won't compile an unused var." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                         blurb: "\"{$var}\" interpolation and . concat → + concat and fmt.Sprintf." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                          blurb: "Plain indexed array → a growable, typed slice with len and cap." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                            blurb: "Associative array → map[K]V with static key and value types." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                       blurb: "First-class functions carry over; Go adds multiple return values." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",               blurb: "class fields+methods split into a struct plus separate method funcs." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                        blurb: "PHP's implicit object handles / copy-on-write arrays → explicit *T." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                      blurb: "implements is gone — any type with the right methods satisfies it." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                          blurb: "throw/catch → an error return value the caller must check." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",           blurb: "No async/await in PHP core; Go ships goroutines and channels." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                        blurb: "mixed-and-hope containers → real type parameters checked at compile time." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                        blurb: "Works like PHP's use (&$var) by-reference capture, on by default." },
  { n: 13, file: "13-type-switches.html",               title: "Type Switches",                   blurb: "is_int()/gettype() chains → a switch on v.(type) with narrowing." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",          blurb: "try/finally and throw/catch → defer plus panic/recover." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",         blurb: "class Dog extends Animal → embedding a type with no field name." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                         blurb: "In-place sort()/usort() by reference → sort.Slice with a less func." },
  { n: 17, file: "17-json.html",                        title: "JSON",                            blurb: "json_decode's stdClass guessing → struct tags that fix the shape." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",        blurb: "Exception subclasses + instanceof → error types + errors.Is/As." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",          blurb: "__toString() → the same hook spelled as a String() string method." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                        blurb: "The class-wrapping-an-array store, rebuilt from Go's own pieces." },
];
