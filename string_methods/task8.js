// Write a function to find the most frequent character in a given string.
// ("Madam") ➞ "a"
// ("Hello") ➞ "l"
// ("Development") ➞ "e"

function findFrequentCharacter(str) {
  let freqChar = "";
  let countChar = 0;
  
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let count = str.split(char).length - 1;
    
    if (count > countChar) {
      countChar = count;
      freqChar = char;
    }
  }
  return freqChar;
}  

console.log(findFrequentCharacter("Madam")); //a
console.log(findFrequentCharacter("Hello")); //l
console.log(findFrequentCharacter("Development")); //e
