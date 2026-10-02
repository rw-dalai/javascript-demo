// INPUT.JS
//
import {input} from '@inquirer/prompts';

const validOperators = ["+", "-", "*", "/"];

function userExit(userInput)
{
    // "exit"
    if (userInput.toLocaleLowerCase() === "exit") {
        process.exit();
    }
}


// --- Read Input Number ----

export async function inputNumber(message)
{
    // suspends the function at await
    let inputNumber = await input({ message: message });
    userExit(inputNumber);

    let number = Number(inputNumber);

    while(Number.isNaN(number)) {
        // Makes sense if you want to react on the error somehow
        inputNumber = await input({ message: `Was not a number, ${message}` });
        number = Number(inputNumber);
    }

    return number;
}


// --- Read Operator ----


export async function inputOperator(message)
{
    let operator = await input({ message: message });
    userExit(operator);

    while(!validOperators.includes(operator)) {
        // Makes sense if you want to react on the error somehow
        operator = await input({ message: `Was not an operator, ${message}` });
    }

    return operator;
}