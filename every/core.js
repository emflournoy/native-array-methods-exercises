// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(x => x%2===0);
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every((x,y,z) => {
    var start = typeof z[0];
    var next = typeof x;
    return start === next;
  })
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(x => {
    return x.every(a => a>0)
  });
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input.every(x => {
    if(typeof x !== 'string'){
      return false;
    }
    return x.split("").every(a => {
      var start = a[0]
      return a === start
    })
  });
};

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
