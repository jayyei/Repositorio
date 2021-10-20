class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}


let person = new Person('Jay');

person.name = 'yei';

console.log(person.name)
console.log(person._name)


