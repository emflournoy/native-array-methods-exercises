function sum (array) {
  var sum = array.reduce(function(acc, val){
    return acc+val;
  },0)
  return sum;
};


function productAll (array) {
  return array.reduce((outerAcc, outerValue)=>{
    return outerAcc*outerValue.reduce((innerAcc, innerVal)=>{
      return innerAcc*innerVal;
    })
  },1)
};

function objectify (array) {
  return array.reduce(function(acc,currentVal){
    acc[currentVal[0]] = currentVal[1];
    return acc;
  },{})
};
// function objectify (array) {
//   return array.reduce((a, b) => (a[b[0]] = b[1]) && a, {});
// }

function luckyNumbers (array) {
  console.log(array)
  return array.reduce((acc, val)=>{
    return `${acc} ${val}`
  }, "Your lucky numbers are: ")
};
// function luckyNumbers (array) {
//   return array.reduce((a, b, i) => i === array.length - 1 ? `${a} and ${b}` : `${a} ${b},`, 'Your lucky numbers are:');
// }



module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
