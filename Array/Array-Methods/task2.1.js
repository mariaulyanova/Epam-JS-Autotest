// ADD IN ARRAY NEW ITEM
// Create a function addItem that takes 2 arguments: an array with 
// string elements and a string. The function should check if the first argument 
// (the array) already contains the second argument, if yes, return the array as is, 
// otherwise return a new array with the elements of the first array and the second 
// argument added to it.

// Example
// [“banana", "apple", “orange”]

// addItem(array, ”mango") ➞ ["banana", "apple", “orange”, “mango”]

function addItem(arr, str) {
  if (arr.includes(str)) {
    return arr;
  } else {
    arr.push(str);
    return arr;
  }
}

const myArr = ['banana', 'apple', 'orange'];

console.log(addItem(myArr, 'banana')); //[ 'banana', 'apple', 'orange' ]
console.log(addItem(myArr, 'mango')); //[ 'banana', 'apple', 'orange', 'mango' ]
