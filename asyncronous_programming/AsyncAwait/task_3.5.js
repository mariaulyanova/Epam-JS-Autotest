// Declare an async function f5.
//  It should call the function makeRequest from previous task 2 times with different parameters.
//  It should display 'Before makeRequest' message in the console before each call of the makeRequest.
//  It should display 'After makeRequest' message in the console after each call of the makeRequest.
//  It should return an array with return values of makeRequest calls.
// Call the f5 function, process the returned promise and display the result in the console.

function makeRequest(url) {
  console.log(`makeRequest is called`);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 2000)
  });
}

async function f5() {
  const urls = [`https://anyURL.com`, `https://anyOTHERurl.am`];
  const results = [];

  for (const url of urls) {
    console.log(`Before makeRequest`);
    const result = await makeRequest(url);
    results.push(result);
    console.log(`After makeRequest`);
  }

  return results;
}

f5().then((result) => console.log(result));
