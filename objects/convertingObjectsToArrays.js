// Write a function that takes an object as an argument and converts it into an array, 
// where each element represents a key-value pair in the form of an array.

// Example:
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []
// Notes*
// Return an empty array if the object is empty.

function convertToArray(obj) {
  const arr = [];
  for (const key in obj) {
    arr.push([key, obj[key]]);
    }
    return console.log(arr);
  }

convertToArray({ a: 1, b: 2 }); //[ [ 'a', 1 ], [ 'b', 2 ] ]
convertToArray({ shrimp: 15, tots: 12 }); //[ [ 'shrimp', 15 ], [ 'tots', 12 ] ]
convertToArray({}); //[]


function convertToArray2(obj) {
  return console.log(Object.entries(obj));
}

convertToArray({ a: 1, b: 2 }); //[ [ 'a', 1 ], [ 'b', 2 ] ]
convertToArray2({ shrimp: 15, tots: 12 }); //[ [ 'shrimp', 15 ], [ 'tots', 12 ] ]
convertToArray2({}); //[]
