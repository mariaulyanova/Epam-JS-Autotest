// You have to write the code depending on the requirement

// Requirements:

// Define an object with a method that uses the this keyword.
// Use the bind() method to create a new function with the object as the value of this.
// Invoke the new function to execute the method with the object as the value of this.

const fruits = {
  fruit: "apple",
  amount: 6,
  color: "red",
  purchases() {
    console.log(`I want ${this.amount} ${this.color} ${this.fruit}`);
  }
}; 

const myFruits = fruits.purchases.bind(fruits);

myFruits(); //I want 6 red apple
