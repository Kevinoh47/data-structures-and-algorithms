'use strict';


let repeatedWord = (str) => {
  // regex modified from https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
  const stripPunc = str.replace(/[.,/#!$%^&*;:{}=\-_`~()–]/g,'').replace('  ',' ').trim().toLowerCase();

  const myStrArr = stripPunc.split(' ');
  const myHash = {};
  let firstDup = false;
  let highestDupCount = 0;
  let highestDupWords = [];
  let dupWordCount = 0;

  myStrArr.forEach(function(e){
    if (myHash[e] === undefined) { 
      myHash[e]=1;
    }
    else {
      
      if (!firstDup) { 
        firstDup = true;
        myHash.firstDuplicate = e;
      }
     
      myHash[e] = ++myHash[e]; 
      
      // only count word for dup count once
      if (myHash[e] ===2) {
        dupWordCount++;
      }

      if (myHash[e] === highestDupCount) {
        highestDupWords.push(e);
      }
      else if (myHash[e] > highestDupCount) {
        highestDupCount = myHash[e];
        highestDupWords = [];
        highestDupWords.push(e);
      }
    }
    myHash.highestDupWords = highestDupWords;
    myHash.highestDupCount = highestDupCount;
    myHash.dupWordCount = dupWordCount;
  });

  return myHash;
};

module.exports = repeatedWord;
