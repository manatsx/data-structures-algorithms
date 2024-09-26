// Importamos las interfaces ILinkedList y INode que definen cómo debe estructurarse la lista y el nodo
import { ILinkedList, INode } from "./interfaces";

// Clase Nodo que implementa la interfaz INode
export class Node<T> implements INode<T> {
  value: T; // El valor almacenado en el nodo
  next: Node<T> | null; // El puntero al siguiente nodo, si existe
  prev: Node<T> | null; // El puntero al nodo anterior, si existe (en una lista doblemente enlazada)

  // Constructor para inicializar el nodo con un valor
  constructor(value: T) {
    this.value = value; // Asignamos el valor pasado
    this.next = null; // Inicialmente no tiene siguiente nodo
    this.prev = null; // Inicialmente no tiene nodo anterior
  }
}

// Clase Lista Doblemente Enlazada que implementa la interfaz ILinkedList
export class DoublyLinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null; // El primer nodo de la lista (la cabeza)
  tail: Node<T> | null; // El último nodo de la lista (la cola)
  length: number; // La longitud de la lista (cantidad de nodos)

  // Constructor para inicializar la lista con un valor en el primer nodo
  constructor(value: T) {
    const newNode = new Node<T>(value); // Creamos un nuevo nodo con el valor
    this.head = newNode; // El nodo recién creado es ahora la cabeza de la lista
    this.tail = this.head; // Dado que es el único nodo, también es la cola
    this.length = 1; // La lista tiene un nodo, por lo tanto, longitud es 1
  }

  // Método para agregar un nuevo nodo al final de la lista (push)
  push(value: T): DoublyLinkedList<T> {
    const newNode = new Node<T>(value); // Creamos un nuevo nodo con el valor

    // Si la lista está vacía (no hay cabeza), el nuevo nodo se convierte en la cabeza y la cola
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode; // Vinculamos el último nodo actual con el nuevo nodo
      newNode.prev = this.tail; // El nuevo nodo apunta hacia atrás a lo que antes era la cola
      this.tail = newNode; // Actualizamos la cola para que sea el nuevo nodo
    }

    this.length++; // Incrementamos la longitud de la lista
    return this; // Retornamos la lista para permitir encadenamiento de métodos
  }

  // Método para eliminar el último nodo de la lista (pop)
  pop(): Node<T> | undefined {
    // Si la lista está vacía, no se puede hacer pop
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail; // Guardamos la referencia del nodo a eliminar

    // Si solo hay un nodo en la lista, reiniciamos la cabeza y la cola
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev; // Movemos la cola al nodo anterior
      this.tail!.next = null; // El nuevo último nodo no debe apuntar a ningún nodo siguiente
      temp!.prev = null; // Desvinculamos el nodo eliminado de la lista
    }

    this.length--; // Reducimos la longitud de la lista
    return temp!; // Retornamos el nodo eliminado
  }

  // Método para agregar un nodo al principio de la lista (unshift)
  unshift(value: T): DoublyLinkedList<T> {
    const newNode = new Node<T>(value); // Creamos un nuevo nodo

    // Si la lista está vacía, el nuevo nodo se convierte en la cabeza y la cola
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // El nuevo nodo apunta al antiguo primer nodo
      this.head!.prev = newNode; // El antiguo primer nodo apunta hacia atrás al nuevo nodo
      this.head = newNode; // El nuevo nodo se convierte en la cabeza
    }

    this.length++; // Incrementamos la longitud de la lista
    return this; // Retornamos la lista para encadenamiento
  }

  // Método para eliminar el primer nodo de la lista (shift)
  shift(): Node<T> | undefined {
    // Si la lista está vacía, no se puede hacer shift
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head; // Guardamos el nodo que vamos a eliminar

    // Si solo hay un nodo, reiniciamos la lista
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next; // Movemos la cabeza al siguiente nodo
      this.head!.prev = null; // Desvinculamos el nodo anterior
      temp!.next = null; // Desvinculamos el nodo eliminado de la lista
    }

    this.length--; // Reducimos la longitud de la lista
    return temp!; // Retornamos el nodo eliminado
  }

  // Método para obtener el primer nodo de la lista
  getFirst(): Node<T> | null {
    return this.head; // Simplemente retornamos la cabeza de la lista
  }

  // Método para obtener el último nodo de la lista
  getLast(): Node<T> | null {
    return this.tail; // Simplemente retornamos la cola de la lista
  }

  // Método para obtener el nodo en un índice específico
  get(index: number): Node<T> | null {
    // Si el índice está fuera de rango, retornamos null
    if (index < 0 || index >= this.length) return null;

    let current = this.head; // Empezamos desde la cabeza
    let counter = 0; // Contador para comparar con el índice

    // Recorremos la lista hasta llegar al índice deseado
    while (current && counter < index) {
      current = current.next;
      counter++;
    }

    return current; // Retornamos el nodo en el índice especificado
  }

  // Método para actualizar el valor de un nodo en un índice específico
  set(index: number, value: T): boolean {
    const node = this.get(index); // Obtenemos el nodo en el índice
    if (node) {
      node.value = value; // Si existe, actualizamos el valor
      return true; // Retornamos true si se actualizó
    }
    return false; // Retornamos false si no se encontró el nodo
  }

  // Método para insertar un nodo en un índice específico
  insert(index: number, value: T): boolean | DoublyLinkedList<T> {
    // Si el índice está fuera de rango, retornamos false
    if (index < 0 || index > this.length) return false;
    // Si el índice es 0, insertamos al principio
    if (index === 0) return !!this.unshift(value);
    // Si el índice es igual a la longitud, insertamos al final
    if (index === this.length) return !!this.push(value);

    const newNode = new Node<T>(value); // Creamos un nuevo nodo
    const prevNode = this.get(index - 1); // Obtenemos el nodo anterior
    const nextNode = prevNode!.next; // Obtenemos el nodo siguiente

    // Insertamos el nuevo nodo entre el anterior y el siguiente
    prevNode!.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode!.prev = newNode;

    this.length++; // Incrementamos la longitud de la lista
    return true; // Retornamos true para indicar éxito
  }

  // Método para obtener el tamaño de la lista
  size(): number {
    return this.length; // Retornamos la longitud de la lista
  }

  // Método para limpiar la lista completamente
  clear(): void {
    this.head = null; // Eliminamos la referencia a la cabeza
    this.tail = null; // Eliminamos la referencia a la cola
    this.length = 0; // Reiniciamos la longitud
  }
}
