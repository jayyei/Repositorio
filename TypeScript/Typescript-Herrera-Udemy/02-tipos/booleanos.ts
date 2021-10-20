
//Formas de definir booleanos
let esSuperman:boolean = true;
let esBatman:boolean;
let esAquaman = true; //No recomandada
//No importa si es mayuscula o minuscula

if(esSuperman){
  console.log("Estamos salvados!!");
}else{
  console.log("Ooops!")
}

esSuperman = convertirClark();
function convertirClark(){
  return false;
}
