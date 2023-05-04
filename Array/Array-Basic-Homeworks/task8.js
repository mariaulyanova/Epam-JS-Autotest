// CUSTOM SHIFT METHOD
// Create a function myShift() that takes an array as an argument.

// The task is to implement myShift() function that will work the same way as shift method.

function createMyShift(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const deletedItem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return [arr, arr.length];  
}

const myArr = ['hello', 1, 3, 5, 7];
console.log(createMyShift(myArr)); // [ 1, 3, 5, 7 ]
