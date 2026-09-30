// MUTABLE VS IMMUTABLE

const arr = [1, 2, 3]; // ORIGINAL

// immutable change

// array spread ...
const arrCopy = [0, ...arr];

// obj spread
const person = { name: "Lukas", age: 17 };
const personCopy = { ...person, hasLaptop: false };


// mutable change

arr.push(4); // [1, 2, 3, 4]
arr.pop() // [1, 2, 3] -> 4

// arr.unshift()
// arr.shift()


// IMPERATIVE VS DECLARATIVE PROGRAMMING

// untouchables
const fruits = [
    { name: "birne", symbol: "🍐", isSweet: true, price: 5.2 },
    { name: "banana", symbol: "🍌", isSweet: true, price: 3.2 },
    { name: "zitrone", symbol: "🍋", isSweet: false, price: 1.5 },
];


// imperative
// for, if

const onlySweetFruits_V1 = [];

// for of loops only work with iterables e.g. arrays
for (let fruit of fruits) {
    if (fruit.isSweet) {
        onlySweetFruits_V1.push(fruit);
    }
}

// declarative

// filter


// predicate = function(object) -> true/false
// const onlySweetFruits_V2 = fruits.filter(function isSweet(fruit) {
//     return fruit.isSweet === true;
// });

// Lambda + block body {}
// const onlySweetFruits_V2 = fruits.filter((fruit) => {
//     return fruit.isSweet;
// });

const onlySweetFruits_V2 = fruits.filter(fruit => fruit.isSweet);

// map
// neues array, original untouched (deep copy)
// nur saures, price * 2

const fruits = [
    { name: "zitrone", symbol: "🍋", isSweet: false, price: 3.0 },
];

// fluent api
// fruits
//     .filter(fruit => !fruit.isSweet)
//     .map(function mapper(fruit) {
//
//         fruit.price = fruit.price*2;
//
//         return fruit;
//     })

// fruits
//     .filter(fruit => !fruit.isSweet)
//     .map(function mapper(fruit) {
//
//         const copyFruit = { ...fruit, price: fruit.price*2 };
//
//         return copyFruit;
//     });


fruits
    .filter(fruit => !fruit.isSweet)
    .map(fruit => ({ ...fruit, price: fruit.price*2 }));




