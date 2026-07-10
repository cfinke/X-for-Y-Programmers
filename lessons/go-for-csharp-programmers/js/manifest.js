// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",        title: "Variables & Types",             blurb: "var/int/string → :=, Go's zero values instead of null defaults." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                       blurb: "$\"...\" interpolation and string.Format → fmt.Sprintf, no built-in interpolation." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                        blurb: "List<T> and arrays → slices, a resizable view over an array." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                          blurb: "Dictionary<K,V> → map[K]V; TryGetValue → the comma-ok idiom." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                     blurb: "Overloading and out params → single signatures with multiple return values." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",             blurb: "Classes and methods → structs with separate receiver methods." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                      blurb: "ref/out and boxing → explicit *T pointers, no hidden indirection." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                    blurb: "Explicit : IFoo → implicit, structural interface satisfaction." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                        blurb: "try/catch exceptions → error return values checked with if err != nil." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",         blurb: "Task, async/await, lock → goroutines and channels for concurrency." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                      blurb: "Generic<T> and constraints → type parameters with constraint interfaces." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                      blurb: "Lambdas capturing variables → func literals that close over them too." },
  { n: 13, file: "13-type-switches.html",                title: "Type Switches",                 blurb: "switch on pattern-matched types → type switch on interface{} values." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",        blurb: "try/finally and exceptions → defer, panic, and recover." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",       blurb: "Class inheritance → struct embedding, composition over inheritance." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                       blurb: "IComparable and LINQ OrderBy → sort.Slice and sort.Interface." },
  { n: 17, file: "17-json.html",                        title: "JSON",                          blurb: "System.Text.Json attributes → encoding/json struct tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",      blurb: "Custom exception types → error values, %w wrapping, errors.Is/As." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",        blurb: "ToString() override → a String() method satisfying fmt.Stringer." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                      blurb: "All of it together: a final project built the idiomatic Go way." },
];
