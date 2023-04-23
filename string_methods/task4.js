// Write a function that removes the last vowel in each word in a sentence.
// “Those who dare to fail miserably can achieve greatly."➞ "Thos wh dar t fal miserbly cn achiev gretly."

// "Love is a serious mental disease." ➞ "Lov s  serios mentl diseas"

function removeLastVowel(str) {
  const inputStr = str.split(' ');
  
  for (let i = 0; i < inputStr.length; i++) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letters = inputStr[i].split('');
    const lastVowelIndex = letters.reverse().findIndex(letter => vowels.includes(letter.toLowerCase()));
    
    if (lastVowelIndex !== -1) {
      const index = inputStr[i].length - lastVowelIndex - 1;
      inputStr[i] = inputStr[i].slice(0, index) + inputStr[i].slice(index + 1);
    }
  }
  return inputStr.join(' ');
}

console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")); //Thos wh dar t fal miserbly cn achiev gretly.
console.log(removeLastVowel("Love is a serious mental disease.")); //Lov s  serios mentl diseas.
