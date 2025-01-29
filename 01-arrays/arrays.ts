const strings = ["Bogota", "Lima", "Asunción", "Buenos Aires"];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push("San Francisco");

//pop
strings.pop();
strings.pop();

//unshift
strings.unshift("Luque");

//splice
strings.splice(2, 0, "alien");

console.log(strings);
