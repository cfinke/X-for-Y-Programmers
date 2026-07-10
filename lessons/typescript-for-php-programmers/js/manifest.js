// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "From $dynamic variables to annotated let/const." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "From \"Hello $name\" to template literals." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                          blurb: "From PHP indexed arrays to typed arrays." },
  { n: 4,  file: "04-associative-arrays-to-objects.html", title: "Associative Arrays → Objects", blurb: "From ['key' => $value] to typed objects and Record." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Type hints, return types, default and optional params." },
  { n: 6,  file: "06-null-and-undefined.html",        title: "Null & Undefined",                blurb: "From isset() and ?? to strict null checking." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "From mixed and int|string to first-class unions." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "From docblock array shapes to interface contracts." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "Constructors, visibility, and property promotion." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "extends, implements, and abstract members." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "From PHP 8.1 enums to TS enums and string literals." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "From mixed-and-hope to parameterized types." },
  { n: 13, file: "13-array-functions.html",           title: "Array Functions",                 blurb: "array_map/filter/reduce → .map/.filter/.reduce." },
  { n: 14, file: "14-destructuring.html",             title: "Destructuring",                   blurb: "From list() and manual unpacking to { } and [ ]." },
  { n: 15, file: "15-spread-and-rest.html",           title: "Spread & Rest",                   blurb: "array_merge and variadics → the ... operator." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "is_string/instanceof → typeof, in, and custom guards." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "From type-field switches to compiler-checked variants." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit, Readonly — types from types." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "From blocking PHP calls to Promises and async/await." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "require/include → import/export, plus a final project." },
];
