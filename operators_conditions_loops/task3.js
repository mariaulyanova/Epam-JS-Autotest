const passwords = ["ULTRAstrongP455w0rdthatstoolong", "1234ABCD", "passAword123B!2%##4", "Arewehumanorarewecoders?"];

for (let i = 0; i < passwords.length; i++) {
  const password = passwords[i];
  let changeRequired = 0;
  
  // Check length
  if (password.length < 8) {
    changeRequired = 8 - password.length;
  } else if (password.length > 20) {
    changeRequired = password.length - 20;
  }
  
  // Check for lowercase, uppercase, and digit
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  
  let j = 0;
  do {
  const char = password[j];
  if (!hasLowercase && char >= 'a' && char <= 'z') {
    hasLowercase = true;
  } else if (!hasUppercase && char >= 'A' && char <= 'Z') {
    hasUppercase = true;
  } else if (!hasDigit && char >= '0' && char <= '9') {
    hasDigit = true;
  }
  if (hasLowercase && hasUppercase && hasDigit) {
    break;
  }
  j++;
} while (j < password.length);

if (!hasLowercase || !hasUppercase || !hasDigit) {
  changeRequired = Math.max(changeRequired, 1);
}
  
  // Check for repeating characters
  let repeatCount = 1;
  let prevChar = password[0];
  
  for (let j = 1; j < password.length; j++) {
    const char = password[j];
    if (char === prevChar) {
      repeatCount++;
      if (repeatCount === 3) {
        changeRequired = Math.max(changeRequired, 1);
        break;
      }
    } else {
      repeatCount = 1;
      prevChar = char;
    }
  }
  
  console.log(`"${password}" - requires of ${changeRequired} change(s)`);
}
// "ULTRAstrongP455w0rdthatstoolong" - requires of 11 change(s)
// "1234ABCD" - requires of 1 change(s)
// "passAword123B!2%##4" - requires of 0 change(s)
// "Arewehumanorarewecoders?" - requires of 4 change(s)