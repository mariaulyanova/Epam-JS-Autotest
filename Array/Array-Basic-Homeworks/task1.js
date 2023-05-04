// 1. push, pop, shift, unshift
// Create an empty Array and use methods push pop shift, unShift

// follow the requirements and write step by step:

// add in the array 2 items. It should be number.
// add 3 items to the beginning. It should be string.
// remove one element from the end.
// remove one element from the beginning.
// write a function to return the number of string and number elements in the array

const myArray = [];

myArray.push(12, 65);
myArray.unshift('Magnolia', 'Lilia', 'Hydrangea');
myArray.pop();
myArray.shift();


function returnElementsFromArray(arr) {
  let stringCount = 0;
  let numberCount = 0;
  for (let items of arr) {
    if (typeof items === 'string') {
      stringCount++;
    } else if (typeof items === 'number') {      
      numberCount++;
    }
    }
    return `The number of string = ${stringCount} and number elenents = ${numberCount} in the array.`;
  }

console.log(returnElementsFromArray(myArray));
