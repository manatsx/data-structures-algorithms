import { ILinkedList, INode } from "./interfaces";

// Clase para el nodo, implementando la interfaz INode
export class Node<T> implements INode<T> {
  value: T;
  next: INode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// Clase para la lista enlazada, implementando la interfaz ILinkedList
export class LinkedList<T> implements ILinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop(): INode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value: T): ILinkedList<T> {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift(): INode<T> | undefined {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst(): INode<T> | null {
    return this.head;
  }

  getLast(): INode<T> | null {
    return this.tail;
  }

  get(index: number): INode<T> | null {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  set(index: number, value: T): boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: T): boolean | ILinkedList<T> {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value);
    const prev = this.get(index - 1);

    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  size(): number {
    return this.length;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  InsertAtBeginning(value: T): void {
    this.unshift(value);
  }

  InsertAtEnd(value: T): void {
    this.push(value);
  }

  toString(): string {
    const nodes: string[] = [];
    let current = this.head;

    // Recorre la lista y agrega los valores al array de nodos
    while (current) {
      nodes.push(String(current.value));
      current = current.next;
    }

    // Agrega "Nil" al final y une los nodos en una cadena
    nodes.push("null");
    return nodes.join(" -> ");
  }
}
