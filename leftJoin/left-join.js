'use strict';

const hashLeftJoin = (hash1, hash2) => {
  let leftKeys = Object.keys(hash1);
  let output = [] ;

  // for a left join, we don't handle any hash2 keys that are not in hash1.
  let counter = 0;
  leftKeys.forEach( key => {

    let currentOutput = Object.entries(hash1)[counter];

    console.log({currentOutput});

    if (hash2[key]) {
      currentOutput.push(hash2[key]);
    } 
    else {
      currentOutput.push('NULL');
    }
    output.push(currentOutput);
    counter++;
  });
  return output;
};


module.exports = hashLeftJoin;
