// Definimos la clase Node para representar un nodo en la lista doblemente enlazada
class DoublyNode<T> {
  value: T; // Valor del nodo
  next: DoublyNode<T> | null = null; // Puntero al siguiente nodo
  prev: DoublyNode<T> | null = null; // Puntero al nodo anterior

  constructor(value: T) {
    this.value = value;
  }
}

// Clase para manejar la lista doblemente enlazada
class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null; // Puntero al primer nodo
  tail: DoublyNode<T> | null = null; // Puntero al último nodo

  // Método para insertar al final de la lista
  append(value: T): void {
    const newNode = new DoublyNode(value); // Crear un nuevo nodo

    if (!this.head) {
      // Si la lista está vacía
      this.head = this.tail = newNode; // El nuevo nodo es el primer y último nodo
      return;
    }

    this.tail!.next = newNode; // El nodo actual "tail" apunta al nuevo nodo
    newNode.prev = this.tail; // El nuevo nodo apunta hacia atrás al "tail"
    this.tail = newNode; // El nuevo nodo se convierte en el nuevo "tail"
  }

  // Método para insertar en una posición específica
  insert(index: number, value: T): void {
    if (index === 0) {
      // Caso especial: insertar al inicio
      const newNode = new DoublyNode(value);
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      return;
    }

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      // Recorremos la lista hasta la posición deseada
      current = current.next;
      i++;
    }

    if (!current) return; // Si el índice es mayor que el tamaño de la lista, no hacemos nada

    const newNode = new DoublyNode(value);
    newNode.next = current;
    newNode.prev = current.prev;
    if (current.prev) current.prev.next = newNode;
    current.prev = newNode;
  }

  // Método para imprimir la lista en orden normal
  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log("Forward:", values.join(" <-> "));
  }

  // Método para imprimir la lista en orden inverso
  printReverse(): void {
    let current = this.tail;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.prev;
    }
    console.log("Reverse:", values.join(" <-> "));
  }
}

const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.insert(1, 15); // Inserta 15 entre 10 y 20
list.print(); // Forward: 10 <-> 15 <-> 20
list.printReverse(); // Reverse: 20 <-> 15 <-> 10
