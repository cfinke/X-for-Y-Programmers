// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "x := 36 → let x = 36; int/float64 collapse into number." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "fmt.Sprintf → template literals; strings.ToUpper(s) → s.toUpperCase()." },
  { n: 3,  file: "03-slices-to-arrays.html",          title: "Slices → Arrays",                 blurb: "append(s, x) reassignment → s.push(x); no len/cap bookkeeping." },
  { n: 4,  file: "04-maps-to-objects.html",           title: "Maps → Objects",                  blurb: "map[string]int and comma-ok → Record<string, number> and ??." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Multiple returns → tuples; and TS has the default params Go refused." },
  { n: 6,  file: "06-nil-and-zero-values.html",       title: "Nil & Undefined",                 blurb: "Zero values → explicit undefined the compiler makes you handle." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "interface{} plus type switch → number | string plus typeof." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Implicit satisfaction survives — now for data shapes, not just methods." },
  { n: 9,  file: "09-structs-to-classes.html",        title: "Structs → Classes",               blurb: "Method receivers and NewFoo() → methods and constructors." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "Embedding → extends; abstract methods the compiler enforces." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "iota const blocks → enums and literal unions with real checking." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "[T any] → <T>; constraint interfaces → extends." },
  { n: 13, file: "13-loops-to-array-methods.html",    title: "For Loops → Array Methods",       blurb: "The append-in-a-loop pattern → map/filter/reduce chains." },
  { n: 14, file: "14-tuples-and-destructuring.html",  title: "Tuples & Destructuring",          blurb: "val, err := f() → const [val, err]; swap works the same way." },
  { n: 15, file: "15-variadics-and-spread.html",      title: "Spread & Rest",                   blurb: "nums ...int and s... → ...nums and [...a, ...b] — same dots." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "x.(string) assertions → typeof checks that can't panic." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Kind-field structs → tagged unions with exhaustive switch." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — the struct variants you stop hand-writing." },
  { n: 19, file: "19-goroutines-to-promises.html",    title: "Async & Promises",                blurb: "Goroutines and channels → one event loop, Promise.all, no mutexes." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "Capitalized-is-public → the export keyword, plus a final project." },
];
