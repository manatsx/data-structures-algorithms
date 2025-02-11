interface HashTableInterface<K, V> {
  hash: (key: K) => number;
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  keys: () => K[];
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
  set(key: K, value: V) {
    let address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key: K) {
    let address = this.hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys(): K[] {
    const keysArray: K[] = [];
    const flatData = this.data.flat(); // Aplanar la tabla hash

    flatData.forEach((entry) => keysArray.push(entry[0]));

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.set("oranges", 2);
myHashTable.get("grapes");
console.log(myHashTable.keys());
