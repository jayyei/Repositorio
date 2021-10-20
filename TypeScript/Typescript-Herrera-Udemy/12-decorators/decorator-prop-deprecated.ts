

//Codigo deprecado: al parecer realizar los writable ya no son viables o ejecutables en estos tiempos actuales
function editableProp( esEditable:boolean ):any{
  return function(  target:any, nombrePropiedad:string){
    let descriptor: PropertyDescriptor = {
      writable: esEditable
    }
    return descriptor;
  }
}


class Villano {

  @editableProp(true)
  public nombre:string;

  constructor( nombre:string){
    this.nombre = nombre
  }

  plan(){
    console.log("Es dominar el mundo");
  }

}

let lex = new Villano("Lex luthor");

console.log(lex)
