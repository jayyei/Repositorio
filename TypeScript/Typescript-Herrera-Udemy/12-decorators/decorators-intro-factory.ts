//Decorador de clase normal
function consola( constructor:Function){
  console.log( constructor);
}
//Decorador factory
function imprimirConsola(imprimir:boolean):Function{
  if(imprimir){
    return consola
  }else{
    return null;
  }
}

@imprimirConsola(true)
class Villano{
  constructor( public nombre:string){

  }
}
