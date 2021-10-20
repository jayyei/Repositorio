function nombreCompletoOpcional(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    return capitalizado ? (nombre + ' ' + apellido).toUpperCase() :
        (nombre + ' ' + apellido).toLowerCase();
}
var nombreOpcional = nombreCompletoOpcional("Barry");
console.log(nombreOpcional);
