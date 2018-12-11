'use strict';


let repeatedWord = (str) => {
  // regex from https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  const stripPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').toLowerCase();
  const myStrArr = stripPunc.split(' ');
  const myHash = {};
  let firstDup = false;
  let dupsInfo = {};
  let highestDupCount = 0, highestDupWord = '';

  myStrArr.forEach(function(e){
    if (myHash[e] === undefined) { 
      myHash[e]=1;
    }
    else {
      if (!firstDup) { 
        firstDup = true;
        dupsInfo.firstDuplicate = e;
      }
     
      myHash[e] = ++myHash[e];  
      dupsInfo[e] = myHash[e];

      if (myHash[e] > highestDupCount) {
        highestDupCount = myHash[e];
        highestDupWord = e;
      }
    }
    dupsInfo.highestDupWord = highestDupWord;
    dupsInfo.highestDupCount = highestDupCount;
  });

  return dupsInfo;
};

module.exports = repeatedWord;
