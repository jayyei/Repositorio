package es.sanchez.estructuras.pilas;

public class TheMain {

	public static void main(String[] args) {
		URL google = new URL("http://www.google.es");
		URL makigas = new URL("http://www.makigas.es");
		
		Pila pila = new Pila();
		imprimirEstado(pila);
		pila.apilar(google);
		imprimirEstado(pila);
		pila.apilar(makigas);
		imprimirEstado(pila);
		while(!pila.vacia()) {
			pila.desapilar();
			imprimirEstado(pila);
		}
		
	}

	private static void imprimirEstado(Pila pila) {
		if(pila.vacia()) {
			System.out.println("L=0 no hay nada en la pila. ");
		}else {
			System.out.println("L=" + pila.longitud() + " " + pila.obtener().getUrl());
		}
	}
	
}
