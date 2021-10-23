from io import open
import pickle

class Personaje:
    def __init__(self, nombre, vida, ataque, defensa, alcance):
        self.nombre = nombre
        self.vida = vida
        self.ataque = ataque
        self.defensa = defensa
        self.alcance = alcance

    def __str__(self):
        return "{} vida = {} ataque = {} defensa = {} alcance = {}".format(self.nombre, self.vida, self.ataque, self.defensa, self.alcance)

class Gestor:
    personajes = []

    def __init__(self, personajes=[]):
        self.cargar()


    def agrega_personaje(self, personaje):
        for pers in self.personajes:
            if pers.nombre == personaje.nombre:
                print('Personaje repetido, no se puede agregar otra vez')
                return
        self.personajes.append(personaje)
        self.guardar()


    def borrar_personaje(self, personaje):
        for pers in self.personajes:
            if pers.nombre == personaje.nombre:
                self.personajes.remove(pers)
                self.guardar
                
    def mostrar_personajes(self):
        for personaje in self.personajes:
            print(personaje)

    def cargar(self):
        fichero = open('personajes.pckl', 'ab+')
        fichero.seek(0)
        try:
            self.personajes = pickle.load(fichero)
        except:
            print('El fichero esta vacio')
        finally:
            fichero.close()
            del(fichero)
            print('Se han cargado {} personajes'.format(len(self.personajes)))

    def guardar(self):
        fichero = open('personajes.pckl', 'wb')
        fichero.seek(0)
        pickle.dump(self.personajes, fichero)
        fichero.close()
        del(fichero)

g = Gestor()

g.mostrar_personajes()

g.agrega_personaje(Personaje('Caballero',4,2,4,2))



