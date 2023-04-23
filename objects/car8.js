// You have to write the code depending on the requirement

// Requirements:

// The program must create an object that represents a car.

// The car object must have the following properties and methods:
// Properties:

// make (string): the make of the car
// model (string): the model of the car
// year (number): the year the car was made
// color (string): the color of the car
// mileage (number): the number of miles the car has been driven
// Methods:

// drive(distance) method: increases the car's mileage by the specified distance.
// repaint(newColor) method: changes the car's color to the specified newColor.
// The program must use the car object's methods to change the car's mileage and color.

// The program must output the car's updated mileage and color to the console.

const car = {
  make: "Audi",
  model: "Q8",
  year: 2018,
  color: "yellow", 
  mileage: 5000,

  drive: function(distance) {
    this.mileage += distance;
  },
  
  repaint: function(newColor) {
    this.color = newColor;
  }
};

console.log(`Initial mileage: ${car.mileage} and initial color ${car.color}.`); //Initial mileage: 5000 and initial color yellow.

car.drive(350);
car.repaint("Green");

console.log(`Updated mileage: ${car.mileage}, and updated color: ${car.color}.`); //Updated mileage: 5350, and updated color: Green.
