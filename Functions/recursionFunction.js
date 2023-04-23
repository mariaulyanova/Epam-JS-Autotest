// You have to write the code depending on the requirement.

// Requirements:
// The function should take a single argument, a positive integer n, 
// which represents the number to calculate the factorial using recursion.

// factorial(4) should return 24
// factorial(1) should return 1
// factorial(0) should return 1

function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    return "Error: Input must be a positive integer!";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); // 24
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1
console.log(factorial(-2)); //Error: Input must be a positive integer!
console.log(factorial("d"));



