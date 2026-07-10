// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",              blurb: "Duck-typed and mutable → static, explicit, and := inferred." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                         blurb: "Mutable String objects → immutable []byte-backed strings." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                          blurb: "Array#push and friends → append() and slice re-slicing." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                             blurb: "Hash literals and symbols → map[K]V and comma-ok lookups." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                       blurb: "Blocks and procs → multiple return values, no implicit return." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",               blurb: "class with attr_accessor → struct plus explicit receivers." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                        blurb: "Everything's a reference in Ruby; Go makes value vs *ptr explicit." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                      blurb: "Duck typing by convention → interfaces satisfied implicitly." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                          blurb: "raise/rescue exceptions → returned error values you check." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",           blurb: "Threads/Fibers and Queue → goroutines and channels, built in." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                        blurb: "Duck typing skips this; Go adds compile-time type parameters." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                        blurb: "Procs and lambdas → func literals that capture by reference." },
  { n: 13, file: "13-type-switches.html",               title: "Type Switches",                   blurb: "case obj; when String → switch v := x.(type) on interfaces." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",          blurb: "ensure and raise → defer for cleanup, panic/recover for the rare case." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",         blurb: "Modules and include → struct embedding for method promotion." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                         blurb: "sort_by with a block → sort.Slice with an explicit less func." },
  { n: 17, file: "17-json.html",                        title: "JSON",                             blurb: "JSON.parse/to_json → encoding/json and struct tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",        blurb: "Custom exception classes → error types plus fmt.Errorf(\"%w\")." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",          blurb: "to_s and inspect → the Stringer interface and fmt verbs." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                        blurb: "Pull it all together in a final Go project." },
];
