package main

import (
	"fmt"
	"strings"
)

type Node struct {
	data string
	next *Node
}

type SingleLinkedList struct {
	head *Node
}

func NewNode(data string) *Node {
	return &Node{data: data, next: nil}
}

// InsertAtBeginning inserts a new node at the beginning of the list
func (slk *SingleLinkedList) InsertAtBeginning(newData string) {
	newNode := NewNode(newData)
	newNode.next = slk.head
	slk.head = newNode
}

func (slk *SingleLinkedList) InsertAtEnd(newData string) {
	newNode := NewNode(newData)

	if slk.head == nil {
		slk.head = newNode
		return
	}

	last := slk.head
	for last.next != nil {
		last = last.next
	}
	last.next = newNode

}

// String provides a string representation of the list
func (slk *SingleLinkedList) String() string {
	var nodes []string
	for node := slk.head; node != nil; node = node.next {
		nodes = append(nodes, node.data)
	}
	nodes = append(nodes, "Nil")
	return strings.Join(nodes, " -> ")
}

func main() {
	// Crear una nueva lista enlazada simple
	ll := &SingleLinkedList{}

	// Insertar algunos elementos al principio de la lista
	ll.InsertAtBeginning("fox")
	ll.InsertAtBeginning("brown")
	ll.InsertAtBeginning("quick")
	ll.InsertAtBeginning("the")
	ll.InsertAtEnd("jumps")

	// Imprimir la lista para verificar que los elementos se insertaron correctamente
	fmt.Println(ll)
}
