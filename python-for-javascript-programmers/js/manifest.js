// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",   title: "Variables & Types",           blurb: "let/const and typeof → no declarations, snake_case, and type()." },
  { n: 2,  file: "02-strings.html",                title: "Strings",                     blurb: "Template literals → f-strings; .slice() → slicing syntax." },
  { n: 3,  file: "03-lists.html",                  title: "Lists",                       blurb: "Array methods and holes → lists, negative indexing, slices." },
  { n: 4,  file: "04-dicts.html",                  title: "Dictionaries",                blurb: "Objects and Map → dicts, with real hashable-key rules." },
  { n: 5,  file: "05-functions.html",               title: "Functions",                   blurb: "Arrow functions and rest params → def, *args, and **kwargs." },
  { n: 6,  file: "06-comprehensions.html",          title: "Comprehensions",              blurb: ".map().filter() chains collapse into one comprehension." },
  { n: 7,  file: "07-classes.html",                 title: "Classes",                     blurb: "class fields and this → __init__ and explicit self." },
  { n: 8,  file: "08-dunder-methods.html",          title: "Dunder Methods",              blurb: "toString/valueOf/Symbol.iterator → __str__, __eq__, __iter__." },
  { n: 9,  file: "09-inheritance.html",             title: "Inheritance",                 blurb: "extends and super() → class Base subclassing and super()." },
  { n: 10, file: "10-none-and-truthiness.html",     title: "None & Truthiness",           blurb: "null vs undefined and ?? → a single None and its own falsy set." },
  { n: 11, file: "11-exceptions.html",              title: "Exceptions",                  blurb: "try/catch/throw → try/except/raise, plus else and finally." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",      blurb: "function* and yield → generator functions, same yield." },
  { n: 13, file: "13-decorators.html",              title: "Decorators",                  blurb: "Stage-3 class decorators → @decorator on any function." },
  { n: 14, file: "14-lambdas-and-functional.html",  title: "Lambdas & Functional Tools",  blurb: "Arrow funcs and reduce() → lambda, map/filter, functools." },
  { n: 15, file: "15-sets-and-tuples.html",         title: "Sets & Tuples",               blurb: "Set object and frozen arrays → set literals and real tuples." },
  { n: 16, file: "16-dataclasses.html",             title: "Dataclasses",                 blurb: "Hand-rolled constructors and toString → @dataclass does it." },
  { n: 17, file: "17-type-hints.html",              title: "Type Hints",                  blurb: "TypeScript annotations' cousin: optional hints, checked by mypy." },
  { n: 18, file: "18-context-managers.html",        title: "Context Managers",            blurb: "try/finally cleanup → with blocks and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",      title: "The collections Module",      blurb: "Map/Set workarounds → Counter, defaultdict, deque, namedtuple." },
  { n: 20, file: "20-capstone.html",                title: "Capstone",                    blurb: "Put it together: a small project, written the Pythonic way." },
];
