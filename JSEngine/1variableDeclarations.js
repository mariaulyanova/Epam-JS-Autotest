// Task 1.1
// Visualize execution context creation steps by step and explain the reason of output result

let a = 0;

for (let i = 0; i < 5; i++) {
   a++;
}


// Creation Stage:
// Global Execution Context is created. 
// The variable a is declared and assigned the initial value of 0 within the Global Execution Context.
// The variable i is declared within the for loop block but not assigned a value yet.

// Execution Stage:
// The for loop is encountered, and the initialization expression let i = 0 is executed.
// The condition i < 5 is evaluated. Since i is 0, the condition is true, and the loop body will be executed.
// The loop body increments the value of a by 1 with the statement a++.
// The iteration is completed, and the update expression i++ is executed.
// This process continues until the condition becomes false when i reaches 5.

// Explanation:
// After the execution of the for loop, the variable a will have a value of 5. 
// The final value of a is the result of the loop iterations.
// Since there is no explicit output of the final result of variable a
// in our code, it is not displayed. To see the number of iterations, 
// we can add a console.log(a) statement. This will log the value of 
// variable a after the loop completes and show the final result.
// console.log(a); //5 

//////////////////////////////////////////////////////////////////////////////////////////////////
// Task 1.2
// Visualize execution context creation steps by step and explain the reason of output result

var b;

if (b > 2) {
    console.log(b);
}

b = 5;

// console.log(b); //5

// Creation Stage:
// Global Execution Context is created. 
// The variable b is declared within the Global Execution Context but not assigned a value yet.
// The if statement is encountered, but the condition b > 2 cannot be evaluated yet because b is undefined.

// Execution Stage:
// The condition b > 2 is evaluated. Since b is undefined, the condition is false.
// The code block inside the if statement is skipped because the condition is false.
// The value of b is assigned as 5.
// The console.log(b) statement is not executed because it is outside the skipped code block.

// Explanation:
// The code block within the if statement is skipped due to the condition being false,
// the console.log(b) statement is never executed. There won't be any output in this case.
// The variable b is declared in the Global Execution Context, making it accessible throughout the code, 
// but, its value is assigned after the if statement, which means the condition is evaluated before b is assigned the value of 5.
