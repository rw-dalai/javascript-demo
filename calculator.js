import { input } from '@inquirer/prompts';

function calculate(number1, number2, operator) {
    // TODO ...
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return null;
    }
}

async function inputOperator(message) {
    // TODO...
    let operator = await input({ message: message });

    while (!['+', '-', '*', '/', 'exit'].includes(operator)) {
        operator = await input({ message: message });
    }

    return operator;
}

async function inputNumber(message) {

    let userInput = await input({ message: message });
    let number = parseFloat(userInput);

    while (!Number.isFinite(number)) {
        userInput = await input({ message: message });
        number = parseFloat(userInput);
    }

    return number;
}

while (true) {
    const number1 = await inputNumber("Enter your 1. number");
    console.log(`Your 1. number is ${number1}`);

    const number2 = await inputNumber("Enter your 2. number");
    console.log(`Your 2. number is ${number2}`);

    // TODO input operator
    const operator = await inputOperator("Enter operator (+, -, *, / or exit)");

    // TODO loop until user wants to "exit"
    if (operator === 'exit') {
        break;
    }

    // TODO calculate result
    const result = calculate(number1, number2, operator);

    // TODO show result
    console.log(`Result: ${result}`);
}