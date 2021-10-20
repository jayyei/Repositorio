function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm" + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado");
}
var miFuncion;
miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 5));
miFuncion = saludar;
console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();
