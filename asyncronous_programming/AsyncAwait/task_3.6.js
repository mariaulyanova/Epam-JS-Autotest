// Declare a function sendRequest.
//   It should take one parameter - url.
//   It should display the message 'sendRequest is called' in the console.
//   It should return a promise based on the conditions below
//     if url is https://name - resolve promise with { name: 'John' } value after 3s.
//     else if url is https://age - resolve promise with { age: 18 } value after 1s.
//     else - reject promise with 'Unknown URL' reason after 2s.

// Declare an async function f6.
//   It should take one parameter - array.
//   It should call the function sendRequest with each value from the array.
//   It should construct and return the object {name: 'John', age: 18} from sendRequest call responses.
//   It should handle possible errors coming from sendRequest.

// Call the f6 function on the following arrays, process the returned promise and display the result in the console.
//   const arr1 = ['https://name', 'https://age'];
//   const arr2 = ['https://name', 'https://surname', 'https://age'];

function sendRequest(url) {
  console.log(`sendRequest is called`);
  return new Promise((resolve, reject) => {
    if (url === `https://name`) {
      setTimeout(() => resolve({ name: 'John' }), 3000);
    } else if (url === `https://age`) {
      setTimeout(() => resolve({ age: 18 }), 1000);
    } else {
      setTimeout(() => reject(new Error(`Unknown URL`)), 2000);
    }
  });
}

async function f6(array) {
  let result = {};
  for (const url of array) {

    try {
      const response = await sendRequest(url);
      if (response.name) {
        result.name = response.name;
      }
      if (response.age) {
        result.age = response.age;
      }
    } catch (err) {
      console.log(err);
    }
  }

  return result;
}

const arr1 = ['https://name', 'https://age'];
const arr2 = ['https://name', 'https://surname', 'https://age'];

f6(arr1).then((result) => console.log(result));
f6(arr2).then((result) => console.log(result));
