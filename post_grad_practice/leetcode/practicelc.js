/**
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.

Given N, calculate F(N).

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

And thus...

Input: 5
Output: 3
Explanation: F(5) = F(4) + F(3)  = 3 + 2  = 5.

Note:

0 ≤ N ≤ 30.

 */

 /**
  * https://leetcode.com/problems/fibonacci-number/submissions/
  * Success
    Details
    Runtime: 56 ms, faster than 63.33% of JavaScript online submissions for Fibonacci Number.
    Memory Usage: 33.8 MB, less than 95.45% of JavaScript online submissions for Fibonacci Number.
  */
let fibonacci = n => {
  if (n === 0) { return 0; }
  if (n === 1 || n === 2) { return 1;}
  let sequence = [1,2];

  let currIndex = 2; 
  while(currIndex < n-1) {
    sequence.push(sequence[currIndex-2] + sequence[currIndex-1]);
    currIndex++;
  }
  return sequence[sequence.length-1];
};

// console.log('F(0): ', fibonacci(0));
// console.log('F(1): ', fibonacci(1));
// console.log('F(2): ', fibonacci(2));
console.log('F(3): ', fibonacci(3));
console.log('F(4): ', fibonacci(4));
console.log('F(5): ', fibonacci(5));
console.log('F(6): ', fibonacci(6));

console.log('\n ... \n');



// https://leetcode.com/problems/fibonacci-number/discuss/237039/JavaScript

fibonacci = function(N) {
  if (N === 0 || N === 1) return N;
  let a = 0;
  let b = 1;
  while (N--) {
    [a, b] = [b, a + b];
  }
  return a;
};

// console.log('F(0): ', fibonacci(0));
// console.log('F(1): ', fibonacci(1));
// console.log('F(2): ', fibonacci(2));
console.log('F(3): ', fibonacci(3));
console.log('F(4): ', fibonacci(4));
console.log('F(5): ', fibonacci(5));
console.log('F(6): ', fibonacci(6));

console.log('\n ... \n');
/**
 * stair steps
 * https://leetcode.com/problems/climbing-stairs/
 * 
 * You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Tis one was listed as easy, but i had no idea at all after 20 minutes writing out multiple cases.
I did notice a resemblence to fibinacci sequence, but that was all. Indeed there is fibinacci - based solution, though I don't follow the analysis yet as to why it works:

https://leetcode.com/problems/climbing-stairs/solution/
https://leetcode.com/articles/climbing-stairs/

Note that in my opinion this is not an easy problem. 


 */
//https://leetcode.com/problems/climbing-stairs/discuss/177561/javascript
let climbStairs = function(n) {
  let arr=[1,2,3];
  for(let i = 3;i<n;i++){
    arr[i]=arr[i-1] + arr[i-2];
  }
  console.table(arr);
  return arr[n-1];
};

console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(9));

// https://leetcode.com/problems/climbing-stairs/discuss/350243/Short-Functional-JavaScript

console.log('\n ... \n');

climbStairs = n =>
  Array(n - 1)
    .fill(0) // Because the reduce function ignores undefined values.
    .reduce(([a, b]) => [b, a + b], [1, 1])
    .pop();

console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(9));

/**
 * Lexicogical ordering
 * given an array of lowercase words, and an ordering of lowercase letters, is the array ordered correctly?
 * 
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

 

Note:

    1 <= words.length <= 100
    1 <= words[i].length <= 20
    order.length == 26
    All characters in words[i] and order are english lowercase letters.


 * 
 * Success
Details
Runtime: 56 ms, faster than 68.74% of JavaScript online submissions for Verifying an Alien Dictionary.
Memory Usage: 36.2 MB, less than 50.00% of JavaScript online submissions for Verifying an Alien Dictionary.
 */



let wordsAreInOrder = (words, order) => {

  const orderArr = order.split('');

  // compare callback function for two words;
  const _compare2Words = (a,b) => { 
    const aArr = a.split('');
    const bArr = b.split('');
    const iterateLen = Math.max(aArr.length, bArr.length);

    for (let i = 0; i < iterateLen; i++) {
      if(i < aArr.length) {
        //value of a at index for orderArr is lower than for same index of b:
        if(orderArr.indexOf(aArr[i]) < orderArr.indexOf(bArr[i])){
          return true;
        }
        else if (orderArr.indexOf(bArr[i]) < orderArr.indexOf(aArr[i])) {
          return false;}
        else if (i >= bArr.length) { return false;}
      }
    }
    // same words
    return true;
  };

  //then use the calback inside array.reduce
  let result = words.reduce((totaller, curr, currIndex) => { 
    if (currIndex >= 1) {
      if (!_compare2Words(words[currIndex-1], curr)) {
        totaller.falseCount++;
      }
    }
    return totaller;
  }, {'falseCount':0});  
  return (result.falseCount === 0);
};

let words = ['ape', 'apple'];
let order = 'abcdefghijklmnopqrstuvwxyz';
let myResult = wordsAreInOrder(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['app', 'apple'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['apple', 'app'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect false: ', myResult);


console.log(`\n ... \n`);
words = ['apple', 'ape'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect false: ', myResult);

console.log(`\n ... \n`);
words = ['apple', 'apple'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['hello', 'leetcode'];
order = 'hlabcdefgijkmnopqrstuvwxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['word','world','row'];
order = 'worldabcefghijkmnpqstuvxyz';
myResult = wordsAreInOrder(words, order);
console.log('expect false: ', myResult);

/**
 * refactored version uses array.every() and is more efficient:
 * Runtime: 48 ms, faster than 96.63% of JavaScript online submissions for Verifying an Alien Dictionary.
Memory Usage: 34 MB, less than 50.00% of JavaScript online submissions for Verifying an Alien Dictionary.

posted my solution:
https://leetcode.com/problems/verifying-an-alien-dictionary/discuss/388957/faster-than-96-of-javascript-solutions

 */


const wordsAreInOrder2 = (words, order) => {

  const orderArr = order.split('');

  const _compare2Words = (element, index, array) => { 
    if (index > 0) {
      const a = array[index-1];
      const b = element;
      const aArr = a.split('');
      const bArr = b.split('');
      // iterateLen could just be aArr.length, but that tests slower! 
      const iterateLen = Math.max(aArr.length, bArr.length);
  
      for (let i = 0; i < iterateLen; i++) {
        // you shouldn't need the following outer if statement if you set iterateLen to aArr.length, BUT on leetcode it tests MUCH faster to keep it. 
        if(i < aArr.length) {
          //value of a at index for orderArr is lower than for same index of b:
          if(orderArr.indexOf(aArr[i]) < orderArr.indexOf(bArr[i])){
            return true;
          }
          // if bArr[i] does not exist, it returns -1 and fits this condition
          else if (orderArr.indexOf(bArr[i]) < orderArr.indexOf(aArr[i])) {
            return false;
          }
        }
      }
      // same words or a matches the equivalent substring of b
      return true;
    }
    // return true to iterate over index 0
    return true;
  };

  return words.every(_compare2Words);
};

console.log(`\n ... refactored using array.every() ...\n`);
words = ['ape', 'apple'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['app', 'apple'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['apple', 'app'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect false: ', myResult);


console.log(`\n ... \n`);
words = ['apple', 'ape'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect false: ', myResult);

console.log(`\n ... \n`);
words = ['apple', 'apple'];
order = 'abcdefghijklmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['hello', 'leetcode'];
order = 'hlabcdefgijkmnopqrstuvwxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect true: ', myResult);

console.log(`\n ... \n`);
words = ['word','world','row'];
order = 'worldabcefghijkmnpqstuvxyz';
myResult = wordsAreInOrder2(words, order);
console.log('expect false: ', myResult);

console.log(`\n ... House Robber ... \n`);
/**
 * House Robber
 * https://leetcode.com/problems/house-robber/
 * 
 * given an array of numbers, find the highest sum of subsets that are not adjacent to each other.arrow
 * 
 */
// ooops this one misunderstands the problem. See the third condition:
function largestNonAdjacentSum (arr) {

  let output = arr.reduce((prev, curr, currIdx) => {
    if(currIdx % 2 !== 0) {
      prev.odds += (curr > 0) ? curr : 0 ;
    }  else {
      prev.evens +=  (curr > 0) ? curr : 0 ;
    }
    return prev;
  
  }, {odds:0, evens:0});

  return Math.max(output.odds, output.evens);
}

console.log('expect 4:', largestNonAdjacentSum([1,2,3,1]));
console.log('expect 12:', largestNonAdjacentSum([2,7,9,3,1]));
console.log('oops expect 4 but returns 3:', largestNonAdjacentSum([2,1,1,2])); // returns 3

console.log(`\n ... House Robber version 2 ... \n`);
/**
 * Notes: 
 * We can get all possibilities with two cases, by starting with the first value, skipping the next one, then adding i = 2 + all subsequent evens, and adding i = 3 + all subsequent odds.
 * there are two cases: 
 * case1: i=0 + i>=2 && i is even
 * case2: i=0 + i>=3 && i is odd
 */
function largestNonAdjacentSum2 (arr) {

  let output = arr.reduce((prev, curr, currIdx) => {
    if(currIdx === 0) { 
      prev = {case1:curr, case2:curr};
    } else if (currIdx >= 2 && currIdx % 2 === 0) {
      prev.case1 += (curr > 0) ? curr : 0 ;
    } else if (currIdx >= 3 && currIdx % 2 !== 0) {
      prev.case2 +=  (curr > 0) ? curr : 0 ;
    }
    return prev;
  
  }, {case1:0, case2:0});

  return Math.max(output.case1, output.case2);
}

console.log('expect 4:', largestNonAdjacentSum2([1,2,3,1]));
console.log('expect 12:', largestNonAdjacentSum2([2,7,9,3,1]));
console.log('expect 4:', largestNonAdjacentSum2([2,1,1,2])); 
console.log('expect 10:', largestNonAdjacentSum2([2,1,3,4,3,1,2])); 
console.log('ooops expected 2 returned 1:', largestNonAdjacentSum2([1,2])); 

console.log(`\n ... House Robber version 3 ... \n`);
/**
 * Notes: 
 * We can get all possibilities with two cases, by starting with the first value, skipping the next one, then adding i = 2 + all subsequent evens, and adding i = 3 + all subsequent odds.
 * there are two cases: 
 * case1: i=0 + i>=2 && i is even
 * case2: i=0 + i>=3 && i is odd
 */
function largestNonAdjacentSum3 (arr) {

  let output = arr.reduce((prev, curr, currIdx) => {
    if (currIdx % 2 === 0) {
      prev.case1 += (curr > 0) ? curr : 0 ;
    } else {
      prev.case2 +=  (curr > 0) ? curr : 0 ;
    }
    return prev;

  
  }, {case1:0, case2:0});

  return Math.max(output.case1, output.case2);
}

console.log('expect 4: ', largestNonAdjacentSum3([1,2,3,1]));
console.log('expect 12: ', largestNonAdjacentSum3([2,7,9,3,1]));
console.log('expect 4: ', largestNonAdjacentSum3([2,1,1,2])); 
console.log('expect 10: ', largestNonAdjacentSum3([2,1,3,4,3,1,2])); 
console.log('expect 2: ', largestNonAdjacentSum3([1,2])); 

console.log(`\n ... House Robber version 4 ... \n`);
/**
 * Notes: 
 * We can get all possibilities with two cases, by starting with the first value, skipping the next one, then adding i = 2 + all subsequent evens, and adding i = 3 + all subsequent odds.
 * there are two cases: 
 * case1: i=0 + i>=2 && i is even
 * case2: i=0 + i>=3 && i is odd
 */
function largestNonAdjacentSum4 (arr) {

  let output = arr.reduce((prev, curr, currIdx) => {
    if(currIdx >= 0 && currIdx % 2 === 0) { 
      prev.evensFrom0 += (curr > 0) ? curr : 0 ;
    } 
    else if(currIdx >= 0 && currIdx % 2 !== 0) {
      prev.oddsFrom0 += (curr > 0) ? curr : 0 ;
    } 
    else if(currIdx >= 1 && currIdx % 2 === 0) { 
      prev.evensFrom1 += (curr > 0) ? curr : 0 ;
    } 
    else if(currIdx >= 1 && currIdx % 2 !== 0) {
      prev.oddsFrom1 += (curr > 0) ? curr : 0 ;
    } 
    return prev;
  }, {evensFrom0:0, oddsFrom0:0, evensFrom1:0, oddsFrom1:0});
  // console.log({output});
  return Math.max(output.evensFrom0, output.oddsFrom0, output.evensFrom1, output.oddsFrom1);
}

console.log('expect 4:', largestNonAdjacentSum4 ([1,2,3,1]));
console.log('expect 12:', largestNonAdjacentSum4 ([2,7,9,3,1]));
console.log('ooops expect 4 returns 3:', largestNonAdjacentSum4 ([2,1,1,2])); 
console.log('expect 10:', largestNonAdjacentSum4 ([2,1,3,4,3,1,2])); 
console.log('expected 2:', largestNonAdjacentSum4 ([1,2])); 

console.log(`\n ... House Robber version 5 ... \n`);
/**
 * Notes: 
 */
function largestNonAdjacentSum5 (arr) {

  let left = 0, right = arr.length-1;
  let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;

  if (arr.length === 0) {return 0;}
  // case array length 1 or 2
  else if (right < 2) {
    return Math.max(arr[left], arr[right]);
  }

  // test left 0, right is last
  while(right - left >= 0) {
    if(right - left === 0) {
      sum1 = sum1 + arr[left]
    }
    else if (right - left >=2) {
      sum1 = sum1 + arr[left] + arr[right];
    }
    
    left = left + 2;
    right = right -2;
  }

  // test left 1, right is last
  left = 1, right = arr.length-1;

  while(right - left >= 0) {
    if(right - left === 0) {
      sum2 = sum2 + arr[left];
    }
    else if (right - left >=2) {
      sum2 = sum2 + arr[left] + arr[right];
    }
    left = left + 2;
    right = right -2;
  }

  // test left 0, right is penultimate
  left = 0, right = arr.length-2;

  while(right - left >= 0) {
    if(right - left === 0) {
      sum3 = sum3 + arr[left];
    }
    else if (right - left >=2) {
      sum3 = sum3 + arr[left] + arr[right];
    }
    left = left + 2;
    right = right -2;
  }

  // test left 1, right is penultimate
  left = 1, right = arr.length-2;

  while(right - left >= 0) {
    if(right - left === 0) {
      sum4 = sum4 + arr[left];
    }
    else if (right - left >=2) {
      sum4 = sum4 + arr[left] + arr[right];
    }
    left = left + 2;
    right = right -2;
  }

  return(Math.max(sum1, sum2, sum3, sum4));
}

console.log('expect 4: ', largestNonAdjacentSum5 ([1,2,3,1]));
console.log('expect 12: ', largestNonAdjacentSum5 ([2,7,9,3,1]));
console.log('expect 4: ', largestNonAdjacentSum5 ([2,1,1,2])); 
console.log('expect 10: ', largestNonAdjacentSum5 ([2,1,3,4,3,1,2])); 
console.log('expect 2: ', largestNonAdjacentSum5 ([1,2])); 
console.log('expected 14 -- oops: ', largestNonAdjacentSum5 ([4,1,2,7,5,3,1])); 

/**
 * 
 * OK none of that works...
 * translated from the provided solution:
 * 
 * Runtime: 48 ms, faster than 90.43% of JavaScript online submissions for House Robber.
Memory Usage: 33.7 MB, less than 85.71% of JavaScript online submissions for House Robber.
 *  
 Unfortunately, I don't quite understand how this guarrantees that we don't rob adjacent houses. 
 * */ 


console.log(`\n ... House Robber, inspired by the from the provided solution ... \n`);

function largestNonAdjacentSum6 (nums) {

  if(nums.length === 0) {return 0;}
  else if (nums.length <= 2) {return Math.max(nums[0],nums[nums.length-1]);}
  else if(nums.length === 3) {return Math.max(nums[0]+nums[2], nums[1]);}
  else {
    let prevMax = 0,  currMax = 0;
    for (let i = 0; i < nums.length; i++) {
      let temp = currMax;
      currMax = Math.max(prevMax + nums[i], currMax);

      console.log(temp, currMax);
      prevMax = temp;
    }
    return currMax;
  }
}

console.log('expect 4:', largestNonAdjacentSum6 ([1,2,3,1]));
console.log('expect 12:', largestNonAdjacentSum6 ([2,7,9,3,1]));
console.log('expect 4: ', largestNonAdjacentSum6 ([2,1,1,2])); 
console.log('expect 10:', largestNonAdjacentSum6 ([2,1,3,4,3,1,2])); 
console.log('expect 2:', largestNonAdjacentSum6 ([1,2])); 
console.log('expect 14: ', largestNonAdjacentSum6 ([4,1,2,7,5,3,1])); 



