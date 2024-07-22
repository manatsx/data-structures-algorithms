# Crear una clase Node para crear un nodo
class Node:
    def __init__(self, data):
        self.data = data  # Datos del nodo
        self.next = None  # Referencia al siguiente nodo

# Crear una clase LinkedList
class LinkedList:
    def __init__(self):
        self.head = None  # Inicializar la cabeza de la lista como None

    # Método para agregar un nodo al principio de la lista enlazada
    def insertAtBegin(self, data):
        new_node = Node(data)  # Crear un nuevo nodo
        new_node.next = self.head  # El siguiente nodo del nuevo nodo será la cabeza actual
        self.head = new_node  # La cabeza de la lista ahora es el nuevo nodo

    # Método para agregar un nodo en cualquier índice
    # La indexación comienza desde 0.
    def insertAtIndex(self, data, index):
        if index == 0:  # Si el índice es 0, agregar al principio
            self.insertAtBegin(data)
            return
        
        position = 0
        curr = self.head
        # Recorrer la lista hasta llegar al índice deseado o al final de la lista
        while curr is not None and position < index - 1:
            position += 1
            curr = curr.next

        if curr is not None:  # Si no hemos llegado al final de la lista
            new_node = Node(data)  # Crear un nuevo nodo
            new_node.next = curr.next  # El siguiente nodo del nuevo nodo será el siguiente del nodo actual
            curr.next = new_node  # El siguiente nodo del nodo actual ahora es el nuevo nodo
        else:
            print("Índice no presente")

    # Método para agregar un nodo al final de la lista enlazada
    def insertAtEnd(self, data):
        new_node = Node(data)  # Crear un nuevo nodo
        if self.head is None:  # Si la lista está vacía, el nuevo nodo será la cabeza
            self.head = new_node
            return

        curr = self.head
        # Recorrer la lista hasta llegar al final
        while curr.next:
            curr = curr.next

        curr.next = new_node  # El siguiente nodo del último nodo ahora es el nuevo nodo

    # Actualizar nodo de una lista enlazada en una posición dada
    def updateNode(self, val, index):
        curr = self.head
        position = 0
        # Recorrer la lista hasta llegar al índice deseado o al final de la lista
        while curr is not None and position != index:
            position += 1
            curr = curr.next

        if curr is not None:  # Si no hemos llegado al final de la lista
            curr.data = val  # Actualizar el valor del nodo
        else:
            print("Índice no presente")

    # Método para eliminar el primer nodo de la lista enlazada
    def remove_first_node(self):
        if self.head is None:  # Si la lista está vacía, no hacer nada
            return

        self.head = self.head.next  # La cabeza de la lista ahora será el segundo nodo

    # Método para eliminar el último nodo de la lista enlazada
    def remove_last_node(self):
        if self.head is None:  # Si la lista está vacía, no hacer nada
            return

        if self.head.next is None:  # Si la lista solo tiene un nodo, eliminarlo
            self.head = None
            return

        curr = self.head
        # Recorrer la lista hasta llegar al penúltimo nodo
        while curr.next.next is not None:
            curr = curr.next

        curr.next = None  # Eliminar la referencia al último nodo

    # Método para eliminar en un índice dado
    def remove_at_index(self, index):
        if self.head is None:  # Si la lista está vacía, no hacer nada
            return

        if index == 0:  # Si el índice es 0, eliminar el primer nodo
            self.head = self.head.next
            return

        curr = self.head
        position = 0
        # Recorrer la lista hasta llegar al índice deseado o al final de la lista
        while curr is not None and position < index - 1:
            position += 1
            curr = curr.next

        if curr is not None and curr.next is not None:  # Si no hemos llegado al final de la lista
            curr.next = curr.next.next  # El siguiente nodo del nodo actual ahora será el nodo después del siguiente
        else:
            print("Índice no presente")

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)


if __name__ == "__main__" :
    ll = LinkedList()
    ll.insertAtBegin("Buenos Aires")
    ll.insertAtBegin("Quindy")
    ll.insertAtBegin("Berlin")
    ll.insertAtEnd("Sao Paulo")
    ll.insertAtIndex("Lima", 3)

    print(ll)