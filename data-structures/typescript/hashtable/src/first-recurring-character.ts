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
