// 3.1
// Write a function that returns the reversed number for the given argument number value.

// reverseNum(123) ➞ 321
// reverseNum(3465) ➞ 5643
// reverseNum(1) ➞ 1

// 3.2
// Use the built-in js function (reverse)

function reverseNum(num) {
  let number = 0;
  while (num !== 0) {
    number = (number * 10) + (num % 10);
    num = (num - (num % 10)) / 10;
  }
  return number;
}

console.log(reverseNum(123)); //321
console.log(reverseNum(3465)); //5643
console.log(reverseNum(1)); //1

// Use the built-in js function (reverse)
function reverseNum(n) {
  n += "";
  return n.split("").reverse().join("");
  return number;
}

console.log(reverseNum(123)); //321
console.log(reverseNum(3465)); //5643
console.log(reverseNum(1)); //1
