package es.sanchez.estructuras.arbolesBST;

public interface IBST <T extends Comparable<T>> {

	void insertar(T empl);
	
	boolean existe(int id);
	
	T obtener (int id);
	
	boolean esHoja();
	
	boolean esVacio();
	
	void preorden();
	
	void inorden();
	
	void postorden();
	
	void eliminar(int id);
}
