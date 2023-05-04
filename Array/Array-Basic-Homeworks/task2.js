// Implement an arrMethod() function that takes two parameters - an array and an object. 
// Object should have 2 properties: action ( one of pop/push, shift/unshift ) and element: 
// the element which would be added to the given array if push/unshift actions are called. 
// If pop/shift actions are called, element property can be null. for example: arrMethod(arr, 
// {action: push, element: 'Some element'}) should add 'Some element' to the end of arr.


function doArrMethod(arr, {action, element}) {
  switch (action) {
    case 'push':
      arr.push(element);
      break;
    case 'unshift':
      arr.unshift(element);
      break;
    case 'pop':
      arr.pop();
      break;
    case 'shift':
      arr.shift();
      break;
       default:
        return 'smth wrong';
  }
  return arr;
}

const myArr = [1, 2, 3, 4];

console.log(doArrMethod(myArr, { action: 'push', element: '5' })); // [ 1, 2, 3, 4, '5' ]
console.log(doArrMethod(myArr, { action: 'unshift', element: 88 })); // [ 88, 1, 2, 3, 4, '5' ]
console.log(doArrMethod(myArr, { action: 'pop', element: null})); //[ 88, 1, 2, 3, 4 ]
console.log(doArrMethod(myArr, {action: 'shift', element: null})); //[ 1, 2, 3, 4 ]
console.log(doArrMethod(myArr, {action: 'slice', element: 1})); //smth wrong
