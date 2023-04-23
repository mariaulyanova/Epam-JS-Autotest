// Write a JavaScript function to Capitalize the first letter of each word of a string
// console.log(myFunction("hello, i am your friend")); ➞ "Hello, I Am Your Friend"

function capitalizeLetter(str) {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
        let capitalLetter = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result += capitalLetter + " ";
  }
  return result.trim();
}

console.log(capitalizeLetter("hello, i am your friend")); //Hello, I Am Your Friend
