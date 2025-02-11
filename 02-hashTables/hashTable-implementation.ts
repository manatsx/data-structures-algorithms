interface HashTableInterface<K, V> {
  hash: (key: K) => number;
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  delete: (key: K) => boolean;
  resize: () => void;
}

class HashTable<K extends string, V> implements HashTableInterface<K, V> {
  private data: [K, V][][]; // Arreglo de buckets
  private size: number;
  private count: number; // Contador de elementos

  constructor(size: number) {
    this.size = size;
    this.data = new Array(size);
    this.count = 0;
  }

  hash(key: K): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key: K, value: V): void {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    // Verificar si la clave ya existe y actualizarla
    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        this.data[address][i][1] = value;
        return;
      }
    }

    this.data[address].push([key, value]);
    this.count++;

    // Redimensionar si la carga es demasiado alta
    if (this.count / this.size > 0.7) {
      this.resize();
    }
  }

  get(key: K): V | undefined {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key: K): boolean {
    const address = this.hash(key);
    const bucket = this.data[address];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          this.count--;
          return true;
        }
      }
    }
    return false;
  }

  resize(): void {
    const newSize = this.size * 2;
    const newTable = new HashTable<K, V>(newSize);

    for (let i = 0; i < this.size; i++) {
      if (this.data[i]) {
        for (const [key, value] of this.data[i]) {
          newTable.set(key, value);
        }
      }
    }

    this.data = newTable.data;
    this.size = newSize;
  }

  print(): void {
    console.log("Tabla Hash:");
    for (let i = 0; i < this.size; i++) {
      if (this.data[i]) {
        console.log(`Índice ${i}:`, this.data[i]);
      }
    }
  }
}

// Uso:
const myHashTable = new HashTable<string, number>(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("bananas", 15);

console.log("Valor de 'grapes':", myHashTable.get("grapes")); // 10000
console.log("Valor de 'apples':", myHashTable.get("apples")); // 9

console.log("\nAntes de eliminar:");
myHashTable.print();

console.log("\nEliminando 'apples'...");
myHashTable.delete("apples");

console.log("\nDespués de eliminar:");
myHashTable.print();
