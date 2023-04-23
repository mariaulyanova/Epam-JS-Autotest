//Write a function declaration that sums the two numbers you provide as arguments. 
//After that you should modify this function to Arrow and Expression functions.


// ***function declaration***

function sumNumbersD(a, b) {
  console.log(a + b);
}

sumNumbersD(4, 8); //12


// ***Arrow function***

const sumNumbersA = (a, b) => a + b;

console.log(sumNumbersA(3, 1)); //4

// ***Expression function***

const sumNumbersE = function(a, b) {
  return a + b;
};

console.log(sumNumbersE(2, 5)); //7

