let name = 'Anna'
let age = 25

let ageField = "age"

let obj = {
  name: 'Max',
  age,
  [ageField]: 28,
  greet: function(){},
  greet2() {
    console.log(this.name, this.age)
  },
  "greet3"() {
    console.log(this.name, this.age +1)
  }
};


obj['greet3']();

console.log(obj)

console.log(obj[ageField])