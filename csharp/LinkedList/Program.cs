class Program
{
    static void Main(string[] args)
    {
        LinkedList ll = new LinkedList();
        ll.insertAtBegin("Argentina");
        ll.insertAtBegin("Brasil");
        ll.insertAtBegin("Uruguay");

        Console.WriteLine(ll);
    }
}