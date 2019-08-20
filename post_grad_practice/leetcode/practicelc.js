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