// Write symbol iterator for person object which will return name age countries array 
// elements on each iteration note: log the results inside for of

const person = {
  name: ['John', 'Jane', 'Bob'],
  age: [30, 25, 35],
  countries: ['USA', 'Canada', 'Australia'],
};

function* symbolIterator(obj) {
  const keys = Object.keys(obj);

  for (let key of keys) {
    const array = obj[key];

    for (let element of array) {
      yield element;
    }
  }
}

for (let element of symbolIterator(person)) {
  console.log(element);
}
