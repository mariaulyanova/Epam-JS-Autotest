// FLATTENING AN ARRAY
// Write a function to flatten an array of subarrays into one array (without using array.flat() method). 
// In other words, transform this [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Example
// flatten([[1, 2], [3, 4]]) ➞ [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]]) ➞ ["a", "b", "c", “d”]

function flattenArray(arr) {
  const flatArr = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArr.push(...flattenArray(element));
    } else {
      flatArr.push(element);
    }
  });
  return flatArr;
}

console.log(flattenArray([[1, 2], [3, 4]])); //[ 1, 2, 3, 4 ]
console.log(flattenArray([["a", "b"], ["c", "d"]])); //[ 'a', 'b', 'c', 'd' ]
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])); //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]