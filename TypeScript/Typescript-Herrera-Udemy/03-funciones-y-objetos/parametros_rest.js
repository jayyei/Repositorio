function nombreCompletoRest(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var superman = nombreCompletoRest("Clark", "Joseph", "Kent");
var ironman = nombreCompletoRest("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(ironman);
