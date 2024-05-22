package arrays

type Array struct {
	elements map[int]string
	size     int
}

// Crea una nueva instancia de un array
func NewArray() *Array {
	return &Array{
		elements: make(map[int]string),
		size:     0,
	}
}

func (a *Array) Size() int {
	return a.size
}

func (a *Array) Get(index int) string {
	return a.elements[index]
}

func (a *Array) Insert(item string) {
	a.elements[a.size] = item
	a.size++
}

func (a *Array) GetAll() []string {
	// value es un slice donde el primer elemento es un array de string,
	// el cero indica el valor en que iniciamos el slice,
	// y el len sera el tamaño del slice en base a los datos guardados
	value := make([]string, 0, len(a.elements))
	for _, v := range a.elements {
		value = append(value, v)
	}
	return value
}

func (a *Array) Contains(element string) bool {
	for _, v := range a.elements {
		if v == element {
			return true
		}
	}
	return false
}

func (a *Array) Clear() {
	a.elements = map[int]string{}
	a.size = 0
}

// func main() {

// 	arr := NewArray()
// 	arr.Insert("Lisboa")
// 	arr.Insert("Buenos Aires")
// 	arr.Insert("New Orleans")
// 	arr.Insert("Adis Abeba")

// 	fmt.Printf("City: %s\n", arr.Get(2))
// 	fmt.Printf("Total of elements: %d\n", arr.Size())

// 	fmt.Println(arr.GetAll())
// 	fmt.Println(arr.Contains("Marsella"))
// }
