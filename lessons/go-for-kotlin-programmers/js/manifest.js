// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",         title: "Variables & Types",              blurb: "val/var and inferred types → var/const, but Go has no val." },
  { n: 2,  file: "02-strings.html",                     title: "Strings",                        blurb: "Template strings and + concat → fmt.Sprintf and strings.Builder." },
  { n: 3,  file: "03-slices.html",                      title: "Slices",                         blurb: "List<T> and Array<T> collapse into Go's growable slices." },
  { n: 4,  file: "04-maps.html",                        title: "Maps",                           blurb: "mapOf/mutableMapOf → map[K]V, with the comma-ok idiom for lookups." },
  { n: 5,  file: "05-functions.html",                   title: "Functions",                      blurb: "Default args and named params → explicit args, no overloading." },
  { n: 6,  file: "06-structs-and-methods.html",         title: "Structs & Methods",              blurb: "Classes with methods → structs plus separate receiver functions." },
  { n: 7,  file: "07-pointers.html",                    title: "Pointers",                       blurb: "References you never see become Go's explicit *T and &v." },
  { n: 8,  file: "08-interfaces.html",                  title: "Interfaces",                     blurb: "Declared implements → implicit, structural satisfaction." },
  { n: 9,  file: "09-errors.html",                      title: "Errors",                         blurb: "Exceptions and try/catch → returned error values you check." },
  { n: 10, file: "10-goroutines-and-channels.html",     title: "Goroutines & Channels",          blurb: "Coroutines and Flow → goroutines and channels with go and <-." },
  { n: 11, file: "11-generics.html",                    title: "Generics",                       blurb: "<T> and reified types → Go generics with type constraints." },
  { n: 12, file: "12-closures.html",                    title: "Closures",                       blurb: "Lambdas capturing vars work almost the same, minus reified magic." },
  { n: 13, file: "13-type-switches.html",                title: "Type Switches",                  blurb: "when + is smart-casts → switch v := x.(type) in Go." },
  { n: 14, file: "14-defer-panic-recover.html",         title: "Defer, Panic & Recover",         blurb: "try/finally and exceptions → defer, panic, and recover." },
  { n: 15, file: "15-embedding.html",                   title: "Embedding & Composition",        blurb: "Interface delegation → struct embedding for free method promotion." },
  { n: 16, file: "16-sorting.html",                     title: "Sorting",                        blurb: "sortedBy/Comparator → sort.Slice and the Sort interface." },
  { n: 17, file: "17-json.html",                        title: "JSON",                           blurb: "kotlinx.serialization annotations → struct tags and encoding/json." },
  { n: 18, file: "18-custom-errors-and-wrapping.html",  title: "Custom Errors & Wrapping",       blurb: "Exception subclasses and cause chains → errors.Is/As and %w." },
  { n: 19, file: "19-stringers-and-formatting.html",    title: "Stringers & Formatting",         blurb: "Overriding toString() → implementing the Stringer interface." },
  { n: 20, file: "20-capstone.html",                    title: "Capstone",                       blurb: "Everything so far, wired together in one final Go project." },
];
