// You have to write the code depending on the requirement.

// Requirements:
// Define a function called applyCallbackToArray that takes two parameters: an array of numbers and a callback function.
// Inside the applyCallbackToArray function, create an empty array called result.
// Loop through the input array using a for loop.
// For each element in the input array apply the callback function and push the result into the result array.
// Callback function should take a number as parameter and return it multiplied by 2.
// After the loop is complete, return the result array.

function applyCallbackToArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const resultValue = callback(arr[i]);
    result.push(resultValue);
  }
  return result;
}

const callback = number => number * 2;

console.log(applyCallbackToArray([1, 2, 4, 6], callback)); //[ 2, 4, 8, 12 ]
