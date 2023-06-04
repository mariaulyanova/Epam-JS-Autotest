// Declare an async function f2.
//  It should return the string 'Promise data' using Promise.resolve() method.
// Call the f2 function, process the returned promise and display the result in the console.

async function f2() {
  return Promise.resolve(`Promise data`);
}

f2().then(result => console.log(result));
