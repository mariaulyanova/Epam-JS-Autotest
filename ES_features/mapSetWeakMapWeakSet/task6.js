// Create a function that takes a string as input and returns a Set 
// containing all unique characters in the string.

function returnUniqueSymbols(str) {
  return new Set(str);
}

const str1 = 'Hello, Panama';

console.log(returnUniqueSymbols(str1)); // Set(10) { 'H', 'e', 'l', 'o', ',', ' ', 'P', 'a', 'n', 'm' }
