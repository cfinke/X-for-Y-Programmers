// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "int/string/bool and var → number/string/boolean and let/const." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "$\"interpolation\" → `template literals` — nearly identical." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                  blurb: "int[] and List<int> collapse into number[]." },
  { n: 4,  file: "04-dictionaries-to-objects.html",   title: "Dictionaries → Objects",          blurb: "Dictionary<string, V> → Record<string, V> and object literals." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Optional params and named args → defaults and options objects." },
  { n: 6,  file: "06-nullable-types.html",            title: "Nullable Types",                  blurb: "string?, ?., and ?? carry over almost character for character." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "What C# does with overloads, TS does with int | string." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Nominal interfaces and records → structural shapes." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "Auto-properties and ctors → parameter properties and readonly." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "abstract/override → abstract, no virtual keyword needed." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "C# enums → TS string enums and literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "where T : constraint → T extends; reified vs erased." },
  { n: 13, file: "13-linq-to-array-methods.html",     title: "LINQ → Array Methods",            blurb: "Where/Select/Aggregate → filter/map/reduce." },
  { n: 14, file: "14-tuples-and-destructuring.html",  title: "Tuples & Destructuring",          blurb: "(int, string) and deconstruction → [number, string] and const [a, b]." },
  { n: 15, file: "15-spread-and-params.html",         title: "Spread & params",                 blurb: "params int[] → ...nums; with-expressions → object spread." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "is/as patterns → typeof, instanceof, and type predicates." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "switch expressions on records → tagged unions + never." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — DTO variants without the classes." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "Task<T> → Promise<T>; Task.WhenAll → Promise.all." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "namespaces/using → import/export, plus a final project." },
];
