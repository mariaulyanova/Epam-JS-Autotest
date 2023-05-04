// . SUM OF TWO NUMBERS IN ARRAY EQUAL TO GIVEN NUMBER
// Create a function that takes an array of numbers arr and a number n. Return 
// true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Example
// checkSum([10, 12, 4, 7, 9, 11], 16) ➞ true

// checkSum([4, 5, 6, 7, 8, 3], 13) ➞ true

// checkSum([0, 98, 76, 23], 174) ➞ true

// checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39) ➞ false

function checkSum(arr, n) {
 return arr.some((elem, index) => arr.slice(index + 1).includes(n -  elem));
}

console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); //true
console.log(checkSum([4, 5, 6, 7, 8, 3], 13)); //true
console.log(checkSum([0, 98, 76, 23], 174)); // true
console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false
