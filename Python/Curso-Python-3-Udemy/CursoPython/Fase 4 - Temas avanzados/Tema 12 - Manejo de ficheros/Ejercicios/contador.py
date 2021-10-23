from io import open

fichero = open('contador.txt', 'r+')

arg = input('Escribe un argumento [inc], [dec]')

fichero.seek(0)
contador = fichero.readline()

if(arg == 'inc'):
    print('contador + 1')
    if contador == '':
        contador = 1
    else:
        contador = int(contador) + 1 
elif(arg == 'dec'):
    print('contador - 1')
    if contador == '' or contador == '0':
        contador = 0
    else:
        contador = int(contador) - 1
else:
    print('contador {}'.format(contador))

fichero.seek(0)
fichero.write(str(contador))

fichero.close()