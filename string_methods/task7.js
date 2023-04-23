// Create a function that takes a number as an argument and returns a string formatted to separate thousands.
// (1000) ➞ "1,000"
// (100000) ➞ "100,000"

function returnSeparateNumber(num) {
  const str = num.toString();
  const len = str.length;
  let arr = str.split('');
  
  if (len > 3) {
    let index = len - 3;
    while (index > 0) {
      arr.splice(index, 0, ',');
      index -= 3;
    }
  }
  
  return arr.join('');
}

console.log(returnSeparateNumber(1000)); // "1,000"
console.log(returnSeparateNumber(100000)); // "100,000"
