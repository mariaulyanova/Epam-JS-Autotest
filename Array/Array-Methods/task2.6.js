// MIRROR ARRAY
// Given an array of integers, transform that array into a mirror array.

// Example
// mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

function transformToMirrorArray(arr) {
  return arr.concat(arr.slice(0, arr.length - 1).reverse());
}

console.log(transformToMirrorArray([1, 2, 3, 4, 5])); //[1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(transformToMirrorArray([3, 5, 6, 7, 8])); //[3, 5, 6, 7, 8, 7, 6, 5, 3]
