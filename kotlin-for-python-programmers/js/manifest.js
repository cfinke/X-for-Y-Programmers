// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                    blurb: "Duck-typed x = 5 → val/var with an inferred, enforced type." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                              blurb: "f-strings and .format() → string templates with ${expr}." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                  blurb: "list/tuple/set → List, MutableList, Set — mutability is explicit." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                 blurb: "dict literals and .get() → Map, mutableMapOf, and safe lookups." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                             blurb: "def with *args/**kwargs → fun with named and default params." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                          blurb: "None checks everywhere → nullable types, ?., and the compiler enforcing it." },
  { n: 7,  file: "07-classes-and-properties.html",     title: "Classes & Properties",                 blurb: "__init__ and @property → constructor params that are properties." },
  { n: 8,  file: "08-data-classes.html",               title: "Data Classes",                         blurb: "@dataclass → data class, with equals/copy/toString for free." },
  { n: 9,  file: "09-when-and-control-flow.html",      title: "when & Control Flow",                  blurb: "if/elif chains and match → the more powerful when expression." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                          blurb: "Implicit overriding → classes and members closed by default, open on purpose." },
  { n: 11, file: "11-interfaces.html",                 title: "Interfaces",                           blurb: "Duck typing and ABCs → interface contracts checked at compile time." },
  { n: 12, file: "12-sealed-classes.html",             title: "Sealed Classes",                       blurb: "Union types you can't exhaustively check → sealed classes when can." },
  { n: 13, file: "13-enums.html",                      title: "Enums",                                blurb: "Python's Enum class → Kotlin enum class with per-constant bodies." },
  { n: 14, file: "14-lambdas-and-higher-order.html",   title: "Lambdas & Higher-Order Functions",     blurb: "lambda's single-expression limit → multi-line lambdas and trailing syntax." },
  { n: 15, file: "15-collection-operations.html",      title: "Collection Operations",                blurb: "List comprehensions → chained .filter().map().reduce()." },
  { n: 16, file: "16-extension-functions.html",        title: "Extension Functions",                  blurb: "Monkey-patching and free functions → fun String.shout() done safely." },
  { n: 17, file: "17-generics.html",                   title: "Generics",                             blurb: "TypeVar and duck-typed generics → reified, variance-checked <T>." },
  { n: 18, file: "18-scope-functions.html",             title: "Scope Functions",                      blurb: "with blocks and chained calls → let, run, apply, also, and with." },
  { n: 19, file: "19-objects-and-companions.html",     title: "Objects & Companions",                 blurb: "Module-level singletons and @staticmethod → object and companion object." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                             blurb: "Bringing it together: a small project built the idiomatic Kotlin way." },
];
