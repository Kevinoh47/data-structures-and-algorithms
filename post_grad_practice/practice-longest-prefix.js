/**
 * https://leetcode.com/problems/longest-common-prefix/submissions/
 * Success
Details
Runtime: 60 ms, faster than 60.35% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 35 MB, less than 50.59% of JavaScript online submissions for Longest Common Prefix.
 */


let longestCommonPrefix = strsArr => {

  if (strsArr.length === 0) {return '';}

  let counter = 0, shortestString = strsArr[0].length, prefix = '';

  strsArr.forEach(s => {
    let currStrLen = s.length;

    // console.log({currStrLen});

    if (currStrLen < shortestString) {
      shortestString = currStrLen;
    }
  });

  // console.log({shortestString});

  while (counter <= shortestString -1) {
    
    // console.log({counter});

    for (let i = 0; i < strsArr.length; i++) {

      let startingVal = strsArr[0].charAt(counter); 
      // console.log({startingVal});

      let currentWord = strsArr[i];
      // console.log({currentWord});

      let currentChar = currentWord.charAt(counter);
      // console.log({currentChar});

      if (currentChar !== startingVal) {
        // console.log( `currentChar ${currentChar} differs from startingVal ${startingVal}`);
        return prefix;
      }
      // we have made it to the final comparison
      else if ( i === strsArr.length - 1 ) {
        // console.log( `adding currentChar ${currentChar} to prefix ${prefix}`);
        prefix = prefix.concat(currentChar); 
      }
    }
    counter++;
  }
  return prefix;
};

console.log('\n ... test 1 ... \n');
let testArr = ['flower','flow','flight'];

let result = longestCommonPrefix(testArr);

console.log({result});

console.log('\n ... test 2 ... \n');

testArr = ['abc','def','ge'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 3 ... \n');

testArr = ['abcdefg','abcdzzz','abcdefg'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 4 ... \n');

testArr = ['abcdefg','abcd','abcdefg'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 5 expects empty string... \n');

testArr = ['aca','cba'];
result = longestCommonPrefix(testArr);
console.log({result});




