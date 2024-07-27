class Node:
    def __init__(self, data) -> None:
        self.data = data 
        self.next = None

class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def insertAtBegin(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node


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