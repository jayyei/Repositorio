
class Avenger{

    constructor(public nombre:string, private nombreReal:string){
      console.log("Constructor avenger llamado");
    }

    protected getNombre():string{
      console.log("get nombre avenger (protegido)");
      return this.nombre;
    }
}

class Xmen extends Avenger {
  constructor(a:string, b:string){
    console.log("Constructor Xmen ejecutado");
    super(a,b);
  }

  public getNombre():string{
    console.log("get nombre xmen (publico)")
    return super.getNombre();
  }
}

let ciclope:Xmen = new Xmen("Ciclope", "Scott");

console.log(ciclope.getNombre());
