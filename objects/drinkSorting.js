// Write a function that takes as an argument an array of objects, where each object is a drink 
// with two properties: name and price, The function should return the given array where the drinks 
// objects are sorted by price in ascending order. Assume that the following array of drink objects needs to be sorted:

// drinks = [
// {name: "lemonade", price: 50}, {name: "lime", price: 10} {name: "Fanta", price:17} {name: “Coca Cola", price:15}
// ]
// Example:
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: “Coca Cola", price:15}, {name: "Fanta", price:17}, {name: "lemonade", price: 50}]
// Notes*
// Return an empty array if the object is empty.

const drinks1 = [
  {name: "lemonade", price: 50}, 
  {name: "lime", price: 10}, 
  {name: "Fanta", price:17},
  {name: "Coca Cola", price: 15}
];

const drinks2 = [{}];

function sortDrinkByPrice(drinks) {
  if (!drinks.length) {
    return console.log([]);
  } 
  for (let i = 0; i < drinks.length - 1; i++) {
    for (let j = 0; j < drinks.length - i - 1; j++) {
      if (drinks[j].price > drinks[j + 1].price) {
        const tempVar = drinks[j];
        drinks[j] = drinks[j + 1];
        drinks[j + 1] = tempVar;
      }
    }
  }
  return console.log(drinks);
}

sortDrinkByPrice(drinks1);
// [
//   { name: 'lime', price: 10 },
//   { name: 'Coca Cola', price: 15 },
//   { name: 'Fanta', price: 17 },
//   { name: 'lemonade', price: 50 }
// ]

sortDrinkByPrice(drinks2); // [ {} ]
