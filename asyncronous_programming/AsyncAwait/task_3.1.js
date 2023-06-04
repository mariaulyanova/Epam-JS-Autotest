// Declare an async function f1.
//  It should take two parameters a and b.
//  It should return the sum of a and b.
// Call the f1 function, process the returned promise and display the result in the console.

async function f1(a, b) {
  return a + b;
};

f1(2, 3).then((result) => console.log(result));
