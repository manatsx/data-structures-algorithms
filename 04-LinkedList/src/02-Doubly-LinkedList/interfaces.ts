// Definición de la interfaz para el nodo
export interface INode<T> {
  value: T;
  next: INode<T> | null;
  prev?: INode<T> | null; // Esto es opcional en la lista simple, pero obligatorio para la doblemente enlazada
}

// Definición de la interfaz para la lista enlazada
export interface ILinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  length: number;
  push(value: T): void;
  pop(): INode<T> | undefined;
  unshift(value: T): ILinkedList<T>;
  shift(): INode<T> | undefined;
  getFirst(): INode<T> | null;
  getLast(): INode<T> | null;
  get(index: number): INode<T> | null;
  set(index: number, value: T): boolean;
  insert(index: number, value: T): boolean | ILinkedList<T>;
  size(): number;
  clear(): void;
}
