package main

import "fmt"

type ArrrayList[T comparable] struct {
	elements []T
	size     int
}

func NewArrayList[T comparable](values ...T) *ArrrayList[T] {
	return &ArrrayList[T]{
		elements: make([]T, 0),
		size:     0,
	}
}

func (a *ArrrayList[T]) Get(index int) T {
	return a.elements[index]
}

// func (a *ArrrayList[T]) Insert(values T) {
// 	a.elements[a.size] = values
// 	a.size++
// }

func (a *ArrrayList[T]) Add(values ...T) {
	for _, value := range values {
		a.elements = append(a.elements, value)
		a.size++
	}
}

func main() {
	arr := NewArrayList[string]()
	arr.Add("hello")
	arr.Add("paris")
	fmt.Println(arr.Get(1))

	arr1 := NewArrayList[int]()
	arr1.Add(15)
	arr1.Add(3)
	fmt.Println(arr1.Get(1))
}
