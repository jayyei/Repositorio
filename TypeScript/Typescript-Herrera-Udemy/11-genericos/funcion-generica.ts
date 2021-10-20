

//Forma basica de declarar genericos en typescript, muy similar a java nos ayuda a indicar un tipo en la funcion o en la clase

 function regresar<T>(arg:T): T{
   return arg;
 }


 console.log(  regresar(15.456789).toFixed(2)  );
 console.log(  regresar("Ricardo tapia").toUpperCase()  );
 console.log(  regresar(new Date() ).getFullYear()   );
