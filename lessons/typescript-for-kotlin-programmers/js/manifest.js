// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "Int/Double/String → number/string; val/var → const/let." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "Kotlin's $-templates → ${} template literals." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                  blurb: "Array<Int> and MutableList<Int> collapse into number[]." },
  { n: 4,  file: "04-maps-to-objects.html",           title: "Maps → Objects",                  blurb: "mutableMapOf<String, V> → Record<string, V> and object literals." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Top-level functions, lambdas → arrows, defaults carry over." },
  { n: 6,  file: "06-null-and-optional.html",         title: "Null & Optional",                 blurb: "Kotlin's String? and ?: → string | null, ?., and ??." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "What Kotlin does with overloads, TS does with number | string." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Nominal interfaces → structural shapes, no data-class boilerplate." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "Parameter properties echo Kotlin's val in the constructor." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "open vanishes; extends, implements, and abstract carry over." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "Kotlin's class-like enums → TS enums and string-literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "List<T> instincts transfer; no in/out variance to declare." },
  { n: 13, file: "13-streams-to-array-methods.html",  title: "Streams → Array Methods",         blurb: "Kotlin's .filter{}.map{} → .filter().map(), no braces." },
  { n: 14, file: "14-destructuring.html",             title: "Destructuring",                   blurb: "Kotlin destructures by position; TS destructures by name." },
  { n: 15, file: "15-spread-and-varargs.html",        title: "Spread & Varargs",                blurb: "vararg and the * spread → ...rest and ... for merging." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "Kotlin's smart casts → typeof/in narrowing, same no-cast feel." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Sealed interfaces + exhaustive when → tagged unions + never." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — the Kotlin DTO classes you stop hand-writing." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "Deferred<T> → Promise<T>; awaitAll → Promise.all." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "package/import → ES modules, plus a final project." },
];
