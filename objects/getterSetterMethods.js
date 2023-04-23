// Description:

// Create an object called person that represents a person with properties like name, age, and gender. 
// Configure getter and setter methods for each property within the object itself, The name property should be a string, 
// the age property should be an integer, and the gender property should be limited to male, female, or other.

// Tasks to be Completed:

// Create an object called "person" with the following properties: "name", "age", and "gender".
// Configure a getter method for each property to retrieve their values from the object.
// Configure a setter method for each property to set their values within the object and perform data validation.
// For the "name" property, ensure that only string values are accepted.
// For the "age" property, ensure that only positive integer values are accepted.
// For the "gender" property, ensure that only "male", "female", or "other" values are accepted.
// Test the getter and setter methods by setting and retrieving values for each property in the "person" object.


const person = {
  _name: "",
  _age: 0,
  _gender: "",

  get personName() {
    return this._name;
  },
  set personName(value) {
    if (typeof value !== "string") {
      console.log("Name must be a string!");
      return;
    } else {
      this._name = value;
    }
  },
  get personAge() {
    return this._age;
  },
  set personAge(value) {
    if (typeof value !== "number" && value <= 0) {
      console.log("Age must be a positive integer!");
      return;
    } else {
      this._age = value;
    }
  },
  get personGender() {
    return this._gender;
  },
  set personGender(value) {
    if (value === "male" || value === "female" || value === "other") {
      this._gender = value
    } else {
      return console.log('Gender must be "male", "female", or "other"!');
    }
  }
};

// // Test the getter and setter methods
person.personName = "John Wick";
console.log(person.personName); //John Wick

person.personName = 45;
console.log(person.personName); //Name must be a string!

person.personAge = 30;
console.log(person.personAge); //30

person.personAge = "-1";
console.log(person.personAge); //Age must be a positive integer!

person.personGender = "male";
console.log(person.personGender); //male

person.personGender = "anybody";
console.log(person.personGender); //Gender must be "male", "female", or "other"!
