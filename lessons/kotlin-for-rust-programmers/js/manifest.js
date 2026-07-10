// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",      title: "Variables & Types",                    blurb: "let/let mut → val/var; i32/String → Int/String, inference either way." },
  { n: 2,  file: "02-strings.html",                  title: "Strings",                              blurb: "The &str/String split disappears; format! → string templates with $var." },
  { n: 3,  file: "03-lists-and-collections.html",    title: "Lists & Collections",                  blurb: "Vec<T> and slices → List<T>/MutableList<T>, no borrow checker to fight." },
  { n: 4,  file: "04-maps.html",                     title: "Maps",                                 blurb: "HashMap<K, V> → mapOf/mutableMapOf, no entry-API borrow dance." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                            blurb: "fn with borrow-checked params → fun with defaults and named args." },
  { n: 6,  file: "06-null-safety.html",               title: "Null Safety",                          blurb: "Option<T> and match → T? with ?., ?:, and !! for escape hatches." },
  { n: 7,  file: "07-classes-and-properties.html",   title: "Classes & Properties",                 blurb: "struct + impl blocks → classes with properties, getters/setters generated." },
  { n: 8,  file: "08-data-classes.html",             title: "Data Classes",                         blurb: "#[derive(Debug, Clone, PartialEq)] → data class, one keyword instead." },
  { n: 9,  file: "09-when-and-control-flow.html",    title: "when & Control Flow",                  blurb: "match arms and guards → when, still exhaustive over sealed types." },
  { n: 10, file: "10-inheritance.html",              title: "Inheritance",                          blurb: "No struct inheritance in Rust — Kotlin brings back open classes and override." },
  { n: 11, file: "11-interfaces.html",               title: "Interfaces",                           blurb: "trait → interface; default methods work almost the same way." },
  { n: 12, file: "12-sealed-classes.html",           title: "Sealed Classes",                       blurb: "Data-carrying enum + match → sealed class hierarchy + when." },
  { n: 13, file: "13-enums.html",                    title: "Enums",                                blurb: "enum variants with payloads split: plain enum class, payloads go sealed." },
  { n: 14, file: "14-lambdas-and-higher-order.html", title: "Lambdas & Higher-Order Functions",     blurb: "|x| x + 1 closures → { x -> x + 1 }, plus trailing-lambda call syntax." },
  { n: 15, file: "15-collection-operations.html",    title: "Collection Operations",                blurb: ".iter().map().filter().collect() → .map().filter(), no collect() needed." },
  { n: 16, file: "16-extension-functions.html",      title: "Extension Functions",                  blurb: "impl SomeTrait for Type → fun Type.foo(), no trait required." },
  { n: 17, file: "17-generics.html",                 title: "Generics",                             blurb: "<T: Trait> bounds → <T : Interface>; use-site variance replaces lifetimes." },
  { n: 18, file: "18-scope-functions.html",          title: "Scope Functions",                      blurb: "No Rust equivalent — let, run, apply, also replace ad hoc block scoping." },
  { n: 19, file: "19-objects-and-companions.html",   title: "Objects & Companions",                 blurb: "static items and free functions → object singletons and companion object." },
  { n: 20, file: "20-capstone.html",                 title: "Capstone",                             blurb: "Everything above, applied in one project — from borrow checker to GC." },
];
