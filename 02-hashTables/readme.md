# HashMap 📚

[docu](https://en.wikipedia.org/wiki/Hash_table)

Un **HashMap** (o **Mapa Hash**) es una estructura de datos que almacena pares de clave-valor. Permite acceder a los valores de manera rápida utilizando una clave única. Es como un diccionario: buscas una palabra (clave) y obtienes su definición (valor).

---

## 🤩 Partes de un HashMap

- **Clave (Key):** Es un identificador único para acceder a un valor.
- **Valor (Value):** Es el dato asociado a la clave.
- **Función Hash:** Transforma la clave en un índice donde se almacena el valor en la estructura interna.

---

## 🛠️ ¿Cómo funciona?

### Inserción:

1. La función hash toma la clave y la convierte en un índice.
2. El valor se almacena en ese índice.

### Búsqueda:

1. La función hash convierte la clave en un índice.
2. Se accede directamente al valor almacenado en ese índice.

### Colisiones:

- Si dos claves generan el mismo índice (**colisión**), se resuelve usando técnicas como listas enlazadas o sondeo lineal.

---

## 💡 Ventajas de un HashMap

- **Acceso rápido:** Obtienes valores en tiempo constante (O(1)) en el mejor caso.
- **Flexibilidad:** Puedes usar cualquier tipo de dato como clave (números, strings, objetos, etc.).

---

## ⚠️ Desventajas de un HashMap

- **Colisiones:** Si hay muchas colisiones, el rendimiento puede degradarse.
- **Uso de memoria:** Puede consumir más memoria que otras estructuras de datos.

---

```js
Clave: "nombre" -> Valor: "Juan"
Clave: "edad"   -> Valor: 25
Clave: "ciudad" -> Valor: "Madrid"

HashMap:
{
  "nombre": "Juan",
  "edad": 25,
  "ciudad": "Madrid"
}
```

---

## 📚 HashMap en el contexto de DSA

Un **HashMap** es una estructura de datos fundamental en el estudio de **Estructuras de Datos y Algoritmos (DSA)**. Es una implementación de una tabla hash, que permite almacenar y recuperar datos en tiempo promedio constante (O(1)), lo que lo hace extremadamente eficiente para muchas aplicaciones.

### 🤩 Conceptos clave en DSA

- **Tabla Hash:**

  - Es una estructura que mapea claves a valores.
  - Utiliza una función hash para calcular un índice donde se almacena el valor.

- **Función Hash:**

  - Toma una clave y la convierte en un índice dentro de un arreglo.
  - Debe ser rápida y distribuir las claves uniformemente para evitar colisiones.

- **Colisiones:**

  - Ocurren cuando dos claves diferentes producen el mismo índice.
  - Se resuelven con técnicas como:
    - **Encadenamiento:** Usar una lista enlazada en cada índice.
    - **Sondeo lineal:** Buscar el siguiente índice disponible.

- **Complejidad Temporal:**
  - **Inserción:** O(1) en promedio, O(n) en el peor caso (muchas colisiones).
  - **Búsqueda:** O(1) en promedio, O(n) en el peor caso.
  - **Eliminación:** O(1) en promedio, O(n) en el peor caso.

---

## 🛠️ ¿Cómo funciona un HashMap?

### Inserción:

1. La función hash convierte la clave en un índice.
2. El valor se almacena en ese índice.
3. Si hay una colisión, se resuelve usando encadenamiento o sondeo lineal.

### Búsqueda:

1. La función hash convierte la clave en un índice.
2. Se accede directamente al valor en ese índice.
3. Si hay colisiones, se recorre la lista enlazada o se realiza sondeo lineal.

### Eliminación:

1. Se busca el valor usando la clave.
2. Se elimina el valor del índice correspondiente.

---

## 💡 Aplicaciones de HashMap en DSA

- **Búsqueda rápida:** Ideal para problemas donde necesitas acceder a datos en tiempo constante.
- **Conteo de frecuencias:** Por ejemplo, contar cuántas veces aparece cada elemento en un arreglo.
- **Eliminación de duplicados:** Almacenar elementos únicos usando claves.
- **Memorización (Memoization):** Almacenar resultados intermedios en algoritmos dinámicos para evitar cálculos repetidos.

---

## 👨‍💻 Implementación de un HashMap en JavaScript

### Implementación desde cero (usando encadenamiento)

```js
class HashMap {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Función hash simple
  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  // Insertar un valor
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Actualizar valor si la clave ya existe
        return;
      }
    }
    bucket.push([key, value]); // Agregar nuevo par clave-valor
  }

  // Obtener un valor
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return null; // Clave no encontrada
  }

  // Eliminar un valor
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Eliminar par clave-valor
        return;
      }
    }
  }
}

// Ejemplo de uso
const map = new HashMap();
map.set("nombre", "Juan");
map.set("edad", 25);
console.log(map.get("nombre")); // Output: "Juan"
map.delete("edad");
console.log(map.get("edad")); // Output: null
```

### Usando la clase Map de JavaScript

```js
const map = new Map();

// Insertar valores
map.set("nombre", "Juan");
map.set("edad", 25);

// Acceder a valores
console.log(map.get("nombre")); // Output: "Juan"

// Verificar si una clave existe
console.log(map.has("edad")); // Output: true

// Eliminar una clave
map.delete("edad");
console.log(map.has("edad")); // Output: false
```

---

## 📖 Resumen

- Un **HashMap** es una estructura de datos clave-valor que permite operaciones rápidas (O(1) en promedio).
- Es fundamental en **DSA** para resolver problemas de búsqueda, conteo y eliminación de duplicados.
- En **JavaScript**, puedes implementarlo desde cero o usar la clase `Map`.
