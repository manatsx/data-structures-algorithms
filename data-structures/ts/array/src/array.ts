export class MyArray<T> {
  private size: number;
  private element: T[];

  constructor() {
    this.size = 0;
    this.element = [];
  }

  push(item: T) {
    this.element[this.size] = item;
    this.size++;
    return this.length;
  }

  get(index: number): T | undefined {
    return this.element[index];
  }

  pop(): T | undefined {
    if (this.size === 0) {
      return undefined;
    }
    const lastItem = this.element[this.size - 1];
    this.size--;
    this.element.length = this.size; // Adjust length of array
    return lastItem;
  }

  delete(index: number) {
    const item = this.element[index];
    this.shiftItems(index);
    this.size--;
    this.element.length = this.size; // Adjust the array length
    return item;
  }

  private shiftItems(index: number) {
    for (let i = index; i < this.size - 1; i++) {
      this.element[i] = this.element[i + 1];
    }
  }

  length(): number {
    return this.size;
  }

  toString(): string {
    return this.element.slice(0, this.size).toString();
  }
}
