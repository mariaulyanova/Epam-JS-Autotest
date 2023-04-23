// We have the following arrays

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow “]; 
// position = [“th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way.

// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red." ##Notes* Use ordinal numbers to tell their position.


const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const position = ["th", "st", "nd", "rd"];

function choiceColor(color, position) {
  for (let i = 0; i < color.length; i++) {
    if (i <= 2) {
      console.log(`${i + 1}${position[i + 1]} choice is ${color[i]}`);
    }  else {
      console.log(`${i + 1}${position[0]} choice is ${color[i]}`);
    }
  }
}

choiceColor(color, position);


// 1st choice is Blue
// 2nd choice is Green
// 3rd choice is Red
// 4th choice is Orange
// 5th choice is Violet
// 6th choice is Indigo
// 7th choice is Yellow