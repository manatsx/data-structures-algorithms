export class HashTable {
  // La propiedad `data` es un array de arrays. Cada elemento del array interno es un par [clave, valor].
  private data: Array<Array<[string, number]>>;

  // El constructor inicializa el array `data` con un tamaño dado.
  constructor(size: number) {
    this.data = new Array(size);
  }

  // El método `hash` genera un número hash a partir de una cadena.
  // Este número hash será usado como índice para almacenar los datos en el array `data`.
  private hash(key: string): number {
    let hash = 0;
    // Recorremos cada carácter de la clave.
    for (let i = 0; i < key.length; i++) {
      // Calculamos el valor hash acumulando los códigos de los caracteres multiplicados por su posición.
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash; // Devolvemos el valor hash.
  }

  // El método `set` añade un nuevo par [clave, valor] en la tabla hash.
  public set(key: string, value: number): Array<Array<[string, number]>> {
    // Calculamos la dirección donde almacenar el par [clave, valor] usando el método `hash`.
    let address = this.hash(key);
    // Si no existe un bucket en la dirección calculada, creamos uno.
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // Añadimos el par [clave, valor] en el bucket correspondiente.
    this.data[address].push([key, value]);
    return this.data; // Devolvemos la tabla hash actualizada.
  }

  // El método `get` busca un valor en la tabla hash dada una clave.
  public get(key: string): number | undefined {
    // Calculamos la dirección donde debería estar almacenada la clave usando el método `hash`.
    const address = this.hash(key);
    // Obtenemos el bucket en la dirección calculada.
    const currentBucket = this.data[address];
    // Si el bucket existe, buscamos la clave dentro del bucket.
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // Si encontramos la clave, devolvemos el valor asociado.
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined; // Si la clave no se encuentra, devolvemos undefined.
  }

  public key() {
    const keyArrays = [];
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index]) {
        keyArrays.push(this.data[index][0][0]);
      }
    }
    return keyArrays;
  }
}
