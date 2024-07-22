// Create a function that reverses a string
// 'Hi My name is Lionel Messi' should be:
// isseM lenoiL si eman yM iH
export function reverse(str: string): string {
  const backwards: string[] = [];
  for (let index = str.length - 1; index >= 0; index--) {
    backwards.push(str[index]);
  }
  return backwards.join("");
}
