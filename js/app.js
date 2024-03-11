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


// 2. Data Types
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
// 4a. Check for primitive data types with `typeof`
// CAUTION: typeof has its limitation, we talk about that later !
// typeof "apple"  // string
// typeof 42       // number
// typeof true     // boolean
//
// 4b. Converting (Explicit Type Conversion)
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
// 4c. Coercion (Implicit Type Conversion)
// - Coercion String
// const str = "42" + 42;
//
// - Coercion to Number
// const num = "42" - 42;
// const num2 = +"42";
//
// - Coercion to Boolean
// const bool = !!42;


// 5. Comparison Operators
// --------------------------------------------------------
// == compares values (using type coercion)
// "42" == 42 // true
//
// === compares values and types (strict equality)
// "42" === 42 // false
//
// String comparison using lexicographical order
// "apple" === "banana" // false
// "apple" < "banana" // true
// "apple" > "banana" // false
//
// String comparison using localeCompare
// compares two strings against the current locale of the user
// "Strasse".localeCompare("straße", "de", {sensitivity: "base"})    // base: equal
// "Straße".localeCompare("Strasse", "de", {sensitivity: "accent"})  // accent: ß != ss
// "Strasse".localeCompare("straße", "de", {sensitivity: "case"})    // case: S != s
// "Strasse".localeCompare("straße", "de", {sensitivity: "variant"}) // variant: ß != ss, S != s


// 6. String Functions
// --------------------------------------------------------
// const name = "Rene";
//
// - charAt
// console.log(name.charAt(0)); // "R"
// console.log(name[0]); // "R"
//
// - equals
// console.log(name === new String("Rene")); // false
// console.log(name === String("Rene")); // true
// new String("Rene") === String("Rene") // false
//
// - length
// console.log(name.length); // 4
//
// - trim
// console.log(" Rene ".trim().length); // 4
//
// - toUpperCase
// console.log(name.toUpperCase()); // "RENE"
//
// - toLowerCase
// console.log(name.toLowerCase()); // "rene"
//
// - indexOf
// console.log(name.indexOf('e')); // 1
//
// - substring
// console.log(name.substring(2, 4)); // "ne"
//
// AUFGABE 1:
// Filename.Extension
// Get the filename and extension from a string and print it to the console.
//
// SOLUTION:
// const filename = "music.mp3";
// const index = filename.indexOf('.');
// const name = filename.substring(0, index);
// console.log('name', name);
// const extension = filename.substring(index + 1);
// console.log('extension', extension);


// 7. String Interpolation
// --------------------------------------------------------
// In computer programming, string interpolation is the process
// of evaluating a string literal containing one or more placeholders.
//
// const name = "Rene";
// const country = "Austria";
// console.log(`Hello, my name is ${name} and I am from ${country}`);


// 8. Functions
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
// AUFGABE 2:
// Lesen Sie zwei Zahlen über das `prompt` ein und schreiben Sie eine `add` Function,
// die zwei Zahlen addiert. Geben Sie das Ergebnis in ein `alert` aus.
// Bonus 1: Lesen Sie solange eine Zahl ein, bis sie eine positive Zahl eingeben.
// Bonus 2: Lesen Sie den Operator (+, -, *, /) ein und rufen Sie `calculate` auf.
// Note: Number(string) -> number -or- parseInt(string, radix)-> number
// prompt() -> string
// alert() -> void
//

// function getOperator() {
// TODO
// }

// function getNumber() {
// TODO
// }

// function add(zahl1, zahl2) {
// TODO
// }

// "+", "-", "*", "/"
// function calculate(zahl1, zahl2, operator) {
// TODO
// }


// 9. Objects
// --------------------------------------------------------
// Objects are a collection of key/value pairs.
// Values can be primitive types, reference types (objects, arrays, functions)
// Objects are a recursive data structure (objects can contain objects)

// - Object Literal Syntax
const margaritha = {
  name: "margaritha",
  size: 30,
  isSpicy: false,
  price: 10.5,
  info: {
    description: "This pizza tastes super delicious",
    allergies: ["nuts", "gluten"]
  },

  sayPizzaName: function() {
    console.log(`This pizza is ${this.name}`);
  },

  // called when the object is used in the `string` context:
  // e.g. alert(margarithaPizza);
  toString: function() {
    return `name: ${this.name}, size: ${this.size}`;
  },

  // called when the object is used in the `number` context:
  // e.g. alert(+margarithaPizza);
  valueOf: function() {
    return this.size;
  }
};


// - Update Value
// dot notation
margaritha.name = "tonno";

// bracket notation
margaritha["name"] = "tonno";

// bracket notation with variable
const key = "name";
margaritha[key] = "tonno";


// - Add Key
// dot notation
margaritha.isDelicious = "very delicious";

// bracket notation
margaritha["isDelicious"] = "very delicious";

// bracket notation with variable
const key2 = "isDelicious";
margaritha[key2] = "very delicious";


// - Delete Key
delete margaritha.isDelicious;
delete margaritha["isDelicious"];


// - Comparison
const obj1 = {name: "Rene"};
const obj2 = {name: "Rene"};
console.log(obj1 === obj2); // false
const obj3 = obj1;
console.log(obj1 === obj3); // true


// - Iteration

// for-in loop VS for-of loop
// for-in loop works with all objects
// for-of loop works only with iterable objects (arrays, strings, maps, sets)

// Object.keys returns an array of keys
// Object.values returns an array of values
// Object.entries returns an array of key-value pairs
const keys = Object.keys(margaritha); // ["name", "size", "isSpicy", ...]
const values = Object.values(margaritha); // ["tonno", 30, false, ...]

// for loop
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], margaritha[keys[i]]);
}

// for-in loop
for (let key in margaritha) {
  console.log(key, margaritha[key]);
}

// for-of loop with Object.keys
for (let key of Object.keys(margaritha)) {
  console.log(key);
}

// for-of loop with Object.values
for (let value of Object.values(margaritha)) {
  console.log(value);
}

// for-of loop with Object.entries
for (let entry of Object.entries(margaritha)) {
  console.log(entry);
}




