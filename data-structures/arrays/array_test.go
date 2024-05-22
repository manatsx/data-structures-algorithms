package arrays

import "testing"

func TestArray(t *testing.T) {
	// Test NewArray and Insert
	arr := NewArray()
	arr.Insert("Lisboa")
	arr.Insert("Buenos Aires")
	arr.Insert("New Orleans")
	arr.Insert("Adis Abeba")
	if arr.Size() != 4 {
		t.Errorf("Expected size 4, got %d", arr.Size())
	}

	// Test Get
	if arr.Get(0) != "Lisboa" || arr.Get(1) != "Buenos Aires" || arr.Get(2) != "New Orleans" || arr.Get(3) != "Adis Abeba" {
		t.Errorf("Get method is not working correctly")
	}

	// Test GetAll
	all := arr.GetAll()
	if len(all) != 4 || all[0] != "Lisboa" || all[1] != "Buenos Aires" || all[2] != "New Orleans" || all[3] != "Adis Abeba" {
		t.Errorf("GetAll method is not working correctly")
	}

	// Test Contains
	if !arr.Contains("Lisboa") || !arr.Contains("Buenos Aires") || !arr.Contains("New Orleans") || !arr.Contains("Adis Abeba") {
		t.Errorf("Contains method is not working correctly")
	}
	if arr.Contains("Marsella") {
		t.Errorf("Contains method is returning true for a value that was not inserted")
	}
}
