// 1. JavaScript Language
// --------------------------------------------------------
// JavaScript is a multi-paradigm language
// - Object-Oriented Programming
// - Functional Programming
// - Event-Driven Programming
//
// JavaScript is dynamic, weakly typed language
// - Dynamic typing means that the type of variable is checked at runtime
// - Weakly typed means that the type of variable can change
//
// Java is a static, strongly typed language
// - Static typing means that the type of variable is checked at compile time
// - Strongly typed means that the type of variable cannot change


// 2. DataTypes
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
//
// var declares a variable (old way, hoisted)
// var dont = 1;
//
//
// Declaration
// let x; // undefined
//
// Assignment
// x = 1;
// console.log('x', x); // 1
//
// Re-Assignment
// x = "Rene"
// console.log('x', x); // "Rene"
//
//
// Numbers
// const number = 1; // Literal Syntax (preferred)
// const number2 = Number(1); // Function Syntax
// const number3 = new Number(1); // Construction Syntax
//
// Strings
// const name = "Rene";
// const name2 = String("Rene");
// const name3 = new String("Rene");
//
// Booleans
// const enabled = true;
// const enabled2 = Boolean(true);
// const enabled3 = new Boolean(true);


// 4. Type Conversion and Coercion
// --------------------------------------------------------
// 4a. Converting (Explicit Type Conversion)
// - String -> Number
// const str = "42";
// console.log(typeof str); // "string"
// const num = Number(str);
// const num2 = parseInt(str, 10);
// console.log(typeof num); // "number"
//
// - Number -> String
// let num = 42;
// console.log(typeof str); // "number"
// const str = num.toString();
// const str2 = String(str);
// console.log(typeof str); // "string"
//
// 4b. Coercion (Implicit Type Conversion)
// - Coercion String
// const str = "42" + 42;
//
// - Coercion to Number
// const num = "42" - 42;
// const num2 = +"42";
//
// - Coercion to Boolean
// const bool = !!42;


// 5. Comparison
// --------------------------------------------------------
// == compares values (using type coercion)
// "42" == 42 // true
//
// === compares values and types (strict equality)
// "42" === 42 // false


// 6. String Functions
// --------------------------------------------------------
// const name = "Rene";
// const nameWithSpaces = " Rene ";
//
// charAt
// console.log(name.charAt(0)); // "R"
// console.log(name[0]); // "R"
//
// equals
// console.log(name === new String("Rene")); // false
// console.log(name === String("Rene")); // true
// new String("Rene") === String("Rene") // false
//
// length
// console.log(name.length); // 4
//
// trim
// console.log(nameWithSpaces.trim().length); // 4
//
// toUpperCase
// console.log(name.toUpperCase()); // "RENE"
//
// toLowerCase
// console.log(name.toLowerCase()); // "rene"
//
// indexOf
// console.log(name.indexOf('e')); // 1
//
// substring
// console.log(name.substring(2, 4)); // "ne"
//
// AUFGABE 1
// Filename.Extension
// const filename = "music.mp3";
// const index = filename.indexOf('.');
// const name = filename.substring(0, index);
// console.log('name', name);
//
// const extension = filename.substring(index + 1);
// console.log('extension', extension);


// 7. String Interpolation
// --------------------------------------------------------
// In computer programming, string interpolation is the process
// of evaluating a string literal containing one or more placeholders
//
// const name = "Rene";
// const country = "Austria";
// console.log(`Hello, my name is ${name} and I am from ${country}`);


// 7. Functions
// --------------------------------------------------------
// Function is a block of code that can be called and executed later.
// Function can take parameters and return a value.
// Function can be assigned to a variable, passed as an argument, and returned from other functions.
// That's the reason why JavaScript is called a functional programming language.
// Functions are first-class citizens in JavaScript.
// Methods are not first-class citizens in Java.
//
// Function declaration
// function myFunction(name) {
//   console.log(`My name is ${name}`);
// }
//
// Function call
// myFunction("Rene");
//
// AUFGABE 2
// Lesen Sie zwei Zahlen über das `prompt` ein und rufen Sie `add` zum addieren auf.
// Geben Sie das Ergebnis in ein `alert` aus.
// Bonus: Zahlen dürfen nicht negative sein, falls ja Fehler mit `alert` und abbruch.
// Note: Number(string) -> number -or- parseInt(string, radix)-> number
// prompt() -> string
// alert() -> void
//
// let number1 = +prompt("Geben Sie eine Zahl ein");
// let number1 = parseInt(prompt("Geben Sie eine Zahl ein"));
// const number1 = Number(prompt("Geben Sie eine 1. Zahl ein"));
// const number2 = Number(prompt("Geben Sie eine 2. Zahl ein"));

const number1 = getNumber();
const number2 = getNumber();
const operator = getOperator();
const summe = calculate(number1, number2);
alert(`Die Summe der zwei Zahlen ${number1} und ${number2} ist ${summe}`)

function getOperator() {
  // TODO
}

function getNumber() {
  let number = Number(prompt("Geben Sie eine Zahl ein"));
  while (number < 0) {
    alert(`Fehler ${number} darf nicht kleiner 0 sein`);
    number = Number(prompt("Geben Sie eine Zahl ein"));
  }
  return number;
}

// "+", "-", "*", "/"
function calculate(zahl1, zahl2, operator) {
  // TODO
}













