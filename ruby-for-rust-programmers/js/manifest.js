// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "Dynamic variables, no declarations, and types you ask about at runtime." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "\"#{name}\" interpolation and a string method for everything." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                          blurb: "<< to push, negative indexes, and first/last as methods." },
  { n: 4,  file: "04-hashes-and-symbols.html",        title: "Hashes & Symbols",                blurb: "{ key: value }, :symbols vs strings, and fetch with defaults." },
  { n: 5,  file: "05-methods.html",                   title: "Methods & Implicit Return",       blurb: "def, the last expression IS the return value, and keyword arguments." },
  { n: 6,  file: "06-nil-and-safe-navigation.html",   title: "Nil & Safe Navigation",           blurb: "nil, &., ||= — and only nil and false are falsy." },
  { n: 7,  file: "07-everything-is-an-object.html",   title: "Everything Is an Object",         blurb: "5.times, -3.abs, 2.even? — no primitives, only messages." },
  { n: 8,  file: "08-control-flow-and-case.html",     title: "Control Flow & case",             blurb: "Modifier if, unless, and case/when with ranges." },
  { n: 9,  file: "09-classes.html",                   title: "Classes & Objects",               blurb: "initialize, @ivars, and attr_accessor writing your accessors." },
  { n: 10, file: "10-inheritance-and-modules.html",   title: "Inheritance & Modules",           blurb: "< for extends, super without arguments, and modules as mixins." },
  { n: 11, file: "11-blocks-procs-lambdas.html",      title: "Blocks, Procs & Lambdas",         blurb: "yield, block_given?, and the -> lambda literal." },
  { n: 12, file: "12-enumerable.html",                title: "Enumerable: map, select & Friends", blurb: "map/select/reject/sum — the collection toolkit, chained." },
  { n: 13, file: "13-enumerable-power-tools.html",    title: "Enumerable Power Tools",          blurb: "reduce, group_by, tally, sort_by, each_with_object." },
  { n: 14, file: "14-destructuring-and-splat.html",   title: "Destructuring & Splat",           blurb: "a, b = pair; *rest; and ** for keyword options." },
  { n: 15, file: "15-duck-typing.html",               title: "Duck Typing & respond_to?",       blurb: "No interfaces — if it quacks, call it; ask with respond_to?." },
  { n: 16, file: "16-exceptions.html",                title: "Exceptions & Error Handling",     blurb: "begin/rescue/ensure, raise, and custom StandardError subclasses." },
  { n: 17, file: "17-structs-and-comparable.html",    title: "Structs & Comparable",            blurb: "Struct.new value objects and <=> unlocking sort, min, between?." },
  { n: 18, file: "18-enumerators-and-lazy.html",      title: "Enumerators & Lazy",              blurb: "Infinite sequences with .lazy, external enumerators, first(n)." },
  { n: 19, file: "19-json.html",                      title: "Working with JSON",               blurb: "to_json, JSON.parse, and symbolize_names." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Classes, Enumerable, Structs, and blocks — one final project." },
];
