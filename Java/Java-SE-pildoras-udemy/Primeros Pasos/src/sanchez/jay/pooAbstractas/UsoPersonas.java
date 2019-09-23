package sanchez.jay.pooAbstractas;

import java.util.Arrays;
import java.util.Date;

public class UsoPersonas {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Personas Juan = new Personas("Juan"); //NO SE PUEDE INSTANCIAR UNA CLASE ABSTRACTAR
											  // INSTANCIAR : LLAMAR AL CONSTRUCTOR
		/*Personas Juan = new Empleados("Juan", new Date(), 2500);
		System.out.println(Juan.getNombre());
		System.out.println(Juan.getDescripcion());
		
		Personas Ana = new Jefes("Ana", new Date(), 3500);
		System.out.println(Ana.getNombre());
		System.out.println(Ana.getDescripcion());
		
		Personas Maria = new Alumnos("Maria", "Dibujo", "Aula 5");
		System.out.println(Maria.getNombre());
		System.out.println(Maria.getDescripcion());
		
		Jefes David = new Jefes("David", new Date(), 4800);
		David.setCargo("Director de RH");
		System.out.println(David.getNombre());
		System.out.println(David.getDescripcion() + David.getCargo());*/
		
		Empleados losEmpleados[] = new Empleados[5];
		losEmpleados[0] = new Empleados("Juan", new Date(), 2500);
		losEmpleados[1] = new Empleados("Maria", new Date(), 1500);
		losEmpleados[2] = new Empleados("Ana", new Date(), 3500);
		losEmpleados[3] = new Empleados("Sandra", new Date(), 6000);
		losEmpleados[4] = new Empleados("Antonio", new Date(), 1500);
		Arrays.sort(losEmpleados);
		
		for( Empleados empleado : losEmpleados) {
			System.out.println(empleado.getDescripcion());
		}
		
		Jefes Manuel = new Jefes("Manuel", new Date(), 5000);
		Empleados Sonia = new Empleados("Sonia", new Date(), 4000);
		System.out.println("El trabajador " + Manuel.getNombre() + " Tiene un bonus de "
				+ Manuel.setBonus(500));
		
		System.out.println("El trabajador " + Sonia.getNombre() + " Tiene un bonus de "
				+ Sonia.setBonus(500));
		
	}

}
