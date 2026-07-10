// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",           blurb: "int/double/std::string → dynamic, duck-typed names; no compiler to check you." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                     blurb: "std::string concatenation and streams → immutable str and f-strings." },
  { n: 3,  file: "03-lists.html",                     title: "Lists",                       blurb: "std::vector<T> → the untyped, resizable-by-default list." },
  { n: 4,  file: "04-dicts.html",                     title: "Dictionaries",                blurb: "std::map/unordered_map → dict literals with no template params." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                   blurb: "Overloads and default args → *args/**kwargs, one function per name." },
  { n: 6,  file: "06-comprehensions.html",             title: "Comprehensions",              blurb: "What a raw for-loop + push_back does, in one expression." },
  { n: 7,  file: "07-classes.html",                   title: "Classes",                     blurb: "No headers, no access specifiers — just self and a colon." },
  { n: 8,  file: "08-dunder-methods.html",             title: "Dunder Methods",              blurb: "operator overloading → __add__, __eq__, and friends by convention." },
  { n: 9,  file: "09-inheritance.html",                title: "Inheritance",                 blurb: "virtual/override ceremony → duck-typed polymorphism by default." },
  { n: 10, file: "10-none-and-truthiness.html",        title: "None & Truthiness",           blurb: "nullptr and 0-as-false → None plus Python's broader falsy rules." },
  { n: 11, file: "11-exceptions.html",                 title: "Exceptions",                  blurb: "try/catch(const T&) → try/except, but exceptions are the norm here." },
  { n: 12, file: "12-iterators-and-generators.html",   title: "Iterators & Generators",       blurb: "Hand-rolled iterator classes → for-in and yield do the work." },
  { n: 13, file: "13-decorators.html",                 title: "Decorators",                  blurb: "What templates and macros gesture at, done cleanly with @." },
  { n: 14, file: "14-lambdas-and-functional.html",     title: "Lambdas & Functional Tools",   blurb: "[capture](args){} → lambda, plus map/filter/functools built in." },
  { n: 15, file: "15-sets-and-tuples.html",            title: "Sets & Tuples",               blurb: "std::set and std::tuple/std::pair → set literals and unpackable tuples." },
  { n: 16, file: "16-dataclasses.html",                title: "Dataclasses",                 blurb: "Struct + hand-written ctor/== → one @dataclass decorator." },
  { n: 17, file: "17-type-hints.html",                 title: "Type Hints",                  blurb: "Static types you can't skip → optional annotations mypy checks." },
  { n: 18, file: "18-context-managers.html",           title: "Context Managers",             blurb: "RAII destructors → explicit __enter__/__exit__ and with blocks." },
  { n: 19, file: "19-collections-module.html",         title: "The collections Module",       blurb: "deque, Counter, defaultdict — <deque> and friends, batteries included." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                    blurb: "A final project pulling the whole toolkit together, no Makefile required." },
];
