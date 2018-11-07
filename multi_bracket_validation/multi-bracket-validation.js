'use strict';

let multiBracketValidation = (str) => {
  let newArr = str.split('');
  let validChars = ['(', ')', '{', '}', '[', ']'];
  let filteredArr = newArr.filter(i => validChars.includes(i)); //filter non-bracket characters

  for (var i = 0; i < filteredArr.length; i++) {
    if( 
      (filteredArr[i] === validChars[0] && filteredArr[i+1] === validChars[1]) ||
      (filteredArr[i] === validChars[2] && filteredArr[i+1] === validChars[3]) ||
      (filteredArr[i] === validChars[4] && filteredArr[i+1] === validChars[5])
    ) {
      filteredArr.splice(i,2);
      i = -1; // reset to start loop at the beginning
    } 
  }
  if (filteredArr.length) {return false;}
  else {return true;}
};

module.exports = {multiBracketValidation};




