import sqlite3

conexion = sqlite3.connect('ejemplo.db')

cursor = conexion.cursor()

# cursor.execute("CREATE TABLE usuarios (nombre VARCHAR(100), edad INTEGER, email VARCHAR(100))")

# cursor.execute("INSERT INTO usuarios VALUES('Juan', 35, 'hector@gmail.com' )")

# cursor.execute("SELECT *  FROM usuarios")
# usuario = cursor.fetchone()

# usuarios = [
#    ('Mario', 51, 'mario@ejemplo.com'),
#    ('Mercedez', 38, 'mercedez@ejemplo.com'),
#    ('Juan', 19, 'juan@ejemplo.com')
# ]

# cursor.executemany("INSERT INTO usuarios VALUES (?,?,?)", usuarios)
cursor.execute("SELECT * FROM usuarios")

usuarios = cursor.fetchall()

for usuario in usuarios:
    print(usuario)

conexion.commit()

conexion.close()
