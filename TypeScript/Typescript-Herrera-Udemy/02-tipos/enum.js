var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen[1]);
//El enum es un objeto al derecho y al reves osea
//los atributos son los valores
//y a su vez los valores son los atributos para acceder alos mismos
