// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",  title: "Variables & Types",           blurb: "let/const and annotations → dynamic names, type hints are optional." },
  { n: 2,  file: "02-strings.html",              title: "Strings",                     blurb: "Template literals → f-strings; slicing replaces .slice()/.substring()." },
  { n: 3,  file: "03-lists.html",                title: "Lists",                       blurb: "Array<T> and its methods → list, with slicing and negative indexes." },
  { n: 4,  file: "04-dicts.html",                title: "Dictionaries",                blurb: "Record<K, V> and Map → dict literals, with .items()/.keys()/.values()." },
  { n: 5,  file: "05-functions.html",            title: "Functions",                   blurb: "Arrow functions and defaults → def, *args/**kwargs, keyword-only params." },
  { n: 6,  file: "06-comprehensions.html",       title: "Comprehensions",              blurb: "What .map().filter() chains do, done inline as [x for x in y if …]." },
  { n: 7,  file: "07-classes.html",              title: "Classes",                     blurb: "constructor and public fields → __init__ and explicit self everywhere." },
  { n: 8,  file: "08-dunder-methods.html",       title: "Dunder Methods",              blurb: "toString/equals methods → __repr__/__eq__ hooks the language calls." },
  { n: 9,  file: "09-inheritance.html",          title: "Inheritance",                 blurb: "extends/super() → class Foo(Bar) and super().__init__(), plus mixins." },
  { n: 10, file: "10-none-and-truthiness.html",  title: "None & Truthiness",           blurb: "undefined/null and ?? → a single None, with looser truthy rules." },
  { n: 11, file: "11-exceptions.html",           title: "Exceptions",                  blurb: "try/catch(unknown) → try/except Type, plus else and finally blocks." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",  blurb: "for...of and function* → __iter__/__next__ and yield, made explicit." },
  { n: 13, file: "13-decorators.html",           title: "Decorators",                  blurb: "Experimental TS decorators → Python's stable, everywhere @decorator." },
  { n: 14, file: "14-lambdas-and-functional.html", title: "Lambdas & Functional Tools", blurb: "Arrow functions and array methods → lambda, map/filter, functools." },
  { n: 15, file: "15-sets-and-tuples.html",      title: "Sets & Tuples",               blurb: "Set<T> and readonly tuples → set literals and immutable tuple types." },
  { n: 16, file: "16-dataclasses.html",          title: "Dataclasses",                 blurb: "interface + object literal → @dataclass, generating __init__ for you." },
  { n: 17, file: "17-type-hints.html",           title: "Type Hints",                  blurb: "TS's checked types → optional, unenforced-at-runtime annotations." },
  { n: 18, file: "18-context-managers.html",     title: "Context Managers",            blurb: "try/finally cleanup → with blocks and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",   title: "The collections Module",      blurb: "Map, plain objects, arrays → defaultdict, Counter, deque, namedtuple." },
  { n: 20, file: "20-capstone.html",             title: "Capstone",                    blurb: "Bring it together: types, classes, comprehensions, and generators." },
];
