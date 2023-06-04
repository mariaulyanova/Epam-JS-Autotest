// Task 3.1
// Visualize execution context creation steps by step and explain the reason of output result

const sayHello = function (a,b) {
    return  arguments
};

console.log(sayHello(3,4)); //[Arguments] { '0': 3, '1': 4 }

// Creation Stage:
// Global Execution Context is created.
// The variable sayHello is declared and assigned an anonymous function within the Global Execution Context.

// Execution Stage:
// The sayHello function is called with arguments 3 and 4.
// Inside the function, the arguments object is returned. 
// The arguments object is a built-in object in JavaScript that 
// contains an array-like structure with all the arguments passed to a function.

// Explanation:
// The console.log(sayHello(3, 4)) statement will log the arguments object to the console. 
// Since arguments is an array-like object, it will be printed as an array-like structure with 
// the passed arguments. In this case, the output result will be [Arguments] { '0': 3, '1': 4 }, representing the values 
// of the arguments a and b passed to the sayHello function.

/////////////////////////////////////////////////////////////////////////////////////////////
// Task 3.2
// Visualize execution context creation steps by step and explain the reason of output result

const sayHelloArrow = (a,b) => {
    return  arguments
};

console.log(sayHelloArrow(6,7)); //[Arguments] {.......}

// Creation Stage:
// Global Execution Context is created.
// The variable sayHelloArrow is declared and assigned an arrow function within the Global Execution Context.

// Execution Stage:
// The sayHelloArrow function is called with arguments 6 and 7.
// Inside the function, the arguments object is not used or returned.

// Explanation:
// The console.log(sayHelloArrow(6, 7)) statement will log the arguments object inherited from the parent scope, 
// which is the Global Execution Context. Since arrow functions do not have their own arguments object, 
// the output result will be the arguments object of the parent scope.

// However, in strict mode, the arguments object is not accessible in arrow functions, 
// even when inherited from the parent scope. Therefore, if strict mode is enabled, the output will be 
// ReferenceError: arguments is not defined.
