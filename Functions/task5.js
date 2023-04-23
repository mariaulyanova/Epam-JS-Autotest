// We have the following arrays

// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow “]; 
// o = [“th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way.

// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red." ##Notes* Use ordinal numbers to tell their position.



const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

function choiceColor(color, place) {
  for (let i = 0; i < color.length; i++) {
    if (i <= 3) {
      console.log(`${i + 1}${place[0]} choice is ${color[i]}`);
    }  else {
      console.log(`${i + 1}${place[i + 1]} choice is ${color[i]}`);
    }
  }
}

choiceColor(color, o);
