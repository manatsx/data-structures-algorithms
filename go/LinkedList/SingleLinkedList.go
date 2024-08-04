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

// InsertAtBeginning inserts a new node at the beginning of the list
func (slk *SingleLinkedList) InsertAtBeginning(newData string) {
	newNode := &Node{data: newData, next: nil}
	newNode.next = slk.head
	slk.head = newNode
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

	// Imprimir la lista para verificar que los elementos se insertaron correctamente
	fmt.Println(ll)
}
