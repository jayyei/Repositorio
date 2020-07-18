-- First version of our table

--CREATE TABLE Paciente (
--	idPaciente int NOT NULL PRIMARY KEY  IDENTITY(1,1),
--	nombre varchar(50),
--	apellido varchar(50),
--	fechaNacimiento date,
--	domicilio varchar(50),
--	idPais char(3),
--	telefono varchar(20),
--	email varchar(30),
--	observacion varchar(1000),
--);

CREATE TABLE Paciente( 
	idPaciente int NOT NULL PRIMARY KEY  IDENTITY(1,1),
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NULL,
	fechaNacimiento date NULL,
	domicilio varchar(50) NULL,
	idPais char(3) NULL,
	telefono varchar(20) NULL,
	email varchar(30) NULL,
	observacion varchar(1000) NULL,
	fechaAlta datetime NOT NULL,
);

CREATE TABLE Historia(
	idHistoria int PRIMARY KEY NOT NULL IDENTITY(1,1),
	fechaHistoria datetime,
	observacion varchar(2000),
);

CREATE TABLE HistoriaPaciente(
	idHistoria int NOT NULL,
	idPaciente int NOT NULL,
	idMedico int NOT NULL,
	PRIMARY KEY (idHistoria, idPaciente, idMedico)
);


-- Tablas de turnos
CREATE TABLE Turno(
	idTurno int NOT NULL PRIMARY KEY IDENTITY(1,1),
	fechaTurno datetime,
	estadoTurno smallint,
	observacion varchar(300),
);

CREATE TABLE TurnoPaciente(
	idTurno int NOT NULL,
	idPaciente int NOT NULL,
	idMedico int NOT NULL,
	PRIMARY KEY (idTurno, idPaciente, idMedico)
);

CREATE TABLE TurnoEstado(
	idEstado smallint NOT NULL,
	descripcion varchar(50) NULL,
	 CONSTRAINT [PK_TurnoEstado] PRIMARY KEY CLUSTERED 
	(
	[idEstado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, 
IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
);

-- INSERT INTO TurnoEstado VALUES(0, 'Pendiente')
-- INSERT INTO TurnoEstado VALUES(1, 'Realizado')
-- INSERT INTO TurnoEstado VALUES(2, 'Cancelado')

--Si en los sql llegases a ver "go" indica que es Transact sql

CREATE TABLE Pais(
	abreviatura char(3) NOT NULL PRIMARY KEY,
	pais varchar(30) NOT NULL,
);

CREATE TABLE Especialidad(
	idEspecialida int NOT NULL PRIMARY KEY IDENTITY(1,1),
	especialidad varchar(30),
);

CREATE TABLE Medico(
	idMedico int NOT NULL PRIMARY KEY IDENTITY(1,1),
	nombre varchar(50) NOT NULL,
	apellido varchar(50) NOT NULL 
);

CREATE TABLE MedicoEspecialidad(
	idMedico int NOT NULL,
	idEspecialidad int NOT NULL,
	descripcion varchar(30) NOT NULL
	PRIMARY KEY (idMedico, idEspecialidad)
);

-- Tabla de pagos

CREATE TABLE Pago(
	idPago int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	concepto tinyint NOT NULL,
	fecha datetime NOT NULL,
	monto money NOT NULL,
	estado tinyint,
	observacion varchar(1000)
);

CREATE TABLE PagoPaciente(
	idPago int NOT NULL,
	idPaciente int NOT NULL,
	idTurno int NOT NULL,
	PRIMARY KEY(idPago, idPaciente, idTurno)
);

CREATE TABLE Concepto(
	idConcepto tinyint IDENTITY(1,1) NOT NULL PRIMARY KEY,
	descripcion varchar(100)
);