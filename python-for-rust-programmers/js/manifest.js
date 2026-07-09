// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",     title: "Variables & Types",             blurb: "let/mut and compile-time types → plain names, no keywords, no annotations." },
  { n: 2,  file: "02-strings.html",                 title: "Strings",                       blurb: "format! and &str/String juggling → one str type and f-strings." },
  { n: 3,  file: "03-lists.html",                   title: "Lists",                         blurb: "Vec<T> → list, plus negative indexing and slicing Rust doesn't have." },
  { n: 4,  file: "04-dicts.html",                   title: "Dictionaries",                  blurb: "HashMap::new() and entry() → dict literals, but m[\"x\"] still raises." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                     blurb: "fn with typed signatures → def with optional hints and default args." },
  { n: 6,  file: "06-comprehensions.html",           title: "Comprehensions",                blurb: "iter().map().filter().collect() chains → one-line comprehensions." },
  { n: 7,  file: "07-classes.html",                  title: "Classes",                       blurb: "struct + impl split → one class, __init__, and explicit self." },
  { n: 8,  file: "08-dunder-methods.html",           title: "Dunder Methods",                blurb: "Trait impls (PartialEq, Add, Debug) → __eq__, __add__, __repr__." },
  { n: 9,  file: "09-inheritance.html",              title: "Inheritance",                   blurb: "No inheritance, only traits → real subclassing with super()." },
  { n: 10, file: "10-none-and-truthiness.html",      title: "None & Truthiness",             blurb: "Option<T> and no falsy values → None plus empty-is-falsy rules." },
  { n: 11, file: "11-exceptions.html",               title: "Exceptions",                    blurb: "Result<T, E> and ? → try/except with typed except clauses." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",        blurb: "Iterator::next() -> Option<T> → next() and stable yield generators." },
  { n: 13, file: "13-decorators.html",               title: "Decorators",                    blurb: "Compile-time #[attribute] macros → runtime @decorator functions." },
  { n: 14, file: "14-lambdas-and-functional.html",   title: "Lambdas & Functional Tools",    blurb: "|x| closures on iterators → lambda plus standalone map/filter." },
  { n: 15, file: "15-sets-and-tuples.html",          title: "Sets & Tuples",                 blurb: "HashSet<T> and tuple structs → first-class {} set and () tuple literals." },
  { n: 16, file: "16-dataclasses.html",              title: "Dataclasses",                   blurb: "#[derive(Debug, PartialEq)] on a struct → @dataclass on a class." },
  { n: 17, file: "17-type-hints.html",               title: "Type Hints",                    blurb: "Compiler-enforced types → hints that tools check but nothing runs." },
  { n: 18, file: "18-context-managers.html",         title: "Context Managers",              blurb: "Drop and scope-based cleanup → explicit with and __exit__." },
  { n: 19, file: "19-collections-module.html",       title: "The collections Module",        blurb: "Hand-rolled entry().or_insert() → ready-made Counter and defaultdict." },
  { n: 20, file: "20-capstone.html",                 title: "Capstone",                      blurb: "struct/enum/Result store → dataclass/dict/Exception, same shape." },
];
