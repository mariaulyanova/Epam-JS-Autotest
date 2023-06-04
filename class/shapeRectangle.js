// Static properties
// Create class Shape with static property count.

// 5. Initialize the property count with 0.
// 6. Increment the value of count by 1 in the constructor.
// 7. Create derived class Rectangle. Add method to calculate area.
// 8. Create a few objects from Shape and Rectangle. Display the number 
//    of created objects in the console.

class Shape {
  static count = 0;

  constructor() {
    Shape.count++;
  }
 }

 class Rectangle extends Shape {
  constructor(width, length) {
    super();
    this.width = width;
    this.length = length;
  }

  get Area() {
    return this.calcArea;
  }

  calcArea() {
    return `Area = ${this.width * this.length}`;
  }
 }

const shape1 = new Shape();
const shape2 = new Shape();
const rectangle1 = new Rectangle(15, 20);
const rectangle2 = new Rectangle(50, 15);

console.log(Shape.count); //4
// console.log(rectangle1.calcArea()); // Area = 300
// console.log(rectangle2.calcArea()); // Area = 750
