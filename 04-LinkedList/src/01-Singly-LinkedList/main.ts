import { ILinkedList, INode } from "./interfaces";

// Clase para el nodo, implementando la interfaz INode
// Un nodo en la lista enlazada almacena un valor y una referencia al siguiente nodo.
export class Node<T> implements INode<T> {
  value: T; // Valor almacenado en el nodo.
  next: INode<T> | null; // Referencia al siguiente nodo en la lista.

  constructor(value: T) {
    this.value = value; // Se asigna el valor pasado al constructor.
    this.next = null; // Inicialmente, el siguiente nodo es null.
  }
}

// Clase para la lista enlazada, implementando la interfaz ILinkedList
export class LinkedList<T> implements ILinkedList<T> {
  head: INode<T> | null; // Primer nodo de la lista.
  tail: INode<T> | null; // Último nodo de la lista.
  length: number; // Longitud de la lista (número de nodos).

  constructor(value: T) {
    const newNode = new Node(value); // Crea un nuevo nodo con el valor inicial.
    this.head = newNode; // El nuevo nodo es la cabeza de la lista.
    this.tail = newNode; // También es la cola porque es el único nodo.
    this.length = 1; // La lista comienza con un nodo, por lo que la longitud es 1.
  }

  // Método para agregar un nuevo nodo al final de la lista
  push(value: T): void {
    const newNode = new Node(value); // Crea un nuevo nodo con el valor dado.

    // Si la lista está vacía (head es null),
    if (!this.head) {
      this.head = newNode; // asigna el nuevo nodo como head,
      this.tail = newNode; // asigna el nuevo nodo como tail
    } else {
      // Si la lista no está vacía,
      this.tail!.next = newNode; // conecta el último nodo actual al nuevo nodo,
      this.tail = newNode; // y luego actualiza tail al nuevo nodo.
    }

    this.length++; // Incrementa la longitud de la lista.
  }

  // Método para eliminar el último nodo de la lista
  pop(): INode<T> | undefined {
    // Si la lista está vacía, no hay nada que eliminar.
    if (!this.head) {
      return undefined;
    }

    let temp = this.head; // Comienza desde el head.
    let prev = this.head; // Mantén una referencia al nodo previo.

    while (temp.next) {
      // Recorre la lista hasta encontrar el último nodo.
      prev = temp; // Guarda el nodo previo.
      temp = temp.next; // Avanza al siguiente nodo.
    }

    this.tail = prev; // Actualiza tail al nodo previo.
    this.tail.next = null; // Desconecta el último nodo de la lista.
    this.length--; // Reduce la longitud de la lista.

    if (this.length === 0) {
      // Si la lista está vacía después de la eliminación,
      this.head = null; // restablece head y tail a null.
      this.tail = null;
    }

    return temp; // Devuelve el nodo eliminado.
  }

  // Método para agregar un nuevo nodo al principio de la lista
  unshift(value: T): ILinkedList<T> {
    const newNode = new Node(value); // Crea un nuevo nodo con el valor dado.

    // Si la lista está vacía,
    if (!this.head) {
      this.head = newNode; // asigna el nuevo nodo como head,
      this.tail = newNode; // y como tail también.
    } else {
      // Si la lista no está vacía,
      newNode.next = this.head; // conecta el nuevo nodo al head actual,
      this.head = newNode; // y luego actualiza head al nuevo nodo.
    }

    this.length++; // Incrementa la longitud de la lista.
    return this; // Devuelve la lista enlazada.
  }

  // Método para eliminar el primer nodo de la lista
  shift(): INode<T> | undefined {
    if (!this.head) {
      // Si la lista está vacía, no hay nada que eliminar.
      return undefined;
    }

    const temp = this.head; // Guarda la referencia del nodo actual (head).
    this.head = this.head.next; // Actualiza head al siguiente nodo.
    temp.next = null; // Desconecta el nodo eliminado del resto de la lista.
    this.length--; // Reduce la longitud de la lista.

    if (this.length === 0) {
      // Si la lista está vacía después de la eliminación,
      this.tail = null; // restablece tail a null.
    }

    return temp; // Devuelve el nodo eliminado.
  }

  // Método para obtener el primer nodo de la lista
  getFirst(): INode<T> | null {
    return this.head; // Retorna el nodo head (primero en la lista) o null si la lista está vacía.
  }

  // Método para obtener el último nodo de la lista
  getLast(): INode<T> | null {
    return this.tail; // Retorna el nodo tail (último en la lista) o null si la lista está vacía.
  }

  // Método para obtener el nodo en una posición específica
  get(index: number): INode<T> | null {
    if (index < 0 || index >= this.length) {
      // Verifica si el índice es válido.
      return null; // Retorna null si el índice está fuera de los límites.
    }

    let counter = 0; // Inicializa un contador.
    let node = this.head; // Comienza desde el head.

    while (node) {
      // Recorre la lista nodo por nodo.
      if (counter === index) {
        // Si el contador coincide con el índice deseado,
        return node; // retorna el nodo actual.
      }

      counter++; // Incrementa el contador.
      node = node.next; // Avanza al siguiente nodo.
    }

    return null; // Si no se encuentra el nodo (aunque no debería pasar), retorna null.
  }

  // Método para cambiar el valor de un nodo en una posición específica
  set(index: number, value: T): boolean {
    const node = this.get(index); // Busca el nodo en el índice dado.
    if (node) {
      // Si el nodo existe,
      node.value = value; // actualiza su valor,
      return true; // y retorna true indicando éxito.
    }

    return false; // Si no se encuentra el nodo, retorna false.
  }

  // Método para insertar un nodo en una posición específica
  insert(index: number, value: T): boolean | ILinkedList<T> {
    if (index < 0 || index > this.length) return false; // Verifica si el índice es válido.

    if (index === 0) {
      // Si el índice es 0, inserta al principio de la lista.
      return this.unshift(value); // Utiliza el método unshift.
    }

    if (index === this.length) {
      // Si el índice es igual a la longitud, inserta al final de la lista.
      this.push(value); // Utiliza el método push.
      return true;
    }

    const newNode = new Node(value); // Crea un nuevo nodo.
    const prev = this.get(index - 1); // Obtiene el nodo previo al índice deseado.

    if (prev) {
      // Si el nodo previo existe,
      newNode.next = prev.next; // conecta el nuevo nodo al siguiente nodo en la lista,
      prev.next = newNode; // y conecta el nodo previo al nuevo nodo.
      this.length++; // Incrementa la longitud de la lista.
      return true; // Retorna true indicando éxito.
    }

    return false; // Si no se encuentra el nodo previo, retorna false.
  }

  // Método para obtener la longitud de la lista
  size(): number {
    return this.length; // Retorna la longitud actual de la lista.
  }

  // Método para limpiar la lista
  clear(): void {
    this.head = null; // Elimina la referencia al primer nodo.
    this.tail = null; // Elimina la referencia al último nodo.
    this.length = 0; // Resetea la longitud de la lista.
  }

  // Método para convertir la lista en una cadena de texto
  toString(): string {
    const nodes: string[] = []; // Array para almacenar los valores de los nodos.
    let current = this.head; // Comienza desde el head.

    // Recorre la lista y agrega los valores al array de nodos
    while (current) {
      nodes.push(String(current.value)); // Convierte el valor del nodo a string y lo agrega al array.
      current = current.next; // Avanza al siguiente nodo.
    }

    // Agrega "null" al final para indicar el final de la lista y une los nodos en una cadena
    nodes.push("null");
    return nodes.join(" -> "); // Retorna la cadena de texto resultante.
  }
}
