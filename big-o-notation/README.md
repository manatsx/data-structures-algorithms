# Big O notation

[What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations](https://www.quora.com/What-is-the-difference-between-big-oh-big-omega-and-big-theta-notations)

## O(1) - Tiempo constante (Constant time)

```go
func sayHi(name string) string {
	return fmt.Sprintf("Hello %s", name)
}
```

## O(n) - Tiempo lineal (Linear time)

```go
func sum(num int) int {
	s := 0
	for i := 0; i < n; i++ {
		s += i
	}
	return s
}
```
