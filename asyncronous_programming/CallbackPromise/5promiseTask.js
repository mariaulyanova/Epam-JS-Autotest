//   Task 2.5
// Imitate succeeding / failing backend calls using promises.
// First promise should fulfill after 3 second with 'Imitating first call - success' value.
// Second promise should fulfill after 1 second with 'Imitating second call - success' value.
// Third promise should reject after 1 second with 'Imitating third call - fail' reason.
// Handle promises one after another, make sure to handle errors.
// Imitate a cleanup work by displaying 'Cleaning up the environment' in the console.

const promiseImit = new Promise((resolve) => {
  setTimeout(() => resolve(`Imitating first call - success`), 3000)
});

promiseImit
  .then((result) => {
    console.log(result);

    return new Promise((resolve) => {
      setTimeout(() => resolve(`Imitating second call - success`), 1000);
    });
  })
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`Imitating third call - fail`)), 1000);
    });
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log(`Cleaning up the environment`);
  });
