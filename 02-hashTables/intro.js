let user = {
  name: "Martin Harris",
  age: 35,
  city: "Lisboa",
  hello: () => {
    return "Hello everyone!";
  },
};

console.log(user.name); // Lookup O(1)
user.spell = "heeey!!"; // Insert O(1);
console.log(user);
console.log(user.hello());
