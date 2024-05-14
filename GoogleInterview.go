package main

import (
	"fmt"
)

func main() {
	array1 := []string{"a", "b", "c", "x"}
	array2 := []string{"z", "y", "a"}

	fmt.Println(containsCommonItem(array1, array2))
}

func containsCommonItem(arr1 []string, arr2 []string) bool {
	m := make(map[string]bool)

	for _, item := range arr1 {
		if _, ok := m[item]; !ok {
			m[item] = true
		}
	}

	for _, item := range arr2 {
		if _, ok := m[item]; ok {
			return true
		}
	}

	return false
}
