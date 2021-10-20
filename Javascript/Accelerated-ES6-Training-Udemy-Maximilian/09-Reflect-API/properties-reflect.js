class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let mum = {
  _name: 'Mum'
}

let person = new Person('Max', 27);

// lock to define new properties in person
Reflect.preventExtensions(person);

console.log(Reflect.isExtensible(person));

Reflect.defineProperty(person, 'hobbies', {
  writable: false,
  value: ['Sports', 'Cooking'],
  configurable: true
})

Reflect.set(person, 'name', 'Anna', mum)
console.log(Reflect.get(person, 'name', mum)) // Change the this reference of person to mum
console.log(Reflect.has(person, 'name')) // Change the this reference of person to mum
console.log(Reflect.ownKeys(person)) // Change the this reference of person to mum

// person.hobbies = []
// delete person.hobbies
// Reflect.deleteProperty(person, 'hobbies');


console.log(person.hobbies)
