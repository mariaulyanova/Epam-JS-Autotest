// You have to write the code depending on the requirement.

// Requirements:
// Have the function StringChallenge(str) read str which will contain two strings separated by a space.
// The first string will consist of the following sets of characters: +, *, and (N) which is optional.
// The plus (+) character represents a single alphabetic character, the asterisk ( * represents a sequence of the same 
// character of length 3 unless it is followed by {N} which represents how many characters should appear in the sequence where N will be at least 1.
// Your goal is to determine if the second string exactly matches or not the pattern of the first string in the input.
// FOR EXAMPLE

// If str is “+**(5} gheeeee” then the second string in this case matches the pattern, so your program should return the string true.

// If str is “+**(5} gheeee” then the second string does not match the pattern, your program should return the string false.


function StringChallenge(str) {
  let [str1, str2] = str.split(' ');
  const regex = /^\+|\*|\(N\)$/;
  
  
}

console.log(StringChallenge()); 
console.log(StringChallenge()); 