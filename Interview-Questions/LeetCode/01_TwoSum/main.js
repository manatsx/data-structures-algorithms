// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Recibo un array de numeros enteros (pueden ser positivos o negativos)
// Tambien recibo un un numero entero llamado "target"
// Debo retornar los indices de los dos numeros que sumados dan como resultado el "target"

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumv1 = (nums, target) => {
  // Vamos a utilizar la tecnica de "Two-Pointer" donde cada puntero "apuntara" a indices especificos en el array
  // Se va a iterar por cada puntero verificando si la suma de cada indice es igual al resultado esperado
  // Si la suma de los punteros (left - right) es igual al (target), se va a retornar un array con los indices que sumados dan target
  // Si la suma de los punteros (left - right) es menor al (target), el puntero (left) suma uno para iterar al siguiente
  // Si la suma de los punteros (left - right) es mayor al (target), el puntero (right) resta uno para iterar al siguiente
  // Para realizar esto, el array debe de estar ordenado

  let indexedNums = nums.map((num, index) => ({ num, index }));
  indexedNums.sort((a, b) => a.num - b.num);

  let lefth = 0,
    right = nums.length - 1;

  while (lefth < right) {
    const sum = indexedNums[lefth].num + indexedNums[right].num;
    if (sum === target) {
      return [indexedNums[lefth].index, indexedNums[right].index];
    } else if (sum < target) {
      lefth++;
    } else {
      right--;
    }
  }
  return [];
};

console.log(twoSumv1([2, 7, 11, 15], 9));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumv2 = (nums, target) => {
  // Vamos a utilizar hashmap para guardar la key y el value para encontrar el indice correspondiente
  // Crear una variable m que sera un objeto que guardara el key/value
  // Iterar el array para encontrar el complemento correspondiente (la resta de nums[i] - targent)

  const m = {};

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (complement in m) {
      return [m[complement], index];
    }
    m[nums[index]] = index;
  }

  return [];
};

console.log(twoSumv2([2, 7, 11, 15], 9));

// Este problema se puede resolver de varias maneras

// La primera opcion que se me ocurre es la de fuerza bruta
// Vamos a iterar cada indice, comparando la sumas de cada iteracion hasta encontrar la suma que de el resultado el target
// Cuando encontremos la suma, vamos a retornar un array con los dos indices que sumados dan target
// Si no lo encontramos devolvemos un array vacio
// const twoSum1 = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// console.log(twoSum1([2, 7, 11, 15], 9));
