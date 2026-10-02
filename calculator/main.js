// MAIN.JS

import {inputNumber, inputOperator } from "./input.js";
import { calculate } from "./calculator.js";


while (true)
{
    const number1 = await inputNumber("Ready number 1");
    const number2 = await inputNumber("Ready number 2");
    const operator = await inputOperator("Ready operator");
    const result = calculate(number1, number2, operator);
    console.log(result);
}