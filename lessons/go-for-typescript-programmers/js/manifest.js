// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "let/const and inference → var with := and explicit static types." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                        blurb: "Template literals → fmt.Sprintf and byte-based rune indexing." },
  { n: 3,  file: "03-slices.html",                    title: "Slices",                         blurb: "Array<T> methods → slices, append, and len/cap semantics." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                            blurb: "Record<K, V> and Map → map[K]V with the comma-ok idiom." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Arrows and overloads → named returns and multiple return values." },
  { n: 6,  file: "06-structs-and-methods.html",       title: "Structs & Methods",               blurb: "Classes with methods → structs with receiver functions." },
  { n: 7,  file: "07-pointers.html",                  title: "Pointers",                        blurb: "Objects-are-references implicitly → explicit *T and &value." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                      blurb: "Structural typing carries over, but satisfaction is implicit too." },
  { n: 9,  file: "09-errors.html",                    title: "Errors",                          blurb: "try/catch and throw → returned error values you check inline." },
  { n: 10, file: "10-goroutines-and-channels.html",   title: "Goroutines & Channels",           blurb: "async/await on one thread → goroutines and channels across many." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                        blurb: "<T> constraints translate, minus the structural inference tricks." },
  { n: 12, file: "12-closures.html",                  title: "Closures",                        blurb: "Same lexical capture you already know, now over typed vars." },
  { n: 13, file: "13-type-switches.html",              title: "Type Switches",                   blurb: "Discriminated unions with switch → type switches on interface{}." },
  { n: 14, file: "14-defer-panic-recover.html",        title: "Defer, Panic & Recover",          blurb: "finally and throw/catch → defer, panic, and recover." },
  { n: 15, file: "15-embedding.html",                  title: "Embedding & Composition",         blurb: "extends and mixins → struct embedding for composition." },
  { n: 16, file: "16-sorting.html",                    title: "Sorting",                         blurb: "Array.sort(comparator) → sort.Slice and the Less/Swap interface." },
  { n: 17, file: "17-json.html",                       title: "JSON",                            blurb: "JSON.parse/stringify → encoding/json with struct tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html", title: "Custom Errors & Wrapping",        blurb: "Custom Error subclasses → error types with errors.Is/As wrapping." },
  { n: 19, file: "19-stringers-and-formatting.html",   title: "Stringers & Formatting",          blurb: "toString() overrides → the String() Stringer interface." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                        blurb: "Everything comes together in one final Go project." },
];
