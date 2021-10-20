let symbol = Symbol('debug');

console.log(symbol.toString());
console.log(typeof symbol);

let anotherSymbol = Symbol('debug');

console.log(symbol == anotherSymbol);


let obj = {
  name: 'max',
  [symbol]: 22
}

console.log(obj[symbol])