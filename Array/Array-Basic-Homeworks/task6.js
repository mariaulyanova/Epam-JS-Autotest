// CUSTOM POP METHOD
// Create a function myPop() that takes an array as an argument.

// The task is to implement myPop() function that will work the same way as pop method.

function createMyPop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  const deletedItem = arr[arr.length - 1];
  arr.length--;
  return [arr, arr.length];  
}

const myArr = [1, 3, 5, 7, 'hello'];
console.log(createMyPop(myArr)); //[ 1, 3, 5, 7 ]
