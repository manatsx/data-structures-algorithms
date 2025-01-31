// Usando un enfoque de punteros (más eficiente)
// Más eficiente, con una complejidad de 𝑂(𝑛+𝑚), ideal para arrays ya ordenados.
function mergeSortedArrays(arr1: number[], arr2: number[]) {
  const mergedArray = [];
  // índices que apuntan a posiciones específicas en los arrays
  let i = 0; // Puntero para arr1 - i apunta al elemento actual en el array arr1
  let j = 0; // Puntero para arr2 - j apunta al elemento actual en el array arr2

  // Si uno de los arrays está vacío, devolvemos el otro
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // Comparar elementos de ambos arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Agregar los elementos restantes
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
