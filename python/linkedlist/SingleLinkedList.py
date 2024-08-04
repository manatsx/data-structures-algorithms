# Clase para representar cada nodo de la lista enlazada
# Un nodo es un elemento de la lista enlazada que almacena datos y una referencia al siguiente nodo de la secuencia
class Node:
    def __init__(self, data: str) -> None:
        self.data = data # contienen el valor que se almacenará en el nodo.
        self.next = None # contiene una referencia al siguiente nodo de la lista.

# Clase que representa mi LinkedList (Lista enlazada)
# Esto encapsulará todas las operaciones para administrar los nodos, como la inserción y la eliminación
class LinkedList:
    def __init__(self) -> None:
        self.head = None

    # Método para agregar un nodo al principio de la lista enlazada
    def insertAtBeginning(self, new_data):
        new_node = Node(new_data)  # Crea un nuevo nodo
        new_node.next = self.head  # El siguiente nodo del nuevo nodo (new_node.next) será la cabeza actual (self.head)
        self.head = new_node  # La cabeza de la lista (self.head) ahora es el nuevo nodo (new_node)

    def insertAtEnd(self, new_data):
        new_node = Node(new_data)  # Crea un nuevo nodo con el dato recibido
        if self.head is None:  # Si la lista está vacía (es decir, no existe el primer nodo de la lista) 
            self.head = new_node # Entonces el nuevo nodo se convierte en el primer nodo (head)
            return
        
        last = self.head
        while last.next: # Recorremos la lista, el bucle continua mientras last.next no sea None
            last = last.next # Se actualiza last para que apunte al siguiente nodo en la lista (last = last.next)
        last.next = new_node # El siguiente nodo del último nodo ahora es el nuevo nodo


    def insertAtIndex(self, data: str, index: int):
        if index == 0:
            self.insertAtBeginning(data)
            return
        
        position = 0
        curr = self.head
        while curr is not None and position < index - 1:
            position+=1
            curr = curr.next


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
    ll = LinkedList()
    # ll.insertAtBeginning("Buenos Aires")
    # ll.insertAtBeginning("Quindy")
    # ll.insertAtBeginning("Berlin")
    ll.insertAtBeginning('fox') 
    ll.insertAtBeginning('brown') 
    ll.insertAtBeginning('quick')  
    ll.insertAtBeginning('the')

    ll.insertAtEnd('jumps') # the -> quick -> brown -> fox -> jumps -> None
    print(ll)
    # ll.printList()