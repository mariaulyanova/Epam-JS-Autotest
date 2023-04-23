// You have to write the code depending on the requirement.

// Requirements:
// Have the function StringChallenge(str) read str which will contain two strings separated by a space.
// The first string will consist of the following sets of characters: +, *, and (N) which is optional.
// The plus (+) character represents a single alphabetic character, the asterisk (*) represents a sequence 
// of the same character of length 3 unless it is followed by {N} which represents how many characters should appear 
// in the sequence where N will be at least 1.
// Your goal is to determine if the second string exactly matches or not the pattern of the first string in the input.
// FOR EXAMPLE

// If str is “+++++* abcdemmmmmm” then the second string in this case matches the pattern, so your program should return the string false.

// If str is “**+*{2} mmmrrrkbb” then the second string does not match the pattern, your program should return the string true.

function StringChallenge(str) {
  let [str1, str2] = str.split(' ');
  const symbols = /^[A-Za-z]+/;
  let i = 0;

  while (i < str1.length) {
    if (str1[i] === '+') {
      if (str2[0] === undefined || !symbols.test(str2[0])) {   
        return false;
      }
      str2 = str2.slice(1);  
    }
    else if (str1[i] === '*') {
      let j = 1, k = 0;
      if (str1[i + 1] !== undefined && str1[i + 1] ==='{') {
        k = parseInt(str1[i +2]);
        i = i + 4;
      }
       else {
        k = 3;
        i++;
       }

       while (j <= k) {
        if (str2[0] === undefined || !symbols.test(str2[0])) {  
          return false;
        }
        str2 = str2.slice(1); 
        j++;
       }
       continue;
    }
    i++;
  }
  if (str2.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(StringChallenge("+++++* abcdemmmmmm")); //false
console.log(StringChallenge("**+*{2} mmmrrrkbb")); //true
