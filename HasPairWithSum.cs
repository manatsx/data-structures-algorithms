using System;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        string[] array1 = {1, 5, 4, 49}


        Console.WriteLine(HasPairWithSum(array1, 5));
    }

    public static bool HasPairWithSum(int[] arr, int sum) {
        HashSet<int> mySet = new HashSet<int>();
        for (int i = 0; i < arr.Length; i++) {
            if (mySet.Contains(arr[i])) {
                return true;
            }
            mySet.Add(sum - arr[i]);
        }
        return false;
    }
}
