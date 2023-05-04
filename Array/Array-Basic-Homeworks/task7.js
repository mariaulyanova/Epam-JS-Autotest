// CUSTOM UNSHIFT METHOD
// Create a function myUnshift() that takes an array as an argument.

// The task is to implement myUnshift() function that will work the same way as unshift method.

function createMyUnshift(arr, ...elements) {
  for (i = arr.length - 1; i >= 0; i--) {
    arr[i + elements.length] = arr[i];
  }
  for (let i = 0; i < elements.length; i++) {
    arr[i] = elements[i];
  }
  return [arr, arr.length];
}

const myArr = ['apple', 'peach', 'strawberry'];

console.log(createMyUnshift(myArr, 12, 34, 'hello')); //[ 12, 34, 'hello', 'apple', 'peach', 'strawberry' ]
