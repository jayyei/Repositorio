type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// Another example of type Aliases
// type User = { name: string, age: number }

// union types
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // literal type can be numbers
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
