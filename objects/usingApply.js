// You have to write the code depending on the requirement

// Requirements:

// Define a function that takes multiple arguments.
// Define an array of values that will be passed to the function as arguments.
// Invoke the function using the apply() method and pass null as the value of this and the array of arguments as the second argument.

function takeArg(arg1, arg2, ...argN) {
  console.log(`Arguments: ${arg1}, ${arg2}, ${argN}`);
}

const value = [1, 3, 5, 7, 8];

takeArg.apply(null, value); //Arguments: 1, 3, 5,7,8
