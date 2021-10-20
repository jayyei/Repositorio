
function parametro(  target:any, metodo:string, index:number){
  console.log(target, metodo, index)
}



class Villano {

  constructor( public nombre:string){}

  imprimir( plan:boolean, @parametro mensaje:string  ):void{
    if(plan){
      console.log("El plan es: " + mensaje);
    }else{
      console.log(mensaje)
    }

  }

}
