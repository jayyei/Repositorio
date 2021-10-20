type Heroe = { //Se crea la definicion de un tipo con type
  nombre: string,
  edad:number,
  poderes: string[],
  getNombre:()=>string
}


let flash:Heroe = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Puede correr muy rapido", "Viajar por el tiempo"],
  getNombre(){
    return this.nombre
  }
};

let supermancito:Heroe = {
  nombre: "Klark kent",
  edad: 500,
  poderes: ["Puede correr muy rapido", "Rayos x"],
  getNombre(){
    return this.nombre
  }
};

// al renombrar flash debes de cumprir con todas las propiedades anteriores o de lo contrario marcaria un error


//El orden de las propiedades no importa, lo que si importa es el nombre con su tipo de dato definido en el objeto
