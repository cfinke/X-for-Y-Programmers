// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "int/double/std::string and auto → number/string and let/const." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "std::string concat and ostringstream → template literals." },
  { n: 3,  file: "03-vectors-to-arrays.html",         title: "Vectors → Arrays",                blurb: "std::vector<int> → number[]; push_back → push." },
  { n: 4,  file: "04-maps-to-objects.html",           title: "Maps → Objects",                  blurb: "std::map<std::string, V> → Record<string, V> and object literals." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Default args carry over; lambdas lose the capture list." },
  { n: 6,  file: "06-null-and-optional.html",         title: "Null & Optional",                 blurb: "nullptr and std::optional<T> → T | null, ?., and ??." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "std::variant without std::get — narrowing instead." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "Structs and pure-virtual bases → structural interfaces." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "public:/private: sections → per-member modifiers; no destructors." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "virtual ... = 0 → abstract; overriding just works." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "enum class → TS enums and string-literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "Templates checked at declaration, not instantiation; concepts → extends." },
  { n: 13, file: "13-algorithms-to-array-methods.html", title: "Algorithms → Array Methods",    blurb: "std::transform/copy_if/accumulate → map/filter/reduce." },
  { n: 14, file: "14-structured-bindings.html",       title: "Structured Bindings → Destructuring", blurb: "auto [a, b] = pair → const [a, b], plus object destructuring." },
  { n: 15, file: "15-spread-and-variadics.html",      title: "Spread & Rest",                   blurb: "Variadic templates → ...args, without the recursion." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "dynamic_cast and holds_alternative → typeof and predicates." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Tagged unions and std::visit → kind fields and switch + never." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — struct variants without codegen." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "std::future and threads → Promises on one event loop, no mutexes." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "#include and headers → import/export, plus a final project." },
];
