// PRIME NUMBER
// Create a function primeNumber() that takes one argument as a number. 
// The function should return a new array, and the array must contain all prime 
// numbers up to the number you specified in the argument

// ###Example primeNumber(19) ➞ [2, 3, 5, 7, 11, 13, 17]

function returnPrimeNumber(num) {
  const newArr = [];
  for (let i = 2; i < num; i++) {
    let isPrime = true;
    for (let j = 2; j <= i/2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(returnPrimeNumber(19)); // Output: [2, 3, 5, 7, 11, 13, 17]
