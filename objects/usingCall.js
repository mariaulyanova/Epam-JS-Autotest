// You have to write the code depending on the requirement

// Requirements:

// Define a function that uses the this keyword.
// Define an object with a property that will be used as the value of this.
// Invoke the function using the call() method and pass the object as the first argument.

function getFruits() {
  console.log(`My favorite fruit is ${this.fruit}.`);
}

const fruits = {
  fruit: 'peach',
};

getFruits.call(fruits); //My favorite fruit is peach.
