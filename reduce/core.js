function sum (array) {
  var sum = array.reduce(function(acc, val){
    return acc+val;
  },0)
  return sum;
};

function productAll (array) {
  return array.reduce(function(outerAcc, outerValue){
    return outerValue.reduce(function(innerAcc, innerVal){
      return innerAcc*innerVal;
    },1)
  },1)
};

function objectify (array) {
  return array.reduce(function(acc,currentVal){
    acc[currentVAl[0]] = currentVal[1];
    return acc;
  },{})
};

function luckyNumbers (array) {
  // your code here
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
