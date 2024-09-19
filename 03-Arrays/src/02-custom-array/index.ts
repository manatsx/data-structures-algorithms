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
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

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
