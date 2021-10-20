
// Symbol for makes shared symbols
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');


let person = {
  name: 'Max',
  age: 30
}

function makeAge(person) {
  let ageSymbol = Symbol.for('age');
  person[ageSymbol] = 27
}

makeAge(person);

console.log(person[symbol1])
console.log(person["age"])



