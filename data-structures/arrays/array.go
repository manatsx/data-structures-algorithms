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

// Elimina el ultimo elemento del array
func (a *Array) Pop() string {
	// lastItem es el ultimo elemento del array
	lastItem := a.elements[a.size-1]
	// del elemento del array se borra el ultimo elemento
	delete(a.elements, a.size-1)
	// el tamaño de array disminuye
	a.size--

	// se devuelve el ultimo elemento
	return lastItem
}

// Find devuelve el primer elemento que cumple con la condición especificada
func (a *Array) Find(condition func(string) bool) (string, bool) {
	for _, v := range a.elements {
		if condition(v) {
			return v, true
		}
	}
	return "", false
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

// 	// Encuentra el primer elemento que tenga más de 6 caracteres
// 	element, found := arr.Find(func(s string) bool {
// 		return s == "Adis Abeba"
// 	})

// 	if found {
// 		fmt.Printf("Elemento encontrado: %s\n", element)
// 	} else {
// 		fmt.Println("No se encontró ningún elemento que cumpla con la condición.")
// 	}
// }
