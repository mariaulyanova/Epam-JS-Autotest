// You have to write the code depending on the requirement

// Requirements:

// Create a Constructor Function called Person that takes three arguments: name, age, and occupation.
// Inside the constructor function, use the this keyword to set the name, age, and occupation properties 
// of the object being created.
// Define a method called sayHello inside the Person constructor function. This method should log 
// a greeting message to the console that includes the name and age properties of the object.
// Create a new Person object called person1 with the values "Alice", 30, and "Engineer" for the name, 
// age and occupation properties, respectively.
// Access the name, age and occupation properties of person1 using dot notation and log them 
// to the console to verify that they have been set correctly.
// Call sayHello method of person1 to log a greeting message to the console that includes the name and age properties of the object.

function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;

  this.sayHello = function() {
    console.log(`Hello, ${this.name} congratulations to you already ${this.age} years old!!!`);
  }
}

const person1 = new Person("Alice", 30, "Engineer");

console.log(person1.name, person1.age, person1.occupation); //Alice 30 Engineer

person1.sayHello(); //Hello, Alice congratulations to you already 30 years old!!!
