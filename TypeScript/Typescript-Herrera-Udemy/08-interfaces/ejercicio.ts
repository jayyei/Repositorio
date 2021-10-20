// Crear interfaces
interface Automovil {
  encender:boolean;
  velocidadMaxima:number;
  acelear():void;
}

interface Villano {
  reir:boolean,
  comer?:boolean,
  llorar?:boolean
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto:Automovil ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil:Automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

let guason:Villano = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason:Villano ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface Ciudad {
  (ciudadanos:string[]):number;
}

let gotica:Ciudad = function( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Persona {
  nombre:string;
  edad: number;
  sexo: string;
  estadoCivil:string;
  imprimirBio():void;
}

class PersonaClass implements Persona{
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void {
    console.log("una breve descripcion")
  }

}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
