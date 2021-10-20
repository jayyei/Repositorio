

class Cuadrado<T extends number|string> { // puede haber opcionales como |string
  base:T;
  altura:T;
  area():number{
    return +this.base * +this.altura; //Casteo a number, asi se define en typescript
  }
}

let cuadrado = new Cuadrado<number|string>(); //Antes del metodo de construtor, tu puedes hacer una definicion de los tipos que utilizara la clase en esta instancia

cuadrado.base = 10;
cuadrado.altura = 10;
console.log( cuadrado.area() );
