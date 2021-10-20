var heroe = "Flash";
function imprime_heroe() {
    return heroe;
}
var activar_batisenal = function () {
    return "batisenal activada";
};
console.log(imprime_heroe());
console.log(activar_batisenal());
//parametros obligatorios de las funciones
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
var nombre = nombreCompleto("Clark", "kent");
console.log(nombre);
