import {input} from '@inquirer/prompts';


// --- Read Input Number ✅ ----

async function inputNumber(message) {

    let inputNumber = await input({ message: message });
    let number = Number(inputNumber);

    while(Number.isNaN(number)) {
        // Makes sense if you want to react on the error somehow
        inputNumber = await input({ message: `Was not a number, ${message}` });
        number = Number(inputNumber);
    }

    return number;
}


// --- Read Operator ✅ ----

async function inputOperator(message) {
    let operator = await input({ message: message });

    while(!validOperators.includes(operator)) {
        // Makes sense if you want to react on the error somehow
        operator = await input({ message: `Was not an operator, ${message}` });
    }

    return operator;
}








