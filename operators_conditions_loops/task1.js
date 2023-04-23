const givenStr = "the sky is blue";
let wordsOfStr = [];
let i = 0;
let j = 0;
let counter = 0;

// Split the given string into an array of words
do {
  // Start building a word
  currentWord = '';
  // Keep building the word until a space is encountered or the end of the string is reached
  do {
    if (givenStr[i] && givenStr[i] != ' ') {
      currentWord += givenStr[i];
    }
    i++;
  } while (givenStr[i - 1] && givenStr[i - 1] != ' ');

  // Store the completed word in the array of words
  wordsOfStr[j] = currentWord;
  j++;
} while (givenStr[i]);

// Count the number of words in the array
do {
  counter++;
} while (wordsOfStr[counter]);

// Reverse the array of words to create the reversed string
let reverseStr = '';
do {
  reverseStr += wordsOfStr[counter - 1];
  reverseStr += " ";
  counter--;
} while (counter);

console.log(reverseStr);