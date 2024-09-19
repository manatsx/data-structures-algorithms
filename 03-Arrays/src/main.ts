import { MyArray } from "./02-custom-array";

const myNewArray = new MyArray();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
// myNewArray.delete(1);

console.log(myNewArray);
console.log(myNewArray.get(3));
