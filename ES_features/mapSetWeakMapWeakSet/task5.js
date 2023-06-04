// Implement a function that takes an array of numbers and returns a new
//   array containing only unique values using the Set data structure.

function returnUniquqValues(arr) {
  return Array.from(new Set(arr));
}

const numbers = [1, 3, 4, 5, 7, 7, 1, 3, 5, 7];

console.log(returnUniquqValues(numbers)); // [ 1, 3, 4, 5, 7 ]
