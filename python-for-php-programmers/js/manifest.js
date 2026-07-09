// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",     title: "Variables & Types",         blurb: "$sigils and loose types → sigil-free names and dynamic typing." },
  { n: 2,  file: "02-strings.html",                 title: "Strings",                   blurb: "\"...\" and .= concatenation → f-strings and str methods." },
  { n: 3,  file: "03-lists.html",                   title: "Lists",                     blurb: "Indexed arrays and array_map/filter → lists and comprehensions." },
  { n: 4,  file: "04-dicts.html",                   title: "Dictionaries",              blurb: "Associative arrays split into two: lists and dicts." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                 blurb: "function keyword and use() closures → def and lexical scope." },
  { n: 6,  file: "06-comprehensions.html",           title: "Comprehensions",            blurb: "array_map/array_filter chains collapse into one comprehension." },
  { n: 7,  file: "07-classes.html",                  title: "Classes",                   blurb: "public/private properties and __construct → attributes and self." },
  { n: 8,  file: "08-dunder-methods.html",           title: "Dunder Methods",             blurb: "__toString, magic methods → __str__, __eq__, and friends." },
  { n: 9,  file: "09-inheritance.html",              title: "Inheritance",               blurb: "extends and parent:: → subclassing and super()." },
  { n: 10, file: "10-none-and-truthiness.html",      title: "None & Truthiness",         blurb: "null, isset, and \"\" == 0 quirks → None and stricter truthiness." },
  { n: 11, file: "11-exceptions.html",               title: "Exceptions",                blurb: "try/catch/finally carries over; catch (Type $e) → except Type as e." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",     blurb: "Iterator interface and yield → __iter__/__next__ and yield." },
  { n: 13, file: "13-decorators.html",               title: "Decorators",                 blurb: "Attributes are metadata; @decorator actually wraps the function." },
  { n: 14, file: "14-lambdas-and-functional.html",   title: "Lambdas & Functional Tools", blurb: "fn() arrow functions and array_reduce → lambda, map, and reduce." },
  { n: 15, file: "15-sets-and-tuples.html",          title: "Sets & Tuples",              blurb: "array_unique hacks and fixed arrays → real set and tuple types." },
  { n: 16, file: "16-dataclasses.html",              title: "Dataclasses",                blurb: "Promoted constructor properties → @dataclass boilerplate for free." },
  { n: 17, file: "17-type-hints.html",               title: "Type Hints",                blurb: "Scalar/return type declarations → PEP 484 hints and mypy." },
  { n: 18, file: "18-context-managers.html",          title: "Context Managers",          blurb: "try/finally cleanup → with blocks and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",        title: "The collections Module",     blurb: "Hand-rolled counting arrays → Counter, defaultdict, deque." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                  blurb: "A final project pulling every lesson together." },
];
