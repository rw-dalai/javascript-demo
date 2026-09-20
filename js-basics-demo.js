// 1) FUNCTIONS
// *******************************

function greetings(name)
{
    // Hallo <name>, willkommen in der SPG !

    // String Concatenation (NOT RECOMMENDED)
    // return "Hallo " + name + " willkommen in der SPG!";

    // String Interpolation (RECOMMENDED)
    return `Hallo ${name} willkommen der SPG`;
}


// 2) OBJECTS
// *******************************

const person1 = {name: "Ana", age: 18};
const person2 = {name: "Bob", age: 23};

// . (dot) notation
person1.name = "Carl";
console.log(person1.name);

// bracket notation
const propName = "name"
console.log(person1["name"]);
console.log(person1[propName]);


// 3) ARRAYS
// *******************************

const numbers = [1, 2, 3];
const names = ["Ana", "Bob", "Carl"];
const mixed = [1, "Ana", true];

// Looping through an array with the counter loop (NOT RECOMMENDED)
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Looping through an array with for each (RECOMMENDED)
for (const number of numbers) {
    console.log(number);
}


// 4) OBJECTS : Examples
// *******************************

// Objects
const address = { street: "Spengergasse", number: 10, city: "Wien" };
const customer = { name: "Ana", age: 18, address: address };

const customer2 = {

    // Simple Properties
    name: "Ana",
    age: 18,
    isActive: false,

    // Array Property
    orders: [
        { productIds: 1, price: 1.90 },
        { productIds: 2, price: 1.90 },
        { productIds: 3, price: 1.90 }
    ],

    // Nested Object Property
    address: {
        street: "Spengergasse",
        number: 10,
        city: "Wien"
    },

    address2: null,
};


// 5) FUNCTIONS : Examples
// *******************************

// Function `add` with input validation (NOT RECOMMENDED)
function add(number1, number2)
{
    if (typeof number1 === "number" && number1 > 0) {
        if (typeof number2 === "number" && number2 > 0) {
            // Happy Path (hidden in the nested if statements)
            return number1 + number2;
        } else {
            // throw new Error(`Das ist keine positive Number ${number2}`);
            return `Das ist keine positive Number ${number2}`;
        }
    } else {
        return `Das ist keine positive Number ${number1}`;
    }
}

// EARLY RETURN PATTERN : A concept for any programming language !
// READ: https://shramko.dev/blog/the-early-return-pattern-in-javascript

// function `add2` with input validation with Early Return (RECOMMENDED)
function add2(number1, number2)
{
    // Early Return (but repetitive code)
    if (typeof number1 !== "number" || number1 <= 0) {
        return `Das ist keine positive Number ${number1}`;
    }

    // Early Return (but repetitive code)
    if (typeof number2 !== "number" || number2 <= 0) {
        return `Das ist keine positive Number ${number2}`;
    }

    // Happy Path
    return number1 + number2;
}


// function `add3` with input validation with Early Return and helper function (RECOMMENDED)
function add3(number1, number2)
{
    // Early Return
    if (!isPositiveNumber(number1)) {
        return `Das ist keine positive Number ${number1}`;
    }

    // Early Return
    if (!isPositiveNumber(number2)) {
        return `Das ist keine positive Number ${number2}`;
    }

    // Happy Path
    return number1 + number2;
}

function isPositiveNumber(value) {
    // GOOD ENOUGH
    return typeof value === "number" && value > 0;

    // BETTER
    // return !Number.isNaN(value) && value > 0;

    // BEST
    // return Number.isFinite(value) && value > 0;
}