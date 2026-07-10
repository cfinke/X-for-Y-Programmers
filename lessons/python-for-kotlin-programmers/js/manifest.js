// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "val/var and types vanish; names just get (re)bound to objects." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                         blurb: "Immutable and zero-indexed like Kotlin, but f-strings and s[a:b] slicing." },
  { n: 3,  file: "03-lists.html",                     title: "Lists",                           blurb: "mutableListOf(...) → [...], plus negative indices and slicing." },
  { n: 4,  file: "04-dicts.html",                     title: "Dictionaries",                    blurb: "Map<K, V> → dict, but m[\"x\"] raises KeyError instead of returning null." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "def with no braces; keyword args are the default, not an opt-in." },
  { n: 6,  file: "06-comprehensions.html",             title: "Comprehensions",                 blurb: "map{}/filter{} chains collapse into one comprehension expression." },
  { n: 7,  file: "07-classes.html",                   title: "Classes",                         blurb: "No constructor keyword — __init__ and an explicit self replace this." },
  { n: 8,  file: "08-dunder-methods.html",             title: "Dunder Methods",                 blurb: "toString/equals/operator fun generalize into __repr__/__eq__/__add__." },
  { n: 9,  file: "09-inheritance.html",                title: "Inheritance",                    blurb: "class Dog(Animal): — and super().__init__() is never called for you." },
  { n: 10, file: "10-none-and-truthiness.html",        title: "None & Truthiness",              blurb: "null → None, but Python adds truthiness: [], {}, \"\", and 0 are falsy too." },
  { n: 11, file: "11-exceptions.html",                 title: "Exceptions",                     blurb: "Typed catch blocks → except Type:, plus an else Kotlin has no equivalent for." },
  { n: 12, file: "12-iterators-and-generators.html",   title: "Iterators & Generators",         blurb: "hasNext()/next() → iter()/next() and StopIteration; sequence{} → yield." },
  { n: 13, file: "13-decorators.html",                 title: "Decorators",                     blurb: "Not @Annotation metadata — @log wraps a function like a manual higher-order fn." },
  { n: 14, file: "14-lambdas-and-functional.html",     title: "Lambdas & Functional Tools",     blurb: "list.map{} methods → standalone map()/filter()/sorted(key=) functions." },
  { n: 15, file: "15-sets-and-tuples.html",             title: "Sets & Tuples",                  blurb: "setOf/Pair/Triple become first-class {..} sets and arbitrary-length tuples." },
  { n: 16, file: "16-dataclasses.html",                title: "Dataclasses",                    blurb: "data class → @dataclass, generating __init__/__repr__/__eq__ for you." },
  { n: 17, file: "17-type-hints.html",                 title: "Type Hints",                     blurb: "Annotations look like Kotlin's types, but nothing enforces them at runtime." },
  { n: 18, file: "18-context-managers.html",           title: "Context Managers",               blurb: "resource.use { } → with, backed by __enter__/__exit__ instead of Closeable." },
  { n: 19, file: "19-collections-module.html",         title: "The collections Module",         blurb: "Hand-rolled MutableMap counting/grouping → Counter, defaultdict, namedtuple." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                       blurb: "Same in-memory store shape as Kotlin, built from dataclasses, dicts, and comprehensions." },
];
