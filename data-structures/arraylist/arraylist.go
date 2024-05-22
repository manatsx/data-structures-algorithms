package main

import "fmt"

type ArrayList[T comparable] struct {
	elements []T
	size     int
}

func NewArrayList[T comparable](values ...T) *ArrayList[T] {
	return &ArrayList[T]{
		elements: []T{},
		size:     0,
	}
}

func (a *ArrayList[T]) Get(index int) T {
	return a.elements[index]
}

func (a *ArrayList[T]) Insert(value T) {
	a.elements = append(a.elements, value)
	a.size++
}

func (a *ArrayList[T]) Add(values ...T) {
	for _, value := range values {
		a.elements = append(a.elements, value)
		a.size++
	}
}

func (a *ArrayList[T]) Size() int {
	return a.size
}

func main() {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	arr.Insert("foo")
	fmt.Println(arr.Get(2))
	fmt.Println(arr.Get(3))
	fmt.Printf("Total elements arr string: %d\n", arr.Size())

	arr1 := NewArrayList[int]()
	arr1.Add(15, 3)
	arr1.Insert(23)

	fmt.Println(arr1.Get(2))
	fmt.Printf("Total elements arr int: %d\n", arr1.Size())
}
