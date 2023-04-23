// Write a JavaScript function that returns a passed string with letters in alphabetical order.

// Example string: ➞ 'webmaster'
// Expected Output: ➞ ‘abeemrstw'

function returnAlphabetOrder(str) {
  return str.split('').sort().join('');
}

console.log(returnAlphabetOrder("webmaster")); //abeemrstw
console.log(returnAlphabetOrder("plane")); //aelnp
