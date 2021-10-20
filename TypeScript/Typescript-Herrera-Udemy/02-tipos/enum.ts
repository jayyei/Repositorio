
enum Volumen{
  min = 1,
  medio =5,
  max = 10,
}

let audio:number = Volumen.medio;

console.log(audio);

console.log(Volumen[1]);

//El enum es un objeto al derecho y al reves osea
//los atributos son los valores
//y a su vez los valores son los atributos para acceder alos mismos
