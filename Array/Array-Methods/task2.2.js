// SORT AN ARRAY BY STRING LENGTH
// Create a function that takes an array of strings and returns an array, sorted 
// from shortest to longest.

// Example
// sortByLength(["Google", "Apple", “Microsoft"]) ➞ ["Apple", "Google", “Microsoft"]

// sortByLength(["Leonardo", "Michelangelo", "Raphael", “Donatello"]) ➞ ["Raphael","Leonardo", "Donatello", "Michelangelo"]

// sortByLength(["Turing", "Einstein", “Jung"]) ➞ ["Jung", "Turing", “Einstein"]
// Notes*
// All test cases contain arrays with strings of different lengths, so you don't have to deal with multiple strings of the same length.

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['Google', 'Apple', 'Microsoft'])); //[ 'Apple', 'Google', 'Microsoft' ]
console.log(sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello'])); //[ 'Raphael', 'Leonardo', 'Donatello', 'Michelangelo' ]
console.log(sortByLength(['Turing', 'Einstein', 'Jung'])); //[ 'Jung', 'Turing', 'Einstein' ]
