// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",        title: "Variables & Types",             blurb: "let/const and dynamic typing → var, :=, and a static type on every value." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                       blurb: "Template literals and UTF-16 → byte-backed strings, runes, and fmt.Sprintf." },
  { n: 3,  file: "03-slices.html",                     title: "Slices",                        blurb: "push/splice on dynamic arrays → slices with len, cap, and append." },
  { n: 4,  file: "04-maps.html",                       title: "Maps",                          blurb: "Object and Map lookups → map[K]V with the comma-ok idiom." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                     blurb: "Arrows and default params → named returns, no overloads, no closures over this." },
  { n: 6,  file: "06-structs-and-methods.html",        title: "Structs & Methods",             blurb: "Classes with methods → structs plus functions with a receiver." },
  { n: 7,  file: "07-pointers.html",                   title: "Pointers",                      blurb: "Objects are references everywhere → Go makes that choice explicit with *T and &." },
  { n: 8,  file: "08-interfaces.html",                 title: "Interfaces",                    blurb: "Duck typing at runtime → interfaces satisfied implicitly at compile time." },
  { n: 9,  file: "09-errors.html",                     title: "Errors",                        blurb: "throw/try/catch → errors as ordinary return values you check with if err != nil." },
  { n: 10, file: "10-goroutines-and-channels.html",    title: "Goroutines & Channels",         blurb: "async/await over one event loop → goroutines talking through channels." },
  { n: 11, file: "11-generics.html",                   title: "Generics",                      blurb: "Duck-typed functions that work on anything → explicit type parameters and constraints." },
  { n: 12, file: "12-closures.html",                   title: "Closures",                      blurb: "Same trick, different plumbing: functions still capture variables, just with Go's scoping rules." },
  { n: 13, file: "13-type-switches.html",               title: "Type Switches",                 blurb: "typeof/instanceof chains → switch v := x.(type) on an interface value." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",        blurb: "finally and throw/catch → defer for cleanup, panic/recover for the truly exceptional." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",       blurb: "Prototypal inheritance and mixins → struct embedding for composition, not subclassing." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                       blurb: "Array.prototype.sort(comparator) → sort.Slice and the sort.Interface trio." },
  { n: 17, file: "17-json.html",                        title: "JSON",                          blurb: "JSON.parse/stringify on any value → encoding/json driven by struct tags." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",      blurb: "extends Error subclasses → wrapped errors with %w, errors.Is, and errors.As." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",        blurb: "toString() and template literals → the Stringer interface and fmt's verbs." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                      blurb: "Put it all together: types, errors, goroutines, and interfaces in one project." },
];
