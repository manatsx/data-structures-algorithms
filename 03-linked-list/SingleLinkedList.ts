// Definimos la clase Node para representar un nodo en la lista enlazada
export class Node<T> {
  value: T; // Almacena el valor del nodo
  next: Node<T> | null = null; // Referencia al siguiente nodo (puede ser null si es el último)

  constructor(value: T) {
    this.value = value; // Inicializa el nodo con un valor
  }
}

// Definimos la clase LinkedList
class LinkedList<T> {
  head: Node<T> | null = null; // Referencia al primer nodo de la lista (puede estar vacía)

  // Método para agregar un nodo al final de la lista
  append(value: T): void {
    const newNode = new Node(value); // Creamos un nuevo nodo
    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo será el primero
      this.head = newNode;
      return;
    }
    let current = this.head; // Comenzamos desde el primer nodo
    while (current.next) {
      // Recorremos la lista hasta encontrar el último nodo
      current = current.next;
    }
    current.next = newNode; // Conectamos el último nodo con el nuevo nodo
  }

  // Método para agregar un nodo al inicio de la lista
  prepend(value: T): void {
    const newNode = new Node(value); // Creamos un nuevo nodo
    newNode.next = this.head; // Apuntamos el nuevo nodo al antiguo primer nodo
    this.head = newNode; // Actualizamos la cabeza de la lista
  }

  // Método para insertar un nodo en una posición específica
  insert(index: number, value: T): void {
    const newNode = new Node(value); // Creamos un nuevo nodo
    if (index === 0) {
      // Caso especial: insertar al inicio
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous: Node<T> | null = null;
    let i = 0;

    while (current && i < index) {
      // Recorremos la lista hasta la posición deseada
      previous = current;
      current = current.next;
      i++;
    }

    if (previous) {
      // Si encontramos la posición correcta, insertamos el nodo
      newNode.next = current;
      previous.next = newNode;
    }
  }

  // Método para eliminar un nodo por su valor
  delete(value: T): void {
    if (!this.head) return; // Si la lista está vacía, no hay nada que eliminar
    if (this.head.value === value) {
      // Si el nodo a eliminar es el primero
      this.head = this.head.next; // Movemos la cabeza al siguiente nodo
      return;
    }
    let current = this.head; // Comenzamos desde el primer nodo
    while (current.next && current.next.value !== value) {
      // Buscamos el nodo antes del que queremos eliminar
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next; // Saltamos el nodo a eliminar
    }
  }

  // Método para imprimir la lista en consola
  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> ")); // Imprimimos los valores en formato cadena
  }
}

// **Ejemplo de uso**
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.print(); // 1 -> 2 -> 3
list.delete(2);
list.print(); // 1 -> 3
