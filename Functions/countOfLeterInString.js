// Write a function that takes two arguments, firs text and second letter. Find count of letter in given text and return count.

// console.log(letterCount("Connect",'c')) ➞ // 2
// console.log(letterCount("Connect",'e')) ➞ // 1
// console.log(letterCount("first person”,'s')) ➞ // 2

function letterCount(text, letter) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter.toUpperCase() || text[i] === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

console.log(letterCount("Connect",'c')); //2
console.log(letterCount("Connect",'e')); //1
console.log(letterCount("first person", 's')); //2
