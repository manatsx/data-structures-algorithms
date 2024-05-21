package main

import "fmt"

type Array[T any] struct {
	Elements []T
	Length   int
}

// Crea una nueva instancia de un array
func NewArray[T any](elements []T) *Array[T] {
	return &Array[T]{
		Elements: elements,
		Length:   0,
	}
}

func (a *Array[T]) Len() int {
	l := 0
	for range a.Elements {
		l++
	}
	return l
}

func (a *Array[T]) Get(item int) T {
	return a.Elements[item]
}

func (a *Array[T]) Append(item T) {
	a.Elements[a.Length] = item
	a.Length++
}

func main() {
	intArray := NewArray([]int{1, 2, 3, 4, 5})
	strArray := NewArray([]string{"a", "b", "c"})
	fmt.Printf("intArray: %d\nstrArray: %s\n", intArray.Elements[2], strArray.Elements[1])
	fmt.Printf("intArray length: %d\nstrArray length: %d\n", intArray.Len(), strArray.Len())

	intArray2 := NewArray([]int{1, 2, 3, 4, 5})
	strArray2 := NewArray([]string{"a", "b", "c"})
	fmt.Printf("intArray: %d\nstrArray: %s\n", intArray2.Get(2), strArray2.Get(1))
	fmt.Printf("intArray length: %d\nstrArray length: %d\n", intArray2.Len(), strArray2.Len())

	arr := NewArray()
	arr.Append("Lisboa")

}
