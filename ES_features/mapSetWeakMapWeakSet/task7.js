// Implement a function that takes an array of objects and uses a WeakMap to store additional information
// about each object.Retrieve the additional information for a specific object.

function addInfoToObjArr(arr) {
  const additionalInformation = new WeakMap();

  return {
    addInfo(obj, info) {
      additionalInformation.set(obj, info);
    },
    getInfo(obj) {
      return additionalInformation.get(obj);
    }
  };
}

const arrObj = [
  { name: 'John', id: 14 },
  { name: 'Jane', id: 23 },
  { name: 'Bob', id: 33 },
];

const objInfo = addInfoToObjArr(arrObj);

objInfo.addInfo(arrObj[0], { age: 30, country: 'USA' });
objInfo.addInfo(arrObj[1], { age: 25, country: 'Canada' });
objInfo.addInfo(arrObj[2], { age: 35, country: 'Australia' });

console.log(objInfo.getInfo(arrObj[0])); // { age: 30, country: 'USA' }
console.log(objInfo.getInfo(arrObj[1])); // { age: 25, country: 'Canada' }
console.log(objInfo.getInfo(arrObj[2])); // { age: 35, country: 'Australia' }
