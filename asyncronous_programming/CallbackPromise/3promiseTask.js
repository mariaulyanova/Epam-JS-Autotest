//   Task 2.3
// Declare a function promiseFn.

// It should take 1 boolean parameter - toResolve.
// It should return a promise, which should be resolved or rejected based on param value.
// Promise should resolve when param === true with 'Resolved!' string.
// Promise should reject when param !== true with 'Rejected!' string.

function promiseFn(toResolve) {
  return new Promise((resolve, reject) => {
    if (typeof toResolve === 'boolean') {
      if (toResolve === true) {
        resolve(`Resolved!`);
      } else {
        reject(new Error(`Rejected!`));
      }
    } else {
      reject(new Error(`Invalid parameter! Parameter must be a boolean!`));
    }
  })
}

promiseFn(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

promiseFn(false)
  .then(
    result => console.log(result),
    error => console.log(error.message)
  );

promiseFn('param-pa-pa')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
