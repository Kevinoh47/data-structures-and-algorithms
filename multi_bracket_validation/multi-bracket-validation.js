'use strict';

let multiBracketValidation = (str) => {
  let newArr = str.split('');
  let validChars = ['(', ')', '{', '}', '[', ']'];
  const filteredArr = newArr.filter(i => validChars.includes(i));
  
  for (var i = 0; i < filteredArr.length-1; i++) {
    if( 
      (filteredArr[i] === validChars[0] && filteredArr[i+1] === validChars[1]) ||
      (filteredArr[i] === validChars[2] && filteredArr[i+1] === validChars[3]) ||
      (filteredArr[i] === validChars[4] && filteredArr[i+1] === validChars[5])
    ) {
      filteredArr.splice(i,2, '*', '*');
    } 
  }
  const finalArr = filteredArr.filter(i=> validChars.includes(i));
  if (finalArr.length) {return false;}
  else {return true;}
};


