// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",        title: "Variables & Types",              blurb: "let mut and strict typing → var/:= with no mut keyword." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                        blurb: "The String/&str ownership split collapses into one string type." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                         blurb: "Vec<T> and borrow-checked slices → slices with no ownership rules." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                           blurb: "HashMap<K, V> and the entry API → map[K]V and comma-ok lookups." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                      blurb: "No Result plumbing: functions just return (value, error)." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",              blurb: "impl blocks → methods declared anywhere with a receiver arg." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                       blurb: "&T/&mut T borrow checking → plain pointers, GC instead of a checker." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                     blurb: "impl Trait for Type → interfaces satisfied implicitly, no declaration." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                         blurb: "Result<T, E> and ? → explicit if err != nil after every call." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",          blurb: "async/await and Arc<Mutex<T>> → goroutines and channels built in." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                       blurb: "Rich trait-bound generics → a leaner type-parameter constraint system." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                       blurb: "Fn/FnMut/FnOnce traits → one closure form capturing by reference." },
  { n: 13, file: "13-type-switches.html",                title: "Type Switches",                  blurb: "match on enums → switch v := x.(type) over an interface value." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",         blurb: "Drop and RAII cleanup → explicit defer, panic, and recover calls." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",        blurb: "Composition-over-inheritance instincts carry over via struct embedding." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                        blurb: "Ord/PartialOrd impls → sort.Slice with an inline less function." },
  { n: 17, file: "17-json.html",                        title: "JSON",                           blurb: "serde derive macros → encoding/json and plain struct tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",       blurb: "thiserror enums and anyhow → %w wrapping with errors.Is/As." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",         blurb: "Display and Debug traits → the Stringer interface and fmt verbs." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                       blurb: "Rust idioms retired one by one, plus a final project to prove it." },
];
