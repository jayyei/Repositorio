let obj = {
  name : 'Max',
  age: 27,
  greet() {
    console.log('Hello there')
  },
  anitated: {
    one: 1,
    two: 2
  }
};

// Destructuring by name
let {name, greet: hello, anitated:{one}} = obj;

console.log(name, hello, one);