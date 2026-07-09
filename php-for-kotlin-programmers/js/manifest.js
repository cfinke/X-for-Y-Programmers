// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "$variables and dynamic typing after Kotlin's val/var and inference." },
  { n: 2,  file: "02-strings-and-interpolation.html", title: "Strings & Interpolation",        blurb: "\"Hello $name\" like Kotlin's templates, but with . instead of + and the str_* toolbox." },
  { n: 3,  file: "03-arrays-as-lists.html",           title: "Arrays as Lists",                 blurb: "One array type where Kotlin gave you List, Array, and MutableList." },
  { n: 4,  file: "04-associative-arrays.html",        title: "Associative Arrays",              blurb: "['key' => value] instead of Map: PHP's everything-structure, with ?? and foreach." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "function vs fun: type declarations, defaults, nullable params, and named arguments." },
  { n: 6,  file: "06-null-handling.html",             title: "Null, ?? & ?->",                  blurb: "isset, ?? for Kotlin's ?: elvis, and ?-> for the safe-call ?. chain." },
  { n: 7,  file: "07-comparisons-and-juggling.html",  title: "Comparisons & Type Juggling",     blurb: "== vs === where Kotlin's == was structural and === reference — a different gotcha." },
  { n: 8,  file: "08-control-flow-and-match.html",    title: "Control Flow & match",            blurb: "if and switch, plus match — PHP's answer to Kotlin's when expression." },
  { n: 9,  file: "09-classes.html",                   title: "Classes & Objects",               blurb: "__construct with promoted properties for Kotlin's primary constructors, visibility, and ->." },
  { n: 10, file: "10-interfaces-and-inheritance.html", title: "Interfaces, Inheritance & Abstracts", blurb: "implements, extends, abstract — classical OO without Kotlin's open/sealed rules." },
  { n: 11, file: "11-enums.html",                     title: "Enums",                           blurb: "PHP 8.1 pure and backed enums after Kotlin's object-per-constant classes; cases() and ->value." },
  { n: 12, file: "12-traits.html",                    title: "Traits",                          blurb: "PHP's mixins with use — horizontal reuse that can hold state, unlike Kotlin interfaces." },
  { n: 13, file: "13-array-functions.html",           title: "array_map, array_filter & Friends", blurb: "The functional trio as free functions, not Kotlin's chained collection ops, plus the array_values gotcha." },
  { n: 14, file: "14-destructuring-and-spread.html",  title: "List Assignment & Spread",        blurb: "[$a, $b] = $pair for Kotlin's componentN destructuring, ...$args variadics, and spread." },
  { n: 15, file: "15-closures-and-callables.html",    title: "Closures & Callables",            blurb: "function () use ($x) makes capture explicit where Kotlin lambdas grabbed it for free; fn() => and callables." },
  { n: 16, file: "16-exceptions.html",                title: "Exceptions & Error Handling",     blurb: "try/catch/finally and custom exceptions — all unchecked, like Kotlin's Throwable tree." },
  { n: 17, file: "17-static-const-readonly.html",     title: "Static, Constants & readonly",    blurb: "Class constants, static members for Kotlin's companion object, and readonly for val." },
  { n: 18, file: "18-generators.html",                title: "Generators & Iterables",          blurb: "yield for lazy sequences — PHP's take on Kotlin's sequence { } builders." },
  { n: 19, file: "19-json.html",                      title: "Working with JSON",               blurb: "json_encode/json_decode into arrays, not kotlinx.serialization data classes." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "Classes, enums, array functions, and JSON — one final project." },
];
