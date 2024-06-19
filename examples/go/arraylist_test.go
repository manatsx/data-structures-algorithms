package arrays

import (
	"testing"
)

// Prueba para NewArrayList
// go test -run TestNewArrayList
func TestNewArrayList(t *testing.T) {
	arr := NewArrayList[string]()
	if arr.Size() != 0 || len(arr.elements) != 0 {
		t.Errorf("Error en NewArrayList. Se esperaba size=0 y elements=[], pero se obtuvo size=%d y elements=%v", arr.Size(), arr.elements)
	}
}

// Prueba para Add
func TestAdd(t *testing.T) {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	if arr.Size() != 3 {
		t.Errorf("Error en Add. Se esperaba size=3, pero se obtuvo size=%d", arr.Size())
	}
}

// Prueba para Insert
func TestInsert(t *testing.T) {
	arr := NewArrayList[string]()
	arr.Insert("foo")
	if arr.Size() != 1 || arr.Get(0) != "foo" {
		t.Errorf("Error en Insert. Se esperaba size=1 y el primer elemento='foo', pero se obtuvo size=%d y primer elemento=%s", arr.Size(), arr.Get(0))
	}
}

// Prueba para Get
func TestGet(t *testing.T) {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	if arr.Get(2) != "oxido" {
		t.Errorf("Error en Get. Se esperaba 'oxido', pero se obtuvo %s", arr.Get(2))
	}
}

// Prueba para Clear
func TestClear(t *testing.T) {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	arr.Clear()
	if arr.Size() != 0 || len(arr.elements) != 0 {
		t.Errorf("Error en Clear. Se esperaba size=0 y elements=[], pero se obtuvo size=%d y elements=%v", arr.Size(), arr.elements)
	}
}

// Prueba para Size
func TestSize(t *testing.T) {
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	if arr.Size() != 3 {
		t.Errorf("Error en Size. Se esperaba size=3, pero se obtuvo size=%d", arr.Size())
	}
}
