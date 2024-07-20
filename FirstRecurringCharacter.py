"""
@param input: Lista de números
@returns: El primer número recurrente en la lista, o None si no hay ninguno

Paso a Paso del Algoritmo:
Ejemplo de entrada: input = [1, 5, 5, 1, 3, 4, 6]

Inicialización:
Creamos un diccionario map vacío: {}

Iteración 1:
Índice i = 0
Elemento actual input[0] = 1
Verificamos si 1 está en map: No.
Añadimos 1 al map: { 1: 0 }

Iteración 2:
Índice i = 1
Elemento actual input[1] = 5
Verificamos si 5 está en map: No.
Añadimos 5 al map: { 1: 0, 5: 1 }

Iteración 3:
Índice i = 2
Elemento actual input[2] = 5
Verificamos si 5 está en map: Sí, 5 ya está en map con índice 1.
Encontramos el primer número recurrente, que es 5.
"""

def first_recurring_character(input):
    map = {}  # Crear un diccionario vacío 'map'

    for i in range(len(input)):  # Iterar sobre cada elemento en la lista de entrada
        if input[i] in map:  # Si el elemento actual ya existe como clave en 'map'
            return input[i]  # Retornar el elemento actual como el primer número recurrente
        else:
            map[input[i]] = i  # Si no, añadir el elemento actual al 'map' con su índice como valor

    return None  # Si no se encuentra ningún número recurrente, retornar None
