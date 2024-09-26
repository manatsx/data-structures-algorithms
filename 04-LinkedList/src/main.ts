import { LinkedList } from "./01-Singly-LinkedList/main";
import { DoublyLinkedList } from "./02-Doubly-LinkedList/main";

const myLinkedList = new LinkedList<string>("");
myLinkedList.push("the");
myLinkedList.push("quick");
myLinkedList.push("brown");
myLinkedList.push("fox");
myLinkedList.push("jumps");

console.log(myLinkedList.toString());

const myDoublyLinkedList = new DoublyLinkedList<string>("");
myDoublyLinkedList.push("the");
myDoublyLinkedList.push("quick");
myDoublyLinkedList.push("brown");
myDoublyLinkedList.push("fox");
myDoublyLinkedList.push("jumps");

console.log(myDoublyLinkedList.toString());
