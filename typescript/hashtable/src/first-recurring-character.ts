/**
 * @param input Array de números
 * @returns El primer número recurrente en el array, o undefined si no hay ninguno
 *
 * Paso a Paso del Algoritmo:
 * Ejemplo de entrada: input = [1, 5, 5, 1, 3, 4, 6]
 *
 * Inicialización:
 * Creamos un objeto map vacío: {}
 *
 * Iteración 1:
 * Índice i = 0
 * Elemento actual input[0] = 1
 * Verificamos si 1 está en map: No.
 * Añadimos 1 al map: { 1: 0 }
 *
 * Iteración 2:
 * Índice i = 1
 * Elemento actual input[1] = 5
 * Verificamos si 5 está en map: No.
 * Añadimos 5 al map: { 1: 0, 5: 1 }
 *
 * Iteración 3:
 * Índice i = 2
 * Elemento actual input[2] = 5
 * Verificamos si 5 está en map: Sí, 5 ya está en map con índice 1.
 * Encontramos el primer número recurrente, que es 5.
 */

export function firstRecurringCharacter(input: number[]): number | undefined {
  // Inicializamos un objeto `map` para almacenar los números que hemos visto y sus índices.
  let map: { [key: number]: number } = {};

  // Recorremos el array `input`.
  for (let i = 0; i < input.length; i++) {
    // Si el número actual ya existe en `map`, significa que es recurrente.
    if (map[input[i]] !== undefined) {
      // Devolvemos el número recurrente.
      return input[i];
    } else {
      // Si el número actual no existe en `map`, lo añadimos con su índice.
      map[input[i]] = i;
    }
  }

  // Si no encontramos ningún número recurrente, devolvemos `undefined`.
  return undefined;
}
