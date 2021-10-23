let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// with unknown we have to check if the current value is according
if (typeof userInput === 'string') {
  userName = userInput;
}

// the never type does not generate a return value, (no even undefined)
function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code
  }
}


const result = generateError('An error occured', 500);
console.log(result);

