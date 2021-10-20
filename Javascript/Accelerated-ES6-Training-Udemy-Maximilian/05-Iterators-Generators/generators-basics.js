// en si una funcion generadora te proporcionara un objeto iterador abstracto

function* select() {
  yield 'House';
  yield 'Garage';
}

console.log(select());

let it = select();

console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let selectable of it) {
  console.log(selectable)
}