interface MyArrayInterface<T> {
  push(value: T): void;
  get(index: number): T | string;
  set(index: number, value: T): string | void;
  pop(): T | undefined;
}

class MyArray<T> implements MyArrayInterface<T> {
  length: number;
  data: { [key: number]: T };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value: T) {
    this.data[this.length] = value;
    this.length++;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return "Index out of range";
    return this.data[index];
  }

  set(index: number, value: T) {
    if (index < 0 || index >= this.length) return "Index out of range";
    this.data[index] = value;
  }

  pop() {
    const lastItem = this.data[this.length - 1]; // Guardamos el último item
    delete this.data[this.length - 1]; // Eliminamos la última posición
    this.length--;
    return lastItem;
  }

  // Eliminar un elemento por índice
  delete(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;
    const deletedItem = this.data[index];
    this._shiftItems(index);
    return deletedItem;
  }

  // Método auxiliar para reorganizar los elementos después de eliminar
  private _shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new MyArray();
arr.push("Lima");
arr.push("La Paz");
arr.push("octocat");

console.log(arr.get(2));
arr.set(3, "Asuncion");
arr.push("Santiago");
arr.push("MetaCat");
arr.push("DeepSeek");
console.log(arr);
arr.delete(2);
console.log(arr);
