let numbers = [1,2,3,4,5];
function sumUp(...toAdd) { // the rest operators integrate the parameters into an array
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
     result += toAdd[i];
    
  }
  return result;
}

console.log(sumUp(100, 10, 20))

let numbersArray = [1,2,3,4,5];

// Spread operator
console.log(Math.max(...numbersArray));
