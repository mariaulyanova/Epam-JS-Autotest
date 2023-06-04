// Declare a class C1.
// Add async method f3.
//  It should throw an exception 'Error occurs in f3 method'.
// Create an instance of the class.
// Call the f3 method, process the returned promise and display the result in the console.

class C1 {
  async f3() {
    throw new Error(`Error occurs in f3 method`);
  }
};

const instance = new C1();
instance.f3().catch((error) => console.log(error.message));
