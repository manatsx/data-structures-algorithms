package arrays

import (
	"testing"
)

// Prueba para NewArray
func TestNewArray(t *testing.T) {
	arr := NewArray()
	if arr.Size() != 0 || len(arr.elements) != 0 {
		t.Errorf("Error en NewArray. Se esperaba size=0 y elements=[], pero se obtuvo size=%d y elements=%v", arr.Size(), arr.elements)
	}
}

// Prueba para Size
func TestSizeArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	if arr.Size() != 1 {
		t.Errorf("Error en Size. Se esperaba size=1, pero se obtuvo size=%d", arr.Size())
	}
}

// Prueba para Get
func TestGetArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	if arr.Get(0) != "hello" {
		t.Errorf("Error en Get. Se esperaba 'hello', pero se obtuvo %s", arr.Get(0))
	}
}

// Prueba para Insert
func TestInsertArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	if arr.Size() != 1 || arr.Get(0) != "hello" {
		t.Errorf("Error en Insert. Se esperaba size=1 y el primer elemento='hello', pero se obtuvo size=%d y primer elemento=%s", arr.Size(), arr.Get(0))
	}
}

// Prueba para GetAll
func TestGetAllArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	arr.Insert("world")
	all := arr.GetAll()
	if len(all) != 2 || all[0] != "hello" || all[1] != "world" {
		t.Errorf("Error en GetAll. Se esperaba ['hello', 'world'], pero se obtuvo %v", all)
	}
}

// Prueba para Contains
func TestContainsArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	if !arr.Contains("hello") {
		t.Errorf("Error en Contains. Se esperaba true para 'hello', pero se obtuvo false")
	}
	if arr.Contains("world") {
		t.Errorf("Error en Contains. Se esperaba false para 'world', pero se obtuvo true")
	}
}

// Prueba para Clear
func TestClearArray(t *testing.T) {
	arr := NewArray()
	arr.Insert("hello")
	arr.Clear()
	if arr.Size() != 0 || len(arr.elements) != 0 {
		t.Errorf("Error en Clear. Se esperaba size=0 y elements=[], pero se obtuvo size=%d y elements=%v", arr.Size(), arr.elements)
	}
}
