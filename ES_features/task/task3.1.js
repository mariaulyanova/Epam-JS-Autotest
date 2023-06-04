// 3. Use the import and export statements to create separate modules
//    and demonstrate importing / exporting functionality between them.

function calcVal(a, b) {
  return [
    a + b,
    a - b,
    a * b,
    a / b,
  ]
}

module.exports = calcVal;