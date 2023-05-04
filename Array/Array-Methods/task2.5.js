// FIND THE SMALLEST AND BIGGEST NUMBERS
// Create a function that takes an array of numbers and returns both the minimum and maximum numbers.

// Example
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// Notes*
// All test arrays will have at least one element and are valid.

function returnMinMax(arr) {
  arr.sort((a, b) => a - b);
  return [arr[0], arr.at(-1)];
}

console.log(returnMinMax([1, 2, 3, 4, 5])); //[ 1, 5 ]
console.log(returnMinMax([2334454, 5])); //[ 5, 2334454 ]
console.log(returnMinMax([1])); //[ 1, 1 ]
