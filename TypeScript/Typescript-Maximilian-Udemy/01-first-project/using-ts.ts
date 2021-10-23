const button = document.querySelector("button");
// the non null assertion operator. It iw a way to tell the compiler "this expression can not be null or undefined"
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2 : number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
