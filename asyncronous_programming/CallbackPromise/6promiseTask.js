//   Task 2.6
// Create an array of 4 resolving promises.Process all promises in parallel and log the array
// with resolved values to the console.

Promise.all([
  new Promise(resolve => resolve(`resolve: ` + 1)),
  new Promise(resolve => resolve(`resolve: ` + 2)),
  new Promise(resolve => resolve(`resolve: ` + 3)),
  new Promise(resolve => resolve(`resolve: ` + 4)),
]).then((result) => {
  console.log(result);
});

// // Create an array of 4 promises - 2 resolving, 2 rejecting.Process all
// // promises in parallel and log the first rejected reason to the console.

Promise.all([
  new Promise((resolve, reject) => resolve(`resolve: ` + 1)),
  new Promise((resolve, reject) => reject(new Error(`reject: ` + 2))),
  new Promise((resolve, reject) => resolve(`resolve: ` + 3)),
  new Promise((resolve, reject) => reject(new Error(`reject: ` + 4))),
])
  .catch((error) => {
    console.log(`First rejected reason: ` + error.message);
  });

// Create an array of 4 promises - 2 resolving, 2 rejecting.Process all
// promises in parallel and log the array with all resolved values and rejected reasons to the console.

Promise.allSettled([
  new Promise((resolve, reject) => resolve(`resolve: ` + 1)),
  new Promise((resolve, reject) => reject(`reject: ` + 2)),
  new Promise((resolve, reject) => resolve(`resolve: ` + 3)),
  new Promise((resolve, reject) => reject(`reject: ` + 4)),
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
