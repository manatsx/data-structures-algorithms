## 🔑 ¿Qué es una función hash?

Una **función hash** es un algoritmo que toma una entrada (como una clave) y la convierte en un número entero, que luego se utiliza como un índice para almacenar y recuperar datos en una estructura como un **HashMap**.

### Características de una función hash:

- **Determinística:** Siempre que ingreses la misma clave, devolverá el mismo índice.
- **Rápida:** Debe calcular el índice rápidamente.
- **Distribución uniforme:** Idealmente, debe distribuir las claves de manera uniforme para minimizar colisiones.
- **Manejo de colisiones:** Aunque una buena función hash reduce colisiones, no las elimina por completo.

### Implementación de una función hash en JavaScript

```js
function simpleHash(key, size) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % size;
}

// Ejemplo de uso
const size = 10;
console.log(simpleHash("nombre", size)); // Output: índice donde se almacenará "nombre"
console.log(simpleHash("edad", size)); // Output: índice donde se almacenará "edad"
```

Esta función `simpleHash` convierte una cadena en un número utilizando el código ASCII de cada carácter, y luego lo ajusta al tamaño del arreglo mediante el operador módulo (`%`).
