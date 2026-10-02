 let basenumber = 0;

function x() {
    console.log(basenumber)
}

 function operatorFn(fn, number1, number) {
    fn(number1, number2);
 }


 function sub(number1, number2) {
    return number1 - number2;
 }


 operatorFn(sub, 9, 1);


function add(number1) {

    return function(number2) {

        return basenumber + number1 + number2;
    }
}


const adder1 = add(1); // number1 = 1
const adder2 = add(2); // number1 = 2

adder1(10) // 11
adder2(10) // 12