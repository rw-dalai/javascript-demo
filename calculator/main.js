const validOperators = ["+", "-", "*", "/"];


// --- Read operator ----

let operator = await input({ message: 'Enter operator' });

while(!validOperators.includes(operator)) {
    // Makes sense if you want to react on the error somehow
    operator = await input({ message: 'Was not an operator, enter number operator' });
}

console.log(number1);
console.log(number2);
console.log(operator);



// function isValidOperator(operator) {
//
//     return validOperators.includes(operator);
//
// }


// function isValidOperator(operator) {
//
//     const validOperators = ["+", "-", "*", "/"];
//
//
//     for (let i = 0; i < validOperators.length; i++) {
//         if (validOperators[i] === operator) {
//             return true;
//         }
//     }
//
//     return false;
//
//
//     // if (operator === "+") {
//     //     return true;
//     // }
//
//     // switch (operator) {
//     //     case "+": return  true;
//     // }
//
// }

// TODO Calculate result

// TODO output result