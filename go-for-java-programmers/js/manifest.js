// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Types",              blurb: "int/double/String and final → int/float64/string and :=." },
  { n: 2,  file: "02-strings.html",                   title: "Strings",                        blurb: "String.format and StringBuilder → fmt.Sprintf and strings.Builder." },
  { n: 3,  file: "03-slices.html",                    title: "Slices",                         blurb: "ArrayList<Integer> and arrays merge into one growable slice type." },
  { n: 4,  file: "04-maps.html",                      title: "Maps",                            blurb: "HashMap<K, V> → map[K]V, with comma-ok instead of containsKey." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                      blurb: "Overloads and checked exceptions → single signatures and (T, error)." },
  { n: 6,  file: "06-structs-and-methods.html",       title: "Structs & Methods",              blurb: "Classes with fields and methods → structs with receiver functions." },
  { n: 7,  file: "07-pointers.html",                  title: "Pointers",                        blurb: "Implicit object references made explicit with & and *." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces",                     blurb: "Nominal implements → structural, implicitly satisfied interfaces." },
  { n: 9,  file: "09-errors.html",                    title: "Errors",                          blurb: "try/catch and exceptions → returned error values you check." },
  { n: 10, file: "10-goroutines-and-channels.html",   title: "Goroutines & Channels",           blurb: "Threads and ExecutorService → goroutines and channels." },
  { n: 11, file: "11-generics.html",                  title: "Generics",                        blurb: "<T> and bounded wildcards → type parameters and constraints." },
  { n: 12, file: "12-closures.html",                  title: "Closures",                        blurb: "Anonymous classes and lambdas → funcs that capture variables directly." },
  { n: 13, file: "13-type-switches.html",             title: "Type Switches",                   blurb: "instanceof chains and pattern matching → switch on interface{}." },
  { n: 14, file: "14-defer-panic-recover.html",       title: "Defer, Panic & Recover",          blurb: "try/finally and unchecked exceptions → defer, panic, and recover." },
  { n: 15, file: "15-embedding.html",                 title: "Embedding & Composition",         blurb: "extends-based inheritance → struct embedding for composition." },
  { n: 16, file: "16-sorting.html",                   title: "Sorting",                         blurb: "Comparable/Comparator → sort.Slice and the less-function idiom." },
  { n: 17, file: "17-json.html",                      title: "JSON",                            blurb: "Jackson annotations → struct tags and encoding/json." },
  { n: 18, file: "18-custom-errors-and-wrapping.html", title: "Custom Errors & Wrapping",       blurb: "Custom exception subclasses → error types with %w and errors.Is/As." },
  { n: 19, file: "19-stringers-and-formatting.html",  title: "Stringers & Formatting",           blurb: "Overriding toString() → implementing the Stringer interface." },
  { n: 20, file: "20-capstone.html",                  title: "Capstone",                        blurb: "A final project pulling it all together, JVM habits and all." },
];
