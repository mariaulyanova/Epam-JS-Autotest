// //------ b.js ------
// var a = require('a'); // (i)
// function bar() {
//   if (Math.random()) {
//     a.foo(); // (ii)
//   }
// }
// exports.bar = bar;

import { foo } from './a.mjs';

export function bar() {
  if (Math.random()) {
    foo();
  }
}
