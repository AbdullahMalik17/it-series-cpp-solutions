# IT Series: Object-Oriented Programming using C++ — Complete Solutions (Chapters 1–5)

> **Scope & Conventions**
> - Covers all **Multiple Choice Questions (MCQs)** across Chapters 1–5 and all **Output / Expression-Evaluation Exercise Questions** in Chapters 3–5.
> - Evaluated in the book's **Turbo C++ (16-bit)** context (`int` = 2 bytes, `<iostream.h>`, left-to-right operand evaluation where applicable), with **Modern Standard C++** notes wherever behavior differs or is Undefined Behavior (UB).
> - Book errata and typos are explicitly flagged with **[BOOK ERRATA]** or **[TYPO]**.

---

## Chapter 1: Introduction to Programming

### Multiple Choice Questions (Pages 7–8)

*(Book provides an answer key on page 8; discrepancies are flagged below.)*

| # | Correct Answer | Book Key | Status & Explanation |
|---|---|---|---|
| 1 | **a. Software** | a | **Correct.** Computer programs are collectively referred to as software. |
| 2 | **d. All** | d | **Correct.** Algorithms, programming, and flowcharts are all problem-solving techniques/steps. |
| 3 | **d. Multiple** | d | **Correct.** A problem can have multiple possible solutions. |
| 4 | **a. Programmer** | a | **Correct.** A person who develops programs is a programmer. |
| 5 | **d. Algorithm** | d | **Correct.** An algorithm is a step-by-step procedure to solve a problem. |
| 6 | **b. Flowchart** | b | **Correct.** A flowchart graphically represents the steps of an algorithm. |
| 7 | **b. Condition** | b | **Correct.** The diamond symbol represents a decision/condition. |
| 8 | **a. Process** | a | **Correct.** The rectangle symbol represents a processing step. |
| 9 | **c. Both a and b** | c | **Correct.** The parallelogram symbol represents both input and output. |
| 10 | **a. Desk Checking** | a | **Correct.** Manually tracing an algorithm on paper is desk checking. |
| 11 | **b. Coding** | b | **Correct.** Writing a program in a programming language is coding. |
| 12 | **a. Syntax** | a | **Correct.** Syntax is the set of grammatical rules of a programming language. |
| 13 | **a. Program enhancement** | a | **Correct.** Program upgradation refers to enhancing/updating a program. |
| 14 | **c. User manual** *(or a. SRS)* | b | **[BOOK ERRATA]** Book says `b. Problem description`, which is incorrect. A *User manual* describes how the software is used, while *Software requirement specification* describes its features. |
| 15 | **a. Design Algorithm** | a | **Correct.** Designing the algorithm is the most challenging part of problem solving. |
| 16 | **b. Compiled programs are already in a machine-readable form.** | c | **[BOOK ERRATA]** Book says `c. Compiled programs do not require any data`, which is false. Compiled programs run faster because they are already translated into machine code. |
| 17 | **d. Object code** | d | **Correct.** A compiler translates source code into object code. |
| 18 | **c. Machine language code** | c | **Correct.** Test procedures, algorithm, and user manual are part of documentation; machine code is not. |
| 19 | **d. All of above** | d | **Correct.** Machine language was first used, is directly understood by hardware, and is machine-dependent. |
| 20 | **a. Machine language** | a | **Correct.** Machine language instructions are written in binary (0s and 1s). |
| 21 | **c. Machine language** | c | **Correct.** Machine language is the native language of the computer. |
| 22 | **d. Both a and c** | d | **Correct.** Writing in machine language is both complex and time-consuming. |
| 23 | **a. Less time consuming** | d | **[BOOK ERRATA]** Book says `d. Both a & c` (meaning "Less time consuming" and "Less simple"). High-level languages are *simpler*, not "Less simple". |
| 24 | **a. Assembly language** | a | **Correct.** Assembly language is a low-level language. |
| 25 | **b. Assembly Language** | b | **Correct.** Among the choices listed, Assembly is the lowest-level language. |
| 26 | **b. Mnemonic codes** | b | **Correct.** Assembly language uses symbolic mnemonics (e.g., `ADD`, `SUB`). |
| 27 | **c. Assembler** | c | **Correct.** An assembler translates assembly code to machine code. |
| 28 | **b. Compiler** | b | **Correct.** A compiler translates the entire source program into object code as a whole. |
| 29 | **c. Interpreter** | c | **Correct.** An interpreter translates and executes one statement/line at a time. |
| 30 | **d. COBOL** | d | **Correct.** COBOL (Common Business-Oriented Language) was designed for business applications. |
| 31 | **d. BASIC** | d | **Correct.** BASIC (Beginner's All-purpose Symbolic Instruction Code) was created for teaching programming. |
| 32 | **c. C++** | c | **Correct.** C++ supports object-oriented programming. |
| 33 | **c. Sun System** | c | **Correct.** Java was developed by Sun Microsystems. |
| 34 | **b. FORTRAN** | b | **Correct.** FORTRAN (Formula Translation) was designed for mathematical and engineering applications. |

---

## Chapter 2: Introduction to C++

### Multiple Choice Questions (Pages 11–13)

*(No answer key is printed in the book for Chapter 2 MCQs.)*

1. **d. Bjarne Stroustrup** — Developed C++ at Bell Labs.
2. **c. Unix operating system** — C++ (originally "C with Classes") was developed in the Unix environment at Bell Labs.
3. **a. High level language** — C++ is classified as a high-level language.
4. **b. C and C++ programs** — Turbo C++ includes both C and C++ compilers.
5. **b. Identifying and removing errors** — Debugging is the process of finding and fixing bugs.
6. **c. C++ preprocessor** — *[TYPO: "Processor directives" means preprocessor directives]*; they instruct the C++ preprocessor.
7. **c. Can not be changed but can be redefined** — *[TYPO: "defined directive" means `#define`]*; macro constants cannot be modified at runtime, though they can be `#undef`'d and redefined.
8. **c. Machine language** — Directly executed by the CPU without a translator.
9. **a. Linker** — Combines object files and library files into an `.exe` executable.
10. **a. Zero** — `void` represents the absence of a type/value and occupies 0 bytes.
11. **a. F2** — In Turbo C++ IDE, `F2` saves the current file.
12. **d. All** — A basic C++ program consists of preprocessor directives, `main()`, and the program body.
13. **a. `#include <iostream.h>`** — Preprocessor/compiler directive; `using namespace std;` is a C++ declaration/directive, not a `#` preprocessor directive (and note `int main()` is a function header).
14. **b. C++ standard library** — `iostream.h` (modern `<iostream>`) is a standard library header.
15. **c. `#`** — All preprocessor directives begin with `#`.
16. **c. Both a or b** — `#include <file>` searches system directories; `#include "file"` searches the current directory first.
17. **c. Function** — `main()` is the entry-point function of a C++ program.
18. **c. Semicolon** — C++ statements are terminated by `;`.
19. **c. Closing brace** — Every `{` must have a matching `}`.
20. **c. `#include` directive** — Inserts the contents of the specified header file.
21. **a. Editing** — Writing/editing the source code is the first step.
22. **a. Editing -> saving -> compiling -> linking -> Executing** — Standard C++ build-and-run workflow.
23. **a. Compiling** — Converts source code into object code.
24. **c. Linking** — Combines object code with library files.
25. **c. Executing** — Running the executable file.
26. **a. Object file** — Contains the translated machine code before linking.
27. **d. Bug** — Standard term for a software/program error.
28. **b. Operator error** — Run-time, syntax, and logic errors are program bugs; operator error is user error.
29. **b. Logic error.** — Program runs without crashing but produces unintended results.
30. **d. Object code** — Output of the compiler.
31. **d. Nothing** — `Cout` is capitalized! C++ is case-sensitive, so `Cout` causes a compile-time error and prints nothing. *(Note: If `Cout` is a book print typo for `cout`, the intended answer would be `b. hello`.)*
32. **b. Rules used to create a computer program.** — Syntax defines the grammatical rules of the language.
33. **a. The program instructions violate grammatical rules.** — Definition of a syntax error.
34. **a. Compiler** — Syntax errors are caught during compilation.
35. **b. Logical error** — Compilers cannot detect flawed program logic.
36. **a. Source module** — Source code is plain text, not machine code.
37. **a. Syntax error** — Misspelling a keyword like `intt` violates C++ syntax.
38. **b. Run-time error** — Division by zero causes an illegal operation during execution.
39. **a. The beginning of a comment** — `//` starts a single-line comment.
40. **d. is ignored by compiler** — `/* ... */` is a multi-line comment ignored by the compiler.
41. **a. To help others read and understand the program** — Comments improve readability and maintainability.

---

## Chapter 3: Programming in C++

### Exercise Output & Evaluation Questions (Pages 19–23)

#### Q.51 (Declarations: `int i=1, j=2, k=3; double x=1.0, y=2.0, z=3.0;`)
- **a.** `i + j == k;` -> `((1 + 2) == 3)` -> `3 == 3` -> **`1`** (Book: `1` — **Correct**)
- **b.** `k - i < y > x;` -> `(((3 - 1) < 2.0) > 1.0)` -> `(2 < 2.0) > 1.0` -> `0 > 1.0` -> **`0`** (Book: `0` — **Correct**)
- **c.** `z - x + 1 != j + k - 2 * i;` -> `(((3.0 - 1.0) + 1) != ((2 + 3) - 2))` -> `3.0 != 3` -> **`0`** (Book: `0` — **Correct**)

#### Q.52 (Output of expressions)
- **a.** `1 + 8/2 + ((1*4)+(5*4))/4` = `1 + 4 + (4 + 20)/4` = `5 + 6` = **`11`** (Book: `11` — **Correct**)
- **b.** `(1+1+1)/2 + (1+1+1)/3` = `3/2 + 3/3` = `1 + 1` = **`2`** (Book: `3` — **[BOOK ERRATA]**: integer division `3/2` is `1`, not `2`, so the true output is `2`.)
- **c.** `5*5 + 5/5 + 6` = `25 + 1 + 6` = **`32`** (Book: `32` — **Correct**)
- **d.** `((3+4)+(4*7))/5` = `(7 + 28)/5` = `35/5` = **`7`** (Book: `12` — **[BOOK ERRATA]**: `35 / 5 = 7`, not `12`.)
- **e.** `(3*6*7*2) + 12/2` = `252 + 6` = **`258`** (Book: `258` — **Correct**)
- **f.** `5 - 3*4 % (6-1)` = `5 - (12 % 5)` = `5 - 2` = **`3`** (Book: `3` — **Correct**)
- **g.** `(8 * 4 * 2 + 6) / 2 + 4` = `(64 + 6)/2 + 4` = `35 + 4` = **`39`** (Book: `39` — **Correct**)

#### Q.53 (Code snippets)
- **a.** `int x=20,y=35; x=y++ + x++; y= ++y + ++x; cout<<x<<y;`
  - *Turbo C++ trace:* `x = 35 + 20 = 55`, then `y++` -> `36`, `x++` -> `56`. Next: `++y` -> `37`, `++x` -> `57`, `y = 37 + 57 = 94`. Output: **`5794`** (Book: `5794` — **Correct in Turbo C++**).
  - *Modern C++ note:* Modifying `x` and `y` multiple times without sequencing is **Undefined Behavior**.
- **b.** `int x=10, y=15; x = x++; y = ++y; cout<<x<<","<<y;`
  - *Turbo C++ trace:* `x` gets `10` then increments to `11`; `y` pre-increments to `16`. Output: **`11,16`** (Book: `11,16` — **Correct in Turbo C++**).
  - *Modern C++ note:* `x = x++` is UB prior to C++17 and evaluates to `10` in C++17+.
- **c.** `int a = 10; a++; cout << a << endl;` -> **`11`** (Book: `11` — **Correct**)
- **d.** `int a = 10; cout << a++ << endl;` -> **`10`** (Book: `10` — **Correct**)
- **e.** `int n = 10; int x = 0; x = n--; cout << x << endl;` -> **`10`** (Book: `10` — **Correct**)
- **f.** `int i=5, j=6, k=7, n=3;` -> `5 + 6*7 - 7%3` = `5 + 42 - 1` = **`46`**, and `5/3` = **`1`** (Book: `46` / `1` — **Correct**)
- **g.** `int n; float x = 3.8; n = int(x); cout << "n = " << n << endl;` -> **`n = 3`** (Book: `n=3` — **Correct**, minor spacing difference)
- **h.** `a=6` -> prints `6`; `a=9` -> prints `9`; `a=4` -> prints `4`; `a=5` -> prints `5` -> **`6945`** (Book: `6945` — **Correct**)

#### Q.54
- `int i = 5; cout << i << endl; cout << (i++) << endl; cout << (++i) << endl;`
- Trace: prints `5`, then prints `5` (`i` becomes `6`), then increments `i` to `7` and prints `7` -> **`5\n5\n7`** (Book: `5`, `5`, `7` — **Correct**)

#### Q.55
- `int a=3, b=4; ++a *= b++; cout<<a<<endl;`
  - **[TYPO in book code]**: Book prints `++a* = b++;` with a space between `*` and `=`, which is a syntax error; intended operator is `*=`.
- **a.** `++a` -> `4`; `4 *= 4` -> `a = 16`, `b` becomes `5`. Output: **`16`** (Book: `16` — **Correct** without space in `*=`)
- **b.** With `++a *= ++b`: `++a` -> `4`; `++b` -> `5`; `4 * 5` = **`20`** (Book: `20` — **Correct**)
- **c.** Elementary operations: `a=a+1; b=b+1; a=a*b;` (or `b=b+1; a=a+1; a=a*b;`) (Book — **Correct**)

#### Q.56
- `a=5` -> `a++` (`6`) -> `a=a+1` (`7`) -> `b=a` (`7`) -> `b++` (`8`) -> `a=b` (`8`) -> **`8`** (Book: `8` — **Correct**)

#### Q.58 (`a=2, b=3, c=5`)
- **a.** `++a;` -> Valid, `3, 3, 5` (Book — **Correct**)
- **b.** `abc;` -> Invalid (Book — **Correct**)
- **c.** `a++;` -> Valid, `3, 3, 5` (Book — **Correct**)
- **d.** `b+=a;` -> Valid, `2, 5, 5` (Book — **Correct**)
- **e.** `b+=a*c;` -> `3 + 2*5 = 13` -> Valid, `2, 13, 5` (Book — **Correct**)
- **f.** `a++b;` -> Invalid (Book — **Correct**)
- **g.** `a+=2; b=2/2; c=a*b;` -> `a=4, b=1, c=4` -> Valid, `4, 1, 4` (Book — **Correct**)
- **h.** `++b++;` -> Invalid (Book — **Correct**)
- **i.** `b = a++ + b++;` -> *Turbo C++:* `b = 2 + 3 = 5`, `a=3`, `b++` -> `6`, `c=5` -> `3, 6, 5` (Book: `Valid, 3, 6, 5` — **Correct in Turbo C++**; **UB in Modern C++**).

#### Q.59 (Calculate value of `n`)
- **a.** `22/8` = **`2`** (Book: `2` — **Correct**)
- **b.** `99/8 + 21/11*7` = `12 + 1*7` = **`19`** (Book: `19` — **Correct**)
- **c.** `2.0/4.0 - 8.0/3.0` = `0.5 - 2.66667` = **`-2.16667`** (Book: `-2.16667` — **Correct**)
- **d.** `8/6 + 2/3` = `1 + 0` = **`1`** (Book: `1` — **Correct**)
- **e.** `int a=3.3` (`3`), `b=2.7` (`2`), `p=8.7` (`8`), `q=5.4` (`5`); `8/2 + 5/3` = `4 + 1` = **`5`** (Book: `5` — **Correct**)
- **f.** `11 + 7/4 + 98%6*3` = `11 + 1 + 2*3` = **`18`** (Book: `18` — **Correct**)
- **g.** `11/31%8*5 - 12` = `0%8*5 - 12` = **`-12`** (Book: `-12` — **Correct**)
- **h.** `5*8.0 + 3.0*8*8 - (5%3)*8*8*8` = `40 + 192 - 2*512` = `232 - 1024` = **`-792`** (Book: `-792` — **Correct**)
- **i.** `(9%2)*5.0 + 6.0*5.0*(9%3) + (9%4)*5*5*5` = `1*5 + 0 + 1*125` = **`130`** (Book: `130` — **Correct**)
- **j.** `n=3, a=6, b=2; n*=a+b` (`24`); `a--` (`5`); `n%=a` (`24%5`) = **`4`** (Book: `4` — **Correct**)
- **k.** `n=5; ++n` (`6`); `a=--n` (`a=5, n=5`); `n=n-a` = **`0`** (Book: `0` — **Correct**)

#### Q.61 (`a=10, b=20, c=15, d=8, e=40`)
- **1.** `(10 + 20/(15-5)) / ((8+7)/(40-37)%3)` = `(10 + 2) / (15/3 % 3)` = `12 / (5 % 3)` = `12 / 2` = **`6`** (Book: `6` — **Correct**)
- **2.** `10 + 20/15 - 5/8 + 7/40 - 37%3` = `10 + 1 - 0 + 0 - 1` = **`10`** (Book: `10` — **Correct**)
- **3.** `10*(20*20) - (15*20) + 8` = `4000 - 300 + 8` = **`3708`** (Book: `3708` — **Correct**)

#### Q.62
- **a.** `float y = 3.4 + sqrt(25.0);` = `3.4 + 5.0` = **`8.4`** (Book: `8.4` — **Correct**)

---

### Multiple Choice Questions (Pages 23–28)

*(No answer key is printed in the book for Chapter 3 MCQs.)*

1. **b. Variable.** — A named memory location whose value can change during execution.
2. **a. RAM** — Variables are allocated in main memory (RAM).
3. **a. Constant.** — A memory location whose value cannot change.
4. **c. `'6'`** — Single character enclosed in single quotes.
5. **c. `=`** — Assignment has the lowest precedence among `!`, `+`, `=`, `==`.
6. **d. both b and c** — `top 40` has a space; `&UpAndDdOwN` starts with `&`.
7. **b. Every variable must be declared before it is being used** — Matches the book's definition of strongly typed in Chapter 3 Q.11.
8. **d. both a and b** — `my-Name` has a hyphen; `9littles` starts with a digit.
9. **c. `a=a+b`** — Compound addition assignment.
10. **c. The name cannot change, but the data value can.** — Identifier is fixed; stored data can vary.
11. **a. Use a descriptive name for the variable.** — Good coding style, not a compiler syntax rule.
12. **d. Period.** — Dots (`.`) are not allowed in identifier names.
13. **a. Number.** — Identifiers cannot start with a digit.
14. **a. `return`** — `return` is a reserved C++ keyword.
15. **b. `Integer` / c. `notlongenough` / d. `SuperLong`** — *Note:* `a. long` is invalid (keyword); **b, c, and d are all valid C++ identifiers** (C++ is case-sensitive, so `Integer` is valid).
16. **b. Datatype** — Specifies the kind of values a variable can store.
17. **b. Each data type has different memory requirements.** — E.g., `char` (1B), `int` (2B/4B), `double` (8B).
18. **a. `int`** — Stores whole numbers without decimal points.
19. **c. Both a and b.** — Floating-point and integer are both numeric types.
20. **a. 2** — In Turbo C++ (16-bit), `int` is 2 bytes. *(Modern 32/64-bit C++: typically 4 bytes.)*
21. **b. 4** — `long int` is 4 bytes in Turbo C++ (and Windows 32/64-bit).
22. **d. None** — In Turbo C++ (16-bit `int` max `32767`), `32898` overflows `int`, `-1.1` is a float, and `"123"` is a string. *(Modern 32-bit C++: `c. 32898` would fit in `int`.)*
23. **a. Integer data types** — `short`, `int`, and `long` are integer types.
24. **b. `float`** — Handles decimal/fractional numbers.
25. **d. Real data** — Floating-point types represent real numbers.
26. **a. Floating points numbers** — Stored in `float` and `double`.
27. **b. 4** — `float` occupies 4 bytes.
28. **b. 8** — `double` occupies 8 bytes.
29. **d. Overflow** — Occurs when a value exceeds the type's maximum capacity.
30. **d. Both a and b** — Scientific/exponential notation has a mantissa and an exponent.
31. **b. Precision** — Number of significant digits / digits after decimal point.
32. **c. `string`** — Used to store string values in C++ (`<string>`).
33. **b. 1** — `char` occupies 1 byte.
34. **a. `char`** — Stored as a `char` array (`char str[]`) among the given options.
35. **a. `3.452211903e09`** — `3.452211903 × 10^9`.
36. **a. `150000.0`** — `0.15 × 10^6 = 150000.0`.
37. **d. `char ch="cc";`** — Double quotes create a string literal, which cannot be assigned to a `char`.
38. **d. Both b & c** — Variable name and data type are required.
39. **a. Commas** — Separates multiple variables in one declaration (e.g., `int a, b;`).
40. **d. All** — All three statements are valid variable declarations.
41. **c. `char`** — Used as a `char` array for names among the given options.
42. **b. Initializing** — Assigning an initial value at declaration.
43. **d. All** — All three are valid initializations.
44. **a. `int =100;`** — Missing variable identifier.
45. **b. `int day, night;`** — `a` leaves `num2` untyped; `c` uses keyword `continue`; `d` uses single quotes for a multi-char string.
46. **d. `const int MY_HEIGHT = 60 / 12;`** — Evaluates to `5`; `a` has comma, `b` truncates `6.5` to `6`, `c` has `$`.
47. **d. All** — Letters, digits, and special characters can all be character constants.
48. **d. All** — `'A'`, `'9'`, and `'$'` are all valid `char` constants.
49. **b. Single quotes (`'`).** — Character constants use `'...'`.
50. **b. `-32768 to +32767`** — 16-bit `int` range in Turbo C++. *(Modern 32-bit C++: `-2,147,483,648 to +2,147,483,647`.)*
51. **c. 8** — Two `float` variables × 4 bytes each = 8 bytes.
52. **a. 1 byte** — Size of a `char` variable.
53. **c. Both a and b** — Expressions consist of operators and operands.
54. **d. All** — Constants, variables, and combinations with operators are all valid expressions.
55. **b. `Mpg, Gallons.`** — Missing an arithmetic operator between `Mpg` and `Gallons`.
56. **d. Both a and b.** — Evaluates the RHS calculation and stores the result in the LHS variable.
57. **d. `>`** — `>` is a relational operator, not an arithmetic operator.
58. **d. Integer remainder** — `%` returns the remainder of integer division.
59. **a. `%`** — Modulus works only on integer operands.
60. **a. 1** — `10 % 3 = 1`.
61. **a. 3** — `3 % 5 = 3`.
62. **a. 0** — `0 % 4 = 0`.
63. **d. 2** — `(9 / 5) * 2 = 1 * 2 = 2`.
64. **c. 0** — `(5 / 9) * 2 = 0 * 2 = 0`.
65. **c. 12** — `10.5 + 2 = 12.5`, truncated to `int` `12`.
66. **c. 83** — `80.9 + 2.9 = 83.8`, truncated to `int` `83`.
67. **b. 12** — `13 + (21 % 4) - 2 = 13 + 1 - 2 = 12`.
68. **d. 12.0** — `38 / 4 = 9` (integer division), then `9 + 3.0 = 12.0`.
69. **d. 7** — `(11 % 4) + 10 - (2 * 3) = 3 + 10 - 6 = 7`.
70. **a. 10** — `4 * (5 + 4) % 3 / 2 + 10 = 36 % 3 / 2 + 10 = 0 / 2 + 10 = 10`.
71. **a. 3.75** — `3.0/4.0 + 3 + 2/5 = 0.75 + 3 + 0 = 3.75`.
72. **a. 52.0** — `(20.0 * (9/5)) + 32.0 = 20.0 * 1 + 32.0 = 52.0`.
73. **a. 68.0** — `(20.0 * (9/5.0)) + 32.0 = 20.0 * 1.8 + 32.0 = 36.0 + 32.0 = 68.0`.
74. **b. `someChar = 'A';`** — Assigns character literal `'A'`.
75. **c. `=`** — Assignment operator.
76. **a. `Variable = right_side`** — LHS must be a modifiable variable.
77. **a. Variable.** — LHS holds the target variable.
78. **c. Both a and b** — RHS can be a variable or an expression.
79. **d. All of these** — All three are valid assignment statements.
80. **a. Unary** — Operates on a single operand.
81. **b. Binary** — Operates on two operands.
82. **a. Compound assignment** — Used in this book's context for chained/compound assignment.
83. **a. `I = I+3.`** — `+=` adds RHS to LHS and assigns back.
84. **a. `++`** — Increment operator.
85. **a. `--`** — Decrement operator.
86. **a. `()`** — Parentheses have the highest precedence.
87. **b. `int` to `float`** — `x` (`int`) is promoted to floating-point for addition *(strictly `double` for `5.0`, then stored in `float y`)*.
88. **d. 33** — `10 * 3 + 3 = 33`.
89. **b. 30** — `0 + 30 = 30`.
90. **c. 3.0** — `13 / 4 = 3` (integer division), stored in `float` as `3.0`.
91. **b. 3** — `15 / 4 = 3`.
92. **c. 1** — `17 % 4 = 1`.
93. **a. -8** — `(9 / 9) - 9 = 1 - 9 = -8`.
94. **a. 2** — `6 / (6 / 2) = 6 / 3 = 2`.
95. **a. 29** — `24 + 5 = 29`.
96. **c. -8** — `14 - 24 + 2 = -8` *([TYPO]: `result` vs `Result` case mismatch in question)*.
97. **a. Keywords** — Predefined words with special meaning.
98. **a. Reserved words** — Synonym for keywords.
99. **a. -2** — `++a` (`6`), `6/3 - 2*2 = 2 - 4 = -2`.
100. **a. 22** — `33 - 35 / (11 % 4) = 33 - 35 / 3 = 33 - 11 = 22`.
101. **b. 11** — `9 + 2 + 0 = 11`.
102. **c. -11.0** — `(12.0 / 2 * (3 - 4)) - 5 = (6.0 * -1) - 5 = -11.0`.
103. **d. All** — All three expressions perform floating-point division yielding `0.5`.
104. **a. 0** — `-16` is evenly divisible by `4`.
105. **d. All** — All three increment `y` by 1.
106. **d. both a and b** — `c` has `Number` capitalized instead of `number`.
107. **c. `x is 3.3 and y is 3`** — `(int)x` truncates `3.3` to `3`.

---

## Chapter 4: Input and Output

### Exercise Output Questions (Pages 30–32)

#### Q.5
- `C1='A'; C2='B'; C3='C'; cout<<C1<<C2<<"C3";`
- Trace: `C1` -> `A`, `C2` -> `B`, `"C3"` is a string literal -> `C3`. Output: **`ABC3`** (Book: `ABC3` — **Correct**)

#### Q.6
- `cout << "One" << "Two" << endl;` -> `OneTwo`
- `cout << "Three" << "Four" << endl;` -> `ThreeFour`
- `cout << "Five" << "Six" << endl;` -> `FiveSix`
- (Book — **Correct**)

#### Q.7
- `int x = 2; double y = 3.0; cout << setprecision(2); cout << x * y << " and " << x / y;`
- Trace: `x * y = 6.0` (prints `6` without `fixed`); `x / y = 0.6666...` (rounded to 2 significant digits -> `0.67`). Output: **`6 and 0.67`** (Book: `6 and 0.67` — **Correct**)

#### Q.8
- `int x = 13, y = 3; cout << x/y << y/x << x%y;`
- Trace: `13/3 = 4`, `3/13 = 0`, `13%3 = 1`. Output: **`401`** (Book: `401` — **Correct**)

#### Q.9 (Input: `3 2 4`)
- `y = x + z` (`3 + 4 = 7`), `x = z + 1` (`4 + 1 = 5`), `z = 4`. Output: **`5 7 4`** (Book: `5 7 4` — **Correct**)

#### Q.10
- `cout << "This\nisa \nC++\nprogram\n";`
- *([TYPO in book code]: `\nisa ` prints `isa ` without a space between `is` and `a`, though the book's answer shows `is a`.)*

#### Q.11
- `cout << "\top ba\na\\na";`
- Trace: `\t` inserts a tab before `op ba`, `\n` starts a new line, `\\` prints a single `\`. Output:
  ```
  	op ba
  a\na
  ```
  (Book — **Correct**)

#### Q.12
- `a = 2.467; b = 5.254;` -> swapped -> `a = 5.254`, `b = 2.467`.
- `fixed << setprecision(2)` formats to 2 decimal places: `5.25` and `2.47`.
- `setw(5) << a` -> ` 5.25` (1 leading space); `setw(7) << b` -> `   2.47` (3 leading spaces).
- Output: **` 5.25   2.47`** (Book — **Correct**, ignoring trailing empty grid cells; *note: `fixed` is ANSI/Modern C++ `<iomanip>`, whereas Turbo C++ used `setiosflags(ios::fixed)`*).

#### Q.13
- Output:
  ```
  One
  Two
  Three	Four
  Five	Six
  ```
  (Book — **Correct**)

#### Q.14 (`i = 2, j = 6`)
- `cout << i;` -> **`2`** (Book — **Correct**)
- `cout << "i = " << i;` -> **`i = 2`** (Book — **Correct**)
- `cout << "Sum = " << i + j;` -> **`Sum = 8`** (Book — **Correct**)
- `cout << "i = " << i << endl << "j = " << j << endl << "sum = " << i + j << endl;` -> **`i = 2\nj = 6\nsum = 8`** (Book — **Correct**)
- `cout << j % i << endl;` -> `6 % 2` = **`0`** (Book — **Correct**)

---

### Multiple Choice Questions (Page 32)

*(No answer key is printed in the book for Chapter 4 MCQs.)*

1. **a. an object** — `cin` is the standard input stream object (`istream`).
2. **a. `cin`** — Reads input from the standard input device (keyboard).
3. **c. stream extraction (`>>`)** — Extracts data from `cin` into variables.
4. **a. `iostream.h`** — Header for standard I/O in Turbo C++ (`<iostream>` in Modern C++).
5. **a. `cout` object** — Standard output stream object.
6. **c. A and b** — `cout` displays literal text as well as constants/variable values.
7. **c. Many** — Multiple `<<` insertions can be chained in one `cout` statement.
8. **d. `\n`** — Newline escape sequence.
9. **a. `\a`** — Alert/bell escape sequence.
10. **c. `\t`** — Horizontal tab escape sequence.
11. **d. `\r`** — Carriage return moves cursor to the beginning of the current line.
12. **b. `iomanip`** — `<iomanip>` defines parameterized manipulators like `setprecision` and `setw`.
13. **c. `world###1.97`** — `"world"` (5 chars) left-aligned in width 6 gives `world#`; `1.97` (4 chars) right-aligned in width 6 gives `##1.97`.
14. **b. `setprecision`** — Sets decimal precision (with `fixed`) or total significant digits.

---

## Chapter 5: Conditional Structures

### Exercise Output & Evaluation Questions (Pages 37–40)

#### Q.21 (Evaluate to `true` or `false`)
- **a.** `(3<4) || (3>4)` -> `true || false` = **`True`** (Book: `True` — **Correct**)
- **b.** `(3!=3) && (4 == 4)` -> `false && true` = **`False`** (Book: `False` — **Correct**)
- **c.** `(15>=15) && (16==16) || (14<2)` -> `true && true || false` = **`True`** (Book: `True` — **Correct**)
- **d.** `6 <= 6 && (5 < 3)` -> `true && false` = **`False`** (Book: `False` — **Correct**)
- **e.** `(6 <= 6) || (5 < 3)` -> `true || false` = **`True`** (Book: `True` — **Correct**)
- **f.** `(5 != 6)` -> **`True`** (Book: `True` — **Correct**)
- **g.** `(5 < 3) && (6 <= 6) || (5 != 6)` -> `(false && true) || true` = **`True`** (Book: `True` — **Correct**)
- **h.** `(5 < 3) && ((6 <= 6) || (5 != 6))` -> `false && true` = **`False`** (Book: `False` — **Correct**)
- **i.** `!((5 < 3) && ((6 <= 6) || (5 != 6)))` -> `!(false)` = **`True`** (Book: `True` — **Correct**)
- **j.** `!(12 > 25) && !(18 < 17)` -> `true && true` = **`True`** (Book: `True` — **Correct**)

#### Q.22
- **a.** `p=1, q=9`: `(1 >= 3) || (9 < 11 && 10 < 15)` -> `false || true` -> **`hello`** (Book: `hello` — **Correct**)
- **b.** `k=5`: `100 % 5` is `0` (false), so `n = k - 1 = 4`. Output: **`n = 4 k =5`** (Book: `n = 4 k = 5` — **Correct**, minor spacing difference)
- **c.** `found=0, count=5`: `!found` is `true`, so `||` short-circuits and `--count` is not executed (`count` remains `5`). Output: **`danger\ncount = 5`** (Book — **Correct**)

#### Q.23 (`score = 62`)
- Separate `if` statements without `else`: `62 < 70`, `62 < 80`, `62 < 90`, and `62 < 100` are all true.
- Output: **`AverageAbove averageVery goodExcellent`** (Book — **Correct**)

#### Q.24 (`grade = 'B'`)
- `&&` has higher precedence than `||`: `('B' == 'A') || (('B' == 'B') && ('B' == 'C'))` -> `false || (true && false)` -> `false`.
- Output: **`Pass`** (Book: `Pass` — **Correct**)

#### Q.25
- `b=6, c=5`: `b++ == 7` is `6 == 7` (`false`), then `b` becomes `7`; `&&` short-circuits (`c` stays `5`).
- Enters `else`: `cout << b-- << endl;` prints **`7`** (then `b` becomes `6`). (Book: `7` — **Correct**)

#### Q.26
- `n1=25, n2=50`:
  1. `n1 < n2 && !(n2 != 2 * n1)` -> `25 < 50 && !(50 != 50)` -> `true`. `n1 = 50`, `n2 = 100`, prints `50100`.
  2. `n2 < 2 * n1 || n1 == n2` -> `100 < 100 || 50 == 100` -> `false || false` -> `false` (second `if` does NOT execute).
- True output: **`50100`** (Book: `501005050` — **[BOOK ERRATA]**: second `if` condition is false, so nothing is printed after `50100`.)

#### Q.27
- `'A' == 'a'` (false), `'A' > 'a'` (`65 > 97`, false), `else n = 3;`. Output: **`3`** (Book: `3` — **Correct**)

#### Q.28
- `n=5`: `(--n)%4` -> `4 % 4 = 0`. Matches `case 0: n++; break;` -> `n` becomes `5`. Output: **`5`** (Book: `5` — **Correct**)

#### Q.29
- `n=5, a=4, b=0, c=8`:
  1. `(b<=6 && c>4) || a++==6` -> `true` (short-circuits, `a` stays `4`), `n` -> `6`.
  2. `a!=4 || b>5 || c<=9` -> `false || false || true` -> `true`, `n = 6 + 4 = 10`, `a` -> `5`.
  3. `c<=2 || a>=5 && b--==0` -> `false || (true && true)` (`b` -> `-1`), `n = 10 * 5 = 50`, `a` -> `6`.
- Final value of `n`: **`50`** (Book: `50` — **Correct**)

#### Q.30
- `a=4, b=2, c=5`: `a > b` is `true` -> `a = 5`. Next `c == a` (`5 == 5`) is `true` -> `a = 6`. Output: **`6`** (Book: `6` — **Correct**)

#### Q.31
- `choose = 'b'`: No `break` statements in `switch`, so execution falls through `case 'b'`, `case 'c'`, and `default`.
- Output:
  ```
  you lose!
  you draw!
  I don't know you!
  ```
  (Book — **Correct**)

#### Q.32
- `x = 5 + 7/2 = 5 + 3 = 8`. Matches `case 8:` -> **`r`** (Book: `r` — **Correct**)

---

### Multiple Choice Questions (Pages 43–46)

*(No answer key is printed in the book for Chapter 5 MCQs.)*

1. **a. Sequence, decision, and repetition.** — The three fundamental structured programming constructs.
2. **c. Sequence** — Statements execute one after another in order.
3. **b. Selection.** — Decision-making selects a path of execution.
4. **b. Decision** — Evaluates a condition/comparison to choose a branch.
5. **a. Condition.** — An expression using relational operators.
6. **a. Compare** — Relational operators compare values (`<`, `>`, `==`, etc.).
7. **a. Zero** — `false` evaluates to `0`.
8. **d. All** — Decision statements can test conditions, chains of conditions, and handle false branches.
9. **d. Relational operators** — Compare operands and return true/false.
10. **b. If statement** — Simplest single-branch decision structure.
11. **a. 0** — `0` represents `false`.
12. **b. 1** — `1` (or any non-zero value) represents `true`.
13. **a. `if-else`** — Selects between two alternative paths.
14. **b. `if-else`** — Ternary `?:` is a compact alternative to simple `if-else`.
15. **b. Any expression that can be evaluated to a Boolean value.** — `if (...)` accepts any boolean-convertible expression.
16. **a. A nested if statement.** — An `if` inside another `if`.
17. **b. Logical Operator** — Joins conditions (`&&`, `||`).
18. **b. `switch` statement** — Multi-way branch based on a single integral/char expression.
19. **a. `case 1:`** — `case` labels require an integral constant expression (`x<4` is non-constant, `'ab'` is multi-char, `1.5` is floating-point).
20. **a. An individual condition to test.** — Each `case` tests a specific constant value.
21. **c. The expression to be evaluated.** — `switch (expression)`.
22. **c. `break`** — Terminates a `case` block to prevent fall-through.
23. **b. `!(p < q)`** — Logical negation of `p < q` is `p >= q`.
24. **a. Ternary** — Takes three operands.
25. **a. Three operands** — `condition ? expr1 : expr2`.
26. **c. `?`** — The conditional (`?:`) operator.
27. **c. `=`** — `=` is the assignment operator, not a relational operator.
28. **c. `A!=B`** — `25 != 35` is true.
29. **d. `A >= B`** — `4 >= 4` is true.
30. **b. Logical Operator** — Joins two conditions in a compound condition.
31. **b. Logical operators.** — `&&`, `||`, `!` operate on boolean truth values.
32. **a. `||`** — Logical OR.
33. **b. `&&`** — Logical AND.
34. **c. `!`** — Logical NOT.
35. **d. `=`** — Assignment operator, not a logical operator.
36. **d. `&&`** — Logical AND, not a relational operator.
37. **d. b and c above** — Both `0 < beta && beta < 100` and `(0 < beta) && (beta < 100)` are valid and equivalent.
38. **b. `false`** — `j < 4` (`20 < 4`) is false, `j == 5` (`20 == 5`) is false, and `20 == 5` is false -> `false || false || false` = `false` *([TYPO]: `k3` in the question is a typo for `k`)*.
39. **c. `p && !p`** — A proposition and its negation cannot both be true.
40. **a. `Good`** — `(1==1)` is true, so `if` branch executes.
41. **a. `No`** — `(1==2) || (2==3) || (3==2)` is false, so `else` branch prints `NO`.
42. **a. No output** — `1==2` is false, `2==1` is false, and there is no `else`.
43. **a. `15`** — `0 > 5` is false, `0 > 2` is false, enters `else`: `0 + 15 = 15`.
44. **True output is `10` (missing from options)** — **[BOOK ERRATA]**: `p=10, q=3, r=2`. `(10+3) < 14 && (2 < 3-3)` -> `true && false` -> `false`, so `else` executes `cout << p;` which prints **`10`**, but the book's options are `a. 2, b. 4, c. 9, d. -4`.
45. **a. `Not Equal`** — `'C' == 'c'` is false due to case sensitivity.
46. **b. `#`** — `9 < 5` is false; `5 < 6` is true, so it prints `#`.
47. **a. `35`** — `a=25, b=35, c=20`: `a > b` is false, `b > c` (`35 > 20`) is true -> `m = 35`.
48. **a. `35`** — `a=35, b=30, c=36, d=24`: `a > b` (`35 > 30`) is true, so `||` short-circuits -> `m = 35`.
49. **c. Both a or b** — By De Morgan's Law, `!(1 < x && x < 100)` is equivalent to `x <= 1 || 100 <= x`.
