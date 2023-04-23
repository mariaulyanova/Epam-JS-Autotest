// You have to write the code depending on the requirement

// Requirements:
// The function should be named addNumbers.
// The function should take three parameters: num1 (a number), num2 (a number), andcallback (a function)
// The function should count sum of num1 and num2
// The function should call the callback function with the sum as its argument.
// The callback function should log the sum to the console.

function addNumbers(num1, num2, andcallback) {
  const sum = num1 + num2;
  andcallback(sum);
}

const callback = sum => console.log(sum);

addNumbers(5, 33, callback); //38
