// What will be the output of the code below?

// const addOne = (a) => a + 1;
// const multiplyTwo = (b) => b * 2;
// const addOneMultTwo = (c) => multiplyTwo(addOne(c))

// console.log(addOneMultTwo(5)) ➞ ?

const addOne = (a) => a + 1;
const multiplyTwo = (b) => b * 2;
const addOneMultTwo = (c) => multiplyTwo(addOne(c))

console.log(addOneMultTwo(5)) //12

// addOne(c) = 5 + 1 = 6;
// multiplyTwo(addOne(c)) = 2 * 6 === 12;