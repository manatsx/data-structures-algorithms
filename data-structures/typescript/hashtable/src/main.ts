import { HashTable } from "./hashtable";

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.set("banana", 2);
console.log(myHashTable.key());
// console.log(myHashTable.set("grapes", 10000));
// console.log(myHashTable.get("grapes"));
