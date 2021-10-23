
def suma(a, b):
    try:
        return a + b
    except TypeError:
        print("Hubo un problema en la ejecuccion del codigo, algun valor no es un numero")

def resta(a, b):
    try:
        return a - b
    except TypeError:
        print("Hubo un problema en la ejecuccion del codigo, algun valor no es un numero")

def producto(a, b):
    try:
        return a * b
    except TypeError:
        print("Hubo un problema en la ejecuccion del codigo, algun valor no es un numero")

def division(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("No puedes dividir entre cero")
    except TypeError:
        print("Hubo un problema en la ejecuccion del codigo, algun valor no es un numero")

