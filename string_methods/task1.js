// Create a function that takes an array of strings and returns an 
// array with only the strings that have numbers in them. If there 
// are no strings containing numbers, return an empty array.
// (["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

function returnArrWithNum(arr) {
  const result = [];
  for (const str of arr) {
    if (str.match(/\d/)) {
      result.push(str);
    }
  }
  return result;
}

 console.log(returnArrWithNum(["1a", "a", "2b", "b"])); //[ '1a', '2b' ]
 console.log(returnArrWithNum(['a', 'B', 'h'])); //[]
