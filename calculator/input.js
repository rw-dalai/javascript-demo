import {input} from "@inquirer/prompts";

export async function inputNumber(message)
{
    let input = await input({ message: message });
    let number = Number(input);

    while(Number.isNaN(number)) {
        input = await input({ message: `Number expected, ${message} again` });
        number = Number(input);
    }

    return number;
}


export async function inputOperator(message)
{
    const allowedOperators = ["+", "-", "*", "/"];
    let operator = await input({ message: message });
    
    while(!allowedOperators.includes(operator)) {
        operator = await input({ message: `Operator expected, ${message} again` });
    }

    return operator;
}

