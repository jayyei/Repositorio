var fn = a => a + 3

console.log(fn(3, 2));

function fn() {
  // this "this" is actually refers to what call this function (the global, the button, etc)
  console.log(this);
}


// Generally you would expect that this always refers to what it is refers when you define the function
// The arrow function keep its context (where you define it)
var fn2 = () => console.log(this);

fn();

