/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
 * oops note that the last test case blows up this approach. See the second attempt for a working version.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const strArr = s.split('').reverse();
  let currentFirstIdx = -1;
  let currentUniqChar;

  const charCounts = {};
  strArr.forEach((val, idx) => {
    if (val in charCounts) {
      console.log(`val ${val} exists! and firstIdx is ${currentFirstIdx}`);
      const currCount = charCounts[val];
      console.log({currCount});
      charCounts[val]  = currCount + 1;

      if (currentUniqChar === val) {
        currentFirstIdx = -1;
      }
    } else {
      console.log(`val ${val} is the new first unique and the new firstIdx is ${idx}`);
      charCounts[val] = 1;
      currentFirstIdx = idx;
      currentUniqChar = val;
    }
  });
  
  console.log({charCounts});
  return ( currentFirstIdx === -1)? -1 : strArr.length - 1 - currentFirstIdx;
};

// let s = 'leetcode';
// let result = firstUniqChar(s);
// console.log('expects index 0: ', result);
// console.log(`\n .... \n`);

// s = 'loveleetcode';
// result = firstUniqChar(s);
// console.log('expects index 2: ', result);
// console.log(`\n .... \n`);

// s = 'mmmmmmm';
// result = firstUniqChar(s);
// console.log('expects index -1: ', result);
// console.log(`\n .... \n`);

// oops this case defeats my logic. Because we start the end, but o gets immediately replaced, but then after that nothing is unique...
// s = 'mmmnno';
// result = firstUniqChar(s);
// console.log('expects index 5: ', result);
// console.log(`\n .... \n`);

/**
 * attempt 2
 * Space complexity: O(2n) -> due to the added array and added set
 * Time complexity: O(2n) -> O(n) due to full traversing of the array twice.
 * 
 * My solution is basically exactly what is proposed in the official solution:
 * https://leetcode.com/problems/first-unique-character-in-a-string/solution/
 * 
 * Success
Details
Runtime: 104 ms, faster than 40.06% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 38.6 MB, less than 37.50% of JavaScript online submissions for First Unique Character in a String.

 */

var firstUniqChar2 = function(s) {
  const strArr = s.split('');

  const charCounts = {};
  strArr.forEach((val) => {
    charCounts[val] = (charCounts[val]) ? charCounts[val] + 1 : 1;
  });

  for (let i = 0; i < strArr.length; i++) {
    if (charCounts[strArr[i]] === 1) {
      return i;
    }
  }
  return -1;
};

let s = 'leetcode';
let result = firstUniqChar2(s);
console.log('expects index 0: ', result);
console.log(`\n .... \n`);

s = 'loveleetcode';
result = firstUniqChar2(s);
console.log('expects index 2: ', result);
console.log(`\n .... \n`);

s = 'mmmmmmm';
result = firstUniqChar2(s);
console.log('expects index -1: ', result);
console.log(`\n .... \n`);

// oops this case defeats my logic. Because we start the end, but o, gets immediately replaced, but then after that nothing is unique...
s = 'mmmnno';
result = firstUniqChar2(s);
console.log('expects index 5: ', result);
console.log(`\n .... \n`);

/**
 * 
 * a lovely solution using the trick of checking if indexOf and lastIndexOf are the same:
 * https://leetcode.com/problems/first-unique-character-in-a-string/discuss/86356/JavaScript-solution
 * 
 * var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      } 
   }
   return -1;
};
 */

 /**
  * here is nearly the opposite problem, determining if an array has a dup in it:
  * from A Common Sense Guide to Data Structures and Algorithms by Jay Wengrow pg 88
  */

function hasDup(arr) {
  var existingVals = {};
  for (var i = 0; i < arr.length; i++) {
    if(existingVals[arr[i]] === undefined) {
      existingVals[arr[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}