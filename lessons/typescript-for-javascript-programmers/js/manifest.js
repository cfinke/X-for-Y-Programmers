// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-adding-types.html",              title: "Adding Types to Variables",       blurb: "Annotations, inference, and why any is a trapdoor." },
  { n: 2,  file: "02-typing-functions.html",          title: "Typing Functions",                blurb: "Parameter, return, and void types for the functions you already write." },
  { n: 3,  file: "03-arrays-and-tuples.html",         title: "Arrays & Tuples",                 blurb: "T[] for lists, [string, number] for fixed shapes." },
  { n: 4,  file: "04-object-types-and-aliases.html",  title: "Object Types & Type Aliases",     blurb: "Inline shapes, type aliases, and Record<K, V>." },
  { n: 5,  file: "05-interfaces.html",                title: "Interfaces",                      blurb: "Named object shapes, optional props, and extends." },
  { n: 6,  file: "06-strict-null-checks.html",        title: "Null, Undefined & strictNullChecks", blurb: "The compiler now catches the 'cannot read property of undefined' bug." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "One variable, several allowed types — checked at every use." },
  { n: 8,  file: "08-literal-types-and-enums.html",   title: "Literal Types & Enums",           blurb: "From magic strings to \"pending\" | \"done\" and enum." },
  { n: 9,  file: "09-classes-with-types.html",        title: "Classes with Types",              blurb: "private for real, readonly, and constructor shortcuts." },
  { n: 10, file: "10-abstract-and-implements.html",   title: "Abstract Classes & implements",   blurb: "Contracts the compiler enforces on your class hierarchy." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                        blurb: "Functions that keep the type of whatever you pass them." },
  { n: 12, file: "12-generic-constraints.html",       title: "Generic Constraints & keyof",     blurb: "extends, keyof, and typed property access." },
  { n: 13, file: "13-typing-array-methods.html",      title: "Typing Array Methods & Callbacks", blurb: "map/filter/reduce with inference doing the heavy lifting." },
  { n: 14, file: "14-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "typeof, in, instanceof, and custom type predicates." },
  { n: 15, file: "15-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "Tagged objects + switch = compiler-checked variants." },
  { n: 16, file: "16-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit, ReturnType — types from types." },
  { n: 17, file: "17-type-assertions.html",           title: "Type Assertions & unknown vs any", blurb: "as, the non-null !, and taming untyped data safely." },
  { n: 18, file: "18-structural-typing.html",         title: "Structural Typing",               blurb: "Duck typing formalized — and excess property checks." },
  { n: 19, file: "19-typing-async.html",              title: "Typing Async Code",               blurb: "Promise<T>, async return types, and typed Promise.all." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "Typed import/export, plus a final project." },
];
