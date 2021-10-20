
function funcionGenerica<T>(arg:T):T{
  return arg;
}

type Heroe = {
  nombre:string;
  nombreReal:string;
}

type Villano = {
  nombre:string;
  poder:string;
}

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade Winston Wilson",
  poder: "Regeneracion"
}
  //Se puede definir y declarar el tipo de dato con el que se quiere envolver a la funcion generica de la siguiente manera
console.log(  funcionGenerica<Heroe>(deadpool).nombreReal   );
console.log(  funcionGenerica<Villano>(deadpool).poder );
