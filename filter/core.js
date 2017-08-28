function onlyEven (array) {
  var evens = array.filter(function(el){
    return el%2===0;
  })
  return evens;

  // return array.filter(e =>%2 ===0);
};

function onlyOneWord (array) {
  var word = array.filter(function(el){
    return !el.includes(" ");
    })
    return word;

    return array.filter(e => e.indexOf('') ===)
};

function positiveRowsOnly (array) {
  var pos = array.filter(function(el){
  return el.every(function)
  
  })
  return pos;
};

function allSameVowels (array) {
  return array.filter(duplicateVowels);

  function duplicateVowels(str){
    let vowels = ['a','e','i','o','u'];
    let found = '';

    for (var i = 0; i<str.length; i++){
      if
    }
  }

  // return array.filter(checkStringForDuplicateVowels);
  //
  // function checkStringForDuplicateVowels(str) {
  //   let vowels = ['a','e','i','o','u'];
  //   let found = '';
  //
  //   for (var i = 0; i < str.length; i++) {
  //     if (vowels.indexOf(str[i]) !== -1) {
  //       if (found === str[i] || found === '') {
  //         found = str[i];
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  //
  //   return true;
  // }


};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
