// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                   blurb: "var/let-free C# → val/var; int/string → Int/String, inferred." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                             blurb: "$\"{x}\" interpolation → \"$x\"; StringBuilder → raw triple-quoted strings." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                 blurb: "List<T> mutability opt-in by default → listOf vs mutableListOf." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                blurb: "Dictionary<K,V> and [] → Map, mapOf, and to pairs." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                           blurb: "Static methods and lambdas → top-level fun and trailing lambdas." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                         blurb: "Nullable reference types (C# 8+) → Kotlin's ?, ?., and ?: baked in." },
  { n: 7,  file: "07-classes-and-properties.html",    title: "Classes & Properties",                blurb: "Auto-properties and constructors → concise primary constructors." },
  { n: 8,  file: "08-data-classes.html",               title: "Data Classes",                        blurb: "C# 9 records → Kotlin data class, which got there first." },
  { n: 9,  file: "09-when-and-control-flow.html",      title: "when & Control Flow",                 blurb: "switch expressions → when, an even more flexible pattern match." },
  { n: 10, file: "10-inheritance.html",                title: "Inheritance",                         blurb: "Classes open by default in C# → sealed by default in Kotlin." },
  { n: 11, file: "11-interfaces.html",                title: "Interfaces",                          blurb: "C# interfaces with default methods → Kotlin interfaces, much the same." },
  { n: 12, file: "12-sealed-classes.html",             title: "Sealed Classes",                      blurb: "C# 8 pattern matching over hierarchies → Kotlin's exhaustive sealed when." },
  { n: 13, file: "13-enums.html",                      title: "Enums",                               blurb: "enum with methods bolted on → enum class with members built in." },
  { n: 14, file: "14-lambdas-and-higher-order.html",   title: "Lambdas & Higher-Order Functions",    blurb: "Func<>/Action<> delegates → function types and trailing lambda syntax." },
  { n: 15, file: "15-collection-operations.html",      title: "Collection Operations",               blurb: "LINQ's .Where().Select() → .filter().map(), chained the same way." },
  { n: 16, file: "16-extension-functions.html",        title: "Extension Functions",                 blurb: "C# static extension methods → Kotlin's fun String.foo(), less ceremony." },
  { n: 17, file: "17-generics.html",                   title: "Generics",                            blurb: "in/out variance and where clauses → Kotlin's in/out and reified types." },
  { n: 18, file: "18-scope-functions.html",             title: "Scope Functions",                     blurb: "No direct C# equivalent — let, run, with, apply, also replace null-check boilerplate." },
  { n: 19, file: "19-objects-and-companions.html",     title: "Objects & Companions",                blurb: "static classes and static members → object singletons and companion object." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                            blurb: "Bring it together: a small project built the Kotlin way." },
];
