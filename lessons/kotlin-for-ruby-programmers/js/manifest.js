// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                  blurb: "Duck-typed local vars → val/var with an inferred, enforced type." },
  { n: 2,  file: "02-strings.html",                    title: "Strings",                            blurb: "\"#{expr}\" interpolation carries over almost unchanged as \"${expr}\"." },
  { n: 3,  file: "03-lists-and-collections.html",      title: "Lists & Collections",                blurb: "Array/Hash literals → List/MutableList, with mutability spelled out." },
  { n: 4,  file: "04-maps.html",                       title: "Maps",                               blurb: "{ key: value } Hashes → Map/mutableMapOf, typed key and value." },
  { n: 5,  file: "05-functions.html",                  title: "Functions",                          blurb: "def with implicit return → fun with explicit types and expression bodies." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                        blurb: "nil checks and &. → String? types with ?. and the compiler enforcing it." },
  { n: 7,  file: "07-classes-and-properties.html",     title: "Classes & Properties",                blurb: "attr_accessor and initialize → constructor params that are properties." },
  { n: 8,  file: "08-data-classes.html",                title: "Data Classes",                       blurb: "Struct.new and hand-rolled == → data class with equals/hashCode free." },
  { n: 9,  file: "09-when-and-control-flow.html",       title: "when & Control Flow",                blurb: "case/when with ===  → Kotlin's when, an expression that returns a value." },
  { n: 10, file: "10-inheritance.html",                 title: "Inheritance",                        blurb: "< Superclass and super → explicit open classes and : Base() calls." },
  { n: 11, file: "11-interfaces.html",                  title: "Interfaces",                         blurb: "Modules mixed in with include → interfaces implemented with :." },
  { n: 12, file: "12-sealed-classes.html",               title: "Sealed Classes",                     blurb: "No real equivalent in Ruby — sealed class trees the compiler can exhaust-check." },
  { n: 13, file: "13-enums.html",                       title: "Enums",                              blurb: "Symbols or frozen constants → enum class, a real closed type." },
  { n: 14, file: "14-lambdas-and-higher-order.html",     title: "Lambdas & Higher-Order Functions",   blurb: "Blocks, procs, and lambdas converge into one lambda syntax." },
  { n: 15, file: "15-collection-operations.html",        title: "Collection Operations",              blurb: ".map/.select/.reduce carry over almost 1:1, just statically typed." },
  { n: 16, file: "16-extension-functions.html",          title: "Extension Functions",                blurb: "Reopening classes (monkey-patching) → scoped, safe extension functions." },
  { n: 17, file: "17-generics.html",                     title: "Generics",                           blurb: "Ruby's untyped containers → <T> generics checked at compile time." },
  { n: 18, file: "18-scope-functions.html",               title: "Scope Functions",                    blurb: "tap and instance_eval's ad hoc feel → let/apply/run/also/with as idioms." },
  { n: 19, file: "19-objects-and-companions.html",        title: "Objects & Companions",                blurb: "self.method class methods and singletons → object and companion object." },
  { n: 20, file: "20-capstone.html",                     title: "Capstone",                           blurb: "Pull it all together: a small Kotlin program built with Ruby instincts." },
];
