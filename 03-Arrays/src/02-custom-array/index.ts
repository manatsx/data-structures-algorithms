import { MyArrayType } from "./interfaces";

export class MyArray implements MyArrayType {
  length: number;
  data: { [key: number]: any };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item: any): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index: number): any {
    return this.data[index];
  }

  pop(): any {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift(): any {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  delete(index: number): any {
    const item = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}
