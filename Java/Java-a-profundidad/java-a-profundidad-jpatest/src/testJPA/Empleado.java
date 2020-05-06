package testJPA;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the empleados database table.
 * 
 */
@Entity
@Table(name="empleados")
@NamedQuery(name="Empleado.findAll", query="SELECT e FROM Empleado e")
public class Empleado implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int empleadoid;

	private String apellido;

	private int extension;

	@Temporal(TemporalType.DATE)
	@Column(name="FECHA_NAC")
	private Date fechaNac;

	private String nombre;

	//bi-directional many-to-one association to Empleado
	@ManyToOne
	@JoinColumn(name="REPORTA_A")
	private Empleado empleado;

	//bi-directional many-to-one association to Empleado
	@OneToMany(mappedBy="empleado")
	private List<Empleado> empleados;

	//bi-directional many-to-one association to Ordene
	@OneToMany(mappedBy="empleado")
	private List<Ordene> ordenes;

	public Empleado() {
	}

	public int getEmpleadoid() {
		return this.empleadoid;
	}

	public void setEmpleadoid(int empleadoid) {
		this.empleadoid = empleadoid;
	}

	public String getApellido() {
		return this.apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getExtension() {
		return this.extension;
	}

	public void setExtension(int extension) {
		this.extension = extension;
	}

	public Date getFechaNac() {
		return this.fechaNac;
	}

	public void setFechaNac(Date fechaNac) {
		this.fechaNac = fechaNac;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Empleado getEmpleado() {
		return this.empleado;
	}

	public void setEmpleado(Empleado empleado) {
		this.empleado = empleado;
	}

	public List<Empleado> getEmpleados() {
		return this.empleados;
	}

	public void setEmpleados(List<Empleado> empleados) {
		this.empleados = empleados;
	}

	public Empleado addEmpleado(Empleado empleado) {
		getEmpleados().add(empleado);
		empleado.setEmpleado(this);

		return empleado;
	}

	public Empleado removeEmpleado(Empleado empleado) {
		getEmpleados().remove(empleado);
		empleado.setEmpleado(null);

		return empleado;
	}

	public List<Ordene> getOrdenes() {
		return this.ordenes;
	}

	public void setOrdenes(List<Ordene> ordenes) {
		this.ordenes = ordenes;
	}

	public Ordene addOrdene(Ordene ordene) {
		getOrdenes().add(ordene);
		ordene.setEmpleado(this);

		return ordene;
	}

	public Ordene removeOrdene(Ordene ordene) {
		getOrdenes().remove(ordene);
		ordene.setEmpleado(null);

		return ordene;
	}

}