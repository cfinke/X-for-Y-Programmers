// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",             blurb: "Dynamic, duck-typed values → static types with var and :=." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                       blurb: "Mutable-feeling str and f-strings → immutable, byte-backed strings." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                        blurb: "list and its slicing syntax → slices, append(), and capacity." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                          blurb: "dict → map[K]V, with comma-ok lookups instead of KeyError." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                     blurb: "*args/**kwargs and defaults → multiple returns, no overloading." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",             blurb: "class and self → struct plus an explicit method receiver." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                      blurb: "Everything's-a-reference → explicit *T and & you choose yourself." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                    blurb: "Runtime duck typing → structural interfaces checked at compile time." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                        blurb: "try/except → error as an ordinary, explicitly checked return value." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",         blurb: "threading/asyncio → goroutines and channels, CSP-style concurrency." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                      blurb: "Duck typing again → type parameters with explicit constraints." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                      blurb: "Familiar lexical scoping, minus list comprehensions and nonlocal." },
  { n: 13, file: "13-type-switches.html",                title: "Type Switches",                 blurb: "isinstance() chains → a switch on a type-asserted interface value." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",        blurb: "try/finally and exceptions → defer, plus panic/recover." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",       blurb: "Class inheritance → struct embedding, favoring composition over is-a." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                       blurb: "sorted(key=...) → sort.Slice with a hand-written less function." },
  { n: 17, file: "17-json.html",                        title: "JSON",                          blurb: "json.dumps/loads → encoding/json driven by struct field tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",      blurb: "Custom Exception subclasses → the error interface, %w, and errors.Is/As." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",        blurb: "__str__/__repr__ → the Stringer interface and fmt's verbs." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                      blurb: "Pulling it all together: a small project built the Go way." },
];
