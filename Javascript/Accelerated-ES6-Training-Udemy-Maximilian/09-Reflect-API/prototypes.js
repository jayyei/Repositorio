class Person {
  constructor() {
    this.name = 'Max'
  }
}


let person = new Person();


// console.log(Reflect.__proto__ == Person.prototype);
console.log(Reflect.getPrototypeOf(person) == Person.prototype);

Person.prototype.age = 27;


let proto = {
  age: 30,
  greet() {
    console.log('Hello!');
  }
}
Reflect.setPrototypeOf(person, proto);

console.log(Reflect.getPrototypeOf(person));

Reflect.apply(person.greet, null, [])