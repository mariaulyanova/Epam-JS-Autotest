// Write a function that takes an object as an argument and returns an array containing 2 arrays: 
// one filled with the keys of given object, the other with values of given object.

// Example:
// 1.objectToArray({ A: 1, B: 2, C: 3, D: 4,}) ➞ [["A", “B”, “C”, “D”], [1, 2, 3, 4]];
// 2.objectToArray({ likes: 2, dislikes: 3, followers: 10}) ➞ [["likes", "dislikes", “followers”], [2, 3, 10]];

function objectToArray(obj) {
  const objKey = [];
  const objValue = [];
  let i = 0;

  for (let key in obj) {
    objKey[i] = key;
    objValue[i] = obj[key];
    i++;
  }
  return console.log([objKey, objValue]);
}

objectToArray({ A: 1, B: 2, C: 3, D: 4,}); //[ [ 'A', 'B', 'C', 'D' ], [ 1, 2, 3, 4 ] ]
objectToArray({ likes: 2, dislikes: 3, followers: 10}); //[ [ 'likes', 'dislikes', 'followers' ], [ 2, 3, 10 ] ]
