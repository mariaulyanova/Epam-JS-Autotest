// Write a function to test whether a string ends with a specified string.
// console.log(myFunction("Hello world", "world")); ➞ true

function endsWithWord(str, word) {
  return str.endsWith(word); 
}

console.log(endsWithWord("Hello world", "world")); //true
