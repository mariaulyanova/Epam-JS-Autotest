const words = ["Algorism", "Password", "PasSword", "Unforgiveable", "Moose"];

// Loop through each word
for (let i = 0; i < words.length; i++) {
  let isRepeated = false;

  // Loop through each character in the word
  for (let j = 0; j < words[i].length; j++) {
     
    if (words[i].slice(j + 1).toLowerCase().indexOf(words[i][j].toLowerCase()) === -1) {
        // If the character doesn't appear again, continue to the next character
    } else {
      // If the character appears again, the word is not an isogram
      console.log("The word isn’t isogram");
      isRepeated = true;
    }
    // If the word is not an isogram, break out of the character loop
    if (isRepeated) {
      break;
    }
  }
 // If the word is an isogram, print a message
  if (!isRepeated) {
    console.log("The word is Isogram");
  }
};
