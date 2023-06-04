// Class / Constructor
// Implement class Person with:

// 1. properties firstName and lastName
// 2. constructor that pass firstName and lastName to the object
// 3. method getFullName which returns firstName + lastName

class Person {
  constructor(firstrName, lastName) {
    this.firstrName = firstrName;
    this.lastName = lastName;
  }

  getFullName() {
    return `Full name is ${this.firstrName} ${this.lastName}`;
  }
}

const person = new Person('Maria', 'Ulyanova');
console.log(person.getFullName()); //Full name is Maria Ulyanova

//************************************* */
// Class / Extends / Inheritance
// Implement class Student that extends Person with:

// 1. property grade
// 2. constructor that pass grade to the object
// 3. method getGrade that returns student's full name and grade

class Student extends Person {
  constructor(firstrName, lastName, grade) {
    super(firstrName, lastName);
    this.grade = grade;
  }

  getGrade() {
    return `Student ${this.getFullName()} has ${this.grade} grade`;
  }
}

const student = new Student('Alex', 'Goncharenko', 100);
console.log(student.getFullName()); // Full name is Alex Goncharenko
console.log(student.getGrade()); // Student Fullname is Alex Goncharenko has 100 grade
