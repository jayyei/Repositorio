package sanchez.jay.programaciongenerica;

public class UsoGenericaMia {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		GenericaMia<String> miObjeto1 = new GenericaMia<String>();
		miObjeto1.setObjeto("Hola mundo desde genericos");
		System.out.println(miObjeto1.getObjeto());
		
		GenericaMia<Persona> miObjeto2 = new GenericaMia<Persona>(); 
		
		Persona ella = new Persona("Maria");
		
		miObjeto2.setObjeto(ella);
		System.out.println(miObjeto2.getObjeto());
	}

}

class Persona{
	
	public Persona(String nombre) {
		this.nombre = nombre;
	}
	
	public String toString() {
		return nombre;
	}

	private String nombre;
	
	
}
