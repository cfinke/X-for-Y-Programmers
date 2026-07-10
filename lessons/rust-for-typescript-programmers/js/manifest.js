// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-mutability.html",  title: "Variables, Mutability & Types",   blurb: "let is immutable, let mut opts in — the default you're used to, flipped." },
  { n: 2,  file: "02-functions-and-control-flow.html", title: "Functions & Control Flow",       blurb: "fn, -> return types, and if/match as expressions that produce values." },
  { n: 3,  file: "03-strings.html",                   title: "Strings: String & &str",          blurb: "Two string types, one rule: own with String, borrow with &str." },
  { n: 4,  file: "04-ownership.html",                 title: "Ownership & Moves",               blurb: "The big one: every value has exactly one owner, and assignment moves it." },
  { n: 5,  file: "05-borrowing.html",                 title: "Borrowing & References",          blurb: "& to look, &mut to touch — and never both at once." },
  { n: 6,  file: "06-vectors.html",                   title: "Vectors",                         blurb: "Vec<T>: the growable list, with mut required to change it." },
  { n: 7,  file: "07-hashmaps.html",                  title: "HashMaps",                        blurb: "HashMap<K, V>, the entry API, and .get() returning Option." },
  { n: 8,  file: "08-option.html",                    title: "Option: The End of Null",         blurb: "Absence is a type, not a crash — Some(x), None, and unwrap_or." },
  { n: 9,  file: "09-result-and-errors.html",         title: "Result & the ? Operator",         blurb: "Errors are values: Result<T, E>, match, and ? for propagation." },
  { n: 10, file: "10-structs-and-methods.html",       title: "Structs & Methods",               blurb: "struct for data, impl for behavior, fn new() by convention." },
  { n: 11, file: "11-enums-and-match.html",           title: "Enums & Pattern Matching",        blurb: "Enums that carry data, and match that must handle every case." },
  { n: 12, file: "12-traits.html",                    title: "Traits",                          blurb: "Shared behavior without inheritance — impl Trait for Type." },
  { n: 13, file: "13-generics.html",                  title: "Generics & Trait Bounds",         blurb: "fn largest<T: PartialOrd> — generics with capabilities spelled out." },
  { n: 14, file: "14-closures-and-iterators.html",    title: "Closures & Iterators",            blurb: ".iter().filter().map().collect() — lazy chains, paid once." },
  { n: 15, file: "15-slices-tuples-destructuring.html", title: "Slices, Tuples & Destructuring", blurb: "&[T] views, (i32, String) pairs, and let (a, b) unpacking." },
  { n: 16, file: "16-lifetimes.html",                 title: "Lifetimes: An Introduction",      blurb: "<'a> — naming how long borrows live, only when the compiler can't tell." },
  { n: 17, file: "17-derive-and-common-traits.html",  title: "Common Traits & Derive",          blurb: "#[derive(Debug, Clone, PartialEq)] — the boilerplate the compiler writes." },
  { n: 18, file: "18-modules.html",                   title: "Modules & Visibility",            blurb: "mod, pub, and use — privacy is the default." },
  { n: 19, file: "19-threads-and-channels.html",      title: "Threads & Channels",              blurb: "Real threads without data races — the compiler checks the sharing." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Structs, enums, traits, Option, and iterators — one final project." },
];
