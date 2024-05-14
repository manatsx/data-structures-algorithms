import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] array1 = { "a", "b", "c", "x" };
        String[] array2 = { "z", "y", "a" };

        System.out.println(containsCommonItem(array1, array2));
    }

    public static boolean containsCommonItem(String[] arr1, String[] arr2) {
        Set<String> set = new HashSet<>();

        for (String item : arr1) {
            set.add(item);
        }

        for (String item : arr2) {
            if (set.contains(item)) {
                return true;
            }
        }

        return false;
    }
}
