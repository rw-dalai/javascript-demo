// 1. JavaScript Language
// --------------------------------------------------------

// JavaScript is a multi-paradigm language
// - Object-Oriented Programming
// - Functional Programming
// - Event-Driven Programming

// JavaScript is dynamic, weakly typed language
// - Dynamic typing means that the type of variable is checked at runtime
// - Weakly typed means that the type of variable can change

// Java is a static, strongly typed language
// - Static typing means that the type of variable is checked at compile time
// - Strongly typed means that the type of variable cannot change



// 2. DataTypes / Variables
// --------------------------------------------------------

// Primitive Types
// - null
//    absence of an object
// - undefined
//    unassigned variable, missing property
// - Number
//    Double-precision 64-bit binary format IEEE 754 value.
//    NaN, Infinity, -Infinity
// - String
//    Arbitrary long Unicode characters
// - Boolean
//     true/false
// - BigInt
//    Arbitrary long numbers
// - Symbol
//    unique and immutable value

// Reference Types
// - Object
//   Arrays (are also Objects)



// 3. Variable Declaration
// --------------------------------------------------------

// let declares a variable
// const declares a constant

// var declares a variable (old way, hoisted)
// var dont = 1;


// Declaration
// let x; // undefined

// Assignment
// x = 1;
// console.log('x', x); // 1

// Re-Assignment
// x = "Rene"
// console.log('x', x); // "Rene"


// Numbers
// const number = 1; // Literal Syntax (preferred)
// const number2 = Number(1); // Function Syntax
// const number3 = new Number(1); // Construction Syntax

// Strings
// const name = "Rene";
// const name2 = String("Rene");
// const name3 = new String("Rene");

// Booleans
// const enabled = true;
// const enabled2 = Boolean(true);
// const enabled3 = new Boolean(true);


// 5. Type Conversion and Coercion in JavaScript
// --------------------------------------------------------

// - Converting between types

// const str = "42";
// console.log(typeof str); // "string"
// const num = Number(str);
// const num2 = parseInt(str, 10);
// console.log(typeof num); // "number"

// let num = 42;
// console.log(typeof str); // "number"
// const str2 = String(str);
// const str = num.toString();
// console.log(typeof str); // "string"

// - Coercion to String
// const str = 42 + "";

// Coercion to Number
// const num = "42" - 42;
// const num2 = +"42";

// Coercion to Boolean
// const bool = !!42;


// == vs ===
// == compares values (using type coercion)
// 42 == "42" // true

// === compares values and types (strict equality)
// 42 === "42" // false


// 3. String Functions
// --------------------------------------------------------

// const name = "Rene";
// const nameWithSpaces = " Rene ";

// charAt
// console.log(name.charAt(0)); // "R"
// console.log(name[0]); // "R"

// equals
// console.log(name === new String("Rene")); // false
// console.log(name === String("Rene")); // true
// new String("Rene") === String("Rene") // false

// length
// console.log(name.length); // 4

// trim
// console.log(nameWithSpaces.trim().length); // 4

// toUpperCase
// console.log(name.toUpperCase()); // "RENE"

// toLowerCase
// console.log(name.toLowerCase()); // "rene"

// indexOf
// console.log(name.indexOf('e')); // 1

// substring
// console.log(name.substring(2, 4)); // "ne"

// AUFGABE 2
// Filename.Extension
// const filename = "music.mp3";
// const index = filename.indexOf('.');
// const name = filename.substring(0, index);
// console.log('name', name);

// const extension = filename.substring(index + 1);
// console.log('extension', extension);


// 4. String Interpolation
// --------------------------------------------------------

// const name = "Rene";
// const country = "Austria";
// console.log(`Hello, my name is ${name} and I am from ${country}`);


// 6. Function
// --------------------------------------------------------
// Function is a block of code that can be called and executed later.
// Function can take parameters and return a value.
// Function can be assigned to a variable, passed as an argument, and returned from other functions.
// That's the reason why JavaScript is called a functional programming language.
// Functions are first-class citizens in JavaScript.

// Function declaration
// function myFunction() {
//   console.log('myFunction');
// }

// Function call
// myFunction();



// AUFGABE 2
// Lesen Sie zwei zahlen über das `prompt` ein und rufen Sie `add` zum addieren auf.
// Geben Sie das Ergebnis in ein `alert` aus.
// Bonus: Zahlen dürfen nicht negative sein, falls ja Fehler mit `alert` und abbruch.
// Note: Number(string) -> number -or- parseInt(string, radix)-> number
// prompt() -> string
// alert() -> void



// Property Access -------------------
// via dot notation

// via bracket notation

// non-existing property
