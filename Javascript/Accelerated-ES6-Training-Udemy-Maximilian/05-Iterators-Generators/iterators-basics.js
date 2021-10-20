let array = [1,2,3];

array[Symbol.iterator] = function() {
  let nextValue = 10;
  return {
    next: function() {
      nextValue ++
      return {
        done: nextValue > 15 ? true : false,
        value: nextValue
      }
    }
  }
}


// let it = array[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


for (let element of array) {
  console.log(element);
}
