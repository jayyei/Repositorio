

//Codigo deprecado: al parecer realizar los writable ya no son viables o ejecutables en estos tiempos actuales
function editable( esEditable:boolean ){
  return function(  target:any, nombrePropiedad:string, descriptor:PropertyDescriptor){
    descriptor.writable = esEditable;
  }
}


class Villano {

  constructor( public nombre:string){}

  @editable(true)
  plan(){
    console.log("Es dominar el mundo");
  }

}

let lex = new Villano("Lex luthor");

lex.plan = function() {
  console.log("Su plan es cortar flores");
};

lex.plan();
