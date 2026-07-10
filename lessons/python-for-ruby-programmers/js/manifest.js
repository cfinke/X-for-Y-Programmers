// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",   title: "Variables & Types",           blurb: "No sigils, no @ for instance vars in scope; snake_case stays, indentation replaces end." },
  { n: 2,  file: "02-strings.html",               title: "Strings",                     blurb: "#{} interpolation → f-strings; single/double quotes both fine, no here-doc %w shortcuts." },
  { n: 3,  file: "03-lists.html",                 title: "Lists",                       blurb: "Array becomes list; %w[] and .each give way to [] literals and for x in." },
  { n: 4,  file: "04-dicts.html",                 title: "Dictionaries",                blurb: "Hash and => rocket give way to dict and plain : key syntax." },
  { n: 5,  file: "05-functions.html",              title: "Functions",                   blurb: "def without parens/return is common in Ruby; Python wants both, plus explicit self." },
  { n: 6,  file: "06-comprehensions.html",         title: "Comprehensions",              blurb: ".map/.select chains collapse into a single comprehension expression." },
  { n: 7,  file: "07-classes.html",                title: "Classes",                     blurb: "initialize and attr_accessor → __init__ and explicit self.x = x." },
  { n: 8,  file: "08-dunder-methods.html",         title: "Dunder Methods",              blurb: "to_s, ==, + as plain methods → __repr__, __eq__, __add__ dunders." },
  { n: 9,  file: "09-inheritance.html",            title: "Inheritance",                 blurb: "< Parent and super → class Child(Parent) and super().__init__()." },
  { n: 10, file: "10-none-and-truthiness.html",    title: "None & Truthiness",           blurb: "Only nil/false are falsy in Ruby; Python also falsifies 0, \"\", and empty collections." },
  { n: 11, file: "11-exceptions.html",             title: "Exceptions",                  blurb: "begin/rescue/ensure → try/except/finally, StandardError → Exception." },
  { n: 12, file: "12-iterators-and-generators.html", title: "Iterators & Generators",     blurb: "Enumerable and yield-based blocks → iterator protocol and yield-based generators." },
  { n: 13, file: "13-decorators.html",             title: "Decorators",                  blurb: "What method_missing/define_method hint at, formalized as @decorator syntax." },
  { n: 14, file: "14-lambdas-and-functional.html", title: "Lambdas & Functional Tools",  blurb: "->(x) and Proc.new → lambda x:, plus map/filter/reduce as functions, not methods." },
  { n: 15, file: "15-sets-and-tuples.html",        title: "Sets & Tuples",               blurb: "Set from require 'set' → a built-in; frozen arrays give way to real tuples." },
  { n: 16, file: "16-dataclasses.html",            title: "Dataclasses",                 blurb: "Struct.new and attr_accessor boilerplate → @dataclass with type-annotated fields." },
  { n: 17, file: "17-type-hints.html",             title: "Type Hints",                  blurb: "Sorbet/RBS feel bolted-on; Python's hints are built into def and checked by mypy." },
  { n: 18, file: "18-context-managers.html",       title: "Context Managers",             blurb: "File.open with a block → with blocks and the __enter__/__exit__ protocol." },
  { n: 19, file: "19-collections-module.html",     title: "The collections Module",      blurb: "Ruby's Hash defaults and Struct → defaultdict, Counter, and namedtuple." },
  { n: 20, file: "20-capstone.html",               title: "Capstone",                     blurb: "A final project pulling classes, comprehensions, and type hints together." },
];
