import sqlite3

conexion = sqlite3.connect('usuarios_autoincremental.db')
cursor = conexion.cursor()

# cursor.execute('''
#     CREATE TABLE usuarios (
#         dni VARCHAR(9) PRIMARY KEY,
#         nombre VARCHAR(100),
#         edad INTEGER,
#         email VARCHAR(100)
#     )
#     ''')

# usuarios = [
#     ('1A', 'Hector', 27, 'hector@ejemplo.com'),
#     ('2A', 'Mario', 51, 'mario@ejemplo.com'),
#     ('3A', 'Mercedez', 38, 'mercedez@ejemplo.com'),
#     ('4A', 'Juan', 19, 'juan@ejemplo.com')
# ]

# cursor.executemany("INSERT INTO usuarios VALUES (?, ?, ?, ?)", usuarios)

# cursor.execute("INSERT INTO usuarios VALUES ('5A', 'Juanita', 20, 'juanita@ejemplo.com')")

# cursor.execute('''
#     CREATE TABLE productos (
#         id INTEGER PRIMARY KEY AUTOINCREMENT,
#         nombre VARCHAR (100) NOT NULL,
#         marcar VARCHAR (50) NOT NULL,
#         precio FLOAT NOT NULL
#     )
#     ''')

# productos = [
#     ('Teclado', 'Logitech', 19.95),
#     ('Pantalla 19', 'LG', 89.95)
# ]

# cursor.executemany("INSERT INTO  productos VALUES (null, ?, ?, ?)", productos) # signos de interrogacion por cada columna

# cursor.execute("SELECT * FROM productos")

# productos = cursor.fetchall()
# for producto in productos:
#         print(producto)

# cursor.execute('''
#     CREATE TABLE usuarios (
#         id INTEGER PRIMARY KEY AUTOINCREMENT,
#         dni VARCHAR(9) UNIQUE,
#         nombre VARCHAR(100),
#         edad INTEGER,
#         email VARCHAR(100)
#     )
# ''')

# usuarios = [
#     ('1A', 'Hector', 27, 'hector@ejemplo.com'),
#     ('2A', 'Mario', 51, 'mario@ejemplo.com'),
#     ('3A', 'Mercedez', 38, 'mercedez@ejemplo.com'),
#     ('4A', 'Juan', 19, 'juan@ejemplo.com')
# ]

# cursor.executemany("INSERT INTO usuarios VALUES (null, ?, ?, ?, ?)", usuarios)

cursor.execute("INSERT INTO usuarios VALUES (null,'1A', 'Javier', 33, 'javier@gmail.com')")


conexion.commit()
conexion.close()