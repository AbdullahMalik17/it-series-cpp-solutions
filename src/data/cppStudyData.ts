import type { ChapterData } from "@/types/study";

export const CPP_STUDY_DATA: { chapters: ChapterData[] } = {
  "chapters": [
    {
      "id": "ch1",
      "title": "Ch 1: Intro to Programming",
      "subtitle": "Problem solving, flowcharts, language levels, and translators (34 MCQs)",
      "outputs": [],
      "mcqs": [
        {
          "n": 1,
          "q": "Computer programs are also known as:",
          "opts": {
            "a": "Software",
            "b": "Signal",
            "c": "Procedure",
            "d": "Debugger"
          },
          "ans": "a",
          "book": "a",
          "why": "Computer programs are collectively referred to as software."
        },
        {
          "n": 2,
          "q": "Which of the following is a problem solving technique?",
          "opts": {
            "a": "Algorithm",
            "b": "Programming",
            "c": "Flow chart",
            "d": "All"
          },
          "ans": "d",
          "book": "d",
          "why": "Algorithms, programming, and flowcharts are all problem-solving steps/techniques."
        },
        {
          "n": 3,
          "q": "How many possible solutions are there for a problem?",
          "opts": {
            "a": "One",
            "b": "Two",
            "c": "Three",
            "d": "Multiple"
          },
          "ans": "d",
          "book": "d",
          "why": "A problem can have multiple valid solutions."
        },
        {
          "n": 4,
          "q": "A person who develops a program is called:",
          "opts": {
            "a": "Programmer",
            "b": "Database designer",
            "c": "Network Administrator",
            "d": "None"
          },
          "ans": "a",
          "book": "a",
          "why": "A programmer writes and develops software."
        },
        {
          "n": 5,
          "q": "The step-by-step procedure to solve a problem is called:",
          "opts": {
            "a": "Programming language",
            "b": "Flowchart",
            "c": "Program",
            "d": "Algorithm"
          },
          "ans": "d",
          "book": "d",
          "why": "An algorithm is a finite step-by-step procedure."
        },
        {
          "n": 6,
          "q": "A graphical representation of the steps involved in an algorithm is called:",
          "opts": {
            "a": "Algorithmic diagram",
            "b": "Flowchart",
            "c": "Data flow diagram",
            "d": "None"
          },
          "ans": "b",
          "book": "b",
          "why": "A flowchart visually represents an algorithm's flow."
        },
        {
          "n": 7,
          "q": "The diamond symbol in a flowchart indicates:",
          "opts": {
            "a": "Progress",
            "b": "Condition",
            "c": "Input",
            "d": "Output"
          },
          "ans": "b",
          "book": "b",
          "why": "The diamond represents a decision/condition."
        },
        {
          "n": 8,
          "q": "The rectangle symbol in a flow chart indicates:",
          "opts": {
            "a": "Process",
            "b": "Condition",
            "c": "Input",
            "d": "Output"
          },
          "ans": "a",
          "book": "a",
          "why": "The rectangle represents a processing step."
        },
        {
          "n": 9,
          "q": "The parallelogram symbol in a flow chart indicates:",
          "opts": {
            "a": "Input",
            "b": "Output",
            "c": "Both a and b",
            "d": "None"
          },
          "ans": "c",
          "book": "c",
          "why": "The parallelogram is used for both input and output."
        },
        {
          "n": 10,
          "q": "The process of carefully observing the working of an algorithm is called:",
          "opts": {
            "a": "Desk Checking",
            "b": "Compiling",
            "c": "Debugging",
            "d": "Coding"
          },
          "ans": "a",
          "book": "a",
          "why": "Tracing an algorithm on paper is desk checking."
        },
        {
          "n": 11,
          "q": "The process of writing a program in programming language is called:",
          "opts": {
            "a": "Flow chart",
            "b": "Coding",
            "c": "Desk Checking",
            "d": "None"
          },
          "ans": "b",
          "book": "b",
          "why": "Translating an algorithm into a programming language is coding."
        },
        {
          "n": 12,
          "q": "The set of rules for writing a program in any programming language is called:",
          "opts": {
            "a": "Syntax",
            "b": "Bug",
            "c": "Debug",
            "d": "None"
          },
          "ans": "a",
          "book": "a",
          "why": "Syntax is the grammar of a programming language."
        },
        {
          "n": 13,
          "q": "Program up gradation refers to:",
          "opts": {
            "a": "Program enhancement",
            "b": "Program Identification",
            "c": "Program development",
            "d": "Program implementation"
          },
          "ans": "a",
          "book": "a",
          "why": "Upgradation refers to enhancing and updating software."
        },
        {
          "n": 14,
          "q": "Which of the following documents describe various features of the software and the way it is used?",
          "opts": {
            "a": "Software requirement specification",
            "b": "Problem description",
            "c": "User manual",
            "d": "Algorithm"
          },
          "ans": "c",
          "book": "b",
          "errata": true,
          "why": "BOOK ERRATA: Book key says 'b. Problem description', which is incorrect. A User manual explains how software is used (and SRS describes features)."
        },
        {
          "n": 15,
          "q": "The most difficult part of problem solving is:",
          "opts": {
            "a": "Design Algorithm",
            "b": "Testing program",
            "c": "Documentation",
            "d": "Program execution"
          },
          "ans": "a",
          "book": "a",
          "why": "Designing the underlying algorithm requires the deepest logical effort."
        },
        {
          "n": 16,
          "q": "Compiled programs typically execute faster because:",
          "opts": {
            "a": "Compiled programs are read and executed a line at a time.",
            "b": "Compiled programs are already in a machine-readable form.",
            "c": "Compiled programs do not require any data.",
            "d": "None of the above"
          },
          "ans": "b",
          "book": "c",
          "errata": true,
          "why": "BOOK ERRATA: Book key says 'c. Compiled programs do not require any data', which is false. Compiled programs are faster because they are already translated to machine code."
        },
        {
          "n": 17,
          "q": "The output of the compiler is called",
          "opts": {
            "a": "The program",
            "b": "Source code",
            "c": "Linked code",
            "d": "Object code"
          },
          "ans": "d",
          "book": "d",
          "why": "Compilers translate source code into object code."
        },
        {
          "n": 18,
          "q": "All of the following are part of the documentation process EXCEPT:",
          "opts": {
            "a": "Test procedures",
            "b": "Program algorithm",
            "c": "Machine language code",
            "d": "User Manual"
          },
          "ans": "c",
          "book": "c",
          "why": "Machine language code is compiled output, not documentation."
        },
        {
          "n": 19,
          "q": "Machine language:",
          "opts": {
            "a": "is the language in which programs were first written.",
            "b": "is the only language understood by the computer.",
            "c": "Differs from one type of computer to another.",
            "d": "All of above"
          },
          "ans": "d",
          "book": "d",
          "why": "All three statements accurately describe machine language."
        },
        {
          "n": 20,
          "q": "A type of language in which instructions are written in binary form is called:",
          "opts": {
            "a": "Machine language",
            "b": "Assembly language",
            "c": "High level language",
            "d": "None"
          },
          "ans": "a",
          "book": "a",
          "why": "Machine language uses binary 0s and 1s."
        },
        {
          "n": 21,
          "q": "Which of the following is the native language of the computer?",
          "opts": {
            "a": "C language",
            "b": "Pascal",
            "c": "Machine language",
            "d": "DOS"
          },
          "ans": "c",
          "book": "c",
          "why": "The CPU executes machine language natively."
        },
        {
          "n": 22,
          "q": "Writing programs in machine language is:",
          "opts": {
            "a": "Complex",
            "b": "Simple",
            "c": "Time-consuming",
            "d": "Both a and c"
          },
          "ans": "d",
          "book": "d",
          "why": "Binary coding is both complex and time-consuming."
        },
        {
          "n": 23,
          "q": "Writing programs in high-level languages is ____ than machine language.",
          "opts": {
            "a": "Less time consuming",
            "b": "More time consuming",
            "c": "Less simple",
            "d": "Both a & c"
          },
          "ans": "a",
          "book": "d",
          "errata": true,
          "why": "BOOK ERRATA: Book key says 'd. Both a & c' ('Less time consuming' and 'Less simple'). High-level languages are simpler, not 'Less simple'."
        },
        {
          "n": 24,
          "q": "Which of the following is not a high level language?",
          "opts": {
            "a": "Assembly language",
            "b": "Pascal",
            "c": "BASIC",
            "d": "FORTRAN"
          },
          "ans": "a",
          "book": "a",
          "why": "Assembly is a low-level language."
        },
        {
          "n": 25,
          "q": "The lowest level of programming language is:",
          "opts": {
            "a": "Java",
            "b": "Assembly Language",
            "c": "Pascal",
            "d": "C++"
          },
          "ans": "b",
          "book": "b",
          "why": "Among the listed options, Assembly is the lowest level."
        },
        {
          "n": 26,
          "q": "An assembly language uses:",
          "opts": {
            "a": "English words",
            "b": "Mnemonic codes",
            "c": "0s and 1s",
            "d": "Binary digit"
          },
          "ans": "b",
          "book": "b",
          "why": "Assembly uses symbolic mnemonics such as ADD and SUB."
        },
        {
          "n": 27,
          "q": "What is the name of program that translates assembly source code to machine code?",
          "opts": {
            "a": "Compiler",
            "b": "Interpreter",
            "c": "Assembler",
            "d": "Debugger"
          },
          "ans": "c",
          "book": "c",
          "why": "An assembler translates assembly code into machine code."
        },
        {
          "n": 28,
          "q": "Which one of the following translates source code to object code as a whole?",
          "opts": {
            "a": "Interpreter",
            "b": "Compiler",
            "c": "Assembler",
            "d": "Debugger"
          },
          "ans": "b",
          "book": "b",
          "why": "A compiler translates the entire program at once."
        },
        {
          "n": 29,
          "q": "Choose the program that translates and executes one line of the source code at a time.",
          "opts": {
            "a": "Compiler",
            "b": "Assembler",
            "c": "Interpreter",
            "d": "None"
          },
          "ans": "c",
          "book": "c",
          "why": "An interpreter translates and executes line by line."
        },
        {
          "n": 30,
          "q": "Which of the following language is ideal to write business application?",
          "opts": {
            "a": "C++",
            "b": "FORTRAN",
            "c": "Assembly",
            "d": "COBOL"
          },
          "ans": "d",
          "book": "d",
          "why": "COBOL stands for Common Business-Oriented Language."
        },
        {
          "n": 31,
          "q": "Which language was originally created for teaching the students how to program?",
          "opts": {
            "a": "C++",
            "b": "COBOL",
            "c": "Assembly",
            "d": "BASIC"
          },
          "ans": "d",
          "book": "d",
          "why": "BASIC was created specifically for teaching programming."
        },
        {
          "n": 32,
          "q": "Which of the following languages is an object-oriented language?",
          "opts": {
            "a": "COBOL",
            "b": "Assembly",
            "c": "C++",
            "d": "BASIC"
          },
          "ans": "c",
          "book": "c",
          "why": "C++ supports object-oriented programming."
        },
        {
          "n": 33,
          "q": "Java is a product of :",
          "opts": {
            "a": "Microsoft",
            "b": "IBM",
            "c": "Sun System",
            "d": "Hewlett"
          },
          "ans": "c",
          "book": "c",
          "why": "Java was developed by Sun Microsystems."
        },
        {
          "n": 34,
          "q": "A programming language used for mathematical and engineering applications was:",
          "opts": {
            "a": "BASIC",
            "b": "FORTRAN",
            "c": "Assembly",
            "d": "COBOL"
          },
          "ans": "b",
          "book": "b",
          "why": "FORTRAN (Formula Translation) was built for scientific/math work."
        }
      ]
    },
    {
      "id": "ch2",
      "title": "Ch 2: Intro to C++",
      "subtitle": "Preprocessor directives, compilation, linking, bugs & comments (41 MCQs)",
      "outputs": [],
      "mcqs": [
        {
          "n": 1,
          "q": "Who developed C++?",
          "opts": {
            "a": "Von-Neumann",
            "b": "Al-Khuwarizmi",
            "c": "Charles Babbage",
            "d": "Bjarne Stroustrup"
          },
          "ans": "d",
          "why": "Bjarne Stroustrup developed C++ at Bell Labs."
        },
        {
          "n": 2,
          "q": "C++ was designed to write program for:",
          "opts": {
            "a": "Windows operating system",
            "b": "Solaris operating system",
            "c": "Unix operating system",
            "d": "OS/2 operating system"
          },
          "ans": "c",
          "why": "C++ originated on Unix at Bell Labs."
        },
        {
          "n": 3,
          "q": "C++ is a:",
          "opts": {
            "a": "High level language",
            "b": "Low-level language",
            "c": "Assembly language",
            "d": "Machine language"
          },
          "ans": "a",
          "why": "C++ is a high-level programming language."
        },
        {
          "n": 4,
          "q": "Turbo C++ can compile:",
          "opts": {
            "a": "C programs only",
            "b": "C and C++ programs",
            "c": "Turbo C Programs only",
            "d": "Turbo C++ programs only"
          },
          "ans": "b",
          "why": "Turbo C++ supports compiling both C and C++."
        },
        {
          "n": 5,
          "q": "Debug is the process of:",
          "opts": {
            "a": "Creating bugs in program",
            "b": "Identifying and removing errors",
            "c": "Identifying Errors",
            "d": "Removing Errors"
          },
          "ans": "b",
          "why": "Debugging involves both finding and fixing bugs."
        },
        {
          "n": 6,
          "q": "Processor directives are command for:",
          "opts": {
            "a": "Microprocessor",
            "b": "Language processor",
            "c": "C++ preprocessor",
            "d": "Loader"
          },
          "ans": "c",
          "typo": true,
          "why": "TYPO in book ('Processor' -> 'Preprocessor'): directives instruct the C++ preprocessor."
        },
        {
          "n": 7,
          "q": "The expression in defined directive:",
          "opts": {
            "a": "Can only be changed at the end of the program",
            "b": "Can not be changed",
            "c": "Can not be changed but can be redefined",
            "d": "Cannot be assigned a value"
          },
          "ans": "c",
          "typo": true,
          "why": "TYPO in book ('defined' -> '#define'): macro constants cannot be reassigned, though they can be #undef'd and redefined."
        },
        {
          "n": 8,
          "q": "Which of the following language requires no translator to execute the program?",
          "opts": {
            "a": "C",
            "b": "C++",
            "c": "Machine language",
            "d": "Assembly language"
          },
          "ans": "c",
          "why": "Machine language is executed directly by the CPU."
        },
        {
          "n": 9,
          "q": "The \".exe\" file is produced by:",
          "opts": {
            "a": "Linker",
            "b": "Loader",
            "c": "Compiler",
            "d": "Interpreter"
          },
          "ans": "a",
          "why": "The linker combines object files and libraries into an .exe."
        },
        {
          "n": 10,
          "q": "void occupy how many bytes in memory?",
          "opts": {
            "a": "Zero",
            "b": "One",
            "c": "Two",
            "d": "four"
          },
          "ans": "a",
          "why": "void represents no type/value and occupies 0 bytes."
        },
        {
          "n": 11,
          "q": "Which of the following key is used to save a file?",
          "opts": {
            "a": "F2",
            "b": "F3",
            "c": "F5",
            "d": "F9"
          },
          "ans": "a",
          "why": "In Turbo C++ IDE, F2 saves the active file."
        },
        {
          "n": 12,
          "q": "The basic structure of C++ program consists of:",
          "opts": {
            "a": "Preprocessor Directive",
            "b": "main () function",
            "c": "Program body",
            "d": "All"
          },
          "ans": "d",
          "why": "All three form the basic structure of a C++ program."
        },
        {
          "n": 13,
          "q": "Which of the following is a compiler directive?",
          "opts": {
            "a": "#include <iostream.h>",
            "b": "Using namespace std;",
            "c": "int main ()",
            "d": "All of these"
          },
          "ans": "a",
          "why": "#include <iostream.h> is a preprocessor/compiler directive."
        },
        {
          "n": 14,
          "q": "iostream.h is part of:",
          "opts": {
            "a": "Comment section",
            "b": "C++ standard library",
            "c": "Compiler",
            "d": "main function"
          },
          "ans": "b",
          "why": "iostream.h (modern <iostream>) is part of the C++ standard library."
        },
        {
          "n": 15,
          "q": "Which of the following symbol is used to denote a pre-processor statement?",
          "opts": {
            "a": "%",
            "b": "$",
            "c": "#",
            "d": "@"
          },
          "ans": "c",
          "why": "Preprocessor directives begin with #."
        },
        {
          "n": 16,
          "q": "Which of the following syntax is used to include header file?",
          "opts": {
            "a": "#include<name of header file>",
            "b": "#include \"name of the header file\"",
            "c": "Both a or b",
            "d": "None of these"
          },
          "ans": "c",
          "why": "Both angle brackets <> and double quotes \"\" are valid."
        },
        {
          "n": 17,
          "q": "main is a:",
          "opts": {
            "a": "Compiler directive",
            "b": "Comment",
            "c": "Function",
            "d": "Expression"
          },
          "ans": "c",
          "why": "main() is the entry-point function."
        },
        {
          "n": 18,
          "q": "C++ statements end with a:",
          "opts": {
            "a": "Period",
            "b": "Comma",
            "c": "Semicolon",
            "d": "Nothing"
          },
          "ans": "c",
          "why": "Every C++ statement is terminated by a semicolon (;)."
        },
        {
          "n": 19,
          "q": "For every opening brace in a C++ program, there must be a:",
          "opts": {
            "a": "String literal",
            "b": "Variable",
            "c": "Closing brace",
            "d": "None"
          },
          "ans": "c",
          "why": "Every { must be paired with a matching }."
        },
        {
          "n": 20,
          "q": "Which of the following causes the contents of another file to be inserted into a program?",
          "opts": {
            "a": "Backslash",
            "b": "Semicolon",
            "c": "#include directive",
            "d": "None"
          },
          "ans": "c",
          "why": "#include inserts the specified header file's contents."
        },
        {
          "n": 21,
          "q": "Which of the following is first step for creating and executing C++ program?",
          "opts": {
            "a": "Editing",
            "b": "Compiling",
            "c": "Linking",
            "d": "Executing"
          },
          "ans": "a",
          "why": "Editing (writing source code) comes first."
        },
        {
          "n": 22,
          "q": "Which is the correct sequence of steps for creating and executing C++ program?",
          "opts": {
            "a": "Editing -> saving -> compiling -> linking -> Executing",
            "b": "Compiling -> Editing -> saving -> executing -> linking",
            "c": "Editing -> Executing -> Compiling -> Linking",
            "d": "Linking -> Executing -> saving -> Editing -> Compiling"
          },
          "ans": "a",
          "why": "Standard C++ build-and-run sequence."
        },
        {
          "n": 23,
          "q": "The process of converting source code into object code is knows as:",
          "opts": {
            "a": "Compiling",
            "b": "Executing",
            "c": "Linking",
            "d": "Saving"
          },
          "ans": "a",
          "why": "Compilation converts source code into object code."
        },
        {
          "n": 24,
          "q": "The process of linking library files with object code is known as:",
          "opts": {
            "a": "Compiler",
            "b": "Executing",
            "c": "Linking",
            "d": "Saving"
          },
          "ans": "c",
          "why": "Linking resolves library references with object code."
        },
        {
          "n": 25,
          "q": "The processing of running an executable file is known as:",
          "opts": {
            "a": "Debugging",
            "b": "Compiling",
            "c": "Executing",
            "d": "Saving"
          },
          "ans": "c",
          "why": "Executing runs the compiled and linked program."
        },
        {
          "n": 26,
          "q": "Which file contains the program after translation into machine language?",
          "opts": {
            "a": "Object file",
            "b": "exe file",
            "c": "Source file",
            "d": "None"
          },
          "ans": "a",
          "why": "The object file (.obj) holds the compiled machine code."
        },
        {
          "n": 27,
          "q": "Which term is commonly used to refer to software or program errors:",
          "opts": {
            "a": "Crash",
            "b": "Short circuit",
            "c": "Down",
            "d": "Bug"
          },
          "ans": "d",
          "why": "Software errors are called bugs."
        },
        {
          "n": 28,
          "q": "Which of the following is NOT an example of a program bug?",
          "opts": {
            "a": "Run-time error",
            "b": "Operator error",
            "c": "Syntax error",
            "d": "Logic error"
          },
          "ans": "b",
          "why": "Operator error is a user mistake, not a program bug."
        },
        {
          "n": 29,
          "q": "If a program does something different than thinking of programmer, it is called:",
          "opts": {
            "a": "Syntax error.",
            "b": "Logic error.",
            "c": "Program error.",
            "d": "None"
          },
          "ans": "b",
          "why": "Faulty program logic causes wrong results without crashing."
        },
        {
          "n": 30,
          "q": "The output of the compiler is called:",
          "opts": {
            "a": "The program",
            "b": "Source code",
            "c": "Linked code",
            "d": "Object code"
          },
          "ans": "d",
          "why": "Compilers produce object code."
        },
        {
          "n": 31,
          "q": "What does the following code print on screen?",
          "code": "Cout<<\"hello\";",
          "opts": {
            "a": "Hello",
            "b": "hello",
            "c": "HELLO",
            "d": "Nothing"
          },
          "ans": "d",
          "typo": true,
          "why": "C++ is case-sensitive: 'Cout' with uppercase C fails to compile (prints Nothing). If 'Cout' is a book print typo for 'cout', the intended answer is 'b. hello'."
        },
        {
          "n": 32,
          "q": "Syntax refers to the:",
          "opts": {
            "a": "Saving computer program on hard disk.",
            "b": "Rules used to create a computer program.",
            "c": "Both a and b.",
            "d": "None of the above."
          },
          "ans": "b",
          "why": "Syntax is the set of rules for writing valid statements."
        },
        {
          "n": 33,
          "q": "A syntax error occurs when:",
          "opts": {
            "a": "The program instructions violate grammatical rules.",
            "b": "The logic of program is incorrect.",
            "c": "Both a and b",
            "d": "None of the above"
          },
          "ans": "a",
          "why": "Violating language grammar produces a syntax error."
        },
        {
          "n": 34,
          "q": "A program's syntax errors is detected by:",
          "opts": {
            "a": "Compiler",
            "b": "Linker",
            "c": "Loader",
            "d": "Debugger"
          },
          "ans": "a",
          "why": "The compiler catches syntax errors during compilation."
        },
        {
          "n": 35,
          "q": "Which of the following errors are NOT detected by compiler?",
          "opts": {
            "a": "Syntax error",
            "b": "Logical error",
            "c": "Both a and b",
            "d": "None"
          },
          "ans": "b",
          "why": "Compilers cannot detect logical errors."
        },
        {
          "n": 36,
          "q": "Which of the following does not contain machine language code?",
          "opts": {
            "a": "Source module",
            "b": "Object module",
            "c": "Library module",
            "d": "None"
          },
          "ans": "a",
          "why": "Source files contain human-readable C++ text."
        },
        {
          "n": 37,
          "q": "A spelling error (e.g. typing intt instead of int) is an example of:",
          "opts": {
            "a": "Syntax error",
            "b": "Run-time error",
            "c": "Logic error",
            "d": "None"
          },
          "ans": "a",
          "why": "Misspelled keywords violate C++ syntax."
        },
        {
          "n": 38,
          "q": "Division by zero (e.g. 4 / 0) is an example of:",
          "opts": {
            "a": "Compile error",
            "b": "Run-time error",
            "c": "Logic error",
            "d": "None"
          },
          "ans": "b",
          "why": "Division by zero is an illegal operation at run-time."
        },
        {
          "n": 39,
          "q": "In a C++ program, two slash marks (//) indicate:",
          "opts": {
            "a": "The beginning of a comment",
            "b": "The end of the program",
            "c": "The beginning of a block of code",
            "d": "None"
          },
          "ans": "a",
          "why": "// starts a single-line comment."
        },
        {
          "n": 40,
          "q": "Text enclosed in /* */ in a C++ program:",
          "opts": {
            "a": "Gives instructions to the processor",
            "b": "Declares memory requirements",
            "c": "Causes a syntax error",
            "d": "is ignored by compiler"
          },
          "ans": "d",
          "why": "/* ... */ is a multi-line comment ignored by the compiler."
        },
        {
          "n": 41,
          "q": "Comments are used to:",
          "opts": {
            "a": "To help others read and understand the program",
            "b": "Make the program run faster.",
            "c": "Make the program compile easier.",
            "d": "Increase the size of the executable program."
          },
          "ans": "a",
          "why": "Comments document code for human readers."
        }
      ]
    },
    {
      "id": "ch3",
      "title": "Ch 3: Programming in C++",
      "subtitle": "Variables, data types, operators, precedence, and output traces (107 MCQs + Output Exercises)",
      "outputs": [
        {
          "id": "Q.51a",
          "q": "Evaluate: i + j == k; (i=1, j=2, k=3)",
          "code": "int i=1, j=2, k=3;\n((i + j) == k);",
          "bookAns": "1",
          "trueAns": "1",
          "trace": "1 + 2 = 3; 3 == 3 evaluates to 1 (true)."
        },
        {
          "id": "Q.51b",
          "q": "Evaluate: k - i < y > x; (k=3, i=1, y=2.0, x=1.0)",
          "code": "(((k - i) < y) > x);",
          "bookAns": "0",
          "trueAns": "0",
          "trace": "(3 - 1) = 2; (2 < 2.0) = 0; (0 > 1.0) = 0 (false)."
        },
        {
          "id": "Q.51c",
          "q": "Evaluate: z - x + 1 != j + k - 2 * i;",
          "code": "(((z - x) + 1) != ((j + k) - (2 * i)));",
          "bookAns": "0",
          "trueAns": "0",
          "trace": "(3.0 - 1.0 + 1) = 3.0; (2 + 3 - 2) = 3; 3.0 != 3 is 0 (false)."
        },
        {
          "id": "Q.52a",
          "q": "Output of expression:",
          "code": "cout << (1+8/2+((1*4)+(5*4))/4);",
          "bookAns": "11",
          "trueAns": "11",
          "trace": "8/2 = 4; (1*4)+(5*4) = 4+20 = 24; 24/4 = 6; 1 + 4 + 6 = 11."
        },
        {
          "id": "Q.52b",
          "q": "Output of expression:",
          "code": "cout << ((1+1+1)/2+(1+1+1)/3);",
          "bookAns": "3",
          "trueAns": "2",
          "errata": true,
          "trace": "BOOK ERRATA: (1+1+1)/2 = 3/2 = 1 (integer division, not 2!). (1+1+1)/3 = 3/3 = 1. Total = 1 + 1 = 2."
        },
        {
          "id": "Q.52c",
          "q": "Output of expression:",
          "code": "cout << (5*5+5/5+6);",
          "bookAns": "32",
          "trueAns": "32",
          "trace": "5*5 = 25; 5/5 = 1; 25 + 1 + 6 = 32."
        },
        {
          "id": "Q.52d",
          "q": "Output of expression:",
          "code": "cout << (((3+4)+(4*7))/5);",
          "bookAns": "12",
          "trueAns": "7",
          "errata": true,
          "trace": "BOOK ERRATA: (3+4)+(4*7) = 7 + 28 = 35. 35 / 5 = 7, not 12."
        },
        {
          "id": "Q.52e",
          "q": "Output of expression:",
          "code": "cout << ((3*6*7*2)+12/2);",
          "bookAns": "258",
          "trueAns": "258",
          "trace": "3*6*7*2 = 252; 12/2 = 6; 252 + 6 = 258."
        },
        {
          "id": "Q.52f",
          "q": "Output of expression:",
          "code": "cout << 5-3*4% (6-1);",
          "bookAns": "3",
          "trueAns": "3",
          "trace": "6-1 = 5; 3*4 = 12; 12 % 5 = 2; 5 - 2 = 3."
        },
        {
          "id": "Q.52g",
          "q": "Output of expression:",
          "code": "cout << ( 8 * 4 * 2 + 6 ) / 2 + 4;",
          "bookAns": "39",
          "trueAns": "39",
          "trace": "8*4*2 = 64; 64 + 6 = 70; 70 / 2 = 35; 35 + 4 = 39."
        },
        {
          "id": "Q.53a",
          "q": "Output of code:",
          "code": "int x=20,y=35;\nx=y++ + x++;\ny= ++y + ++x;\ncout<<x<<y;",
          "bookAns": "5794",
          "trueAns": "5794 (Turbo C++)",
          "modernNote": "Undefined Behavior in Modern Standard C++ (modifying x and y multiple times without sequencing).",
          "trace": "Turbo C++: x = 35 + 20 = 55, then y++ -> 36, x++ -> 56. Next: ++y -> 37, ++x -> 57, y = 37 + 57 = 94. Prints 5794."
        },
        {
          "id": "Q.53b",
          "q": "Output of code:",
          "code": "int x=10, y=15;\nx = x++;\ny = ++y;\ncout<<x<<\",\"<<y;",
          "bookAns": "11,16",
          "trueAns": "11,16 (Turbo C++)",
          "modernNote": "In C++17+, x = x++ evaluates to 10 (10,16); pre-C++17 it is Undefined Behavior.",
          "trace": "Turbo C++: x gets 10 then increments to 11; y pre-increments to 16. Prints 11,16."
        },
        {
          "id": "Q.53c",
          "q": "Output of code:",
          "code": "int a = 10;\na++;\ncout << a << endl;",
          "bookAns": "11",
          "trueAns": "11",
          "trace": "a is incremented from 10 to 11, then printed."
        },
        {
          "id": "Q.53d",
          "q": "Output of code:",
          "code": "int a = 10;\ncout << a++ << endl;",
          "bookAns": "10",
          "trueAns": "10",
          "trace": "Post-increment returns 10 for printing, then increments a to 11."
        },
        {
          "id": "Q.53e",
          "q": "Output of code:",
          "code": "int n = 10; int x = 0;\nx = n--;\ncout << x << endl;",
          "bookAns": "10",
          "trueAns": "10",
          "trace": "Post-decrement assigns 10 to x, then decrements n to 9."
        },
        {
          "id": "Q.53f",
          "q": "Output of code:",
          "code": "int i = 5, j = 6, k = 7, n = 3;\ncout << i + j * k - k % n << endl;\ncout << i / n << endl;",
          "bookAns": "46\n1",
          "trueAns": "46\n1",
          "trace": "Line 1: 5 + 42 - (7 % 3) = 47 - 1 = 46. Line 2: 5 / 3 = 1."
        },
        {
          "id": "Q.53g",
          "q": "Output of code:",
          "code": "int n; float x = 3.8;\nn = int(x);\ncout << \"n = \" << n << endl;",
          "bookAns": "n=3",
          "trueAns": "n = 3",
          "trace": "int(3.8) truncates to 3. Literal \"n = \" includes spaces around =."
        },
        {
          "id": "Q.53h",
          "q": "Output of code:",
          "code": "int a = 6; cout << a;\na = a + 3; cout << a;\na -= 5; cout << a;\na++; cout << a;",
          "bookAns": "6945",
          "trueAns": "6945",
          "trace": "Prints 6 -> a=9 prints 9 -> a=4 prints 4 -> a=5 prints 5 -> 6945."
        },
        {
          "id": "Q.54",
          "q": "Output of snippet:",
          "code": "int i = 5;\ncout << i << endl;\ncout << (i++) << endl;\ncout << (++i) << endl;",
          "bookAns": "5\n5\n7",
          "trueAns": "5\n5\n7",
          "trace": "Prints 5; then (i++) prints 5 (i becomes 6); then (++i) makes i=7 and prints 7."
        },
        {
          "id": "Q.55a",
          "q": "Output of code:",
          "code": "int a=3,b=4;\n++a *= b++;\ncout<<a<<endl;",
          "bookAns": "16",
          "trueAns": "16",
          "typo": true,
          "trace": "TYPO in book: printed as '++a* = b++;' with a space inside '*='. Without the space, ++a makes a=4, 4 *= 4 gives 16."
        },
        {
          "id": "Q.55b",
          "q": "Output if replaced with ++a *= ++b:",
          "code": "int a=3,b=4;\n++a *= ++b;\ncout<<a<<endl;",
          "bookAns": "20",
          "trueAns": "20",
          "trace": "++a -> 4; ++b -> 5; 4 * 5 = 20."
        },
        {
          "id": "Q.56",
          "q": "Value of a after code:",
          "code": "int a, b; a = 5; a++; a = a + 1;\nb = a; b++; a = b;",
          "bookAns": "8",
          "trueAns": "8",
          "trace": "a: 5 -> 6 -> 7; b = 7 -> 8; a = 8."
        },
        {
          "id": "Q.58a-i",
          "q": "Validity & values of a, b, c (start: a=2, b=3, c=5):",
          "code": "a) ++a;  b) abc;  c) a++;  d) b+=a;  e) b+=a*c;\nf) a++b; g) a+=2; b=2/2; c=a*b;  h) ++b++;  i) b = a++ + b++;",
          "bookAns": "a:3,3,5 | b:Inv | c:3,3,5 | d:2,5,5 | e:2,13,5 | f:Inv | g:4,1,4 | h:Inv | i:3,6,5",
          "trueAns": "All match (Turbo C++)",
          "modernNote": "Part (i) 'b = a++ + b++' is Undefined Behavior in Modern C++.",
          "trace": "b) undeclared, f) syntax error, h) ++ requires lvalue. In (i) Turbo C++: b = 2+3 = 5, then a->3, b++->6."
        },
        {
          "id": "Q.59a-k",
          "q": "Calculate value of n (all 11 expressions):",
          "code": "a) 22/8  b) 99/8+21/11*7  c) q/a-p/b (2.0/4 - 8/3.0)\nd) p/a+q/b (8/6 + 2/3)  e) int a=3.3,b=2.7,p=8.7,q=5.4; p/b+q/a\nf) 11+7/4+98%6*3  g) 11/31%8*5-12  h) q*p+3*p*p-(q%3)*p^3\ni) (q%2)*p+6*p*(q%3)+(q%4)*p^3  j) n=3,a=6,b=2; n*=a+b; a--; n%=a;\nk) a,n=5; ++n; a=--n; n=n-a;",
          "bookAns": "a:2, b:19, c:-2.16667, d:1, e:5, f:18, g:-12, h:-792, i:130, j:4, k:0",
          "trueAns": "All 11 verified correct",
          "trace": "e) truncated ints: 8/2 + 5/3 = 4+1 = 5. h) 40 + 192 - 2*512 = -792. i) 1*5 + 0 + 1*125 = 130. j) 3*8=24; 24%5=4."
        },
        {
          "id": "Q.61",
          "q": "Compute expressions (a=10, b=20, c=15, d=8, e=40):",
          "code": "1) (a + b / (c - 5)) / ((d + 7) / (e - 37) % 3)\n2) a + b / c - 5 / d + 7 / e - 37 % 3\n3) a * (b * b) - (c * b) + d",
          "bookAns": "1) 6, 2) 10, 3) 3708",
          "trueAns": "1) 6, 2) 10, 3) 3708",
          "trace": "1) (10+2)/(15/3%3) = 12/2 = 6. 2) 10+1-0+0-1 = 10. 3) 10*400 - 300 + 8 = 3708."
        },
        {
          "id": "Q.62a",
          "q": "Value of y:",
          "code": "float y = 3.4 + sqrt(25.0);",
          "bookAns": "8.4",
          "trueAns": "8.4",
          "trace": "sqrt(25.0) = 5.0; 3.4 + 5.0 = 8.4."
        }
      ],
      "mcqs": [
        {
          "n": 1,
          "q": "A memory location with some data that can be changed is called:",
          "opts": {
            "a": "Constant.",
            "b": "Variable.",
            "c": "Named constant.",
            "d": "Symbolic constant."
          },
          "ans": "b",
          "why": "Variables hold mutable data."
        },
        {
          "n": 2,
          "q": "Variables are created in:",
          "opts": {
            "a": "RAM",
            "b": "ROM.",
            "c": "Hard disk.",
            "d": "Cache."
          },
          "ans": "a",
          "why": "Program variables are allocated in main memory (RAM)."
        },
        {
          "n": 3,
          "q": "A memory location with some data that cannot be changed is called:",
          "opts": {
            "a": "Constant.",
            "b": "Variable.",
            "c": "Named constant.",
            "d": "Symbolic constant."
          },
          "ans": "a",
          "why": "Constants hold fixed, unchangeable values."
        },
        {
          "n": 4,
          "q": "Which of the following is a valid character constant?",
          "opts": {
            "a": "a.",
            "b": "Variable.",
            "c": "'6'",
            "d": "="
          },
          "ans": "c",
          "why": "A character constant is a single character enclosed in single quotes."
        },
        {
          "n": 5,
          "q": "Which of the following operators has lowest precedence?",
          "opts": {
            "a": "!",
            "b": "+",
            "c": "=",
            "d": "=="
          },
          "ans": "c",
          "why": "Assignment (=) has lower precedence than !, +, and ==."
        },
        {
          "n": 6,
          "q": "Which is /or are not a valid identifier(s) in C++?",
          "opts": {
            "a": "Hi_There",
            "b": "top 40",
            "c": "&UpAndDdOwN",
            "d": "both b and c"
          },
          "ans": "d",
          "why": "Spaces (top 40) and '&' (&UpAndDdOwN) are illegal in identifiers."
        },
        {
          "n": 7,
          "q": "C++ is strongly typed language, it means that:",
          "opts": {
            "a": "Every program must be compiled before execution",
            "b": "Every variable must be declared before it is being used",
            "c": "The variable declaration also defines the variable",
            "d": "Sufficient data types are available to manipulate each type of data"
          },
          "ans": "b",
          "why": "Matches the book's definition in Chapter 3 Q.11."
        },
        {
          "n": 8,
          "q": "Which is /or are not valid identifier(s) in C++?",
          "opts": {
            "a": "my-Name",
            "b": "9littles",
            "c": "X123Y",
            "d": "both a and b"
          },
          "ans": "d",
          "why": "Hyphens and leading digits are illegal in C++ identifiers."
        },
        {
          "n": 9,
          "q": "a += b is equivalent to:",
          "opts": {
            "a": "b+=a",
            "b": "a=+b",
            "c": "a=a+b",
            "d": "b=b+a"
          },
          "ans": "c",
          "why": "Compound addition adds b to a and stores the result in a."
        },
        {
          "n": 10,
          "q": "Which is true about a variable?",
          "opts": {
            "a": "The name and data value can both change.",
            "b": "The name can change, but the data value cannot.",
            "c": "The name cannot change, but the data value can.",
            "d": "The name and the data value both cannot change."
          },
          "ans": "c",
          "why": "A variable's identifier is fixed, while its stored value can change."
        },
        {
          "n": 11,
          "q": "Which is NOT a rule for naming variables?",
          "opts": {
            "a": "Use a descriptive name for the variable.",
            "b": "Start the name of a variable with a letter.",
            "c": "Use nothing but letters, digits, or the underscore character.",
            "d": "All of the above"
          },
          "ans": "a",
          "why": "Using descriptive names is a style guideline, not a compiler syntax rule."
        },
        {
          "n": 12,
          "q": "Variable and constant names can not contain a(n):",
          "opts": {
            "a": "Number.",
            "b": "Underscore.",
            "c": "Letter",
            "d": "Period."
          },
          "ans": "d",
          "why": "Periods (.) are not permitted in C++ identifiers."
        },
        {
          "n": 13,
          "q": "Variable names can not begin with a(n):",
          "opts": {
            "a": "Number.",
            "b": "Underscore.",
            "c": "Upper-case letter.",
            "d": "Lower-case letter."
          },
          "ans": "a",
          "why": "Identifiers cannot start with a digit."
        },
        {
          "n": 14,
          "q": "Which of the following is NOT a valid identifier?",
          "opts": {
            "a": "return",
            "b": "myInt",
            "c": "myInteger",
            "d": "total3"
          },
          "ans": "a",
          "why": "return is a reserved keyword in C++."
        },
        {
          "n": 15,
          "q": "Which of the following are valid variable names",
          "opts": {
            "a": "long",
            "b": "Integer",
            "c": "notlongenough",
            "d": "SuperLong"
          },
          "ans": "b",
          "why": "'long' is a keyword; 'Integer', 'notlongenough', and 'SuperLong' are all valid C++ identifiers (C++ is case-sensitive)."
        },
        {
          "n": 16,
          "q": "Which term describes the kind of values that a variable can store?",
          "opts": {
            "a": "Variable Name",
            "b": "Datatype",
            "c": "Variabletype",
            "d": "Variablesize"
          },
          "ans": "b",
          "why": "A data type defines the kind of values and operations."
        },
        {
          "n": 17,
          "q": "Which statement is true about data types?",
          "opts": {
            "a": "Each data type has no memory requirements.",
            "b": "Each data type has different memory requirements.",
            "c": "Each data type has the same memory requirements.",
            "d": "None of the above"
          },
          "ans": "b",
          "why": "Different types occupy different amounts of memory (1, 2, 4, 8 bytes)."
        },
        {
          "n": 18,
          "q": "Which data type is used to store numeric value with no decimal point?",
          "opts": {
            "a": "int",
            "b": "char",
            "c": "float",
            "d": "All"
          },
          "ans": "a",
          "why": "int stores whole numbers."
        },
        {
          "n": 19,
          "q": "Which is a numeric data type?",
          "opts": {
            "a": "Floating point",
            "b": "Integer",
            "c": "Both a and b.",
            "d": "None"
          },
          "ans": "c",
          "why": "Both integer and floating-point types are numeric."
        },
        {
          "n": 20,
          "q": "The number of bytes used by int data type in C++ is?",
          "opts": {
            "a": "2",
            "b": "8",
            "c": "12",
            "d": "16"
          },
          "ans": "a",
          "modernNote": "In Modern 32/64-bit C++, int is typically 4 bytes.",
          "why": "In Turbo C++ (16-bit), int occupies 2 bytes."
        },
        {
          "n": 21,
          "q": "The number of bytes used by long int data type in C++ is?",
          "opts": {
            "a": "2",
            "b": "4",
            "c": "12",
            "d": "16"
          },
          "ans": "b",
          "why": "long int occupies 4 bytes in Turbo C++ and Windows."
        },
        {
          "n": 22,
          "q": "An integer variable can store the value:",
          "opts": {
            "a": "-1.1",
            "b": "\"123\"",
            "c": "32898",
            "d": "None"
          },
          "ans": "d",
          "modernNote": "In Modern 32-bit C++, 32898 fits in int (option c).",
          "why": "In Turbo C++ 16-bit int (-32768 to 32767), 32898 overflows; -1.1 is float and \"123\" is string."
        },
        {
          "n": 23,
          "q": "The integer, long and short data types are known as:",
          "opts": {
            "a": "Integer data types",
            "b": "Non-integral data types",
            "c": "float data types",
            "d": "Non-numeric data types"
          },
          "ans": "a",
          "why": "They are all integral/integer data types."
        },
        {
          "n": 24,
          "q": "The data type that can handle decimal places is:",
          "opts": {
            "a": "Long",
            "b": "float",
            "c": "char",
            "d": "Integer"
          },
          "ans": "b",
          "why": "float stores real numbers with fractional parts."
        },
        {
          "n": 25,
          "q": "The float, long float and double data types are known as:",
          "opts": {
            "a": "Integer data",
            "b": "Character data",
            "c": "Integral data",
            "d": "Real data"
          },
          "ans": "d",
          "why": "Floating-point types represent real data."
        },
        {
          "n": 26,
          "q": "What kinds of numbers are stored in float and double data types?",
          "opts": {
            "a": "Floating points numbers",
            "b": "single and double numbers",
            "c": "Short integer numbers",
            "d": "long integer numbers"
          },
          "ans": "a",
          "why": "They store floating-point numbers."
        },
        {
          "n": 27,
          "q": "The number of bytes used by float data type in C++ is:",
          "opts": {
            "a": "2",
            "b": "4",
            "c": "12",
            "d": "16"
          },
          "ans": "b",
          "why": "float occupies 4 bytes."
        },
        {
          "n": 28,
          "q": "The number of bytes used by double data type in C++ is:",
          "opts": {
            "a": "2",
            "b": "8",
            "c": "12",
            "d": "16"
          },
          "ans": "b",
          "why": "double occupies 8 bytes."
        },
        {
          "n": 29,
          "q": "What happens when the result of a calculation exceeds the capacity of data type?",
          "opts": {
            "a": "System error",
            "b": "Logic error",
            "c": "Syntax error",
            "d": "Overflow"
          },
          "ans": "d",
          "why": "Exceeding a type's maximum capacity causes overflow."
        },
        {
          "n": 30,
          "q": "The exponential notation consists of:",
          "opts": {
            "a": "Mantissa",
            "b": "Exponent",
            "c": "Range",
            "d": "Both a and b"
          },
          "ans": "d",
          "why": "Scientific notation has a mantissa and an exponent."
        },
        {
          "n": 31,
          "q": "The number of digits after a decimal point is called:",
          "opts": {
            "a": "Significance",
            "b": "Precision",
            "c": "Range",
            "d": "Scope"
          },
          "ans": "b",
          "why": "Precision refers to the accuracy/digits of a real number."
        },
        {
          "n": 32,
          "q": "Which of the following data type is used to store string value?",
          "opts": {
            "a": "char",
            "b": "float",
            "c": "string",
            "d": "None"
          },
          "ans": "c",
          "why": "std::string stores string values in C++."
        },
        {
          "n": 33,
          "q": "The number of bytes used by char data type in C++ is:",
          "opts": {
            "a": "2",
            "b": "1",
            "c": "12",
            "d": "16"
          },
          "ans": "b",
          "why": "char occupies 1 byte."
        },
        {
          "n": 34,
          "q": "Which variable should be used to store the value \"I want an A in this exam\"",
          "opts": {
            "a": "char",
            "b": "int",
            "c": "float",
            "d": "character"
          },
          "ans": "a",
          "why": "Stored as a char array (C-string) among these options."
        },
        {
          "n": 35,
          "q": "Another way to write the value 3452211903 is:",
          "opts": {
            "a": "3.452211903e09",
            "b": "3.452211903e-09",
            "c": "3.452211903x09",
            "d": "3452211903e09"
          },
          "ans": "a",
          "why": "3.452211903 × 10^9."
        },
        {
          "n": 36,
          "q": "The constant 0.15e+6 represents the same value as:",
          "opts": {
            "a": "150000.0",
            "b": "6.15",
            "c": "0.75",
            "d": "0.21"
          },
          "ans": "a",
          "why": "0.15 × 10^6 = 150000.0."
        },
        {
          "n": 37,
          "q": "Which of the following statements is NOT legal?",
          "opts": {
            "a": "char ch='b';",
            "b": "char ch='0';",
            "c": "char ch=65;",
            "d": "char ch=\"cc\";"
          },
          "ans": "d",
          "why": "A double-quoted string literal cannot be assigned to a char."
        },
        {
          "n": 38,
          "q": "Which of the following are required to declare a variable?",
          "opts": {
            "a": "Continue keyword",
            "b": "Variable name",
            "c": "Data type",
            "d": "Both b & c"
          },
          "ans": "d",
          "why": "Declaration requires a data type and a variable name."
        },
        {
          "n": 39,
          "q": "Which symbol is used to separate each variable while declaring many variables one line?",
          "opts": {
            "a": "Commas",
            "b": "Colons",
            "c": "Pipes",
            "d": "Semicolons"
          },
          "ans": "a",
          "why": "Commas separate variables in a single declaration."
        },
        {
          "n": 40,
          "q": "Which is a valid statement for declaring a variable?",
          "opts": {
            "a": "int marks;",
            "b": "int a,b,c;",
            "c": "double salary;",
            "d": "All"
          },
          "ans": "d",
          "why": "All three are valid C++ declarations."
        },
        {
          "n": 41,
          "q": "Which of the following data types is most appropriate for storing a name?",
          "opts": {
            "a": "float",
            "b": "Integer",
            "c": "char",
            "d": "None"
          },
          "ans": "c",
          "why": "Names are stored in char arrays in classic C++."
        },
        {
          "n": 42,
          "q": "The process of giving a variable its starting value is called:",
          "opts": {
            "a": "Declaring",
            "b": "Initializing",
            "c": "Naming",
            "d": "None of these"
          },
          "ans": "b",
          "why": "Assigning an initial value is initialization."
        },
        {
          "n": 43,
          "q": "Which is a valid statement for initialization of a variable?",
          "opts": {
            "a": "int n=100;",
            "b": "int x=50, y=75;",
            "c": "char grade='a';",
            "d": "All"
          },
          "ans": "d",
          "why": "All three are valid initializations."
        },
        {
          "n": 44,
          "q": "Which is NOT a valid statement to initialize a variable?",
          "opts": {
            "a": "int =100;",
            "b": "long population=15000;",
            "c": "char n[]=\"Hello word\";",
            "d": "const int N=100;"
          },
          "ans": "a",
          "why": "int =100; is missing the variable name."
        },
        {
          "n": 45,
          "q": "Which of the following statements is correct?",
          "opts": {
            "a": "float num1; num2;",
            "b": "int day, night;",
            "c": "int continue = 5.0;",
            "d": "string black = 'white';"
          },
          "ans": "b",
          "why": "a leaves num2 untyped, c uses keyword continue, d uses single quotes for a string."
        },
        {
          "n": 46,
          "q": "Which of the following constant definitions is correct?",
          "opts": {
            "a": "const float PRICE = 3,500;",
            "b": "const int LENGTH = 6.5;",
            "c": "const float COST = $700.0;",
            "d": "const int MY_HEIGHT = 60 / 12;"
          },
          "ans": "d",
          "why": "60 / 12 = 5 is a valid integer constant expression."
        },
        {
          "n": 47,
          "q": "Which of the following can be used as character constant:",
          "opts": {
            "a": "Characters",
            "b": "Digits",
            "c": "Special characters",
            "d": "All"
          },
          "ans": "d",
          "why": "Any single ASCII character can be a char constant."
        },
        {
          "n": 48,
          "q": "Which of the following are valid examples of character constant?",
          "opts": {
            "a": "'A'",
            "b": "'9'",
            "c": "'$'",
            "d": "All"
          },
          "ans": "d",
          "why": "All three are single characters in single quotes."
        },
        {
          "n": 49,
          "q": "A character constant must be enclosed in:",
          "opts": {
            "a": "Quotation marks (\").",
            "b": "Single quotes (').",
            "c": "Exclamation points (!).",
            "d": "Pound signs (#)."
          },
          "ans": "b",
          "why": "Character literals use single quotes."
        },
        {
          "n": 50,
          "q": "What is the valid range of numbers for int type of data?",
          "opts": {
            "a": "0 to 256",
            "b": "-32768 to +32767",
            "c": "65536 to +65536",
            "d": "No specific range"
          },
          "ans": "b",
          "modernNote": "Modern 32-bit int range is -2,147,483,648 to +2,147,483,647.",
          "why": "16-bit signed int range in Turbo C++."
        },
        {
          "n": 51,
          "q": "How many bytes are occupied by the statement: float a, b;",
          "opts": {
            "a": "1 byte",
            "b": "4",
            "c": "8",
            "d": "16"
          },
          "ans": "c",
          "why": "Two floats × 4 bytes each = 8 bytes."
        },
        {
          "n": 52,
          "q": "The size of a character variable is:",
          "opts": {
            "a": "1 byte",
            "b": "8 byte",
            "c": "16 byte",
            "d": "None"
          },
          "ans": "a",
          "why": "char is 1 byte."
        },
        {
          "n": 53,
          "q": "An expression consists of:",
          "opts": {
            "a": "Operators",
            "b": "Operand",
            "c": "Both a and b",
            "d": "None"
          },
          "ans": "c",
          "why": "Expressions combine operators and operands."
        },
        {
          "n": 54,
          "q": "An expression can be a:",
          "opts": {
            "a": "Constant.",
            "b": "Variable.",
            "c": "Combination of constants, variables, and arithmetic operators",
            "d": "All"
          },
          "ans": "d",
          "why": "All three are valid C++ expressions."
        },
        {
          "n": 55,
          "q": "All of the following are valid expressions EXCEPT:",
          "opts": {
            "a": "Sales - Revenues.",
            "b": "Mpg, Gallons.",
            "c": "Pi * Radius",
            "d": "M/n."
          },
          "ans": "b",
          "why": "Mpg, Gallons lacks an arithmetic operator."
        },
        {
          "n": 56,
          "q": "An assignment statement will:",
          "opts": {
            "a": "Perform a calculation.",
            "b": "Store the results of a calculation.",
            "c": "Display the results of a calculation.",
            "d": "Both a and b."
          },
          "ans": "d",
          "why": "It evaluates the RHS expression and stores it in the LHS variable."
        },
        {
          "n": 57,
          "q": "Which of the following is NOT arithmetic operators except",
          "opts": {
            "a": "+",
            "b": "-",
            "c": "%",
            "d": ">"
          },
          "ans": "d",
          "why": "> is a relational operator, not arithmetic."
        },
        {
          "n": 58,
          "q": "The modulus operator is used for:",
          "opts": {
            "a": "Exponentiation",
            "b": "Multiplication.",
            "c": "Division.",
            "d": "Integer remainder"
          },
          "ans": "d",
          "why": "% computes the remainder of integer division."
        },
        {
          "n": 59,
          "q": "Which of the following operators works only with integer value?",
          "opts": {
            "a": "%",
            "b": "+",
            "c": "-",
            "d": "/"
          },
          "ans": "a",
          "why": "Modulus (%) requires integral operands."
        },
        {
          "n": 60,
          "q": "The expression 10%3 has a value equal to:",
          "opts": {
            "a": "1",
            "b": "3",
            "c": "8",
            "d": "None"
          },
          "ans": "a",
          "why": "10 = 3×3 + 1."
        },
        {
          "n": 61,
          "q": "The expression 3%5 has a value equal to:",
          "opts": {
            "a": "3",
            "b": "5",
            "c": "0",
            "d": "None"
          },
          "ans": "a",
          "why": "3 divided by 5 leaves remainder 3."
        },
        {
          "n": 62,
          "q": "The expression 0%4 has a value equal to:",
          "opts": {
            "a": "0",
            "b": "4",
            "c": "Both a and b",
            "d": "None"
          },
          "ans": "a",
          "why": "0 divided by 4 leaves remainder 0."
        },
        {
          "n": 63,
          "q": "The value of the C++ expression 9 / 5 * 2 is:",
          "opts": {
            "a": "3.6",
            "b": "0.9",
            "c": "0",
            "d": "2"
          },
          "ans": "d",
          "why": "Left-to-right: (9 / 5) * 2 = 1 * 2 = 2."
        },
        {
          "n": 64,
          "q": "The value of the C++ expression 5 / 9 * 2 is:",
          "opts": {
            "a": "0.27",
            "b": "1.11",
            "c": "0",
            "d": "None"
          },
          "ans": "c",
          "why": "Left-to-right: (5 / 9) * 2 = 0 * 2 = 0."
        },
        {
          "n": 65,
          "q": "Given x is int and num is float = 10.5, what will x contain after: x = num + 2;",
          "opts": {
            "a": "12.5",
            "b": "10.5",
            "c": "12",
            "d": "nothing; a compile-time error occurs"
          },
          "ans": "c",
          "why": "10.5 + 2 = 12.5, truncated to int 12."
        },
        {
          "n": 66,
          "q": "Given x is float = 80.9 and num is int, what will num contain after: num = x + 2.9;",
          "opts": {
            "a": "83.8",
            "b": "84.0",
            "c": "83",
            "d": "83.0"
          },
          "ans": "c",
          "why": "80.9 + 2.9 = 83.8, truncated to int 83."
        },
        {
          "n": 67,
          "q": "The value of the C++ expression 13 + 21 % 4 - 2 is:",
          "opts": {
            "a": "0",
            "b": "12",
            "c": "16",
            "d": "14"
          },
          "ans": "b",
          "why": "13 + (21 % 4) - 2 = 13 + 1 - 2 = 12."
        },
        {
          "n": 68,
          "q": "Given x is float and num is int = 38, what will x contain after: x = num / 4 + 3.0;",
          "opts": {
            "a": "12.5",
            "b": "13",
            "c": "12",
            "d": "12.0"
          },
          "ans": "d",
          "why": "38 / 4 = 9 (integer division), then 9 + 3.0 = 12.0."
        },
        {
          "n": 69,
          "q": "int a = 11, b = 4, c = 10, d = 2; Value of (a % b + c - d * 3)?",
          "opts": {
            "a": "6",
            "b": "30",
            "c": "33",
            "d": "7"
          },
          "ans": "d",
          "why": "(11 % 4) + 10 - (2 * 3) = 3 + 10 - 6 = 7."
        },
        {
          "n": 70,
          "q": "x = 5, y = 4, z = 2; Value of y * (x + y) % 3 / z + 10?",
          "opts": {
            "a": "10",
            "b": "13",
            "c": "9",
            "d": "8"
          },
          "ans": "a",
          "why": "4 * 9 % 3 / 2 + 10 = 36 % 3 / 2 + 10 = 0 / 2 + 10 = 10."
        },
        {
          "n": 71,
          "q": "Output of: double x; x = 3.0 / 4.0 + 3 + 2 / 5; cout << x;",
          "opts": {
            "a": "3.75",
            "b": "4.75",
            "c": "2.75",
            "d": "3.57"
          },
          "ans": "a",
          "why": "0.75 + 3 + 0 = 3.75."
        },
        {
          "n": 72,
          "q": "Value of (20.0 * (9/5)) + 32.0?",
          "opts": {
            "a": "52.0",
            "b": "54.0",
            "c": "51.0",
            "d": "50"
          },
          "ans": "a",
          "why": "9/5 = 1 (integer division); 20.0 * 1 + 32.0 = 52.0."
        },
        {
          "n": 73,
          "q": "Value of (20.0 * (9/5.0)) + 32.0?",
          "opts": {
            "a": "68.0",
            "b": "67.0",
            "c": "78.0",
            "d": "88.0"
          },
          "ans": "a",
          "why": "9/5.0 = 1.8; 20.0 * 1.8 + 32.0 = 68.0."
        },
        {
          "n": 74,
          "q": "Which assignment statement can be used to store letter A in char variable someChar?",
          "opts": {
            "a": "someChar = \"A\";",
            "b": "someChar = 'A';",
            "c": "someChar = A;",
            "d": "a and c"
          },
          "ans": "b",
          "why": "Single quotes denote a character literal."
        },
        {
          "n": 75,
          "q": "Which of the following operators is used to assign a value to a variable?",
          "opts": {
            "a": ">",
            "b": "+",
            "c": "=",
            "d": "*"
          },
          "ans": "c",
          "why": "= is the assignment operator."
        },
        {
          "n": 76,
          "q": "Which of the following is correct syntax for writing an assignment statement?",
          "opts": {
            "a": "Variable = right_side",
            "b": "Constant = right_side",
            "c": "Constant = variable",
            "d": "None"
          },
          "ans": "a",
          "why": "LHS must be a modifiable variable."
        },
        {
          "n": 77,
          "q": "The left side of an assignment statement holds:",
          "opts": {
            "a": "Variable.",
            "b": "Constant.",
            "c": "Expression.",
            "d": "Both a and b."
          },
          "ans": "a",
          "why": "Only a modifiable variable/lvalue can be on the LHS."
        },
        {
          "n": 78,
          "q": "The right side of an assignment statement holds:",
          "opts": {
            "a": "A variable",
            "b": "An expression",
            "c": "Both a and b",
            "d": "None of these"
          },
          "ans": "c",
          "why": "RHS can be a variable, constant, or expression."
        },
        {
          "n": 79,
          "q": "Which of the following is valid assignment statement?",
          "opts": {
            "a": "a = 100;",
            "b": "c = a + b;",
            "c": "x = c - d + 10;",
            "d": "All of these"
          },
          "ans": "d",
          "why": "All three are valid assignments."
        },
        {
          "n": 80,
          "q": "Which of the following operators works with one operand?",
          "opts": {
            "a": "Unary",
            "b": "Binary",
            "c": "Ternary",
            "d": "None"
          },
          "ans": "a",
          "why": "Unary operators take a single operand."
        },
        {
          "n": 81,
          "q": "Which of the following operators works with two operands?",
          "opts": {
            "a": "Unary",
            "b": "Binary",
            "c": "Ternary",
            "d": "None"
          },
          "ans": "b",
          "why": "Binary operators take two operands."
        },
        {
          "n": 82,
          "q": "Which of the following statements assigns a value to many variables?",
          "opts": {
            "a": "Compound assignment",
            "b": "Lvalue",
            "c": "Rvalue",
            "d": "Input statement"
          },
          "ans": "a",
          "why": "Book uses 'Compound assignment' for chained assignment (a = b = c)."
        },
        {
          "n": 83,
          "q": "The statement I += 3 has the same effect as:",
          "opts": {
            "a": "I = I+3.",
            "b": "I = 3.",
            "c": "I-3 = I.",
            "d": "I3."
          },
          "ans": "a",
          "why": "+= adds 3 to I and assigns back to I."
        },
        {
          "n": 84,
          "q": "Which of the following operator is used to increase the value of a variable?",
          "opts": {
            "a": "++",
            "b": "+-",
            "c": ">>",
            "d": "None"
          },
          "ans": "a",
          "why": "++ is the increment operator."
        },
        {
          "n": 85,
          "q": "Which of the following operator is used to decrease the value of a variable?",
          "opts": {
            "a": "--",
            "b": "+-",
            "c": "<<",
            "d": "None"
          },
          "ans": "a",
          "why": "-- is the decrement operator."
        },
        {
          "n": 86,
          "q": "Which choice has the highest order of precedence when computing an expression?",
          "opts": {
            "a": "()",
            "b": "*",
            "c": "/",
            "d": "+"
          },
          "ans": "a",
          "why": "Parentheses () have the highest precedence."
        },
        {
          "n": 87,
          "q": "If x is int and y is float, what promotion will occur in: y = 5.0 + x;",
          "opts": {
            "a": "float to int",
            "b": "int to float",
            "c": "float to double",
            "d": "No promotion"
          },
          "ans": "b",
          "why": "x (int) is promoted to floating-point for addition with 5.0."
        },
        {
          "n": 88,
          "q": "What is the value of x: int x, y, z; y = 10; z = 3; x = y * z + 3;",
          "opts": {
            "a": "12",
            "b": "60",
            "c": "30",
            "d": "33"
          },
          "ans": "d",
          "why": "10 * 3 + 3 = 33."
        },
        {
          "n": 89,
          "q": "What is the value of x: int x = 0; x = x + 30;",
          "opts": {
            "a": "0",
            "b": "30",
            "c": "33",
            "d": "None"
          },
          "ans": "b",
          "why": "0 + 30 = 30."
        },
        {
          "n": 90,
          "q": "What is the value of x: float x; x = 13/4;",
          "opts": {
            "a": "3.75",
            "b": "4.0",
            "c": "3.0",
            "d": "60"
          },
          "ans": "c",
          "why": "13 / 4 = 3 (int division), stored in float as 3.0."
        },
        {
          "n": 91,
          "q": "What is the value of x: int x; x = 15/4;",
          "opts": {
            "a": "15",
            "b": "3",
            "c": "4",
            "d": "3.75"
          },
          "ans": "b",
          "why": "Integer division 15 / 4 = 3."
        },
        {
          "n": 92,
          "q": "What is the value of x: int x; x = 17%4;",
          "opts": {
            "a": "15",
            "b": "4",
            "c": "1",
            "d": "3.75"
          },
          "ans": "c",
          "why": "17 % 4 = 1."
        },
        {
          "n": 93,
          "q": "Value of ((1+4+4)/(3*3)-(3+6))?",
          "opts": {
            "a": "-8",
            "b": "9",
            "c": "12",
            "d": "16"
          },
          "ans": "a",
          "why": "(9 / 9) - 9 = 1 - 9 = -8."
        },
        {
          "n": 94,
          "q": "Value of ((5+1)/((2+2+2)/2))?",
          "opts": {
            "a": "2",
            "b": "6",
            "c": "12",
            "d": "9"
          },
          "ans": "a",
          "why": "6 / (6 / 2) = 6 / 3 = 2."
        },
        {
          "n": 95,
          "q": "Value of (1*2*3*4+5)?",
          "opts": {
            "a": "29",
            "b": "30",
            "c": "33",
            "d": "40"
          },
          "ans": "a",
          "why": "24 + 5 = 29."
        },
        {
          "n": 96,
          "q": "int result; Result=14-4*6+12/6;",
          "opts": {
            "a": "12",
            "b": "2",
            "c": "-8",
            "d": "62"
          },
          "ans": "c",
          "typo": true,
          "why": "14 - 24 + 2 = -8 (TYPO: result vs Result case mismatch in question)."
        },
        {
          "n": 97,
          "q": "What is the name for a word that has a specific meaning in C++?",
          "opts": {
            "a": "Keywords",
            "b": "Comments",
            "c": "Token",
            "d": "Operators"
          },
          "ans": "a",
          "why": "Keywords have predefined meaning."
        },
        {
          "n": 98,
          "q": "Another name for keywords is:",
          "opts": {
            "a": "Reserved words",
            "b": "Special words",
            "c": "Comments",
            "d": "None"
          },
          "ans": "a",
          "why": "Keywords are also called reserved words."
        },
        {
          "n": 99,
          "q": "Output of: int a = 5, b = 3, c = 2, d = 2; cout << ++a/3-c*d << endl;",
          "opts": {
            "a": "-2",
            "b": "-1",
            "c": "4",
            "d": "-4"
          },
          "ans": "a",
          "why": "++a gives 6; 6/3 - 2*2 = 2 - 4 = -2."
        },
        {
          "n": 100,
          "q": "Result of: 11 * 3 - 35 / (11 % 4)?",
          "opts": {
            "a": "22",
            "b": "32",
            "c": "11",
            "d": "0"
          },
          "ans": "a",
          "why": "33 - 35 / 3 = 33 - 11 = 22."
        },
        {
          "n": 101,
          "q": "Result of: 9 % 11 + 13 % 11 + 0 % 11?",
          "opts": {
            "a": "22",
            "b": "11",
            "c": "12",
            "d": "10"
          },
          "ans": "b",
          "why": "9 + 2 + 0 = 11."
        },
        {
          "n": 102,
          "q": "Result of: float f = 12.0; int z = 3; (f / 2 * (3 - ++z)) - 5?",
          "opts": {
            "a": "22",
            "b": "11",
            "c": "-11.0",
            "d": "12"
          },
          "ans": "c",
          "why": "++z -> 4; 3 - 4 = -1; 6.0 * -1 - 5 = -11.0."
        },
        {
          "n": 103,
          "q": "Which of the following expression will yield 0.5?",
          "opts": {
            "a": "1 / 2.0",
            "b": "(double) 1 / 2",
            "c": "1.0 / 2",
            "d": "All"
          },
          "ans": "d",
          "why": "All three perform floating-point division yielding 0.5."
        },
        {
          "n": 104,
          "q": "-16 % 4 is:",
          "opts": {
            "a": "0",
            "b": "4",
            "c": "16",
            "d": "-4"
          },
          "ans": "a",
          "why": "-16 is evenly divisible by 4, remainder 0."
        },
        {
          "n": 105,
          "q": "To add a value 1 to variable y, you write:",
          "opts": {
            "a": "y += 1;",
            "b": "y = y + 1;",
            "c": "y = 1 + y;",
            "d": "All"
          },
          "ans": "d",
          "why": "All three add 1 to y."
        },
        {
          "n": 106,
          "q": "To add number to sum, you write:",
          "opts": {
            "a": "sum += number;",
            "b": "sum = sum + number;",
            "c": "sum = Number + sum;",
            "d": "both a and b"
          },
          "ans": "d",
          "why": "Option c has 'Number' capitalized instead of 'number'."
        },
        {
          "n": 107,
          "q": "Output of: double x = 3.3; int y = (int)x; cout << \"x is \" << x << \" and y is \" << y;",
          "opts": {
            "a": "x is 3.3 and y is 3.0",
            "b": "x is 3.0 and y is 3.0",
            "c": "x is 3.3 and y is 3",
            "d": "x is 3 and y is 3"
          },
          "ans": "c",
          "why": "(int)x truncates 3.3 to 3, while x remains 3.3."
        }
      ]
    },
    {
      "id": "ch4",
      "title": "Ch 4: Input & Output",
      "subtitle": "cin, cout, escape sequences, and iomanip formatting (14 MCQs + Output Exercises)",
      "outputs": [
        {
          "id": "Q.5",
          "q": "Output of:",
          "code": "char C1, C2, C3;\nC1 = 'A'; C2 = 'B'; C3 = 'C';\ncout<<C1<<C2<<\"C3\";",
          "bookAns": "ABC3",
          "trueAns": "ABC3",
          "trace": "C1 prints 'A', C2 prints 'B', and \"C3\" is a string literal so it prints C3."
        },
        {
          "id": "Q.6",
          "q": "Output of:",
          "code": "cout << \"One\" << \"Two\" << endl;\ncout << \"Three\" << \"Four\" << endl;\ncout << \"Five\" << \"Six\" << endl;",
          "bookAns": "OneTwo\nThreeFour\nFiveSix",
          "trueAns": "OneTwo\nThreeFour\nFiveSix",
          "trace": "Adjacent string insertions print without spaces; endl adds a newline."
        },
        {
          "id": "Q.7",
          "q": "Output of:",
          "code": "int x = 2; double y = 3.0;\ncout << setprecision(2);\ncout << x * y << \" and \" << x / y;",
          "bookAns": "6 and 0.67",
          "trueAns": "6 and 0.67",
          "trace": "2 * 3.0 = 6 (trailing .0 omitted without fixed). 2 / 3.0 = 0.6666... rounded to 2 sig-figs = 0.67."
        },
        {
          "id": "Q.8",
          "q": "Output of:",
          "code": "int x = 13; int y = 3;\ncout << x/y << y/x << x%y;",
          "bookAns": "401",
          "trueAns": "401",
          "trace": "13/3 = 4, 3/13 = 0, 13%3 = 1 -> 401."
        },
        {
          "id": "Q.9",
          "q": "Output if user enters 3, 2 and 4:",
          "code": "cin >> x >> y >> z;\ny = x + z;\nx = z + 1;\ncout << x << \" \" << y << \" \" << z;",
          "bookAns": "5 7 4",
          "trueAns": "5 7 4",
          "trace": "y = 3 + 4 = 7; x = 4 + 1 = 5; z remains 4 -> 5 7 4."
        },
        {
          "id": "Q.10",
          "q": "Single cout statement:",
          "code": "cout << \"This\\nisa \\nC++\\nprogram\\n\";",
          "bookAns": "This\nis a\nC++\nprogram",
          "trueAns": "This\nisa \nC++\nprogram",
          "typo": true,
          "trace": "TYPO in book code: '\\nisa ' lacks a space between 'is' and 'a', though the book's expected output prints 'is a'."
        },
        {
          "id": "Q.11",
          "q": "Output of:",
          "code": "cout << \"\\top ba\\na\\\\na\";",
          "bookAns": "\top ba\na\\na",
          "trueAns": "\top ba\na\\na",
          "trace": "\\t inserts a tab, \\n starts a new line, and \\\\ prints a single backslash."
        },
        {
          "id": "Q.12",
          "q": "Output of swap + setw/setprecision:",
          "code": "float a=2.467, b=5.254, temp;\ntemp=a; a=b; b=temp;\ncout << fixed << setprecision(2);\ncout << setw(5) << a << setw(7) << b << endl;",
          "bookAns": " 5.25   2.47",
          "trueAns": " 5.25   2.47",
          "modernNote": "fixed manipulator is ANSI/Modern C++ <iomanip> (Turbo C++ used setiosflags(ios::fixed)).",
          "trace": "After swap: a=5.254 -> 5.25 (1 space in setw(5)); b=2.467 -> 2.47 (3 spaces in setw(7))."
        },
        {
          "id": "Q.13",
          "q": "Output of:",
          "code": "cout << \"One\\n\" << \"Two\\n\";\ncout << \"Three\" << \"\\tFour\";\ncout << \"\\nFive\" << \"\\tSix\" << endl;",
          "bookAns": "One\nTwo\nThree\tFour\nFive\tSix",
          "trueAns": "One\nTwo\nThree\tFour\nFive\tSix",
          "trace": "\\n moves to next line; \\t inserts a horizontal tab."
        },
        {
          "id": "Q.14",
          "q": "Statements with i=2, j=6:",
          "code": "1) cout << i;\n2) cout << \"i = \" << i;\n3) cout << \"Sum = \" << i + j;\n4) cout << \"i = \" << i << endl << \"j = \" << j << endl << \"sum = \" << i + j << endl;\n5) cout << j % i << endl;",
          "bookAns": "2 | i = 2 | Sum = 8 | i=2, j=6, sum=8 | 0",
          "trueAns": "2 | i = 2 | Sum = 8 | i=2, j=6, sum=8 | 0",
          "trace": "6 % 2 = 0; all 5 outputs in the book table are exact."
        }
      ],
      "mcqs": [
        {
          "n": 1,
          "q": "cin is:",
          "opts": {
            "a": "an object",
            "b": "variable",
            "c": "Command",
            "d": "None"
          },
          "ans": "a",
          "why": "cin is the standard input stream object (istream)."
        },
        {
          "n": 2,
          "q": "The ____ object causes data to be input from the keyboard:",
          "opts": {
            "a": "cin",
            "b": "cout",
            "c": "standard input",
            "d": "None"
          },
          "ans": "a",
          "why": "cin reads input from standard input (keyboard)."
        },
        {
          "n": 3,
          "q": "The cin object is followed by ____ operator:",
          "opts": {
            "a": "iostream",
            "b": "the stream insertion (<<)",
            "c": "stream extraction (>>)",
            "d": "None"
          },
          "ans": "c",
          "why": "cin uses the extraction operator (>>)."
        },
        {
          "n": 4,
          "q": "The functions used for input and output is stored in:",
          "opts": {
            "a": "iostream.h",
            "b": "conio.h",
            "c": "math.h",
            "d": "None"
          },
          "ans": "a",
          "why": "iostream.h (modern <iostream>) provides cin and cout."
        },
        {
          "n": 5,
          "q": "Which of the following is used to display output on screen is called:",
          "opts": {
            "a": "cout object",
            "b": "cin object",
            "c": "Opening and closing braces",
            "d": "None"
          },
          "ans": "a",
          "why": "cout is the standard output stream object."
        },
        {
          "n": 6,
          "q": "Which of the following is displayed by cout object?",
          "opts": {
            "a": "Text",
            "b": "constant or values of variable",
            "c": "A and b",
            "d": "None"
          },
          "ans": "c",
          "why": "cout prints string literals, constants, and variable values."
        },
        {
          "n": 7,
          "q": "How many variables can be used in one cout object?",
          "opts": {
            "a": "One",
            "b": "Two",
            "c": "Many",
            "d": "None"
          },
          "ans": "c",
          "why": "Multiple << insertions can be chained."
        },
        {
          "n": 8,
          "q": "Which escape sequence can be used to begin a new line in C++?",
          "opts": {
            "a": "\\a",
            "b": "\\b",
            "c": "\\m",
            "d": "\\n"
          },
          "ans": "d",
          "why": "\\n is the newline escape sequence."
        },
        {
          "n": 9,
          "q": "Which escape sequence can be used to beep from speaker in C++?",
          "opts": {
            "a": "\\a",
            "b": "\\b",
            "c": "\\m",
            "d": "\\n"
          },
          "ans": "a",
          "why": "\\a is the alert/bell escape sequence."
        },
        {
          "n": 10,
          "q": "Which escape sequence can be used to insert a Tab in C++?",
          "opts": {
            "a": "\\a",
            "b": "\\b",
            "c": "\\t",
            "d": "\\n"
          },
          "ans": "c",
          "why": "\\t inserts a horizontal tab."
        },
        {
          "n": 11,
          "q": "Which escape sequence can be used to move cursor at the beginning of current line in C++?",
          "opts": {
            "a": "\\a",
            "b": "\\b",
            "c": "\\m",
            "d": "\\r"
          },
          "ans": "d",
          "why": "\\r is carriage return."
        },
        {
          "n": 12,
          "q": "What library contains the definitions of setprecision and fixed?",
          "opts": {
            "a": "iostream",
            "b": "iomanip",
            "c": "both a and b",
            "d": "string"
          },
          "ans": "b",
          "why": "<iomanip> defines parameterized stream manipulators."
        },
        {
          "n": 13,
          "q": "What is the output of (# indicates a blank space):",
          "code": "cout << setw(6) << left << \"world\" << setw(6) << right << 1.97;",
          "opts": {
            "a": "#world1.97##",
            "b": "#world1.97###",
            "c": "world###1.97",
            "d": "world####1.97"
          },
          "ans": "c",
          "why": "\"world\" (5 chars) left-aligned in 6 gives 'world#'; 1.97 (4 chars) right-aligned in 6 gives '##1.97' -> 'world###1.97'."
        },
        {
          "n": 14,
          "q": "Which manipulator is used to set the number of digits to be displayed after decimal point:",
          "opts": {
            "a": "Setw",
            "b": "setprecision",
            "c": "Setfill",
            "d": "None"
          },
          "ans": "b",
          "why": "setprecision(n) controls decimal digits (with fixed) or significant digits."
        }
      ]
    },
    {
      "id": "ch5",
      "title": "Ch 5: Conditional Structures",
      "subtitle": "if, if-else, switch, relational & logical operators (49 MCQs + Output Exercises)",
      "outputs": [
        {
          "id": "Q.21a-j",
          "q": "Boolean evaluation (10 expressions):",
          "code": "a) (3<4)||(3>4)  b) (3!=3)&&(4==4)  c) (15>=15)&&(16==16)||(14<2)\nd) 6<=6&&(5<3)  e) (6<=6)||(5<3)  f) (5!=6)\ng) (5<3)&&(6<=6)||(5!=6)  h) (5<3)&&((6<=6)||(5!=6))\ni) !((5<3)&&((6<=6)||(5!=6)))  j) !(12>25)&&!(18<17)",
          "bookAns": "a:T b:F c:T d:F e:T f:T g:T h:F i:T j:T",
          "trueAns": "All 10 verified correct",
          "trace": "In (g), && binds tighter than ||: (false && true) || true = true. In (h), false && true = false."
        },
        {
          "id": "Q.22a",
          "q": "Output of:",
          "code": "int p = 1, q = 9;\nif ((p >= 3) || (q < 11 && p + q < 15))\n  cout<<\"hello\\n\";\nelse cout<<\"goodbye\\n\";",
          "bookAns": "hello",
          "trueAns": "hello",
          "trace": "p>=3 is false; q<11 (true) && 10<15 (true) is true -> prints hello."
        },
        {
          "id": "Q.22b",
          "q": "Output of:",
          "code": "int n, k = 5;\nn = (100 % k ? k + 1 : k - 1);\ncout << \"n = \" << n << \" k =\" << k << endl;",
          "bookAns": "n = 4 k = 5",
          "trueAns": "n = 4 k =5",
          "trace": "100 % 5 = 0 (false), so ternary chooses k - 1 = 4."
        },
        {
          "id": "Q.22c",
          "q": "Output of:",
          "code": "int found = 0, count = 5;\nif (!found || --count == 0)\n  cout << \"danger\" << endl;\ncout << \"count = \" << count << endl;",
          "bookAns": "danger\ncount = 5",
          "trueAns": "danger\ncount = 5",
          "trace": "!found is true, so || short-circuits and --count is NOT executed; count stays 5."
        },
        {
          "id": "Q.23",
          "q": "Output when score = 62:",
          "code": "if (score < 50) cout << \"Failing\";\nif (score < 60) cout << \"Below average\";\nif (score < 70) cout << \"Average\";\nif (score < 80) cout << \"Above average\";\nif (score < 90) cout << \"Very good\";\nif (score < 100) cout << \"Excellent\";",
          "bookAns": "AverageAbove averageVery goodExcellent",
          "trueAns": "AverageAbove averageVery goodExcellent",
          "trace": "Without else, every true if-block executes: <70, <80, <90, and <100."
        },
        {
          "id": "Q.24",
          "q": "Output if grade = 'B':",
          "code": "if (grade == 'A' || grade == 'B' && grade == 'C')\n  cout << \"Fail\";\nelse cout << \"Pass\";",
          "bookAns": "Pass",
          "trueAns": "Pass",
          "trace": "&& has higher precedence than ||: false || (true && false) = false -> Pass."
        },
        {
          "id": "Q.25",
          "q": "Output of:",
          "code": "int b=6, c=5;\nif (b++==7 && ++c==5) { b*=c; cout<<++b<<endl; }\nelse cout<<b--<<endl;",
          "bookAns": "7",
          "trueAns": "7",
          "trace": "b++==7 checks 6==7 (false) and increments b to 7; && short-circuits; else prints b-- (7)."
        },
        {
          "id": "Q.26",
          "q": "Output of:",
          "code": "int n1=25, n2=50;\nif (n1 < n2 && !(n2 != 2 * n1)) {\n  n1 = n1 * 2; n2 = n2 * 2; cout<<n1<<n2;\n}\nif (n2 < 2 * n1 || n1 == n2) {\n  n1 = n1 / 2; n2 = n2 / 2; cout<<n1<<n2;\n}",
          "bookAns": "501005050",
          "trueAns": "50100",
          "errata": true,
          "trace": "BOOK ERRATA: First if sets n1=50, n2=100 and prints 50100. Second if checks (100 < 100 || 50 == 100) which is FALSE, so nothing else is printed!"
        },
        {
          "id": "Q.27",
          "q": "Output of:",
          "code": "int n = 0;\nif ('A' == 'a') n = 1;\nelse if ('A' > 'a') n = 2;\nelse n = 3;\ncout << n << endl;",
          "bookAns": "3",
          "trueAns": "3",
          "trace": "ASCII 'A' (65) < 'a' (97), so else sets n = 3."
        },
        {
          "id": "Q.28",
          "q": "Output of:",
          "code": "int n = 5, a = -1, b = 3;\nswitch ((--n)%4) {\n  case 0: n++; break;\n  ...\n}\ncout << n;",
          "bookAns": "5",
          "trueAns": "5",
          "trace": "--n makes n=4; 4 % 4 = 0; case 0 increments n to 5 and breaks."
        },
        {
          "id": "Q.29",
          "q": "Final value of n:",
          "code": "int n=5, a=4, b=0, c=8;\nif (b<=6 && c>4 || a++==6) n++;\nif (a!=4 || b>5 || c<=9) n += a++;\nif (c<=2 || a>=5 && b--==0) n *= a++;",
          "bookAns": "50",
          "trueAns": "50",
          "trace": "1) short-circuits -> n=6, a=4. 2) c<=9 true -> n=10, a=5. 3) a>=5 && b--==0 true -> n=10*5=50."
        },
        {
          "id": "Q.30",
          "q": "Output of:",
          "code": "int a = 4, b = 2, c = 5;\nif (a > b) { a = 5; }\nif (c == a) { a = 6; } else { a = 7; }\ncout << a;",
          "bookAns": "6",
          "trueAns": "6",
          "trace": "4>2 sets a=5; then c==a (5==5) is true, setting a=6."
        },
        {
          "id": "Q.31",
          "q": "Output of switch without break:",
          "code": "char choose = 'b';\nswitch (choose) {\n  case 'b': case 'B': cout << \"you lose!\\n\";\n  case 'c': case 'C': cout << \"you draw!\\n\";\n  default: cout << \"I don't know you!\\n\";\n}",
          "bookAns": "you lose!\nyou draw!\nI don't know you!",
          "trueAns": "you lose!\nyou draw!\nI don't know you!",
          "trace": "Missing break causes fall-through from case 'b' through case 'c' and default."
        },
        {
          "id": "Q.32",
          "q": "Output of:",
          "code": "int x = 5 + 7/2;\nswitch (x) { case 5: ... case 7: ... case 8: cout << 'r'; break; }",
          "bookAns": "r",
          "trueAns": "r",
          "trace": "7/2 = 3 (int division); x = 5 + 3 = 8; matches case 8 -> 'r'."
        }
      ],
      "mcqs": [
        {
          "n": 1,
          "q": "The three programming structures are:",
          "opts": {
            "a": "Sequence, decision, and repetition.",
            "b": "Process, decision, and alternation.",
            "c": "Sequence, definition, and process.",
            "d": "Relation, comparison, and process."
          },
          "ans": "a",
          "why": "The three fundamental structured programming constructs."
        },
        {
          "n": 2,
          "q": "Which programming structure executes program statements in order?",
          "opts": {
            "a": "Relation",
            "b": "Decision",
            "c": "Sequence",
            "d": "Repetition"
          },
          "ans": "c",
          "why": "Sequential execution runs statements top-to-bottom."
        },
        {
          "n": 3,
          "q": "Another term for a computer making a decision is:",
          "opts": {
            "a": "Sequential.",
            "b": "Selection.",
            "c": "Repetition.",
            "d": "Iteration."
          },
          "ans": "b",
          "why": "Decision structures select an execution branch."
        },
        {
          "n": 4,
          "q": "Which programming structure makes a comparison?",
          "opts": {
            "a": "Relation",
            "b": "Decision",
            "c": "Sequence",
            "d": "Repetition"
          },
          "ans": "b",
          "why": "Decision structures evaluate conditions/comparisons."
        },
        {
          "n": 5,
          "q": "An expression that uses a relational operator is known as:",
          "opts": {
            "a": "Condition.",
            "b": "Decision.",
            "c": "Series.",
            "d": "Relation."
          },
          "ans": "a",
          "why": "Relational expressions form conditions."
        },
        {
          "n": 6,
          "q": "Relational operators allow you to ____ numbers.",
          "opts": {
            "a": "Compare",
            "b": "Add",
            "c": "Multiply",
            "d": "Divide"
          },
          "ans": "a",
          "why": "Relational operators compare two values."
        },
        {
          "n": 7,
          "q": "When a relational expression is false, it has the value ____.",
          "opts": {
            "a": "Zero",
            "b": "one",
            "c": "Less than 0",
            "d": "None"
          },
          "ans": "a",
          "why": "false evaluates to 0 in C++."
        },
        {
          "n": 8,
          "q": "You can use a decision statement to:",
          "opts": {
            "a": "Run a series of statements if a test fails.",
            "b": "Test a series of conditions.",
            "c": "Test whether a condition is true or false.",
            "d": "All"
          },
          "ans": "d",
          "why": "if / if-else / else-if handle all three."
        },
        {
          "n": 9,
          "q": "Operators that are used to compare operands and decide whether the relation is true or false are called:",
          "opts": {
            "a": "Arithmetic operators.",
            "b": "Logical operators.",
            "c": "Syntax operators.",
            "d": "Relational operators"
          },
          "ans": "d",
          "why": "Relational operators perform comparisons."
        },
        {
          "n": 10,
          "q": "Which of the following statements is the simplest form of a decision structure?",
          "opts": {
            "a": "Select...Case",
            "b": "If statement",
            "c": "Try...Catch...Finally",
            "d": "Nested if"
          },
          "ans": "b",
          "why": "A simple if statement is the basic decision structure."
        },
        {
          "n": 11,
          "q": "In if statement, false is represented by:",
          "opts": {
            "a": "0",
            "b": "1",
            "c": "2",
            "d": "3"
          },
          "ans": "a",
          "why": "0 represents false."
        },
        {
          "n": 12,
          "q": "In if statement, true is represented by:",
          "opts": {
            "a": "0",
            "b": "1",
            "c": "2",
            "d": "3"
          },
          "ans": "b",
          "why": "1 (or any non-zero value) represents true."
        },
        {
          "n": 13,
          "q": "Which of the following is used for making two way decision",
          "opts": {
            "a": "if-else",
            "b": "if",
            "c": "nested if",
            "d": "switch"
          },
          "ans": "a",
          "why": "if-else chooses between two branches."
        },
        {
          "n": 14,
          "q": "Conditional operator is an alternative of:",
          "opts": {
            "a": "if",
            "b": "if-else",
            "c": "nested if",
            "d": "None"
          },
          "ans": "b",
          "why": "?: replaces simple if-else."
        },
        {
          "n": 15,
          "q": "The conditional portion of the If statement can contain:",
          "opts": {
            "a": "Any valid constant.",
            "b": "Any expression that can be evaluated to a Boolean value.",
            "c": "Any valid variable.",
            "d": "Any valid constant or variable."
          },
          "ans": "b",
          "why": "if() accepts any boolean-convertible expression."
        },
        {
          "n": 16,
          "q": "An if statement within an if statement is called:",
          "opts": {
            "a": "A nested if statement.",
            "b": "A branched if statement.",
            "c": "A infinite if statement",
            "d": "None"
          },
          "ans": "a",
          "why": "Nesting places one if inside another."
        },
        {
          "n": 17,
          "q": "What does a compound condition use to join two conditions?",
          "opts": {
            "a": "Relational Operator",
            "b": "Logical Operator",
            "c": "Relational Results",
            "d": "Logical Results"
          },
          "ans": "b",
          "why": "Logical operators (&&, ||) combine conditions."
        },
        {
          "n": 18,
          "q": "Which is an example of multiple branches from single expression?",
          "opts": {
            "a": "If statement",
            "b": "switch statement",
            "c": "while loop",
            "d": "All"
          },
          "ans": "b",
          "why": "switch dispatches to multiple cases from one expression."
        },
        {
          "n": 19,
          "q": "Which of the following is valid case statement in a switch?",
          "opts": {
            "a": "case 1:",
            "b": "case x<4:",
            "c": "case 'ab':",
            "d": "case 1.5:"
          },
          "ans": "a",
          "why": "case requires an integral constant expression."
        },
        {
          "n": 20,
          "q": "A case can be defined as:",
          "opts": {
            "a": "An individual condition to test.",
            "b": "A set of conditions to test.",
            "c": "A statement that includes an If statement.",
            "d": "A block of selection code."
          },
          "ans": "a",
          "why": "Each case tests one specific constant value."
        },
        {
          "n": 21,
          "q": "The first line in switch block contains:",
          "opts": {
            "a": "The value of the first criterion.",
            "b": "The statement to be executed if the first criterion is true.",
            "c": "The expression to be evaluated.",
            "d": "The statement to be executed if none of the criteria are true."
          },
          "ans": "c",
          "why": "switch(expression) evaluates the selector expression."
        },
        {
          "n": 22,
          "q": "The Case block ends with:",
          "opts": {
            "a": "End Select.",
            "b": "End Case.",
            "c": "break",
            "d": "Case Else."
          },
          "ans": "c",
          "why": "break exits the switch block."
        },
        {
          "n": 23,
          "q": "Which of the following is equivalent to (p >= q)?",
          "opts": {
            "a": "p < q",
            "b": "!(p < q)",
            "c": "p > q",
            "d": "!p < q"
          },
          "ans": "b",
          "why": "Negating p < q gives p >= q."
        },
        {
          "n": 24,
          "q": "Another term for a conditional operator is:",
          "opts": {
            "a": "Ternary",
            "b": "Binary",
            "c": "Byte",
            "d": "Iteration."
          },
          "ans": "a",
          "why": "It operates on three operands."
        },
        {
          "n": 25,
          "q": "Conditional operator takes:",
          "opts": {
            "a": "Three operands",
            "b": "Two operands",
            "c": "One operand",
            "d": "None"
          },
          "ans": "a",
          "why": "condition ? expr1 : expr2."
        },
        {
          "n": 26,
          "q": "Which operator in C++ is called a ternary operator?",
          "opts": {
            "a": "if",
            "b": "++",
            "c": "?",
            "d": "()"
          },
          "ans": "c",
          "why": "The conditional operator (?:) is C++'s only ternary operator."
        },
        {
          "n": 27,
          "q": "All of the following are relational operators EXCEPT:",
          "opts": {
            "a": "!=",
            "b": "||",
            "c": "=",
            "d": ">="
          },
          "ans": "c",
          "why": "= is assignment (and || is logical; = is definitely not relational)."
        },
        {
          "n": 28,
          "q": "Which of the following returns True if A = 25 and B = 35:",
          "opts": {
            "a": "A+B",
            "b": "A>=B",
            "c": "A!=B",
            "d": "A=B"
          },
          "ans": "c",
          "why": "25 != 35 is true."
        },
        {
          "n": 29,
          "q": "For A = 4 and B = 4 which evaluates as true?",
          "opts": {
            "a": "A <> B",
            "b": "A < B",
            "c": "A > B",
            "d": "A >= B"
          },
          "ans": "d",
          "why": "4 >= 4 is true."
        },
        {
          "n": 30,
          "q": "What operator is used in a compound condition to join two conditions?",
          "opts": {
            "a": "Relational Operator",
            "b": "Logical Operator",
            "c": "Relational Results",
            "d": "Logical Results"
          },
          "ans": "b",
          "why": "Logical operators join multiple relational conditions."
        },
        {
          "n": 31,
          "q": "Operators that perform operations on Boolean data are:",
          "opts": {
            "a": "Arithmetic operators.",
            "b": "Logical operators.",
            "c": "Relational operators.",
            "d": "Math operators."
          },
          "ans": "b",
          "why": "Logical operators operate on boolean values."
        },
        {
          "n": 32,
          "q": "Which of the following symbol is used for OR operator?",
          "opts": {
            "a": "||",
            "b": "&&",
            "c": "!",
            "d": "None"
          },
          "ans": "a",
          "why": "|| is logical OR."
        },
        {
          "n": 33,
          "q": "Which of the following symbol is used for AND operator?",
          "opts": {
            "a": "||",
            "b": "&&",
            "c": "!",
            "d": "None"
          },
          "ans": "b",
          "why": "&& is logical AND."
        },
        {
          "n": 34,
          "q": "Which of the following symbol is used for NOT operator?",
          "opts": {
            "a": "||",
            "b": "&&",
            "c": "!",
            "d": "None"
          },
          "ans": "c",
          "why": "! is logical NOT."
        },
        {
          "n": 35,
          "q": "All of the following are logical operators EXCEPT:",
          "opts": {
            "a": "&&",
            "b": "||",
            "c": "!",
            "d": "="
          },
          "ans": "d",
          "why": "= is assignment."
        },
        {
          "n": 36,
          "q": "Which of the following is not a C++ relational operator?",
          "opts": {
            "a": "==",
            "b": "<",
            "c": "!=",
            "d": "&&"
          },
          "ans": "d",
          "why": "&& is a logical operator."
        },
        {
          "n": 37,
          "q": "Which C++ logical expression correctly determines whether the value of beta lies between 0 and 100?",
          "opts": {
            "a": "0 < beta < 100",
            "b": "0 < beta && beta < 100",
            "c": "(0 < beta) && (beta < 100)",
            "d": "b and c above"
          },
          "ans": "d",
          "why": "Both b and c are valid and equivalent."
        },
        {
          "n": 38,
          "q": "If i=3, j=20, k=100, what is the value of: j < 4 || j == 5 && i <= k3 < 4 || 20 == 5 && 3 < 100",
          "opts": {
            "a": "3",
            "b": "false",
            "c": "20",
            "d": "True"
          },
          "ans": "b",
          "typo": true,
          "why": "TYPO in book ('k3' -> 'k'): 20<4 is false, 20==5 is false, 20==5 is false -> false || false || false = false."
        },
        {
          "n": 39,
          "q": "If p is a Boolean variable, which of the following logical expressions always has the value false?",
          "opts": {
            "a": "p && p",
            "b": "p || p",
            "c": "p && !p",
            "d": "p || !p"
          },
          "ans": "c",
          "why": "A value and its negation cannot both be true."
        },
        {
          "n": 40,
          "q": "Output of:",
          "code": "if ((1==1) || (2==2) || (3==3))\n  cout<<\"Good\";\nelse cout<<\"Bad\";",
          "opts": {
            "a": "Good",
            "b": "Bad",
            "c": "Goodbad",
            "d": "No output"
          },
          "ans": "a",
          "why": "1==1 is true, so if-branch executes."
        },
        {
          "n": 41,
          "q": "Output of:",
          "code": "int x=1, y=2, z=3;\nif ((x==y) || (y==z) || (z==2))\n  printf(\"YES\");\nelse printf(\"NO\");",
          "opts": {
            "a": "No",
            "b": "YES",
            "c": "yes",
            "d": "No output"
          },
          "ans": "a",
          "why": "1==2, 2==3, and 3==2 are all false -> else prints NO."
        },
        {
          "n": 42,
          "q": "Output of:",
          "code": "if (1==2)\n  cout<<\"Hello\";\nelse if (2==1)\n  cout<<\"World\";",
          "opts": {
            "a": "No output",
            "b": "Hello",
            "c": "World",
            "d": "Helloworld"
          },
          "ans": "a",
          "why": "Both conditions are false and there is no else branch."
        },
        {
          "n": 43,
          "q": "Value of angle if input is 0:",
          "code": "cin >> angle;\nif (angle > 5) angle = angle + 5;\nelse if (angle > 2) angle = angle + 10;\nelse angle = angle + 15;",
          "opts": {
            "a": "15",
            "b": "25",
            "c": "35",
            "d": "40"
          },
          "ans": "a",
          "why": "0>5 false, 0>2 false -> else adds 15 -> 15."
        },
        {
          "n": 44,
          "q": "Output of:",
          "code": "int p=10, q=3, r=2;\nif ((p + q) < 14 && (r < q - 3))\n  cout << r;\nelse cout << p;",
          "opts": {
            "a": "2",
            "b": "4",
            "c": "9",
            "d": "-4"
          },
          "ans": "a",
          "errata": true,
          "why": "BOOK ERRATA: (10+3)<14 is true, (2<0) is false -> else prints p which is 10, but 10 is missing from the options (a. 2, b. 4, c. 9, d. -4)."
        },
        {
          "n": 45,
          "q": "Output of:",
          "code": "if (('A' == 'A') && ('B' == 'B') && ('C' == 'c'))\n  cout << \"Equal\";\nelse cout << \"Not Equal\";",
          "opts": {
            "a": "Not Equal",
            "b": "Equal",
            "c": "No output",
            "d": "Both a and b"
          },
          "ans": "a",
          "why": "'C' == 'c' is false (case-sensitive) -> Not Equal."
        },
        {
          "n": 46,
          "q": "Output of:",
          "code": "if (9<5) cout<<\"x\";\nelse if (5<6) cout<<\"#\";\nelse cout<<\"@\";",
          "opts": {
            "a": "x",
            "b": "#",
            "c": "@",
            "d": "None"
          },
          "ans": "b",
          "why": "9<5 is false; 5<6 is true -> prints #."
        },
        {
          "n": 47,
          "q": "Output for input 25 35 20:",
          "code": "cin >> a >> b >> c;\nif (a > b && a > c) m = a;\nelse if (b > c) m = b;\nelse m = c;\ncout << m << endl;",
          "opts": {
            "a": "35",
            "b": "25",
            "c": "34",
            "d": "31"
          },
          "ans": "a",
          "why": "a>b is false; b>c (35>20) is true -> m = 35."
        },
        {
          "n": 48,
          "q": "Output for input 35 30 36 24:",
          "code": "cin >> a >> b >> c >> d;\nif (a > b || a > c && c != d) m = a;\nelse if (b > d) m = b;\nelse m = c;\ncout << m << endl;",
          "opts": {
            "a": "35",
            "b": "45",
            "c": "31",
            "d": "40"
          },
          "ans": "a",
          "why": "a>b (35>30) is true, so || short-circuits -> m = 35."
        },
        {
          "n": 49,
          "q": "What is the opposite of the boolean expression: ( 1 < x && x < 100 )",
          "opts": {
            "a": "x <= 1 || 100 <= x",
            "b": "!( 1 < x && x < 100 )",
            "c": "Both a or b",
            "d": "None"
          },
          "ans": "c",
          "why": "By De Morgan's Law, !(1 < x && x < 100) is equivalent to x <= 1 || 100 <= x."
        }
      ]
    }
  ]
};
