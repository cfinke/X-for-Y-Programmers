// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",     title: "Variables & Types",             blurb: "Static var/const with fixed types → dynamic names bound to objects." },
  { n: 2,  file: "02-strings.html",                 title: "Strings",                       blurb: "Same immutable, zero-indexed strings, minus the byte/rune split." },
  { n: 3,  file: "03-lists.html",                   title: "Lists",                         blurb: "Slices with make/append → lists with literals, slicing, and methods." },
  { n: 4,  file: "04-dicts.html",                   title: "Dictionaries",                  blurb: "map[K]V and comma-ok → dict with flexible keys and .get()." },
  { n: 5,  file: "05-functions.html",                title: "Functions",                     blurb: "Fixed signatures → default args, keyword args, and *args/**kwargs." },
  { n: 6,  file: "06-comprehensions.html",           title: "Comprehensions",                blurb: "Hand-rolled make/append loops → list, dict, and set comprehensions." },
  { n: 7,  file: "07-classes.html",                  title: "Classes",                       blurb: "Structs plus receiver funcs → class with methods bundled inside." },
  { n: 8,  file: "08-dunder-methods.html",           title: "Dunder Methods",                blurb: "fmt.Stringer and friends → __str__, __eq__, __len__ hooks." },
  { n: 9,  file: "09-inheritance.html",              title: "Inheritance",                   blurb: "No inheritance, just embedding → real class hierarchies and super()." },
  { n: 10, file: "10-none-and-truthiness.html",      title: "None & Truthiness",             blurb: "nil's many zero values → a single None and truthy/falsy rules." },
  { n: 11, file: "11-exceptions.html",               title: "Exceptions",                    blurb: "if err != nil returns → try/except and raised exceptions." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",        blurb: "for range over slices/channels → __iter__/__next__ and yield." },
  { n: 13, file: "13-decorators.html",                title: "Decorators",                    blurb: "Manually wrapping a func value → @decorator syntax on def." },
  { n: 14, file: "14-lambdas-and-functional.html",   title: "Lambdas & Functional Tools",    blurb: "Function literals → lambda plus map/filter and functools." },
  { n: 15, file: "15-sets-and-tuples.html",           title: "Sets & Tuples",                 blurb: "map[T]struct{} and multi-value returns → real set and tuple types." },
  { n: 16, file: "16-dataclasses.html",               title: "Dataclasses",                   blurb: "Plain data structs → @dataclass generating init/repr/eq for you." },
  { n: 17, file: "17-type-hints.html",                title: "Type Hints",                    blurb: "Compiler-enforced types → optional hints checked by mypy, not runtime." },
  { n: 18, file: "18-context-managers.html",          title: "Context Managers",              blurb: "defer for cleanup → with blocks and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",        title: "The collections Module",        blurb: "Hand-rolled map logic → Counter, defaultdict, deque, namedtuple." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                      blurb: "Structs, methods, and errors → classes, dataclasses, and exceptions, together." },
];
