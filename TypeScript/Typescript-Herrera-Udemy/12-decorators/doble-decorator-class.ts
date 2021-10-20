
function planVillano(constructor:Function){
  constructor.prototype.imprimirPlan = function(){
    console.log("El plan de " + this.nombre + " es dominar el mundo" );
  }
}

function imprimible(constructor:Function){
  constructor.prototype.imprimir = function(){
    console.log(this);
  }
}

@imprimible
@planVillano
class Villano {
  constructor( public nombre:string, public poder:string){}
}

let lex = new Villano("Lex Luthor", "Control mental");
(<any>lex).imprimirPlan(); //Aqui se vuelve a revisar el casteo de datos
(<any>lex).imprimir();
