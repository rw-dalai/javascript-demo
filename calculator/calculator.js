export function calculate(number1, number2, operator)
{
    switch (operator) {
        case "+": return number1 + number2;
        case "-": return number1 - number2;
        case "*": return number1 * number2;
        case "/": return number1 / number2;
        default: return null;
    }
}
