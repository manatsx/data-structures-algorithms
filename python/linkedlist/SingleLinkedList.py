# Clase para representar cada nodo de la lista enlazada
# Un nodo es un elemento de la lista enlazada que almacena datos y una referencia al siguiente nodo de la secuencia
class Node:
    def __init__(self, data: str) -> None:
        self.data = data # contienen el valor que se almacenará en el nodo.
        self.next = None # contiene una referencia al siguiente nodo de la lista.

# Clase que representa mi LinkedList (Lista enlazada)
# Esto encapsulará todas las operaciones para administrar los nodos, como la inserción y la eliminación
class SingleLinkedList:
    def __init__(self) -> None:
        self.head: Node | None = None  # El primer nodo (head) puede ser un nodo o None

    def insertAtBeginning(self, new_data: str) -> None:
        """Insertar un nodo al inicio de una lista enlazada"""
        new_node = Node(new_data)  # Crea un nuevo nodo
        new_node.next = self.head  # El siguiente nodo del nuevo nodo (new_node.next) será el  primer nodo actual (self.head)
        self.head = new_node  # La cabeza de la lista (self.head) ahora es el nuevo nodo (new_node)

    def insertAtEnd(self, new_data: str) -> None:
        """Insertar un nodo al final de una lista enlazada"""
        new_node = Node(new_data)  # Crea un nuevo nodo con el dato recibido
        if self.head is None:  # Si la lista está vacía (es decir, no existe el primer nodo de la lista) 
            self.head = new_node # Entonces el nuevo nodo se convierte en el primer nodo (head)
            return
        
        last = self.head
        while last.next: # Recorremos la lista, el bucle continua mientras last.next no sea None
            last = last.next # Se actualiza last para que apunte al siguiente nodo en la lista (last = last.next)
        last.next = new_node # El siguiente nodo del último nodo ahora es el nuevo nodo

    # Eliminar el primer nodo de una lista enlazada es fácil, ya que solo implica apuntar el encabezado de esta lista al segundo nodo. 
    # De esta manera, el primer nodo ya no formará parte de la lista.
    def deleteFromBeginning(self) -> str | None:
        """Eliminar un nodo del comienzo de una lista enlazada"""
        if self.head is None: # Si la lista es vacia retorna el siguiente mensaje
            return "The list is empty"
        
        removed_data = self.head.data # self.head.data accede al valor almacenado en el primer nodo de la lista
        self.head = self.head.next  # De lo contrario, retire el primer nodo (self.head) haciendo que el siguiente nodo (self.head.next) sea el primer nodo (self.head)
        return removed_data
    
    def deleteFromEnd(self) -> str | None:
        if self.head is None: # Si la lista es vacia retorna el siguiente mensaje
            return "The list is empty"
        
        if self.head.next is None: # Si solo hay un nodo en la lista
            self.head = None # La lista queda vacia
            return
        
        temp = self.head # temp es un puntero temporal que apunta al primer nodo de la lista
        # Se recorre la lista hasta llegar al penúltimo nodo. Esto se logra verificando que temp.next.next no sea None. Cuando temp.next.next es None, temp está en el penúltimo nodo
        while temp.next.next:
            temp = temp.next
        temp.next = None # Una vez que temp está en el penúltimo nodo, se elimina el último nodo estableciendo temp.next a None

    # def insertAtIndex(self, data: str, index: int):
    #     if index == 0:
    #         self.insertAtBeginning(data)
    #         return
        
    #     position = 0
    #     curr = self.head
    #     while curr is not None and position < index - 1:
    #         position+=1
    #         curr = curr.next


    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)
    
    # def printList(self):
    #     temp = self.head # Start from the head of the list
    #     while temp:
    #         print(temp.data,end=' ') # Print the data in the current node
    #         temp = temp.next # Move to the next node
    #     print()  # Ensures the output is followed by a new line
    

if __name__ == "__main__" :
    ll = SingleLinkedList()

    # Insertar dato al inicio
    ll.insertAtBeginning('fox') 
    ll.insertAtBeginning('brown') 
    ll.insertAtBeginning('quick')  
    ll.insertAtBeginning('the')

    # Insertar dato al final
    ll.insertAtEnd('jumps') # the -> quick -> brown -> fox -> jumps -> None
    print(ll)
