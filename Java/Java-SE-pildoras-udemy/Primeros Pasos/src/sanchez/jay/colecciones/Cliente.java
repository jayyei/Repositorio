package sanchez.jay.colecciones;

public class Cliente {
	
	private String nombre;
	
	private String nCuenta;
	
	private double saldo;
	
	public Cliente  (String nombre, String nCuenta, double saldo) {
		this.nombre = nombre;
		this.nCuenta = nCuenta;
		this.saldo = saldo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getnCuenta() {
		return nCuenta;
	}

	public void setnCuenta(String nCuenta) {
		this.nCuenta = nCuenta;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	
}
