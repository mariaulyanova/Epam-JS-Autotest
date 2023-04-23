// Create a function that moves all capital letters to the front of a word.
// ("hApPy") ➞ "APhpy"
// ("moveMENT") ➞ "MENTmove"

function moveCapitalLetters(str) {
  const capitalLetters = str.replace(/[a-z]/g, '');
  const otherLetters = str.replace(/[A-Z]/g, '');

  return capitalLetters.concat(otherLetters);
}

console.log(moveCapitalLetters("hApPy")); //APhpy
console.log(moveCapitalLetters("moveMENT")); //MENTmove
