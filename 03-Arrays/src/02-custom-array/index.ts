import { MyArrayType } from "./interfaces";

export class MyArray<T> implements MyArrayType<T> {
  length: number;
  data: { [key: number]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index: number): T | undefined {
    if (index >= 0 && index < this.length) {
      return this.data[index];
    } else {
      console.error("Index out of range");
      return undefined; // Manejar casos fuera de rango
    }
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift(): T | undefined {
    // Si el array está vacío, no hay nada que eliminar, retornamos undefined
    if (this.length === 0) return undefined;

    // Guardamos el primer elemento en la variable `firstItem`
    const firstItem = this.data[0];

    // Reindexación: movemos todos los elementos una posición hacia adelante
    // Este ciclo comienza en el primer elemento (índice 0) y termina en el penúltimo
    for (let i = 0; i < this.length - 1; i++) {
      // Desplazamos el valor del índice siguiente (i + 1) al índice actual (i)
      this.data[i] = this.data[i + 1];
    }

    // Después de reindexar, el último elemento ahora está duplicado,
    // por lo que eliminamos el último elemento (en la posición this.length - 1)
    delete this.data[this.length - 1];

    // Reducimos manualmente la longitud del array en 1, ya que hemos eliminado un elemento
    this.length--;

    // Retornamos el primer elemento que fue eliminado, almacenado en `firstItem`
    return firstItem;
  }

  delete(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    const item = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}
