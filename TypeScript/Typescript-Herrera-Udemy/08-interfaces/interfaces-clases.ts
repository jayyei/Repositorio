interface Xmen {
    nombre: string;
    nombreReal?:string;
    regenerar(nombreReal:string):void;
}

class Mutante implements Xmen{
  nombre: string;
  poder:string;
  esBueno:boolean;
  nombreReal?: string;
  regenerar(nombreX: string): void {
    console.log("Hola " + nombreX);
  }
}

let wolverine = new Mutante();
