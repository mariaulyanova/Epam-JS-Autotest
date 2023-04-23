// Write a function that makes the first number as large as possible by swapping 
// out its digits for digits in the second number.
// (523, 76) ➞ 763
// (9132, 5564) ➞ 9655

function makeLargeNumber(num1, num2) {
  const num1Digits = num1.split('');
  const num2Digits = num2.split('');

  for (let i = 0; i < num1Digits.length; i++) {
    let maxDigitIndex = -1;
    for (let j = 0; j < num2Digits.length; j++) {
      if (num2Digits[j] > num1Digits[i]) {
        num1Digits[i] = num2Digits[j];
        maxDigitIndex = j;
      }
    }
    if (maxDigitIndex !== -1) {
      num2Digits[maxDigitIndex] = '-';
    }
  }
  return num1Digits.join('');
}

console.log(makeLargeNumber('523', '76')); // "763"
console.log(makeLargeNumber('9132', '5564')); // "9655"
