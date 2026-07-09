// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",   title: "Variables & Types",         blurb: "var/int/string and static typing → dynamic names, no declarations." },
  { n: 2,  file: "02-strings.html",                title: "Strings",                   blurb: "$\"{interpolation}\" and .NET methods → f-strings and slicing." },
  { n: 3,  file: "03-lists.html",                  title: "Lists",                     blurb: "List<T> and arrays → the all-purpose list, with slicing built in." },
  { n: 4,  file: "04-dicts.html",                  title: "Dictionaries",              blurb: "Dictionary<K,V> → dict literals, no generic type parameters." },
  { n: 5,  file: "05-functions.html",               title: "Functions",                 blurb: "Overloads and out params → default args, *args, and **kwargs." },
  { n: 6,  file: "06-comprehensions.html",          title: "Comprehensions",            blurb: "What LINQ's Select/Where do in a chain, done in one bracket." },
  { n: 7,  file: "07-classes.html",                 title: "Classes",                   blurb: "Auto-properties and constructors → __init__ and self, explicit." },
  { n: 8,  file: "08-dunder-methods.html",          title: "Dunder Methods",            blurb: "ToString, Equals, operator overloads → __str__, __eq__, __add__." },
  { n: 9,  file: "09-inheritance.html",             title: "Inheritance",               blurb: "virtual/override and interfaces → single dynamic dispatch, no keywords." },
  { n: 10, file: "10-none-and-truthiness.html",     title: "None & Truthiness",         blurb: "null and nullable<T> → None, plus Python's broader falsy rules." },
  { n: 11, file: "11-exceptions.html",              title: "Exceptions",                blurb: "try/catch(Type ex)/finally → try/except Type as e/finally, same shape." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",    blurb: "IEnumerable and yield return → __iter__/__next__ and yield." },
  { n: 13, file: "13-decorators.html",              title: "Decorators",                blurb: "Attributes describe metadata; decorators actually wrap the function." },
  { n: 14, file: "14-lambdas-and-functional.html",  title: "Lambdas & Functional Tools", blurb: "Func<T>/Action and LINQ → lambdas plus map/filter/functools." },
  { n: 15, file: "15-sets-and-tuples.html",         title: "Sets & Tuples",             blurb: "HashSet<T> and ValueTuple → set literals and unpacking-friendly tuples." },
  { n: 16, file: "16-dataclasses.html",             title: "Dataclasses",               blurb: "C# records and their generated Equals → @dataclass, one decorator." },
  { n: 17, file: "17-type-hints.html",              title: "Type Hints",                 blurb: "Compiler-enforced types → optional hints, checked only by tools." },
  { n: 18, file: "18-context-managers.html",        title: "Context Managers",           blurb: "using and IDisposable → with blocks and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",      title: "The collections Module",    blurb: "Queue<T>, LinkedList<T>, and grouping → deque, defaultdict, Counter." },
  { n: 20, file: "20-capstone.html",                title: "Capstone",                  blurb: "A final project pulling every idiom together." },
];
