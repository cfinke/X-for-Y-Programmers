// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "No val/var, no annotations — one variable that can change type at runtime." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "\"#{name}\" for Kotlin's \"$name\", plus a string method for everything." },
  { n: 3,  file: "03-arrays.html",                    title: "Arrays",                          blurb: "One Array type instead of Array vs MutableList — << to push, negative indexes." },
  { n: 4,  file: "04-hashes-and-symbols.html",        title: "Hashes & Symbols",                blurb: "Hash literals with no mapOf, :symbols as keys, and fetch with defaults." },
  { n: 5,  file: "05-methods.html",                   title: "Methods & Implicit Return",       blurb: "def with no types, and implicit return everywhere — not just = bodies." },
  { n: 6,  file: "06-nil-and-safe-navigation.html",   title: "Nil & Safe Navigation",           blurb: "&. is your ?., || is Elvis — but nil isn't a type, any value can be it." },
  { n: 7,  file: "07-everything-is-an-object.html",   title: "Everything Is an Object",         blurb: "5.times, -3.abs, 2.even? — no math helpers, values answer for themselves." },
  { n: 8,  file: "08-control-flow-and-case.html",     title: "Control Flow & case",             blurb: "Modifier if, unless, and case/when with ranges — no parens, no braces." },
  { n: 9,  file: "09-classes.html",                   title: "Classes & Objects",               blurb: "attr_accessor writes accessors, but @ivar and accessor stay separate." },
  { n: 10, file: "10-inheritance-and-modules.html",   title: "Inheritance & Modules",           blurb: "< for :, bare super forwarding every argument, and modules as mixins." },
  { n: 11, file: "11-blocks-procs-lambdas.html",      title: "Blocks, Procs & Lambdas",         blurb: "Blocks beyond the trailing lambda: yield, block_given?, and the -> literal." },
  { n: 12, file: "12-enumerable.html",                title: "Enumerable: map, select & Friends", blurb: "map/select/reject/sum on every collection, chained — like Kotlin's extensions." },
  { n: 13, file: "13-enumerable-power-tools.html",    title: "Enumerable Power Tools",          blurb: "reduce, group_by, and tally — the frequency map in one word, not two." },
  { n: 14, file: "14-destructuring-and-splat.html",   title: "Destructuring & Splat",           blurb: "a, b = b, a swaps with no temp; *rest and ** go past Kotlin's read-only pairs." },
  { n: 15, file: "15-duck-typing.html",               title: "Duck Typing & respond_to?",       blurb: "No interface Speaker — polymorphism is method presence; ask with respond_to?." },
  { n: 16, file: "16-exceptions.html",                title: "Exceptions & Error Handling",     blurb: "begin/rescue/ensure for try/catch/finally, raise, and custom StandardErrors." },
  { n: 17, file: "17-structs-and-comparable.html",    title: "Structs & Comparable",            blurb: "Struct.new is Kotlin's data class, and <=> unlocks sort, min, between?." },
  { n: 18, file: "18-enumerators-and-lazy.html",      title: "Enumerators & Lazy",              blurb: "No Sequence type — any Enumerable goes lazy for infinite pipelines, first(n)." },
  { n: 19, file: "19-json.html",                      title: "Working with JSON",               blurb: "No library or @Serializable — require \"json\" and call data.to_json." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Classes, Enumerable, Structs, and blocks — one final project." },
];
