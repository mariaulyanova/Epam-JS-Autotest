// Create a new Map and add key - value pairs representing students
// ' names and their corresponding grades. Iterate over the Map to display the names and grades.

const students = new Map([
  ['Gustav', 69],
  ['Kseniya', 85]
]);

students
  .set('Afrodita', 78)
  .set('Alex', 89)
  .set('Robert', 70)
  .set('Karim', 50)
  .set('Avrora', 98);

students.delete('Karim');

students.forEach((val, key) => {
  console.log(key, val);
});

// for (const [key, value] of students) {
//   console.log(key, value);
// };

// for (const entry of students) {
//   console.log(entry);
// };
