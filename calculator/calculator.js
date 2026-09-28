import {input} from '@inquirer/prompts';


function calculate(number1, number2, operator) {
    // TODO ...
}

async function getNumber(message)
{
    let userInput = await input({ message: message });
    return Number(userInput);
}

async function inputOperator(message)
{
    const validOperators = ["+", "-", "*", "/"];

    let operator = await input({ message: message });
    while(!validOperators.includes(operator)) {
        operator = await input({ message: `Try again: ${message}` });
    }

    return operator;
}

async function inputNumber(message)
{

    let number = await getNumber(message);
    while (Number.isNaN(number)) {
        number = await getNumber(`Try again: ${message}`)
    }

    return number;
}

const number1 = await inputNumber("Enter your 1. number");
console.log(`Your 1. number is ${number1}`);

const number2 = await inputNumber("Enter your 2. number");
console.log(`Your 2. number is ${number2}`);

const operator = await inputOperator("Enter operator");
console.log(`Your operator is ${operator}`);

// TODO calculate result

// TODO show result

// TODO loop until user wants to "exit"