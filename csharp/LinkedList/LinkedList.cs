class Node
{
    public string data;
    public Node next;

    public Node(string data, Node next = null)
    {
        this.data = data;
        this.next = next;
    }
}

class LinkedList
{
    public Node head;

    public LinkedList(Node head = null)
    {
        this.head = head;
    }

    public void insertAtBegin(string data)
    {
        Node newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    public override string ToString()
    {
        Node current = this.head;
        List<string> nodes = new List<string>();
        while (current != null)
        {
            nodes.Add(current.data);
            current = current.next;
        }
        nodes.Add("Null");
        return string.Join(" -> ", nodes);
    }
}
