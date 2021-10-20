// let array = new Array(5);
// let array = Array.of(5,9,8);
let array = [10, 12, 16];

// array.fill(100);
// array.fill(100, 1, 2);
console.log(array);

// let newArray = Array.from(array, val => val * 2)
// console.log(newArray);

console.log(array.find((val)=> val >= 12)) // only find the first one

console.log(array.copyWithin(1, 2)); // change the array directly
console.log(array);
console.log(array.entries());

let it = array.entries();

for (let element of it) {
  console.log(element)
}