// Explain how the following piece of code is being executed step by step.Describe each tick of event loop.

Promise.resolve()
  .then(() => setTimeout(() => {
    console.log(1);
  }))
  .then(() => console.log(2));

console.log(3);

setTimeout(() => {
  console.log(4);

  setTimeout(() => {
    console.log(5);

    setTimeout(() => {
      console.log(6);

      Promise.resolve()
        .then(() => setTimeout(() => {
          console.log(7);
        }));
    }, 500);

    console.log(8);
  }, 1000);
}, 2000);

Promise.resolve(9)
  .then((res) => setTimeout(() => {
    console.log(res);
  }))
  .then(() => console.log(10))
  .catch((err) => console.log('Error!'))
  .finally(() => console.log('Finally!'));

console.log(11);

// When our code is executed, console.log(3) and console.log(11) are added to the call stack as synchronous tasks,
// they are executed, and then removed from the stack.

// Promises are handled as microtasks, giving them priority over setTimeout(), which are handled as macrotasks.

// Once the call stack is empty, the execution of Promises begins. Promise.resolve() is added to the call stack,
// executed through the web API and the Event Loop. The setTimeout() from the first Promise is added to the macrotask
// queue and waits for its turn, and then we get console.log(2). Next, we move on to the second Promise and get
// console.log(10) and console.log('Finally!'). console.log('Error!') won't be executed as there are no errors in our code.

// Once our call stack is empty, we move on to the execution of macrotasks. When the specified time for a timer expires,
// it completes its work, and the callback function is placed in the callback queue. The event loop checks the call stack,
// and if it's empty, it extracts the callback from the callback queue and places it in the call stack. The functions
// are executed and add console.log(1) and console.log(9) before being removed from the stack.

// The nested setTimeout() is added to the call stack. The environment creates a timer as part of the web API. This timer
// will handle the countdown. The setTimeout() completes itself and is removed from the call stack. Then, the countdown for
// console.log(4) starts, which is set to 2 seconds. After that, we get console.log(5), console.log(8), and console.log(6) in order.

// Inside the fourth setTimeout() callback, a new Promise.resolve() is created, which creates a resolved promise. A then() is
// called on the resolved promise, scheduling a callback using setTimeout() to be executed asynchronously. However, the callback
// is not immediately executed because the event loop is busy executing the synchronous code.

// And we have this output: 3 11 2 10 Finally! 1 9 4 5 8 6 7

// Tick 1, 2:
// State: Synchronous code
// Action: console.log(3), console.log(11) are executed
// Output: 3, 11

// Tick 3:
// State: Microtask queue
// Action: console.log(2) is executed
// Output: 2

// Tick 4:
// State: Microtask queue
// Action: console.log(10) is executed
// Output: 10

// Tick 5:
// State: Microtask queue
// Action: console.log('Finally!') is executed
// Output: 'Finally!'

// Tick 6:
// State: Macrotask queue
// Action: setTimeout(() => { console.log(1) }) is executed
// Output: 1

// Tick 7:
// State: Microtask queue
// Action: Promise.resolve(9) is executed and resolved
// Microtasks scheduled: setTimeout(() => { console.log(res) })
// Output: 9

// Tick 8:
// State: Macrotask queue
// Action: setTimeout(() => { console.log(4) }) is executed
// Output: 4

// Tick 9:
// State: Macrotask queue
// Action: setTimeout(() => { console.log(5) }) is executed
// Output: 5

// Tick 10:
// State: Synchronous code
// Action: console.log(8) is executed
// Output: 8

// Tick 11:
// State: Macrotask queue
// Action: setTimeout(() => { console.log(6) }) is executed
// Output: 6

// Tick 12:
// State: Macrotask queue
// Action: setTimeout(() => { console.log(7) }) is executed
// Output: 7

// Tick 13:
// State: ' '
// Action: ' '
// Output: ' '
