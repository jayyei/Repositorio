package sanchez.jay.poo;

public class UsoVehiculos {
	// un programa en java no debe de contener dos metodos main
	public static void main(String[] args) { //La clase principal de un programa debe de contener el metodo main
		// TODO Auto-generated method stub
		Vehiculos miCoche = new Vehiculos(4); //Con la palabra reservada new se manda a llamar el constructor de una clase, que sirve para inicicializar el estado de una clase
		//Lo que se da implicitamente es dar un estado inicial al objeto de 'miCoche'
		miCoche.setColor("amarillo");
		System.out.println(miCoche.getColor());
		
		Vehiculos miCoche2 = new Vehiculos(4);
		miCoche2.setColor("Rojo");
		
		miCoche2.setExtra(false);
		System.out.println(miCoche2.getExtra());
		System.out.println(miCoche2.getColor());
		
		Vehiculos moto1 = new Vehiculos(2);
		
		System.out.println(miCoche.getDatosVehiculos());
		System.out.println(moto1.getDatosVehiculos());
		
		Vehiculos miMoto = new Vehiculos(2,1,0.3,200);
		miMoto.setColor("Gris");
		
		Vehiculos miCamion = new Vehiculos(6, 3, 1.5, 3500);
		miCamion.setColor("Azul");
		miCamion.setExtra(true, true, true);
		System.out.println(miCamion.getExtra());
		System.out.println(miCamion.getDatosVehiculos());
	}

}
