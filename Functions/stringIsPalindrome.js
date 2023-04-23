// Write a function that returns a boolean value based on whether the input string is palindrome or not.

// console.log(findPalindrome("bannana")) ➞ // false
// console.log(findPalindrome("racecar")) ➞ // true
// console.log(findPalindrome("madam")) ➞ // true

function findPalindrome(str) {
  for(let i = 0; i < str.length / 2; i++) {    
    if (str[i] !== str[str.length - 1 -i]) {
      return false;
    }
  }
  return true;
}

console.log(findPalindrome("bannana")); //false
console.log(findPalindrome("racecar")); //true
console.log(findPalindrome("madam")); //true
