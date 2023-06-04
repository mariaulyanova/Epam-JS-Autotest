// 8. Create a program that manages a collection of unique users using a WeakSet. Each user object should have a unique ID.
// Implement functions to add a user, check if a user exists, and remove a user from the collection.

const usersCollection = new WeakSet();

const user1 = {
  name: 'Petro',
  age: 44,
  id: 72663,
};

const user2 = {
  name: 'Vasilii',
  age: 24,
  id: 62738,
};

const user3 = {
  name: 'Georgii',
  age: 35,
  id: 62839,
};

const user4 = {
  name: 'Klavdiya',
  age: 23,
  id: 28734,
}

function addUser(user) {
  usersCollection.add(user);
}

function hasUser(user) {
  return usersCollection.has(user);
}

function removeUser(user) {
  return usersCollection.delete(user);
}

addUser(user1);
console.log(hasUser(user1)); // true

removeUser(user1);
console.log(hasUser(user1)); // false
