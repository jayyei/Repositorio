
function nombreCompletoOpcional(
  nombre:string, apellido?:string, capitalizado:boolean= false):string{
    return capitalizado? (nombre + ' ' + apellido).toUpperCase():
    (nombre + ' ' + apellido).toLowerCase();
}


let nombreOpcional = nombreCompletoOpcional("Barry");

console.log(nombreOpcional);
