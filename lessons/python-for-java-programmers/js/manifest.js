// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",      title: "Variables & Types",             blurb: "Declared types on the variable → dynamic names bound to objects." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                       blurb: "String.format and + concat → f-strings and slicing." },
  { n: 3,  file: "03-lists.html",                     title: "Lists",                         blurb: "ArrayList<T> and its boilerplate → the literal, mixed-type list." },
  { n: 4,  file: "04-dicts.html",                     title: "Dictionaries",                  blurb: "new HashMap<>() and .put/.get → dict literals and m[\"a\"]." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                     blurb: "Overloading for defaults → default args, *args, and **kwargs." },
  { n: 6,  file: "06-comprehensions.html",             title: "Comprehensions",                blurb: ".stream().map().filter().collect() → a single comprehension." },
  { n: 7,  file: "07-classes.html",                    title: "Classes",                       blurb: "Constructors and implicit this → __init__ and explicit self." },
  { n: 8,  file: "08-dunder-methods.html",             title: "Dunder Methods",                blurb: "toString/equals overrides → __repr__, __eq__, and friends." },
  { n: 9,  file: "09-inheritance.html",                title: "Inheritance",                   blurb: "extends and enforced super() → class Dog(Animal) with no enforcement." },
  { n: 10, file: "10-none-and-truthiness.html",        title: "None & Truthiness",             blurb: "null with no falsy values → None plus falsy empties and zero." },
  { n: 11, file: "11-exceptions.html",                 title: "Exceptions",                    blurb: "Checked exceptions and throws → everything unchecked, plus else/finally." },
  { n: 12, file: "12-iterators-and-generators.html",   title: "Iterators & Generators",         blurb: "hasNext()/next() by hand → iter()/next() and yield." },
  { n: 13, file: "13-decorators.html",                 title: "Decorators",                    blurb: "Annotations as inert metadata → @decorators that rewrite functions." },
  { n: 14, file: "14-lambdas-and-functional.html",     title: "Lambdas & Functional Tools",     blurb: "Stream-chained lambdas → standalone map/filter/sorted with a lambda." },
  { n: 15, file: "15-sets-and-tuples.html",             title: "Sets & Tuples",                 blurb: "HashSet plus no real tuple → set literals and first-class tuples." },
  { n: 16, file: "16-dataclasses.html",                title: "Dataclasses",                   blurb: "Hand-rolled equals/hashCode or records → @dataclass generates it." },
  { n: 17, file: "17-type-hints.html",                 title: "Type Hints",                    blurb: "Compiler-enforced types → hints that tools check but runtime ignores." },
  { n: 18, file: "18-context-managers.html",           title: "Context Managers",               blurb: "try-with-resources and AutoCloseable → with and __enter__/__exit__." },
  { n: 19, file: "19-collections-module.html",         title: "The collections Module",         blurb: "Hand-rolled HashMap counting/grouping → Counter and defaultdict." },
  { n: 20, file: "20-capstone.html",                   title: "Capstone",                      blurb: "Record, HashMap, and streams → dataclass, dict, and comprehensions." },
];
