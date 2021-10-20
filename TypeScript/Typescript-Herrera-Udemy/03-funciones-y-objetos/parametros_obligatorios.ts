let heroe:string = "Flash";

function imprime_heroe(){
  return heroe;
}

let activar_batisenal = function():string{
  return "batisenal activada"
}


console.log(imprime_heroe());
console.log(activar_batisenal());


//parametros obligatorios de las funciones
function nombreCompleto( nombre:string, apellido:string):string{
  return nombre + ' ' + apellido;
}

let nombre = nombreCompleto("Clark", "kent");

console.log(nombre);
