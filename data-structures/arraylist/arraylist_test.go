package main

import "testing"

func TestArrayList(t *testing.T) {
	// Test NewArrayList and Add
	arr := NewArrayList[string]()
	arr.Add("hello", "paris", "oxido")
	if arr.Size() != 3 {
		t.Errorf("Expected size 3, got %d", arr.Size())
	}

	// Test Get
	if arr.Get(0) != "hello" || arr.Get(1) != "paris" || arr.Get(2) != "oxido" {
		t.Errorf("Get method is not working correctly")
	}

	// Test Insert
	arr.Insert("foo")
	if arr.Size() != 4 || arr.Get(3) != "foo" {
		t.Errorf("Insert method is not working correctly")
	}

	// Test with int type
	arr1 := NewArrayList[int]()
	arr1.Add(15, 3)
	arr1.Insert(23)
	if arr1.Size() != 3 || arr1.Get(0) != 15 || arr1.Get(1) != 3 || arr1.Get(2) != 23 {
		t.Errorf("ArrayList is not working correctly with int type")
	}
}
