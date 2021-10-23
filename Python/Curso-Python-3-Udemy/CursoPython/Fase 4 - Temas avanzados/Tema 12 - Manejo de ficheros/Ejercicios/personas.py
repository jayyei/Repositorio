from io import open


fichero = open('personas.txt')
fichero.seek(0)
lineas = fichero.readlines()
personas = []

for linea in lineas:
    dato = linea.replace('\n',"").split(';')
    entrada_dict = {"nombre":dato[1], "apellido":dato[2], "fecha_nacimiento":dato[3] }
    personas.append(entrada_dict)

for persona in personas:
    print("{} -> {} -> {} ".format(persona['nombre'], persona['apellido'], persona['fecha_nacimiento']))

fichero.close()