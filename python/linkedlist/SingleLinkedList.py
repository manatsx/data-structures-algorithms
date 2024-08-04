# Clase para representar cada nodo de la lista enlazada:
class Node:
    def __init__(self, data: str) -> None:
        self.data = data # contienen el valor que se almacenará en el nodo.
        self.next = None # contiene una referencia al siguiente nodo de la lista.

# Clase que representa mi LinkedList (Lista enlazada)
class LinkedList:
    def __init__(self) -> None:
        self.head = None

    # Método para agregar un nodo al principio de la lista enlazada
    def insertAtBegin(self, data):
        new_node = Node(data)  # Crear un nuevo nodo
        new_node.next = self.head  # El siguiente nodo del nuevo nodo (new_node.next) será la cabeza actual (self.head)
        self.head = new_node  # La cabeza de la lista (self.head) ahora es el nuevo nodo (new_node)

    def insertAtIndex(self, data: str, index: int):
        if index == 0:
            self.insertAtBegin(data)
            return


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
    print(ll)