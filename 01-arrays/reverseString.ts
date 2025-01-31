const reverseString = (str: string) => {
  const backwards = [];
  const lastItem = str.length - 1; // ultimo elemento del array
  for (let index = lastItem; index >= 0; index--) {
    // index >= 0 -> es mayor o igual al primer elemento
    backwards.push(str[index]);
  }
  return backwards.join("");
};

const reverseString2 = (str: string) => {
  let backwards = "";
  const lastItem = str.length - 1; // ultimo elemento del array
  for (let index = lastItem; index >= 0; index--) {
    // index >= 0 -> es mayor o igual al primer elemento
    backwards += str[index];
  }
  return backwards;
};

function reverseString3(str: string) {
  return str.split("").reverse().join("");
}

const reverse = (str: string) => [...str].reverse().join("");

console.log(reverseString("Elon Musk"));
console.log(reverseString2("Mark Zuckerberg"));
console.log(reverseString3("GeeksforGeeks"));
console.log(reverse("Reverse a String in JavaScript"));
