class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  get(index) {
    if (
      typeof index !== "number" ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= this.length
    ) {
      return "Index out of range or invalid index type";
    }
    return this.data[index];
  }

  set(index, value) {
    if (typeof index !== "number" || !Number.isInteger(index) || index < 0) {
      return "Index must be a positive integer";
    }

    // Si el índice está fuera del rango actual, expandimos el array
    if (index >= this.length) {
      this.length += 1; // Ajusta la longitud del array
    }
    this.data[index] = value;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this._shiftItems(index);
    return item;
  }

  _shiftItems(index) {
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
