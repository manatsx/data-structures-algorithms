import { firstRecurringCharacter } from "./first-recurring-character";
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

const fRc = firstRecurringCharacter([1, 2, 3, 4, 5]);
const fRc2 = firstRecurringCharacter([1, 1, 5, 5, 1, 3, 4, 6]); // el 2 se repite secuencialmente..
console.log(fRc);
console.log(fRc2);
