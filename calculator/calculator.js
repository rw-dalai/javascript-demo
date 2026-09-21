import { input } from '@inquirer/prompts';


function calculate(number1, number2, operator) {
    // TODO ...
}

async function inputOperator(message) {
    // TODO...
}

async function inputNumber(message) {

    let input = await input({ message: message });
    let number = parseFloat(input);

    while(!Number.isFinite(number)) {
        input = await input({ message: message });
        number = parseFloat(input);
    }

    return number;
}

const number1 = await inputNumber("Enter your 1. number");
console.log(`Your 1. number is ${number1}`);

const number2 = await inputNumber("Enter your 2. number");
console.log(`Your 2. number is ${number2}`);

// TODO input operator

// TODO calculate result

// TODO show result

// TODO loop until user wants to "exit"