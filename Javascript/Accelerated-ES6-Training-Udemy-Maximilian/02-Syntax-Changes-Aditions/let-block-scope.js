

let age = 30;
if (true) {
  // let allows us to use block scooping
  let age = 'Max'
}

console.log(age);