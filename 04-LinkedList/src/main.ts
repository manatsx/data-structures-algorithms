import { LinkedList } from "./01-Singly-LinkedList/main";

const myLinkedList = new LinkedList<string>("");
myLinkedList.push("the");
myLinkedList.push("quick");
myLinkedList.push("brown");
myLinkedList.push("fox");
myLinkedList.push("jumps");

console.log(myLinkedList.toString());
