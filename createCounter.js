// Question: Write a JavaScript function createCounter that returns an object with two methods: increment and getValue.
// The increment method should increase a private counter variable by 1, and the getValue method should return the current value of the counter.
// Demonstrate the usage of this function with both function declarations and function expressions.

const createCounter = () => {
  let counter = 0;

  return {
    increment: () => {
      counter += 1;
    },
    getValue: () => {
      return counter;
    },
  };
};

const counterInstance = createCounter();
counterInstance.increment();
counterInstance.increment();
console.log(counterInstance.getValue());
