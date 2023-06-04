// Declare a function makeRequest.
//  t should take one parameter - url.
//  It should display message 'makeRequest is called' in the console.
//  It should return a promise, which should be resolved after 2s with value of url.
// Declare an async function f4.
//   The function should call the function makeRequest, retrieve its result and display it in the console.
// Call the f4 function, process the returned promise and display the result in the console.

function makeRequest(url) {
  console.log(`makeRequest is called`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 2000)
  });
}

async function f4() {
  const result = await makeRequest('http://anyUrl.com');
  console.log(result);
}

f4();
