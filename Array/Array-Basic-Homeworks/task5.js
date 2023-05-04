// CUSTOM PUSH METHOD
// Create a function myPush() that takes 2 arguments, the first argument should be an array, 
// the second one an item that can be string or number.
// The task is to implement myPush() method that will work the same way as push method.

function createMyPush(arr, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    arr[arr.length] = elements[i];
  }
  return [arr, arr.length];
}

const myArr = ['apple', 'peach', 'strawberry'];

console.log(createMyPush(myArr, 12, 34, 'hello')); //[ 'apple', 'peach', 'strawberry', 12, 34, 'hello' ]
