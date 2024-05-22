package arrays

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

func (a *Array) Size() int {
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

func (a *Array) Contains(element string) bool {
	for _, v := range a.data {
		if v == element {
			return true
		}
	}
	return false
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
