// You have three capacity perfumes: 30, 50 and 100 mls and an array with list of perfumes: perfumeBrands.

// let perfumeBrands = [ 
//  {
//   name:"Chanel",
//   prices:{
//    '30ml': 35,
//    '50ml': 70,
//    '100ml': 100 
//   }
//  },
//  { 
//   name:"Dior",
//   prices:{
//   '30ml': 45,
//   '50ml': 85, 
//   '100ml': 130 
//   }
// },
// { 
//   name:"Givenchy", 
//   prices:{
//   '30ml': 45, 
//   '50ml': 96, 
//   '100ml': 136 
//   }
// },
// {
//   name:"Giorgio Armani", 
//   prices:{
//   '30ml': 23, 
//   '50ml': 56, 
//   '100ml': 99 
//   }
// },
// { 
//   name:"Hermes", 
//   prices:{
//   '30ml': 42, 
//   '50ml': 67, 
//   '100ml': 95 
//   }
// }];
// Write a function that takes 3 arguments: perfume name(string), capacity(string) 
// and the given array. It should return the price(included postfix $) of the perfume depending on the ml.

// Example:
// ChoosePerfume('Chanel', ‘50ml’, perfumeBrands) ➞ 70$

const perfumeBrands = [ 
  {
   name:"Chanel",
   prices:{
    '30ml': 35,
    '50ml': 70,
    '100ml': 100 
   }
  },
  { 
   name:"Dior",
   prices:{
   '30ml': 45,
   '50ml': 85, 
   '100ml': 130 
   }
 },
 { 
   name:"Givenchy", 
   prices:{
   '30ml': 45, 
   '50ml': 96, 
   '100ml': 136 
   }
 },
 {
   name:"Giorgio Armani", 
   prices:{
   '30ml': 23, 
   '50ml': 56, 
   '100ml': 99 
   }
 },
 { 
   name:"Hermes", 
   prices:{
   '30ml': 42, 
   '50ml': 67, 
   '100ml': 95 
   }
 }];

function choosePerfume(name, capacity, perfumeBrands) {
  for (let i = 0; i < perfumeBrands.length; i++){
    if (perfumeBrands[i].name === name) {
      return console.log(perfumeBrands[i].prices[capacity] + "$");
    }
    return console.log("No perfume found matching your requirements.");
  }
}

choosePerfume('Chanel', '50ml', perfumeBrands); //70$
choosePerfume("Giorgio Armani", "75ml", perfumeBrands); //No perfume found matching your requirements.
