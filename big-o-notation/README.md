## O(1) - Tiempo constante

```go
func sayHi(name string) string {
	return fmt.Sprintf("Hello %s", name)
}
```

## O(n) - Tiempo lineal

```go
func sum(num int) int {
	s := 0
	for i := 0; i < n; i++ {
		s += i
	}
	return s
}
```
