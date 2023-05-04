// RETURN THE FIRST/LAST ELEMENT IN AN ARRAY
// Create a getValue function that takes 2 arguments: an array containing only numbers and an argument 
// "first" or "last", and returns the result depending on the second argument.

// Example
// If you wrote in second argument “first” should return ➞ 1

// Like this getValue([1, 2, 3, 80, 5, 100], “first”) ➞ 1

// If you wrote in second argument “last” should return ➞ 100

// Like this getValue([1, 2, 3, 80, 5, 100], “last”) ➞ 100

function getValue(arr, argument) {
  switch (argument) {
    case "first":
      return arr.shift();
      break;
    case "last":
      return arr.pop();
      break;  
    default:
      return `Please pass only "first" or "last" as the argument`;
  }
}

console.log(getValue([1, 2, 3, 80, 5, 100], "first")); //1
console.log(getValue([1, 2, 3, 80, 5, 100], "last")); //100
console.log(getValue([1, 2, 3, 4, 5, 100], 'third')); //Pleas pass only "first" or "fast" as the argument

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getValue2(arr, argument) {
  if (argument === 'first') {
    return arr[0];
  } else if (argument === 'last') {
    return arr[arr.length -1];
  } else {
    return `Try smth else.`;
  }
}

console.log(getValue2([1, 2, 3, 80, 5, 100], 'first')); //1
console.log(getValue2([1, 2, 3, 80, 5, 100], 'last')); //100
console.log(getValue2([1, 2, 3, 4, 5, 100], 'third')); //Try smth else.
