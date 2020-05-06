package es.makigas.hibernate.modelo;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name= "EMPLEADO")
public class Empleado implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "COD_EMPLEADO")
	private Long codigo;
	
	@Column(name = "APELLIDOS")
	private String apellidos;
	
	@Column(name = "NOMBRE")
	private String nombre;
	
	@Column(name = "FECHA_NACIMIENTO")
	private LocalDate fechaNacimiento;
	
	@OneToOne(cascade = {CascadeType.ALL}) // el mecanismo cascade, permite que jpa inserte los elementos en la base de datos a los que estas asociado, y asi evitar excepciones y tambien permite borrar elementos a los que esta asociado al momento de su delete
	@JoinColumn(name = "ID_DIRECCION") //Le decimos a JPA que este modelo, es el que tiene el campo id de la direccion que le pertenece a este objeto de tipo Direccion
	private Direccion direccion;
	
	public Empleado() {
		
	}

	public Empleado(Long codigo, String apellidos, String nombre, LocalDate fechaNacimiento) {
		this.codigo = codigo;
		this.apellidos = apellidos;
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public LocalDate getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(LocalDate fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public Direccion getDireccion() {
		return direccion;
	}

	public void setDireccion(Direccion direccion) {
		this.direccion = direccion;
	}

	@Override
	public String toString() {
		return "Empleado [codigo=" + codigo + ", apellidos=" + apellidos + ", nombre=" + nombre + ", fechaNacimiento="
				+ fechaNacimiento + ", direccion=" + direccion + "]";
	}
	
	
	
	

}
