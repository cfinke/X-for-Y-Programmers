// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "let/let mut → const/let; i32/f64 → number; String/&str → string." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "format!(\"{name}\") → `${name}`; one string type, no borrows." },
  { n: 3,  file: "03-vectors-to-arrays.html",         title: "Vectors → Arrays",                blurb: "Vec<i32> → number[]; push without mut (and why that's a gotcha)." },
  { n: 4,  file: "04-hashmaps-to-objects.html",       title: "HashMaps → Objects",              blurb: "HashMap.get's Option → obj[key]'s T | undefined; unwrap_or → ??." },
  { n: 5,  file: "05-functions-and-closures.html",    title: "Functions & Closures",            blurb: "|x| x * 2 → (x) => x * 2, plus the default params Rust lacks." },
  { n: 6,  file: "06-option-to-null.html",            title: "Option → Null & Undefined",       blurb: "Option<T> → T | null; both compilers force the check." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "The two-variant enum you'd write → number | string, inline." },
  { n: 8,  file: "08-traits-to-interfaces.html",      title: "Interfaces & Object Shapes",      blurb: "Traits and derives → structural interfaces, zero boilerplate." },
  { n: 9,  file: "09-structs-to-classes.html",        title: "Classes",                         blurb: "struct + impl + fn new() → one class; no borrow checker on this." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "Trait default methods → abstract classes; dyn Trait → base refs." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "C-like enums → TS enums and literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "fn first<T> → firstItem<T>; trait bounds → extends; erased, not monomorphized." },
  { n: 13, file: "13-iterators-to-array-methods.html", title: "Iterators → Array Methods",      blurb: ".iter().filter().map().collect() → .filter().map() — eager, no collect." },
  { n: 14, file: "14-tuples-and-destructuring.html",  title: "Tuples & Destructuring",          blurb: "(i32, String) and let (a, b) → [number, string] and const [a, b]." },
  { n: 15, file: "15-spread-and-struct-update.html",  title: "Spread & Rest",                   blurb: "Point { x: 1, ..old } → { ...old, x: 1 } — the dots switch sides." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "match/if let instincts → typeof, instanceof, and type predicates." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Data-carrying enums + match, rebuilt with kind fields + never." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "The derives Rust doesn't have: Partial, Pick, Omit, Readonly." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: ".await → await; join! → Promise.all; promises are eager, not lazy." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "mod/use/pub → import/export, plus a final project." },
];
