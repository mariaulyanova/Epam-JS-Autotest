//   Task 2.4
// Create a promise which will be resolved after 3 seconds with 'First promise' value.
// Create a promise which will be resolved after 2 seconds with 'Second promise' value.
// Process the promises and display the results in the console.
// Make sure that 2nd promise will be handled only after the 1st one.

const promise = new Promise(resolve => {
  setTimeout(() => resolve(`First promise`), 3000);
});

promise
  .then((result) => {
    console.log(result);

    return new Promise(resolve => {
      setTimeout(() => resolve(`Second promise`), 2000)
    });
  })
  .then((result) => {
    console.log(result);
  });
