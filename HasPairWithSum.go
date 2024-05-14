package main

import (
	"fmt"
)

func main() {
	array1 := []int{1, 5, 4, 49}

	fmt.Println(HasPairWithSum(array1, 5))
}

func HasPairWithSum(arr []int, sum int) bool {
	mySet := make(map[int]bool)
	for _, item := range arr {
		if _, ok := mySet[item]; ok {
			return true
		}
		mySet[sum-item] = true
	}
	return false
}
