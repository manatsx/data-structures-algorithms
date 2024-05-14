using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        string[] array1 = { "a", "b", "c", "x" };
        string[] array2 = { "z", "y", "a" };

        Console.WriteLine(ContainsCommonItem(array1, array2));
    }

    public static bool ContainsCommonItem(string[] arr1, string[] arr2)
    {
        Dictionary<string, bool> map = new Dictionary<string, bool>();

        foreach (string item in arr1)
        {
            if (!map.ContainsKey(item))
            {
                map[item] = true;
            }
        }

        foreach (string item in arr2)
        {
            if (map.ContainsKey(item))
            {
                return true;
            }
        }

        return false;
    }
}
