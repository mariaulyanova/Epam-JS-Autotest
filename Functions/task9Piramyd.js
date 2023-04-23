// Write a function which will draw a pyramid. 
// Function should receive a number as parameter and draw a pyramid
//  with given number of raws. Pyramid should be presented as in the example below:

//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 


function drawPyramid(numberRaw) {
  for (let i = 1; i <= numberRaw; i++) {
    let str = "";
    for (let j = 1; j <= numberRaw - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "* ";
    }
    console.log(str);
  }
}

drawPyramid(6);
