// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "From duck-typed variables to annotated let/const; CONSTANTS become const." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "\"#{name}\" → `${name}`; upcase → toUpperCase; include? → includes." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                          blurb: "arr << x → push; typed number[] instead of anything-goes." },
  { n: 4,  file: "04-hashes-to-objects.html",         title: "Hashes → Objects",                blurb: "{ name: \"Ada\" } syntax carries over; fetch defaults → ??." },
  { n: 5,  file: "05-methods-to-functions.html",      title: "Methods → Functions",             blurb: "Keyword args → options objects; implicit return becomes explicit." },
  { n: 6,  file: "06-nil-null-undefined.html",        title: "Nil, Null & Undefined",           blurb: "One nil becomes two; &. is ?. and the compiler forces the check." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "What respond_to? guessed at, number | string declares." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Duck typing formalized — shapes checked before the code runs." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "attr_accessor and @ivars → parameter properties and real private." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "< Shape → extends Shape; NotImplementedError → abstract, checked early." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "Symbols like :pending → literal unions \"pending\" | \"shipped\"." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "The type info duck typing drops, <T> keeps." },
  { n: 13, file: "13-enumerable-to-array-methods.html", title: "Enumerable → Array Methods",    blurb: "map/select/reduce → map/filter/reduce; sort_by → sort comparator." },
  { n: 14, file: "14-destructuring.html",             title: "Destructuring",                   blurb: "a, b = pair carries over; objects get destructuring too." },
  { n: 15, file: "15-splat-and-spread.html",          title: "Splat & Spread",                  blurb: "*args and **opts → ...rest and object spread." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "is_a? → typeof/instanceof, plus custom type predicates." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "case/in pattern matching → tagged unions the compiler exhausts." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Hash#slice/#except → Pick/Omit; merge → Partial + spread." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "From blocking Ruby and Threads to Promises and async/await." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "require/module → import/export, plus a final project." },
];
