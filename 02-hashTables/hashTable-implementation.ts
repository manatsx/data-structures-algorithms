interface HashTableInterface<K, V> {
  hash: (key: K) => number;
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  delete: (key: K) => boolean;
}

type BucketEntry<K, V> = [K, V];

class HashTable<K, V> implements HashTableInterface<K, V> {
  private buckets: Array<Array<BucketEntry<K, V>>>;
  private size: number;

  constructor(size: number = 16) {
    this.size = size;
    // Inicializan un array de arrays de longitud size, algo común en estructuras como tablas hash
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  private hash(key: K): number {
    // Convertimos la clave a string en caso de que no sea un string
    const keyString = JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < keyString.length; i++) {
      hash = (hash + keyString.charCodeAt(i) * i) % this.buckets.length;
    }

    return hash;
  }
}
