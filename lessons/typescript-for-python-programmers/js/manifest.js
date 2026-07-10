// Lesson manifest — used by index.html for the lesson list and by
// harness.js for prev/next navigation. Keep in sync with lessons/*.html.
const MANIFEST = [
  { n: 1,  file: "01-variables-and-types.html",       title: "Variables & Basic Types",        blurb: "From optional type hints to enforced annotations." },
  { n: 2,  file: "02-strings-and-template-literals.html", title: "Strings & Template Literals", blurb: "From f-strings to backtick templates." },
  { n: 3,  file: "03-lists-to-arrays.html",           title: "Lists → Arrays",                  blurb: "From list[int] to number[] — append becomes push." },
  { n: 4,  file: "04-dicts-to-objects.html",          title: "Dicts → Objects",                 blurb: "From {\"key\": value} to typed objects and Record." },
  { n: 5,  file: "05-functions.html",                 title: "Functions",                       blurb: "def → function, defaults, and the options-object idiom." },
  { n: 6,  file: "06-none-null-undefined.html",       title: "None, Null & Undefined",          blurb: "One None becomes two: null and undefined, plus ?. and ??." },
  { n: 7,  file: "07-union-types.html",               title: "Union Types",                     blurb: "int | str reads the same — but TS checks every branch." },
  { n: 8,  file: "08-interfaces.html",                title: "Interfaces & Object Shapes",      blurb: "From TypedDict and dataclasses to interface." },
  { n: 9,  file: "09-classes.html",                   title: "Classes",                         blurb: "__init__ and self → constructor, this, and visibility." },
  { n: 10, file: "10-inheritance-and-abstracts.html", title: "Inheritance & Abstract Classes",  blurb: "From abc.ABC and @abstractmethod to abstract class." },
  { n: 11, file: "11-enums.html",                     title: "Enums & Literal Types",           blurb: "From enum.Enum and Literal to TS enums and literal unions." },
  { n: 12, file: "12-generics.html",                  title: "Generics",                        blurb: "From TypeVar('T') to <T> — generics without the ceremony." },
  { n: 13, file: "13-comprehensions-to-array-methods.html", title: "Comprehensions → Array Methods", blurb: "List comprehensions become map/filter/reduce chains." },
  { n: 14, file: "14-tuples-and-destructuring.html",  title: "Tuples & Destructuring",          blurb: "a, b = pair → const [a, b], plus tuple types [string, number]." },
  { n: 15, file: "15-spread-and-rest.html",           title: "Spread & Rest",                   blurb: "*args, **kwargs, and {**a, **b} → the ... operator." },
  { n: 16, file: "16-type-narrowing.html",            title: "Type Narrowing & Guards",         blurb: "isinstance() → typeof, Array.isArray, and type predicates." },
  { n: 17, file: "17-discriminated-unions.html",      title: "Discriminated Unions",            blurb: "From match on dict[\"type\"] to compiler-checked variants." },
  { n: 18, file: "18-utility-types.html",             title: "Utility Types",                   blurb: "Partial, Pick, Omit — dataclasses.replace, as a type." },
  { n: 19, file: "19-async-await.html",               title: "Async & Promises",                blurb: "asyncio.gather → Promise.all; await feels like home." },
  { n: 20, file: "20-modules-and-capstone.html",      title: "Modules & Capstone",              blurb: "from module import x → import { x }, plus a final project." },
];
