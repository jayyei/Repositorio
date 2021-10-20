interface Xmen{
  nombre:string;
  regenerar(nombreReal:string):void;
}

function enviarMision( xmen:Xmen){
  console.log("Enviando a: " + xmen.nombre);
  xmen.regenerar("Logan");
};


let wolverine = {
  nombre: "Wolverine",
  regenerar(x:string){
    console.log("Se ha regenerado " + x);
  }
}

enviarMision(wolverine);
