import { LinkedList } from "./01-Singly-LinkedList/main";

const myLinkedList = new LinkedList<string>("");

myLinkedList.InsertAtBeginning("fox");
myLinkedList.InsertAtBeginning("brown");
myLinkedList.InsertAtBeginning("quick");
myLinkedList.InsertAtBeginning("the");
myLinkedList.InsertAtEnd("jumps");

console.log(myLinkedList);

const list = new LinkedList<string>("");
list.push("the");
list.push("quick");
list.push("brown");
list.push("fox");
list.push("jumps");

console.log(list.toString());
