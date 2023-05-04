// LENGTH OF A NESTED ARRAY
// For example, the array below contains 2 elements: [1, [2, 3]]

// 2 elements, number 1 and array [2, 3]

// Suppose we instead want to know the total number of all items in given array. In the above 
// case,[1, [2, 3]] contains 3 items overall: 1, 2 and 3.

// Write a function that returns the total number of all items in a nested array.

// Example
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// Notes*
// An empty array should return 0.

function getLength(arr) {
  return arr.flat(Infinity).length;
}

console.log(getLength([1, [2, 3]])); //3
console.log(getLength([1, [2, [3, 4]]])); //4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); //6
console.log(getLength([[]])); //0
