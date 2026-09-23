import { input } from '@inquirer/prompts';


// let input1 = null;
// let number1 = null;

// do {
//
//     input1 = await input({ message: 'Enter 1. number' });
//     number1 = Number(input1);
//
// } while (Number.isNaN(number1))


let input1 = await input({ message: 'Enter 1. number' });
let number1 = Number(input1);

while(Number.isNaN(number1)) {
    input1 = await input({ message: 'Number expected, enter 1. number again' });
    number1 = Number(input1);
}

console.log(number1);

let input2 = await input({ message: 'Enter 2. number' });
let number2 = Number(input2);

while(Number.isNaN(number2)) {
    input2 = await input({ message: 'Number expected, enter 2. number again' });
    number2 = Number(input2);
}

console.log(number2);

const allowedOperators = ["+", "-", "*", "/"];
let operator = await input({ message: 'Enter operator' });

while(!allowedOperators.includes(operator)) {
    operator = await input({ message: 'Operator expected, enter operator again' });
}

let result = 0;

switch (operator) {
    case "+": result = number1 + number2; break;
    case "-": result = number1 - number2; break;
    case "*": result = number1 * number2; break;
    case "/": result = number1 / number2; break;
}

console.log(`Result is ${result}`);