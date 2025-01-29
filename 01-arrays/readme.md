# Arrays en JavaScript: Introducción a DSA (Estructuras de Datos y Algoritmos)

Los **arrays** son una de las estructuras de datos más importantes en JavaScript. Permiten organizar elementos de forma secuencial en memoria y son fundamentales para resolver problemas en DSA (Estructuras de Datos y Algoritmos).

## ¿Qué es un Array?

Un array es una colección ordenada de elementos. Cada elemento tiene un índice asociado, lo que permite acceder a ellos de manera eficiente.

```js
const arr = ["Bogotá", "Lima", "Asunción", "Buenos Aires"];

// Indices:
// indice 0 = Bogotá
// indice 1 = Lima
// indice 2 = Asunción
// indice 3 = Buenos Aires
```

---

## Operaciones comunes en Arrays

### 1. **Acceso** a elementos por índice

Se puede acceder a un elemento usando su índice:

```js
console.log(arr[0]); // "Bogotá"
console.log(arr[3]); // "Buenos Aires"
```

### 2. **Actualización** de elementos

Cambia el valor de un elemento en un índice específico:

```js
arr[1] = "Santiago";
console.log(arr); // ["Bogotá", "Santiago", "Asunción", "Buenos Aires"]
```

### 3. **Agregar elementos**

- **Al final** del array:
  ```js
  arr.push("Montevideo");
  console.log(arr); // ["Bogotá", "Santiago", "Asunción", "Buenos Aires", "Montevideo"]
  ```
- **Al inicio** del array:
  ```js
  arr.unshift("La Paz");
  console.log(arr); // ["La Paz", "Bogotá", "Santiago", "Asunción", "Buenos Aires", "Montevideo"]
  ```

### 4. **Eliminar elementos**

- **Del final**:
  ```js
  arr.pop();
  console.log(arr); // ["Bogotá", "Santiago", "Asunción", "Buenos Aires"]
  ```
- **Del inicio**:
  ```js
  arr.shift();
  console.log(arr); // ["Santiago", "Asunción", "Buenos Aires"]
  ```

### 5. **Longitud del array**

Obtén el número de elementos:

```js
console.log(arr.length); // 4
```

### 6. **Iterar sobre un array**

Recorre los elementos usando un bucle:

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// O usando for...of
for (const city of arr) {
  console.log(city);
}
```

### 7. **Buscar elementos**

- Encontrar el índice de un elemento:
  ```js
  console.log(arr.indexOf("Lima")); // 1
  ```
- Comprobar si un elemento existe:
  ```js
  console.log(arr.includes("Bogotá")); // true
  ```

### 8. **Eliminar elementos específicos**

Utiliza `splice` para eliminar elementos:

```js
arr.splice(1, 1); // Elimina 1 elemento en el índice 1
console.log(arr); // ["Bogotá", "Asunción", "Buenos Aires"]
```

### 9. **Copiar arrays**

Crea una copia usando `slice` o spread operator:

```js
const newArr = arr.slice();
const anotherArr = [...arr];
```

---

## Complejidad de las operaciones

- **Acceso por índice**: O(1)
- **Búsqueda**: O(n)
- **Inserción/Eliminación**:
  - Al final: O(1)
  - Al inicio o medio: O(n)

---

## Ejemplo práctico: Invertir un Array

Crea una función para invertir el contenido de un array:

```js
function invertirArray(arr) {
  let izquierda = 0;
  let derecha = arr.length - 1;

  while (izquierda < derecha) {
    // Intercambiar elementos
    [arr[izquierda], arr[derecha]] = [arr[derecha], arr[izquierda]];
    izquierda++;
    derecha--;
  }

  return arr;
}

console.log(invertirArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```

---

## Buenas prácticas al trabajar con Arrays

1. **Usa métodos inmutables** siempre que sea posible (e.g., `map`, `filter`, `reduce`) para evitar modificar el array original.
2. **Evita iteraciones innecesarias**. Usa operaciones de array que resuelvan el problema en una sola pasada si es posible.
3. **Comprende la complejidad** de los métodos del array para escribir código eficiente.

---

Los arrays son la base de muchas estructuras de datos complejas. Dominar sus operaciones y optimizaciones es clave para avanzar en DSA y mejorar tus habilidades de programación.
