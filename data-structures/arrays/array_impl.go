package main

import "fmt"

type Array struct {
	data   map[int]string
	length int
}

// Crea una nueva instancia de un array
func NewArray() *Array {
	return &Array{
		data:   make(map[int]string),
		length: 0,
	}
}

func (a *Array) Len() int {
	l := 0
	for range a.data {
		l++
	}
	return l
}

func (a *Array) Get(item int) string {
	return a.data[item]
}

func (a *Array) Insert(item string) {
	a.data[a.length] = item
	a.length++
}

func (a *Array) GetAll() []string {
	// value es un slice donde el primer elemento es un array de string,
	// el cero indica el valor en que iniciamos el slice,
	// y el len sera el tamaño del slice en base a los datos guardados
	value := make([]string, 0, len(a.data))
	for _, v := range a.data {
		value = append(value, v)
	}
	return value
}

func main() {

	arr := NewArray()
	arr.Insert("Lisboa")
	arr.Insert("Buenos Aires")
	arr.Insert("New Orleans")
	fmt.Printf("arr element: %s\narr len: %d\n", arr.Get(0), arr.Len())

	fmt.Println(arr.GetAll())

}
