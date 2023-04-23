const words = ["legolas", "Gandalf", "Balrog", "Isildur"];

// Iterate over each word in the array.
for (let i = 0; i < words.length; i++) {
  let isRepeated = false;

   // Iterate over each character in the current word.
  for (let j = 0; j < words[i].length; j++) {
    // Compare the current character to all subsequent characters in the word.
    for (let k = j + 1; k < words[i].length; k++) {
      if (words[i][j] === words[i][k]) {
        console.log(words[i][j]);
        isRepeated = true;
        break;
      };
    };
    
    // If a repeated character has been found, break out of the loop.
    if (isRepeated) {
      break;
    };
  };
  
  // If no repeated characters have been found, print -1.
  if (!isRepeated) {
    console.log(-1);
  };
};

