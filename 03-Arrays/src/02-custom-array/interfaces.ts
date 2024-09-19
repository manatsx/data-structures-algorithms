export interface MyArrayType<T> {
  length: number;
  data: { [key: number]: T };
  push(item: T): number;
  get(index: number): T | undefined;
  pop(): T | undefined;
  shift(): T | undefined;
  delete(index: number): T | undefined;
}
