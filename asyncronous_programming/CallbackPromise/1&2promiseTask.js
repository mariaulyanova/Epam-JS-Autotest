// Task 2.1
// Create a promise which will be resolved with 'Resolved!' string value.
// Process the promise and display the result in the console.

const promiseResolve = new Promise((resolve) => {
  resolve(`Resolved!`);
});

promiseResolve.then((result) => {
  console.log(result);
});

//   Task 2.2
// Create a promise which will be rejected with 'Rejected!' error message.
// Process the promise and display the result in the console.

const promiseReject = new Promise((resolve, reject) => {
  reject(new Error(`Rejected!`));
});

promiseReject.catch((error) => {
  console.log(error.message);
});
