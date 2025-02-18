package main

import "fmt"

// Definimos la estructura del nodo para la lista doblemente enlazada
type DNode struct {
	value int
	next  *DNode
	prev  *DNode
}

// Definimos la estructura de la lista doblemente enlazada
type DoublyLinkedList struct {
	head *DNode
	tail *DNode
}

// Método Append: Agrega un nodo al final de la lista
func (l *DoublyLinkedList) Append(value int) {
	newNode := &DNode{value: value} // Creamos un nuevo nodo

	if l.head == nil { // Si la lista está vacía, el nuevo nodo será la cabeza y la cola
		l.head = newNode
		l.tail = newNode
		return
	}

	// Conectamos el nuevo nodo al final
	l.tail.next = newNode
	newNode.prev = l.tail
	l.tail = newNode // Actualizamos la cola
}

// Método Insert: Inserta un nodo en una posición específica
func (l *DoublyLinkedList) Insert(index int, value int) {
	newNode := &DNode{value: value}

	if index == 0 { // Insertar al inicio
		newNode.next = l.head
		if l.head != nil {
			l.head.prev = newNode
		}
		l.head = newNode
		if l.tail == nil {
			l.tail = newNode
		}
		return
	}

	current := l.head
	i := 0

	// Buscamos el nodo en la posición anterior al índice
	for current != nil && i < index {
		current = current.next
		i++
	}

	if current == nil { // Si la posición no existe, no hacemos nada
		return
	}

	// Insertamos el nuevo nodo antes del nodo actual
	newNode.next = current
	newNode.prev = current.prev

	if current.prev != nil {
		current.prev.next = newNode
	}
	current.prev = newNode
}

// Método Print: Imprime la lista en orden normal
func (l *DoublyLinkedList) Print() {
	current := l.head
	for current != nil {
		fmt.Print(current.value, " <-> ")
		current = current.next
	}
	fmt.Println("nil")
}

// Método PrintReverse: Imprime la lista en orden inverso
func (l *DoublyLinkedList) PrintReverse() {
	current := l.tail
	for current != nil {
		fmt.Print(current.value, " <-> ")
		current = current.prev
	}
	fmt.Println("nil")
}

func main() {
	list := DoublyLinkedList{}
	list.Append(10)
	list.Append(20)
	list.Insert(1, 15)  // Inserta 15 entre 10 y 20
	list.Print()        // 10 <-> 15 <-> 20 <-> nil
	list.PrintReverse() // 20 <-> 15 <-> 10 <-> nil
}
