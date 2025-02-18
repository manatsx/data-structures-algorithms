package main

import "fmt"

// Definimos una estructura Node que representa un nodo de la lista enlazada
type Node struct {
	value int   // Valor almacenado en el nodo
	next  *Node // Puntero al siguiente nodo (puede ser nil si es el último)
}

// Definimos la estructura LinkedList para manejar la lista enlazada
type LinkedList struct {
	head *Node // Puntero al primer nodo de la lista (puede ser nil si está vacía)
}

// Método para agregar un nodo al final de la lista
func (l *LinkedList) Append(value int) {
	newNode := &Node{value: value} // Creamos un nuevo nodo
	if l.head == nil {             // Si la lista está vacía, el nuevo nodo será el primero
		l.head = newNode
		return
	}
	current := l.head         // Empezamos desde la cabeza
	for current.next != nil { // Recorremos la lista hasta encontrar el último nodo
		current = current.next
	}
	current.next = newNode // Conectamos el último nodo con el nuevo nodo
}

// Método para agregar un nodo al inicio de la lista
func (l *LinkedList) Prepend(value int) {
	newNode := &Node{value: value, next: l.head} // Creamos un nuevo nodo y apuntamos al actual head
	l.head = newNode                             // Actualizamos la cabeza de la lista
}

// Método para insertar un nodo en una posición específica
func (l *LinkedList) Insert(index int, value int) {
	newNode := &Node{value: value} // Creamos un nuevo nodo

	if index == 0 { // Caso especial: insertar al inicio
		newNode.next = l.head
		l.head = newNode
		return
	}

	current := l.head
	var previous *Node
	i := 0

	for current != nil && i < index { // Recorremos la lista hasta encontrar la posición deseada
		previous = current
		current = current.next
		i++
	}

	if previous != nil { // Si encontramos la posición correcta, insertamos el nodo
		newNode.next = current
		previous.next = newNode
	}
}

// Método para eliminar un nodo por su valor
func (l *LinkedList) Delete(value int) {
	if l.head == nil { // Si la lista está vacía, no hay nada que eliminar
		return
	}
	if l.head.value == value { // Si el nodo a eliminar es el primero
		l.head = l.head.next // Movemos la cabeza al siguiente nodo
		return
	}
	current := l.head                                        // Empezamos desde la cabeza
	for current.next != nil && current.next.value != value { // Buscamos el nodo antes del que queremos eliminar
		current = current.next
	}
	if current.next != nil {
		current.next = current.next.next // Saltamos el nodo a eliminar
	}
}

// Método para imprimir la lista enlazada
func (l *LinkedList) Print() {
	current := l.head
	for current != nil {
		fmt.Print(current.value, " -> ") // Imprime el valor del nodo
		current = current.next
	}
	fmt.Println("nil") // Indica el final de la lista
}

func main() {
	list := LinkedList{}
	list.Append(1)
	list.Append(55)
	list.Append(23)
	list.Insert(2, 25)
	list.Print()
}
