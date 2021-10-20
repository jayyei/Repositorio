class Person {

}

Person.prototype[Symbol.toStringTag] = 'Person'

let person = new Person();

console.log(person);


let numbers  = [1,2,3];
numbers[Symbol.toPrimitive] = function() {
  return 
}

console.log(numbers + 1);



//Visit well known symbols in mdn