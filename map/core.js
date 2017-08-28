function multiplyBy10 (array) {
  return array.map(el=>el*10)
};

// var mult10 = array.map(function(x) {
//   return x*10;
// })
// return mult10;

function shiftRight (array) {
  return array.map((el, index, arr) => index===0 ? arr[arr.length-1] : arr[index-1]);
};

// var lefted = array.map(function(element, index, arr){
//   //order matters for passing element index and arr in!! - pass all three in, even if you only end up using the index or arr.
//   if (index == 0){
//     return arr[arr.length-1]
//   }
//   return arr[index-1];
// })
// return lefted;

function onlyVowels (array) {
  return array.map(el => el.replace(/[^AEIOU]/gi,""))
};

// var vowels = array.map(function(element,index,arr){
//   var letters = ['a','e','i','o','u']
//   for(var i=0; i<letters.length; i++){
//     if (letters[i]===element){
//       return element;
//     }
//   }
// })
// return vowels;

function doubleMatrix (array) {
 return array.map((el, index, arr) => el.map(e => e*2))
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
