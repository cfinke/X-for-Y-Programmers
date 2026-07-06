// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "int/double/String → number/string; var → let/const." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "String.format and + concat → template literals." },
  { n: 3,  file: "03-arrays-and-lists.html",          title: "Arrays & Lists",                  blurb: "int[] and ArrayList<Integer> collapse into number[]." },
  { n: 4,  file: "04-maps-to-objects.html",           title: "Maps → Objects",                  blurb: "HashMap<String, V> → Record<string, V> and object literals." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Free functions, lambdas → arrows, defaults instead of overloads." },
  { n: 6,  file: "06-null-and-optional.html",         title: "Null & Optional",                 blurb: "NPEs and Optional<T> → string | null, ?., and ??." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "What Java does with overloads, TS does with int | string." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Nominal implements → structural shapes, no POJO boilerplate." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "Fields, getters, and constructors without the ceremony." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "extends, implements, abstract — the keywords carry over." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "Java enums → TS enums and string-literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "List<T> instincts transfer; erasure works the same way." },
  { n: 13, file: "13-streams-to-array-methods.html",  title: "Streams → Array Methods",         blurb: ".stream().filter().map().collect() → .filter().map()." },
  { n: 14, file: "14-destructuring.html",             title: "Destructuring",                   blurb: "What record patterns hint at, done for every object." },
  { n: 15, file: "15-spread-and-varargs.html",        title: "Spread & Varargs",                blurb: "int... nums → ...nums, plus spread for merging." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "instanceof-and-cast → narrowing that needs no cast." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Sealed interfaces + switch patterns → tagged unions + never." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — the DTO variants you stop hand-writing." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "CompletableFuture → Promise; thenCompose chains → await." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "packages/import → ES modules, plus a final project." },
];
