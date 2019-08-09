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

    if (currStrLen < shortestString) {
      shortestString = currStrLen;
    }
  });

  while (counter <= shortestString -1) {

    for (let i = 0; i < strsArr.length; i++) {

      let startingVal = strsArr[0].charAt(counter); 
      let currentWord = strsArr[i];
      let currentChar = currentWord.charAt(counter);

      if (currentChar !== startingVal) {
        return prefix;
      }
      // we have made it to the final comparison
      else if ( i === strsArr.length - 1 ) {
        prefix = prefix.concat(currentChar); 
      }
    }
    counter++;
  }
  return prefix;
};

console.log('\n ... test 1 expects fl... \n');
let testArr = ['flower','flow','flight'];
let result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 2 expects empty string... \n');

testArr = ['abc','def','ge'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 3 expects abcd... \n');

testArr = ['abcdefg','abcdzzz','abcdefg'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 4 expects abcd... \n');

testArr = ['abcdefg','abcd','abcdefg'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 5 expects empty string... \n');

testArr = ['aca','cba'];
result = longestCommonPrefix(testArr);
console.log({result});

console.log('\n ... test 6 expects the entire first string abcd... \n');

testArr = ['abcd', 'abcd', 'abcd'];
result = longestCommonPrefix(testArr);
console.log({result});


/**
 * Refactor based on https://leetcode.com/problems/longest-common-prefix/discuss/120133/Simple-JavaScript-solution. You don't need to worry about shortest string, because you return as soon as there is no match. just pick the first one to iterate over.
 * 
 * Success
Details
Runtime: 52 ms, faster than 92.15% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 35.6 MB, less than 21.88% of JavaScript online submissions for Longest Common Prefix.

 */
let longestCommonPrefix2 = strsArr => {

  if (!strsArr.length) {return '';}

  // iterate over the length of the first string. Whether it is shortest or not doesn't matter
  for (let i = 0; i < strsArr[0].length; i++) {

    // handles almost all cases, including no prefix
    for (let str of strsArr) {
      if ( str[i] !== strsArr[0][i]) {
        return str.slice(0,i);
      }
    }
  }
  // edge case: all inputs are exactly the same:
  return strsArr[0];
};

console.log('\n ... refactor1 test 1 expects fl ... \n');
testArr = ['flower','flow','flight'];
result = longestCommonPrefix2(testArr);
console.log({result});

console.log('\n ... refactor1 test 2 expects empty string... \n');
testArr = ['abc','def','ge'];
result = longestCommonPrefix2(testArr);
console.log({result});

console.log('\n ... refactor1 test 3 expects abcd... \n');
testArr = ['abcdefg','abcdzzz','abcdefg'];
result = longestCommonPrefix2(testArr);
console.log({result});

console.log('\n ... refactor1 test 4 expects abcd... \n');
testArr = ['abcdefg','abcd','abcdefg'];
result = longestCommonPrefix2(testArr);
console.log({result});

console.log('\n ... refactor1 test 5 expects empty string... \n');
testArr = ['aca','cba'];
result = longestCommonPrefix2(testArr);
console.log({result});

console.log('\n ... refactor1 test 6 expects the entire first string abcd... \n');
testArr = ['abcd', 'abcd', 'abcd'];
result = longestCommonPrefix2(testArr);
console.log({result});






