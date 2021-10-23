
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number // type assigment
number1 = 5; 
const number2 = 2.8; // type inference
const printResult = true;
let resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);