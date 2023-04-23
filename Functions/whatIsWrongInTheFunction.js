// You should find a bug and fix it in the function that interferes works.

// const foo = function (a, b) {
//    console.log(a + b); 
// }
// console.log(foo(1,3));
// first output is -> 4,
// second output is -> undefined
// ##Notes* Why do we get this result ? Pleas fix it


//We get this result, because the function foo does not return any value explicitly, 
//so when we call console.log(foo(1,3)), 
//it prints the result of calling foo(1,3), which is undefined.

const foo = function (a, b) {
   console.log(a + b); 
   return a + b;
}
console.log(foo(1,3));
