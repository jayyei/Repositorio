// type object
// const person : object = {...}
// const person: {
//   name: string;
//   // Can also be a explicit number (specifyng a constant)
//   // age: 30;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// ENUMS asings labels with numbers
// You can mixed values with string, numbers, etc.
enum Role {
  ADMIN = 5,
  READ_ONLY = 100, 
  AUTHOR = 200
};

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
};

// typescript does not catch push error in our role array
// person.role.push('admin')
// or use whatever yo want
// let favoriteActivities : any[]
let favoriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}