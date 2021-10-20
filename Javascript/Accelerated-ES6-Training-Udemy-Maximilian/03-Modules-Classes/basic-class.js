class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

class Person {

  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello, my name is ' + this.name +  ' and I am ' + this.age)
  }
}

class Max extends Person {
  constructor(age) {
    super('Max');
    this.age = age
  }

  greet() {
    console.log("Hello")
  }
  greetTwice() {
    super.greet();
    super.greet();

  }
}

let person = new Max(26);

console.log(person);
console.log(person.__proto__ === Person.prototype)
console.log(person.__proto__ === Max.prototype)
person.greetTwice();

Helper.logTwice('Logged');

module.exports = { Helper }