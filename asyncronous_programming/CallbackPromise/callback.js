// Declare a function processArray.

// It should take an array of numbers and a callback function
//   as parameters(you can implement any logic in callback function).
// It should count the sum of the array items.
// It should call the callback function and pass the sum value to it.
// It should return the result processed by callback.

// your code for processArray implementation

function processArray(arr, callbackFun) {
  const sum = arr.reduce((acc, index) => acc + index, 0);
  return callbackFun(sum);
}

// your code for any function to be passed as a callback
function callbackFun(result) {
  return `Array sum is: ${result}`;
}

const anyArray = [1, 2, 3, 4, 5];
const result = processArray(anyArray, callbackFun);
console.log(result); // 15

// const anyArray2 = ['1', '2', '3'];
// const result2 = processArray(anyArray2, callbackFun);
// console.log(result2);
