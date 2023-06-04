// Task 4.1
// Why output is 1 and NOT 2?

foo();

var foo;

foo = function() {
    console.log( 2 );
};

function foo() {
    console.log( 1 );
}

// Explanation:
// The output is 1 and not 2 because function declarations are hoisted to the 
// top of their scope, while variable declarations are hoisted but not their assignments.
// Since function declarations are hoisted, the function declaration function foo() { console.log(1); } 
// is moved to the top, overwriting the assignment of the function expression.
// Thus, when foo() is called, the function declaration function foo() { console.log(1); }
// is executed, resulting in the output of 1.

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 4.2
// What would be the output and why?
// How make a = 8 logged in console? Rewrite the code.

function foo() {
    console.log( this.a );
}
const a = 8;
const obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2

// // Explanation:
// The output would be 2 because this.a inside the foo function refers to the a property of the obj object.

// To output a = 8 in the console, we can call foo() in the global context, like this:

function foo() {
  console.log(this.a);
}

const a = 8;
const obj = {
  a: a, // Assign the value of the global variable `a` to the `a` property of `obj`
  foo: foo,
};

obj.foo(); // Output: 8

// By assigning the value of the global variable a to the a property of the obj object,
// this.a inside the foo function will refer to the a property of obj, which is 8. Thus, the output will be 8.

function foo() {
  console.log( this.a );
}
const a = 8;
const obj = {
  a: 2, 
  foo: foo,
};

foo.call({a: a}); // 8

// This will call foo() in the context of a new object { a: 8 },
// which has a set to 8. this.a inside foo() will then refer to the a 
// property of this new object, which is 8, so 8 will be logged to the console.

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 4.3
// How invoke foo() function to log 42 in console. Explain your answer.

function foo() {
    console.log( this.a );
}

const obj2 = {
    a: 42,
    foo: foo
};

const obj1 = {
    a: 2,
    obj2: obj2
};

obj1.obj2.foo(); //42

// By calling obj1.obj2.foo(), the foo function is invoked with 
// this set to obj1.obj2. As a result, this.a inside the foo function refers 
// to the a property of obj1.obj2, which is 42. Therefore, the output will be 42.

obj2.foo.call(obj2); //42 

// By using obj2.foo.call(obj2), we invoke the foo function with this set to obj2, causing it to log 42.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task 4.4
// Why it would throw the error message? How you can get the value 18 in the output? 

function foo() {
    var a = 1;
    var b = 9;

    if (a >= 1) {
        let b = 2;

        while (b < 5) {
            let c = b * 2;
            b++;

        }
    }
    console.log( a + c + b );
}

foo();

// Explanation:
// The code throws an error message because the variable c is declared within
// the while loop block using let, making it block-scoped and only accessible within that block.
// When trying to access c outside the while loop and if statement, 
// an error occurs because c is not in scope ReferenceError: c is not defined
// To get the value 18 in the output, we can move the declaration of c outside the while loop and if statement:

function foo() {
  var a = 1;
  var b = 9;
  let c;
  
  if (a >= 1) {
      let b = 2;

      while (b < 5) {
          c = b * 2;
          b++;

      }
  }
  console.log( a + c + b );
}

foo(); //18
