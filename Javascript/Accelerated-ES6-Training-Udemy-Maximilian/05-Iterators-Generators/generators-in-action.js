let obj = {
  [Symbol.iterator]: gen
}

function *gen(end) {
  // you even can do asynchronous task
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

for (let element of obj) {
  console.log(element);
}

let it = gen(10);

console.log(it.next());
console.log(it.throw('An error occured'));
console.log(it.return('An return occured'));
console.log(it.next());
console.log(it.next());
