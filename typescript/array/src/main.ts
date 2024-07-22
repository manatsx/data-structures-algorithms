import { MyArray } from "./array";
import { reverse } from "./reverse-string";

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

// Ejemplo de uso
console.log(reverse("Hi My name is Lionel Messi")); // "isseM lenoiL si eman yM iH"
