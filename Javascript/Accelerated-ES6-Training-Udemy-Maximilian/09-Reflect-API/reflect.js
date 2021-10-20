class Person {
  constructor(name) {
    this.name = name;
  }
}

function TopObj() {
  this.age = 27;
}

// let person = new Person('Max')
let person = Reflect.construct(Person, ['Max'], TopObj);

console.log(person)