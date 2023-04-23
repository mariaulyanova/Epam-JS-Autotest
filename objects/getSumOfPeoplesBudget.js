// Create a function that takes as an argument an array of objects and returns the sum of people's budgets.

// Example:
// getBudgets([
// { name: "John", age: 21, budget: 23000 }, { name: "Steve", age: 32, budget: 40000 }, { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700



function getBudgets(obj) {
  let budget = 0;
  for (let i = 0; i < obj.length; i++) {
    budget += obj[i].budget;
  }
  return console.log(budget);
}

getBudgets([{ name: "John", age: 21, budget: 23000 }, 
{ name: "Steve", age: 32, budget: 40000 }, 
{ name: "Martin", age: 16, budget: 2700 }]); //65700
