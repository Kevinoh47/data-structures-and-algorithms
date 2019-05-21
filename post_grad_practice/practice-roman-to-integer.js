'use strict';

/**
 * https://leetcode.com/problems/roman-to-integer/
 * 
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3

Example 2:

Input: "IV"
Output: 4

Example 3:

Input: "IX"
Output: 9

Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Success
Details
Runtime: 144 ms, faster than 98.50% of JavaScript online submissions for Roman to Integer.
Memory Usage: 40.2 MB, less than 34.21% of JavaScript online submissions for Roman to Integer.

*/



var romanConverter = function(roman){
  let myArr=roman.split('');

  let output = myArr.reduce((accumulator, curr, idx, myArr) => {
    console.log({accumulator});
    console.log({curr});
    let currInt;

    if (curr === 'I') {
      if (myArr[idx+1] === 'V' || myArr[idx+1] === 'X') {
        currInt = 0;
      } else {
        currInt = 1;
      }
    }
    else if (curr === 'V') {
      if (myArr[idx-1] && myArr[idx-1] === 'I') {
        currInt = 4;
      } else {
        currInt = 5;
      }
    }
    // X can have I before it for subtraction, and can be used itself before L or C for subtraction
    else if (curr === 'X') {
      if (myArr[idx+1] === 'L' || myArr[idx+1] === 'C') {
        currInt = 0;
      } else {
        if (myArr[idx-1] && myArr[idx-1] === 'I') {
          currInt = 9;
        } else {
          currInt = 10;
        }
      }
    }
    else if (curr === 'L') {
      if (myArr[idx-1] && myArr[idx-1] === 'X') {
        currInt = 40;
      } else {
        currInt = 50;
      }
    }
    // C can have X before it for subtraction, and can be used itself before D or M for subtraction
    else if (curr === 'C') {
      if (myArr[idx+1] === 'D' || myArr[idx+1] === 'M') {
        currInt = 0;
      } else {
        if (myArr[idx-1] && myArr[idx-1] === 'X') {
          currInt = 90;
        } else {
          currInt = 100;
        }
      }
    }
    else if (curr === 'D') {
      if (myArr[idx-1] && myArr[idx-1] === 'C') {
        currInt = 400;
      } else {
        currInt = 500;
      }
    }
    else if (curr === 'M') {
      if (myArr[idx-1] && myArr[idx-1] === 'C') {
        currInt = 900;
      } else {
        currInt = 1000;
      }
    }

    return accumulator + currInt;

  }, 0);

  return output;
};

console.log('expect 3', romanConverter('III'));
console.log('\n');
console.log('expect 4', romanConverter('IV'));
console.log('\n');
console.log('expect 9', romanConverter('IX'));
console.log('\n');
console.log('expect 58', romanConverter('LVIII'));
console.log('\n');
console.log('expect 1994', romanConverter('MCMXCIV'));

console.log('\n ... number to roman ... \n');
/**
 * https://leetcode.com/problems/integer-to-roman/
 * hmmm... i am sort of going in the right direction.
 * Here is a solution:
 * https://leetcode.com/problems/integer-to-roman/discuss/290947/Javascript-faster-than-98.50-(without-converting-to-string)
 * 
 */

// var intToRoman = function(num) {
//   let numStr = JSON.stringify(num);
//   let numArr = numStr.split('');
//   const numArrLen = numArr.length;

//   console.log({numArr});

//   let output = numArr.reduce((acc, curr, idx, numArr) => {
//     let decimalPlace, currNumber, currRoman, multiplier;

//     decimalPlace = numArrLen - idx;

//     switch(decimalPlace) {
//     case 4:
//       multiplier = 1000;
//       break;
//     case 3:
//       multiplier = 100;
//       break;
//     case 2:
//       multiplier = 10;
//       break;
//     case 1:
//       multiplier = 1;
//       break;
//     }

//     currNumber = parseInt(curr) * multiplier;

//     return  acc + currNumber;
//   }, 0 );

//   return output;
// };

// console.log(intToRoman(1));
// console.log(intToRoman(1004));
// console.log(intToRoman(3999));

