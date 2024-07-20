import { HashTable } from "./hashtable";

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
