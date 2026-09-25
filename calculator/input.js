import {input} from '@inquirer/prompts';


async function inputNumber(message) {

    let input = await input({ message: message });
    let number = Number(input);

    while(Number.isNaN(number2)) {
        // Makes sense if you want to react on the error somehow
        input = await input({ message: `Was not a number, ${message}` });
        number = Number(input);
    }


    return number;
}



