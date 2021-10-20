let numbers = [1,2,3];

// Destructuring arrays
// let [a, b, _, d] = numbers

// let [a, ...b] = numbers; // b is similar to splice and slice operators
// let [a = 'Default', b, c , d = 'Default'] = numbers
let [a, , c] = numbers // ignoring the second element

console.log(a,c);

// does not change the original value
console.log(numbers);

let A = 5;
let B = 10;
// Swap values using destructuring array;
let [_B, _A] = [A, B];

console.log(_B, _A)