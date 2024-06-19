import { MyArray } from "./array";

const myArray = new MyArray<string>();
myArray.push("Argentina");
myArray.push("Bolivia");
myArray.push("Uruguay");
myArray.push("Francia");
console.log(myArray);
console.log(myArray.get(2));
// myArray.pop();
console.log(myArray);
console.log(myArray.length());
// myArray.delete(0);
console.log(myArray);
