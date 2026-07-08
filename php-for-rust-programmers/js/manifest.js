// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "$variables, dynamic typing, and where PHP 8's type checks kick in." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "\"Hello $name\", the . operator, and the str_* toolbox." },
  { n: 3,  file: "03-arrays-as-lists.html",           title: "Arrays as Lists",                 blurb: "One array type to rule them all — the list half." },
  { n: 4,  file: "04-associative-arrays.html",        title: "Associative Arrays",              blurb: "['key' => value]: PHP's everything-structure, with ?? and foreach." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "Type declarations, defaults, nullable params, and named arguments." },
  { n: 6,  file: "06-null-handling.html",             title: "Null, ?? & ?->",                  blurb: "isset, the null coalescing operator, and nullsafe chains." },
  { n: 7,  file: "07-comparisons-and-juggling.html",  title: "Comparisons & Type Juggling",     blurb: "== vs === — the gotcha every PHP newcomer must internalize." },
  { n: 8,  file: "08-control-flow-and-match.html",    title: "Control Flow & match",            blurb: "if/switch, and PHP 8's match expression done right." },
  { n: 9,  file: "09-classes.html",                   title: "Classes & Objects",               blurb: "__construct, promoted properties, visibility, and ->." },
  { n: 10, file: "10-interfaces-and-inheritance.html", title: "Interfaces, Inheritance & Abstracts", blurb: "implements, extends, abstract — the classical OO toolkit." },
  { n: 11, file: "11-enums.html",                     title: "Enums",                           blurb: "PHP 8.1 pure and backed enums, cases(), and ->value." },
  { n: 12, file: "12-traits.html",                    title: "Traits",                          blurb: "PHP's mixins: horizontal code reuse with use." },
  { n: 13, file: "13-array-functions.html",           title: "array_map, array_filter & Friends", blurb: "The functional trio, usort, and the array_values gotcha." },
  { n: 14, file: "14-destructuring-and-spread.html",  title: "List Assignment & Spread",        blurb: "[$a, $b] = $pair, ...$args variadics, and spread." },
  { n: 15, file: "15-closures-and-callables.html",    title: "Closures & Callables",            blurb: "function () use ($x), fn() =>, and first-class callables." },
  { n: 16, file: "16-exceptions.html",                title: "Exceptions & Error Handling",     blurb: "try/catch/finally, custom exceptions, and the Throwable tree." },
  { n: 17, file: "17-static-const-readonly.html",     title: "Static, Constants & readonly",    blurb: "Class constants, static members, and readonly properties." },
  { n: 18, file: "18-generators.html",                title: "Generators & Iterables",          blurb: "yield: lazy sequences without building arrays." },
  { n: 19, file: "19-json.html",                      title: "Working with JSON",               blurb: "json_encode/json_decode and the associative-array data dance." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Classes, enums, array functions, and JSON — one final project." },
];
