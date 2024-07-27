class DataStructures
{
    static void Main(string[] args)
    {
        LinkedList ll = new LinkedList();
        ll.insertAtBegin("Argentina");
        ll.insertAtBegin("Brasil");
        ll.insertAtBegin("Uruguay");
        ll.insertAtIndex("Paraguay", 1);


        Console.WriteLine(ll);
    }
}