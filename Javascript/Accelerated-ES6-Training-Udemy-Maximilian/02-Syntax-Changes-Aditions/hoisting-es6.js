// El hoisting conceptualiza que las declaraciones de las variables (var) y funciones (function) son asignadas en memoria
// durante la fase de compilacion

age = 27;
console.log(age);
// The hoisting does not work with let, you have to declare your variable let first
let age;

function doSmth() {
  age = 27
}

let age
doSmth();
console.log(age);