export class MyArray<T> {
  private length: number;
  private elements: { [key: number]: T };

  constructor() {
    this.length = 0;
    this.elements = {};
  }

  get(index: number): T {
    return this.elements[index];
  }

  push(item: T): void {
    this.elements[this.length] = item;
    this.length++;
  }
}
