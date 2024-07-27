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

    public void insertAtIndex(string data, int index)
    {
        if (index < 0)
        {
            throw new ArgumentOutOfRangeException("index", "Index cannot be negative.");
        }

        if (index == 0)
        {
            insertAtBegin(data);
            return;
        }

        Node newNode = new Node(data);
        Node current = this.head;
        int position = 0;

        while (current != null && position < index - 1)
        {
            current = current.next;
            position++;
        }

        if (current == null)
        {
            throw new ArgumentOutOfRangeException("index", "Index is out of bounds.");
        }

        newNode.next = current.next;
        current.next = newNode;
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
