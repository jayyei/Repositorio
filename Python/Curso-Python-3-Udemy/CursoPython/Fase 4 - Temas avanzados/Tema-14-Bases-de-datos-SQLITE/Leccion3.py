import sqlite3

conexion = sqlite3.connect("usuarios_autoincremental.db")
cursor = conexion.cursor()

# cursor.execute("UPDATE usuarios SET nombre= 'Hector Costa', edad = 30 WHERE dni='1A' ")
cursor.execute("DELETE FROM usuarios WHERE dni='1A' ")

# usuarios = cursor.fetchall()
# print(usuarios)
conexion.commit()
conexion.close()