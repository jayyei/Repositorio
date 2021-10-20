class Xmen{
  static nombre:string = "Wolverine";

  constructor(){
  }

  static crearXmen(){
    console.log("Se creo usando un metodo estatico");
    return new Xmen();
  }
}

let wolverine2 = Xmen.crearXmen();
console.log(wolverine2);
