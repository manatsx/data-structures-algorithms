interface HashTableInterface<K, V> {
  hash: (key: K) => number;
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  delete: (key: K) => boolean;
  keys: () => K[];
  print: () => void;
}

class HashTable<K extends string, V> implements HashTableInterface<K, V> {
  private data: [K, V][][];

  constructor(size: number) {
    this.data = new Array(size);
  }

  // O(1)
  hash(key: K): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key: K, value: V): void {
    let address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    // Verificar si la clave ya existe y actualizar su valor
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        this.data[address][i][1] = value;
        return;
      }
    }

    this.data[address].push([key, value]);
  }

  get(key: K): V | undefined {
    let address = this.hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  delete(key: K): boolean {
    let address = this.hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // Elimina el par clave-valor
          return true;
        }
      }
    }

    return false; // Si la clave no se encontró
  }

  keys(): K[] {
    const keysArray: K[] = [];

    this.data.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(([key]) => keysArray.push(key));
      }
    });

    return keysArray;
  }

  print(): void {
    console.log("HashTable Data:");
    this.data.forEach((bucket, index) => {
      if (bucket && bucket.length > 0) {
        console.log(`Index ${index}:`, bucket);
      }
    });
  }
}

// Uso:
const myHashTable = new HashTable<string, number>(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);

console.log("Antes de eliminar:");
myHashTable.print();

console.log("Eliminando 'apples'...");
myHashTable.delete("apples");

console.log("Después de eliminar:");
myHashTable.print();
