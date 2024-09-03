export interface MyArrayType {
  length: number;
  data: { [key: number]: any };
  push(item: any): number;
  get(index: number): any;
  pop(): any;
  shift(): any;
  delete(index: number): any;
}
