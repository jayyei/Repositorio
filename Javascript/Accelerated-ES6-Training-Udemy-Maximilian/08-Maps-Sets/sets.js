let set = new Set(["Hola", "Hola ", "hola"]);
for (element of set.entries()) {
  console.log(element);
}

let weakSet = new WeakSet([{a:1},{b:2},{b:2}]); // like weakmap, weakSet can not be iterable
// for (element of weakSet.entries()) {
//   console.log(element)
// }

console.log(weakSet)