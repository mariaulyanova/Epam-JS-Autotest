const mathActions = require('./task3.1.js');

const [sum, sub, ...other] = mathActions(3, 5);

console.log(sum, sub, other);
