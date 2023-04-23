const sentence = "is2 Thi1s T4est 3a";
const sortedWords = []; // Initialize an empty array to hold the individual words from the input string
let currentWord = ''; // Initialize an empty string to hold the current word being parsed from the input string

// Loop over each character in the input string
for (let i = 0, j = 0; i < sentence.length; ) {
  currentWord = '';

  // Keep appending characters to the current word until a space is encountered or the end of the string is reached
  while (sentence[i] && sentence[i] != ' ') {
    currentWord += sentence[i];
    i++;
  }
  // Store the current word in the array of words
  sortedWords[j] = currentWord;
  j++;
  i++;
}
// Initialize two empty arrays to hold the words and their corresponding numbers
let arrayOfWords = [];
let arrayOfOrder = [];

// Loop over each word in the array of words
for (let i = 0, k = 0; i < sortedWords.length; i++, k++) {
  arrayOfWords[k] = ''; // Initialize the current word to an empty string

    // Loop over each character in the current word
  for (let j = 0; j < sortedWords[i].length; j++) {
     // If the character is a number, store it in the array of numbers
    if (sortedWords[i][j] >= 0 && sortedWords[i][j] <= 9) {
      arrayOfOrder[k] = sortedWords[i][j];
    } else { // If the character is not a number, append it to the current word
      arrayOfWords[k] += sortedWords[i][j];
    }
  }
}

// Sort the words based on their corresponding numbers using bubble sort
for (let j = 0; arrayOfOrder[j]; j++) {
  for (let i = 1; arrayOfOrder[i]; i++) {
    if (arrayOfOrder[i - 1] > arrayOfOrder[i]) {
         // Swap the numbers
      let currentOrder = arrayOfOrder[i - 1];
      arrayOfOrder[i - 1] = arrayOfOrder[i];
      arrayOfOrder[i] = currentOrder;
        // Swap the words
      let currentValue = arrayOfWords[i - 1];
      arrayOfWords[i - 1] = arrayOfWords[i];
      arrayOfWords[i] = currentValue;
    }
  }
}
// Concatenate the sorted words into a single string with spaces between them
let result = '';
for (let i = 0; arrayOfWords[i]; i++) {
  result += arrayOfWords[i];
  result += ' ';
}

console.log(result); //This is a Test

/////////////
const sentence2 = "4of Fo1r pe6ople g3ood th5e the2";
const sortedWords2 = [];
let currentWord2 = '';

for (let i = 0, j = 0; i < sentence2.length; ) {
    currentWord2 = '';

    while (sentence2[i] && sentence2[i] != ' ') {
        currentWord2 += sentence2[i];
        i++;
    }
    sortedWords2[j] = currentWord2;
    j++;
    i++;
}

let arrayOfWords2 = [];
let arrayOfOrder2 = [];

for (let i = 0, k = 0; i < sortedWords2.length; i++, k++) {
    arrayOfWords2[k] = '';
    for (let j = 0; j < sortedWords2[i].length; j++) {
       if (sortedWords2[i][j] >= 0 && sortedWords2[i][j] <= 9) {
         arrayOfOrder2[k] = sortedWords2[i][j];
       } else {
         arrayOfWords2[k] += sortedWords2[i][j];
       }
     }
   }

   for (let j = 0; arrayOfOrder2[j]; j++) {
     for (let i = 1; arrayOfOrder2[i]; i++) {
       if (arrayOfOrder2[i - 1] > arrayOfOrder2[i]) {
         let currentOrder2 = arrayOfOrder2[i - 1];
         arrayOfOrder2[i - 1] = arrayOfOrder2[i];
         arrayOfOrder2[i] = currentOrder2;
        
         let currentValue2 = arrayOfWords2[i - 1];
         arrayOfWords2[i - 1] = arrayOfWords2[i];
         arrayOfWords2[i] = currentValue2;
       }
     }
   }
   
   let result2 = '';
   for (let i = 0; arrayOfWords2[i]; i++) {
     result2 += arrayOfWords2[i];
     result2 += ' ';
   }
   
   console.log(result2); //For the good of the people