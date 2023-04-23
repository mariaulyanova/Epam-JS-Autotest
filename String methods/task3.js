// Write a function that receives the time in 12-hour AM/PM format and returns a string 
// representation of the time in military (24-hour) format.
// (“07:05:45PM”) ➞ “19:05:45”
// (“12:40:22AM”) ➞ “00:40:22”
// (“12:45:54PM”) ➞ “12:45:54”

function returnMilitaryTimeFormat(time) {
  const hour = +time.substr(0, 2);
  const minutes = time.substr(3, 2);
  const seconds = time.substr(6, 2);
  const pmam = time.substr(8, 2);
  return `${(hour % 12) + (pmam === 'PM' ? 12 : 0)}:${minutes}:${seconds}`;
}

console.log(returnMilitaryTimeFormat('07:05:45PM')); //19:05:45
console.log(returnMilitaryTimeFormat("12:40:22AM")); //12:40:22
console.log(returnMilitaryTimeFormat("12:45:54PM")); //24:45:54
