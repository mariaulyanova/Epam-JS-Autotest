// Write a function that inverts the keys and values of an object.

// Example:
// invert({ "z": "q", "w": "f" }) ➞ { "q": "z", "f": "w" }
// invert({ "a": 1, "b": 2, "c": 3 }) ➞ { 1: "a", 2: "b", 3: "c" }
// invert({ "zebra": "koala", "horse": "camel" }) ➞ { "koala": "zebra", "camel": "horse" }

function invert(obj) {
  const invertedObj = {};
  for (const key in obj) {
    invertedObj[obj[key]] = key;
  }
  return console.log(invertedObj);
}

invert({ "z": "q", "w": "f" }); //{ q: 'z', f: 'w' }
invert({ "a": 1, "b": 2, "c": 3 }); //{ '1': 'a', '2': 'b', '3': 'c' }
invert({ "zebra": "koala", "horse": "camel" }); //{ koala: 'zebra', camel: 'horse' }
