// Task 2.1
// Visualize execution context creation steps by step and explain the reason of output result

foo();

var foo;

function foo() {
    console.log( 1 );
}

// Output: 1

// Creation Stage:
// Global Execution Context is created.
// The variable foo is declared within the Global Execution Context but not assigned a value yet.
// The function foo is defined within the Global Execution Context.

// Execution Stage:
// The foo() function is called.
// Since the function foo has already been defined during the creation stage, 
// the function call foo() will execute the function body.
// The function body consists of the statement console.log(1), which logs 1 to the console as the output.

// Explanation:
// When the foo() function is called, it logs 1 to the console. This is because the function foo is defined before 
// it is called, and the function body contains the console.log(1) statement. Therefore, the output result is 1.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2.1
// Visualize execution context creation steps by step and explain the reason of output result

foo();

var foo;

foo = function() {
    console.log( 2 );
};

// Output: TypeError: foo is not a function

// Creation Stage:
// Global Execution Context is created.
// The variable foo is declared within the Global Execution Context but not assigned a value yet.

// Execution Stage:
// Since the variable foo is declared but not assigned a value, the function call foo() 
// will result in an error. This is because foo is not a function at this point.

// Explanation:
// In this case, an error will occur because foo is not a function when it is called. The variable foo is declared, 
// but its value is assigned later in the code.
