# Maximum Subarray - Kadane's Algorithm

El **Maximum Subarray** es el subarray dentro de un array dado que tiene la **suma más alta**. Es decir, buscamos un subconjunto contiguo de elementos que tenga la suma más grande posible.

### Ejemplo:

Supongamos que tenemos el siguiente array:

```javascript
[-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

El subarray que tiene la suma más alta sería `[4, -1, 2, 1]`, porque la suma de esos números es **6**, que es la mayor suma posible de subarrays en este caso.

---

### ¿Cómo resolverlo?

Para resolver este problema de manera eficiente, podemos usar un algoritmo llamado **Kadane's Algorithm**. Este algoritmo funciona de la siguiente manera:

1. Mantenemos dos variables:
   - **`currentSum`**: La suma del subarray actual.
   - **`maxSum`**: La suma más grande que hemos encontrado hasta ahora.
2. Recorremos el array una vez:
   - **Si el valor actual (`nums[i]`) hace que la suma de `currentSum` sea mayor que solo `nums[i]`**, entonces lo agregamos al subarray actual.
   - **Si `currentSum` se vuelve negativo**, significa que es mejor comenzar un nuevo subarray a partir del siguiente elemento, por lo que reiniciamos `currentSum`.
   - **Actualizamos `maxSum`** en cada paso para que siempre tenga la suma más alta.

### Código en JavaScript:

```javascript
function maxSubArray(nums) {
  let currentSum = nums[0]; // Inicializamos con el primer elemento
  let maxSum = nums[0]; // Inicializamos maxSum también con el primer elemento

  // Recorremos el array comenzando desde el segundo elemento
  for (let i = 1; i < nums.length; i++) {
    // Si currentSum + nums[i] es menor que nums[i], comenzamos un nuevo subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Actualizamos maxSum si encontramos una suma mayor
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum; // Devolvemos la mayor suma encontrada
}

// Ejemplo de uso
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Salida: 6
```

---

### Explicación Paso a Paso

Vamos a explicar cómo funciona el algoritmo paso a paso con el array `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`.

#### Paso 1: `nums[0] = -2`

Inicialmente, **`currentSum = -2`** (supongamos que es el primer número).

**Math.max(nums[0], currentSum + nums[0])**:

- `nums[0] = -2`
- `currentSum + nums[0] = -2 + (-2) = -4`

Entonces, **Math.max(-2, -4)** devuelve **-2**, porque **-2** es más grande que **-4**. Por lo tanto, **`currentSum` se queda en -2**.

Al mismo tiempo, actualizamos **`maxSum`**, que inicialmente es igual a **-2** (ya que es el primer valor).

**maxSum = -2**

#### Paso 2: `nums[1] = 1`

Ahora, **`nums[1] = 1`**. Vamos a ver qué sucede con **`currentSum`** y **`maxSum`**.

**Math.max(nums[1], currentSum + nums[1])**:

- `nums[1] = 1`
- `currentSum + nums[1] = -2 + 1 = -1`

Entonces, **Math.max(1, -1)** devuelve **1**, porque **1** es mayor que **-1**. Por lo tanto, **`currentSum` se actualiza a 1**.

Actualizamos **`maxSum`**:

- **`maxSum = Math.max(maxSum, currentSum)`**
- **`maxSum = Math.max(-2, 1)`** => **`maxSum = 1`**

#### Paso 3: `nums[2] = -3`

Ahora, **`nums[2] = -3`**. Veamos lo que pasa con **`currentSum`** y **`maxSum`**.

**Math.max(nums[2], currentSum + nums[2])**:

- `nums[2] = -3`
- `currentSum + nums[2] = 1 + (-3) = -2`

Entonces, **Math.max(-3, -2)** devuelve **-2**, porque **-2** es mayor que **-3**. Por lo tanto, **`currentSum` se actualiza a -2**.

Actualizamos **`maxSum`**:

- **`maxSum = Math.max(maxSum, currentSum)`**
- **`maxSum = Math.max(1, -2)`** => **`maxSum = 1`**

#### Paso 4: `nums[3] = 4`

Ahora, **`nums[3] = 4`**. Vamos a ver qué pasa con **`currentSum`** y **`maxSum`**.

**Math.max(nums[3], currentSum + nums[3])**:

- `nums[3] = 4`
- `currentSum + nums[3] = -2 + 4 = 2`

Entonces, **Math.max(4, 2)** devuelve **4**, porque **4** es mayor que **2**. Por lo tanto, **`currentSum` se actualiza a 4**.

Actualizamos **`maxSum`**:

- **`maxSum = Math.max(maxSum, currentSum)`**
- **`maxSum = Math.max(1, 4)`** => **`maxSum = 4`**

#### Paso 5: `nums[4] = -1`

Ahora, **`nums[4] = -1`**. Continuamos con el proceso.

**Math.max(nums[4], currentSum + nums[4])**:

- `nums[4] = -1`
- `currentSum + nums[4] = 4 + (-1) = 3`

Entonces, **Math.max(-1, 3)** devuelve **3**, porque **3** es mayor que **-1**. Por lo tanto, **`currentSum` se actualiza a 3**.

Actualizamos **`maxSum`**:

- **`maxSum = Math.max(maxSum, currentSum)`**
- **`maxSum = Math.max(4, 3)`** => **`maxSum = 4`**

---

### Resumen del Algoritmo

- **Maximum Subarray** busca el subarray contiguo con la suma más alta.
- Usamos **Kadane's Algorithm** para encontrar la solución de manera eficiente.
- Solo necesitamos recorrer el array una vez para encontrar la respuesta, con una complejidad de tiempo de **O(n)**, donde `n` es el número de elementos en el array.
