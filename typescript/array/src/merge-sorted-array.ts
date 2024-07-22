export function mergeSortedArray(arr1: number[], arr2: number[]): number[] {
  // Inicializamos un array vacío para almacenar el resultado de la fusión.
  const mergedArray = [];

  // Inicializamos dos punteros, i y j, para recorrer arr1 y arr2 respectivamente.
  let i = 0;
  let j = 0;

  // Si arr1 está vacío, simplemente retornamos arr2 ya que no hay nada que fusionar.
  if (arr1.length === 0) {
    return arr2;
  }

  // Si arr2 está vacío, simplemente retornamos arr1 ya que no hay nada que fusionar.
  if (arr2.length === 0) {
    return arr1;
  }

  // Utilizamos un bucle while para recorrer ambos arrays mientras haya elementos en ambos.
  while (i < arr1.length && j < arr2.length) {
    // Comparamos los elementos actuales de arr1 y arr2.
    if (arr1[i] < arr2[j]) {
      // Si el elemento en arr1 es menor, lo añadimos a mergedArray y avanzamos el puntero i.
      mergedArray.push(arr1[i]);
      i++;
    } else {
      // Si el elemento en arr2 es menor o igual, lo añadimos a mergedArray y avanzamos el puntero j.
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Añadimos los elementos restantes de arr1 a mergedArray, si los hay.
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Añadimos los elementos restantes de arr2 a mergedArray, si los hay.
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  // Retornamos el array resultante de la fusión.
  return mergedArray;
}

// // Ejemplo de uso:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 4, 6, 8];
// const mergedArray = mergeSortedArray(array1, array2);
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
