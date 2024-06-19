import { MyArray } from "./array";

const myArray = new MyArray<string>();
myArray.push("Argentina");
myArray.push("Bolivia");
myArray.push("Uruguay");
console.log(myArray);
console.log(myArray.get(2));
