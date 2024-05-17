package main

import "fmt"

type Array[T any] struct {
	Elements []T
	Len      int
}

// To create a new instance of Array, you can define a function
func NewArray[T any](elements []T) *Array[T] {
	return &Array[T]{
		Elements: elements,
		Len:      len(elements),
	}
}

func main() {
	intArray := NewArray([]int{1, 2, 3, 4, 5})
	strArray := NewArray([]string{"a", "b", "c"})
	fmt.Printf("intArray: %d\nstrArray: %s\n", intArray.Elements[2], strArray.Elements[1])
}
