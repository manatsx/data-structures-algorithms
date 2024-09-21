import { MyArray } from "./02-custom-array";

const myNewArray = new MyArray();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
// myNewArray.delete(1);

console.log(myNewArray);
console.log(`Index 3: ${myNewArray.get(3)}`);
console.log(`Index 1: ${myNewArray.get(1)}`);
myNewArray.shift();
console.log(myNewArray);
