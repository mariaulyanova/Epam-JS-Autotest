// Change the following commonJS code to ES

// //------ a.js ------
// var b = require('b');
// function foo() {
//   b.bar();
// }
// exports.foo = foo;

import { bar } from './b.mjs';

export function foo() {
  bar();
}
