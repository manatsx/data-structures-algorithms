import { ILinkedList, INode } from "./interfaces";

// Clase Nodo
export class Node<T> implements INode<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Clase Lista Doblemente Enlazada
export class DoublyLinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  length: number;

  constructor(value: T) {
    const newNode = new Node<T>(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value: T): DoublyLinkedList<T> {
    const newNode = new Node<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): Node<T> | undefined {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }

    this.length--;
    return temp!;
  }

  unshift(value: T): DoublyLinkedList<T> {
    const newNode = new Node<T>(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift(): Node<T> | undefined {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      temp!.next = null;
    }

    this.length--;
    return temp!;
  }

  getFirst(): Node<T> | null {
    return this.head;
  }

  getLast(): Node<T> | null {
    return this.tail;
  }

  get(index: number): Node<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (current && counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index: number, value: T): boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T): boolean | DoublyLinkedList<T> {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node<T>(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;

    prevNode!.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode!.prev = newNode;

    this.length++;
    return true;
  }

  size(): number {
    return this.length;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
