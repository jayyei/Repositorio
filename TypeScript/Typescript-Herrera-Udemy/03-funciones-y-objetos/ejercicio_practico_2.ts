// Funciones Básicas
function sumarE2( a:number, b:number ):number{
  return a + b;
}

let contar = function( heroes:string[] ):number{
  return heroes.length;
}
let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean=false ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco:(n:number,t:string,b:boolean, a:any[])=>void;
