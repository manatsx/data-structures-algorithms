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

func (a *ArrrayList[T]) Insert(values T) {
	a.elements = append(a.elements, values)
	a.size++
}

func (a *ArrrayList[T]) Add(values ...T) {
	for _, value := range values {
		a.elements = append(a.elements, value)
		a.size++
	}
}

func main() {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	arr.Insert("foo")
	fmt.Println(arr.Get(2))
	fmt.Println(arr.Get(3))

	arr1 := NewArrayList[int]()
	arr1.Add(15, 3)
	arr1.Insert(23)

	fmt.Println(arr1.Get(2))
}
