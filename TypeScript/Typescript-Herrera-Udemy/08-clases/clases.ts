
//definir clases en typescript

class Avenger {
    public nombre:string = "Sin nombre"; // puede ser accesado en cualquier lado del programa
    protected equipo:string = undefined; // puede ser cambiada en su clase o subclases hijas
    private nombreReal:string = undefined; //Solo se pueden cambiar las propiedades dentro de la misma clase

    private puedePelear: boolean = false;
    private peleasGanadas: number = 0;

    constructor(nombre:string, equipo:string, nombreReal:string){
      this.nombre = nombre;
      this.equipo = equipo;
      this.nombreReal = nombreReal;
      console.log("Se ejecuto el constructor");
    }

    public bio():void{
      let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`
      console.log(mensaje);
    }

    public cambiaEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo);
    }

    private cambiarEquipo(nuevoEquipo:string):boolean{
      if(nuevoEquipo === this.equipo){
        return false;
      }else{
        return true
      }
    }
}

let antman:Avenger = new Avenger("Antman", "cap", "Scott Lang");

antman.bio();
console.log(antman.cambiaEquipoPublico("cap"));

console.log(antman);
