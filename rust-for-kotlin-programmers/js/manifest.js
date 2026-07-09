// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-mutability.html",  title: "Variables, Mutability & Types",   blurb: "let/let mut is Kotlin's val/var — the immutable default you already prefer." },
  { n: 2,  file: "02-functions-and-control-flow.html", title: "Functions & Control Flow",       blurb: "fn replaces fun, and match joins if as an expression like Kotlin's when." },
  { n: 3,  file: "03-strings.html",                   title: "Strings: String & &str",          blurb: "Kotlin's one String splits in two: own with String, borrow with &str." },
  { n: 4,  file: "04-ownership.html",                 title: "Ownership & Moves",               blurb: "No GC: every value has one owner, and assignment moves it away." },
  { n: 5,  file: "05-borrowing.html",                 title: "Borrowing & References",          blurb: "References you pass freely in Kotlin gain rules: & to look, &mut to touch." },
  { n: 6,  file: "06-vectors.html",                   title: "Vectors",                         blurb: "Vec<T> is your MutableList — but mut is required to change it." },
  { n: 7,  file: "07-hashmaps.html",                  title: "HashMaps",                        blurb: "HashMap<K, V>, the entry API, and .get() returning Option, not null." },
  { n: 8,  file: "08-option.html",                    title: "Option: The End of Null",         blurb: "Kotlin's T? becomes Option<T> — Some(x), None, and unwrap_or." },
  { n: 9,  file: "09-result-and-errors.html",         title: "Result & the ? Operator",         blurb: "Errors are values, not exceptions: Result<T, E>, match, and ?." },
  { n: 10, file: "10-structs-and-methods.html",       title: "Structs & Methods",               blurb: "struct holds the data a data class would, with impl for behavior." },
  { n: 11, file: "11-enums-and-match.html",           title: "Enums & Pattern Matching",        blurb: "Sealed classes become enums, and when becomes exhaustive match." },
  { n: 12, file: "12-traits.html",                    title: "Traits",                          blurb: "Like interfaces plus extension functions — impl Trait for Type." },
  { n: 13, file: "13-generics.html",                  title: "Generics & Trait Bounds",         blurb: "fn largest<T: PartialOrd> — Kotlin's <T : Comparable> bounds, spelled Rust." },
  { n: 14, file: "14-closures-and-iterators.html",    title: "Closures & Iterators",            blurb: ".iter().filter().map().collect() — Kotlin's Sequence, made explicit." },
  { n: 15, file: "15-slices-tuples-destructuring.html", title: "Slices, Tuples & Destructuring", blurb: "&[T] views, (i32, String) beyond Pair, and let (a, b) unpacking." },
  { n: 16, file: "16-lifetimes.html",                 title: "Lifetimes: An Introduction",      blurb: "<'a> — naming how long borrows live, a chore your GC handled for you." },
  { n: 17, file: "17-derive-and-common-traits.html",  title: "Common Traits & Derive",          blurb: "#[derive(Debug, Clone, PartialEq)] — the freebies a data class gave you." },
  { n: 18, file: "18-modules.html",                   title: "Modules & Visibility",            blurb: "mod, pub, and use — private is the default, no internal needed." },
  { n: 19, file: "19-threads-and-channels.html",      title: "Threads & Channels",              blurb: "Real threads without data races — no coroutines, the compiler checks sharing." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Structs, enums, traits, Option, and iterators — one final project." },
];
