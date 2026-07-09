// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",                  blurb: "final/var and boxed types → val/var with real type inference." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                             blurb: "String.format and + concat → string templates with $var." },
  { n: 3,  file: "03-lists-and-collections.html",     title: "Lists & Collections",                 blurb: "ArrayList<T> and Collections.unmodifiableList → listOf/mutableListOf." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                                blurb: "HashMap<K, V> get/put → Map with [] access and to pairs." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                           blurb: "Static methods and overloads → top-level functions with defaults." },
  { n: 6,  file: "06-null-safety.html",                title: "Null Safety",                        blurb: "NPEs and Optional<T> → nullable types checked at compile time." },
  { n: 7,  file: "07-classes-and-properties.html",    title: "Classes & Properties",                blurb: "Fields plus getters/setters → properties declared in one line." },
  { n: 8,  file: "08-data-classes.html",              title: "Data Classes",                        blurb: "equals/hashCode/toString boilerplate → a single data class." },
  { n: 9,  file: "09-when-and-control-flow.html",     title: "when & Control Flow",                 blurb: "switch statements and if-chains → the expression-based when." },
  { n: 10, file: "10-inheritance.html",               title: "Inheritance",                         blurb: "extends by default, final by choice → open classes, final by default." },
  { n: 11, file: "11-interfaces.html",                title: "Interfaces",                          blurb: "default methods → interfaces with real property and method bodies." },
  { n: 12, file: "12-sealed-classes.html",             title: "Sealed Classes",                     blurb: "Enum-with-subclasses tricks → sealed classes with exhaustive when." },
  { n: 13, file: "13-enums.html",                     title: "Enums",                                blurb: "Java enums carry over almost unchanged, with a lighter syntax." },
  { n: 14, file: "14-lambdas-and-higher-order.html",  title: "Lambdas & Higher-Order Functions",    blurb: "Functional interfaces and method refs → lambdas as first-class values." },
  { n: 15, file: "15-collection-operations.html",     title: "Collection Operations",                blurb: ".stream().filter().map().collect() → .filter().map() directly." },
  { n: 16, file: "16-extension-functions.html",       title: "Extension Functions",                 blurb: "Static utility classes like StringUtils → functions added onto the type." },
  { n: 17, file: "17-generics.html",                  title: "Generics",                             blurb: "<? extends T>/<? super T> → use-site variance with out/in." },
  { n: 18, file: "18-scope-functions.html",           title: "Scope Functions",                     blurb: "Builder chains and temp variables → let, apply, also, run, with." },
  { n: 19, file: "19-objects-and-companions.html",    title: "Objects & Companions",                 blurb: "Singletons and static members → object declarations and companion object." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                             blurb: "A final project pulling every Java-to-Kotlin idiom together." },
];
