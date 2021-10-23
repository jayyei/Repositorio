import math
import random


def lee_numero(ini, fin, mensaje):
    numero = do_condition(ini, fin, mensaje)
    while (isinstance(numero, int) is not True):
        numero = do_condition(ini, fin, mensaje)
    return numero

def do_condition(ini, fin, mensaje):
    try:
        numero = int(input(mensaje))
        if numero >= ini and numero <= fin:
            return numero
        else:
            print("No es correcta la opcion")
    except:
        print("Eso no es un numero imbecil")

def generador():
    numeros = lee_numero (1, 20, "Cuantos numeros quieres generar? [1-20]")
    modo = lee_numero(1,3, "Como quieres redondear los numeros? [1] al alza, [2] a la baja, [3] normal")

    listaNumeros = []
    for n in range(numeros):
        numero = random.uniform(0,101)
        if modo == 1:
            redondeo = math.ceil(numero)
            print("before: {}, after: {}".format(numero, redondeo))
        elif modo == 2:
            redondeo = math.floor(numero)
            print("before: {}, after: {}".format(numero, redondeo))
        else:
            redondeo = round(numero)
            print("before: {}, after: {}".format(numero, redondeo))
        listaNumeros.append(redondeo)

    return listaNumeros

generador()