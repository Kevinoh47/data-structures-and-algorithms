'use strict';

/***
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

let arraySum = arr => {
  let results = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return results;
};

console.log(`\n ... simple array sum ... \n`);

let inputArr = [5,4,3,2,1];
console.log('expect 15: ', arraySum(inputArr));

/**
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from to

for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet
, and the rating for Bob's challenge to be the triplet

.

Your task is to find their comparison points by comparing
with , with , and with

.

    If 

, then Alice is awarded
point.
If
, then Bob is awarded
point.
If

    , then neither person receives a point.

Comparison points is the total points a person earned.

Given
and

, determine their respective comparison points.

For example,
and . For elements , Bob is awarded a point because . For the equal elements and , no points are earned. Finally, for elements , so Alice receives a point. Your return array would be

with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

    a: an array of integers representing Alice's challenge rating
    b: an array of integers representing Bob's challenge rating

 */

function compareTriplets(a, b) {

  let aSum = 0, bSum = 0;

  a.forEach((e,i) => {
    console.log(e, i, b[i]);
    if ((e) > b[i]) { aSum++; }
    else if ((e) < b[i]) { bSum++; }
  });

  return [aSum, bSum];

}

console.log(`\n ... compare triplets ... \n`);
let a = [3,2,1];
let b = [1,2,3];

console.log('expect [1,1] :', compareTriplets(a,b));

a = [17, 28, 30];
b = [99, 16, 8];

console.log('expect [2,1] :', compareTriplets(a,b));

/**
 * Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

    ar: an array of integers .

Input Format

The first line of the input consists of an integer
.
The next line contains

space-separated integers contained in the array.

Output Format

Print the integer sum of the elements in the array.

Constraints

Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005

Output

5000000015

Note:

The range of the 32-bit integer is

.

When we add several integer values, the resulting sum might exceed the above range. 

 */

function aVeryBigSum(arr) {
  let startBig = new Number(0);
  let result = arr.reduce((prev, curr, currIdx, arr) => {
    let currBig = new Number(curr);
    return prev + currBig;
  }, startBig);
  return result;
}

console.log(`\n ... simple array sum ... \n`);

inputArr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log('expect 5000000015: ', aVeryBigSum(inputArr));

/**
 * 
 * Diagonal difference
 * 
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix

is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal =
. The right to left diagonal = . Their absolute difference is

.

Function description

Complete the

function in the editor below. It must return an integer representing the absolute diagonal difference.

diagonalDifference takes the following parameter:

    arr: an array of integers .

Input Format

The first line contains a single integer,
, the number of rows and columns in the matrix .
Each of the next lines describes a row, , and consists of space-separated integers

.

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12

Sample Output

15

Explanation

The primary diagonal is:

11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
 */

console.log(`\n ... diagonal difference ... \n`);
/**
 * OOPS This works but i need to be able to do any grid, not just 3 x 3
 * @param  arr 
 */
function diagonalDifference(arr) {

  // TODO check that arr is lenght 3, is an array of arrays, each with three, and that each value is a number;

  const primaryDiagonal = [arr[0][0], arr[1][1], arr[2][2]];
  const secondaryDiagonal = [arr[0][2], arr[1][1], arr[2][0]];

  const sumPrimaryDiag = primaryDiagonal.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const sumSecondaryDiag = secondaryDiagonal.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return Math.abs(sumPrimaryDiag - sumSecondaryDiag);
}



let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log('expecting 15 (abs(4 - 19) :', diagonalDifference(arr));

arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
console.log('expecting 2 (abs(15 - 17) :', diagonalDifference(arr));



console.log(`\n ... diagonal difference 2 ... \n`);

function diagonalDifference2(arr) {

  // TODO check that arr length  = inner array length; that inner arrays all have same length; is an array of arrays, each with three, and that each value is a number;
  const gridLen = arr.length;
  const primaryDiagonal = [];
  const secondaryDiagonal = [];

  for (let i = 0; i < gridLen; i++) {
    const currSecondary = gridLen - 1 - i;

    primaryDiagonal.push(arr[i][i]);
    secondaryDiagonal.push(arr[i][currSecondary]);
  }

  console.log({primaryDiagonal});
  console.log({secondaryDiagonal});
  
  const sumPrimaryDiag = primaryDiagonal.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const sumSecondaryDiag = secondaryDiagonal.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return Math.abs(sumPrimaryDiag - sumSecondaryDiag);
}

// -1   1  -7  -8
// -10 -8  -5  -2
// 0    9   7  -1
// 4    4  -2   1

arr = [[-1,1,-7,-8], [-10,-8,-5,2], [0,9,7,-1], [4,4,-2,1]];

console.log('expecting 1 :', diagonalDifference2(arr));

/**
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to

are acceptable.

For example, given the array
there are elements, two positive, two negative and one zero. Their ratios would be , and

. It should be printed as

0.400000
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.

plusMinus has the following parameter(s):

    arr: an array of integers

Input Format

The first line contains an integer,
, denoting the size of the array.
The second line contains space-separated integers describing an array of numbers

.

Constraints


Output Format

You must print the following

lines:

    A decimal representing of the fraction of positive numbers in the array compared to its size.
    A decimal representing of the fraction of negative numbers in the array compared to its size.
    A decimal representing of the fraction of zeros in the array compared to its size.

Sample Input

6
-4 3 -9 0 4 1         

Sample Output

0.500000
0.333333
0.166667

Explanation

There are
positive numbers, negative numbers, and zero in the array.
The proportions of occurrence are positive: , negative: and zeros: . 
 * 
 */

console.log(`\n ... fraction of pos, neg, or zero ... \n`);

let plusMinus = arr => {
  let posCount = 0, negCount = 0, zeroCount = 0, posFrac = 0, negFrac = 0, zeroFrac = 0;

  arr.forEach( e => {
    if (e > 0) { posCount++; }
    else if (e < 0) { negCount++; }
    else if (e === 0) { zeroCount++; }
  });

  posFrac = (posCount / arr.length).toFixed(6);
  negFrac = (negCount / arr.length).toFixed(6);
  zeroFrac = (zeroCount / arr.length).toFixed(6);

  // hacker rank wanted console logs rather than a return statement
  return `${posFrac}\n${negFrac}\n${zeroFrac}`;
};

arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));

console.log(`\n ...  \n`);

arr = [1, 2, 3, -1, -2, -3, 0, 0];
console.log(plusMinus(arr));

/**
 * Print a staircase
 * https://www.hackerrank.com/challenges/staircase/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 * Consider a staircase of size

:

   #
  ##
 ###
####

Observe that its base and height are both equal to

, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size

.

Function Description

Complete the staircase function in the editor below. It should print a staircase as described above.

staircase has the following parameter(s):

    n: an integer

Input Format

A single integer,

, denoting the size of the staircase.

Constraints

.

Output Format

Print a staircase of size

using # symbols and spaces.

Note: The last line must have

spaces in it.

Sample Input

6 

Sample Output

     #
    ##
   ###
  ####
 #####
######

Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n = 6
 * 
 */

console.log(`\n ...  print a staircase ... \n`);

function staircase(myInt) {

  for (let i = 1; i <= myInt; i++) {
    let currLineArr = [], currLine = '';
    let spaceCounter = myInt - i;
    let poundCounter = myInt - spaceCounter;
    while (spaceCounter > 0) {
      currLineArr.push(' ');
      spaceCounter--;
    }
    while (poundCounter > 0) {
      currLineArr.push('#');
      poundCounter--;
    }
    
    currLine = currLineArr.join('');
    console.log( currLine );
  }
}

staircase(4);

staircase(6);

staircase(7);

/**
 * here is a slightly more elegant solution from hackerrank:
 * 
 * function processData(input) {
  var h = parseInt(input, 10);
  var i;
  var j;
  var line;
  
  for (i = 0; i < h; i++) {
    line = '';
    for (j = 0; j < h - i - 1; j++) {
      line += ' ';
    }
    for (;j < h; j++) {
      line += '#';
    }
    console.log(line);
  }
} 
 */

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example,
. Our minimum sum is and our maximum sum is

. We would print

16 24

Function Description

Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of
of

elements.

miniMaxSum has the following parameter(s):

    arr: an array of 

    integers

Input Format

A single line of five space-separated integers.

Constraints

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample Output

10 14

Explanation

Our initial numbers are
, , , , and

. We can calculate the following sums using four of the five integers:

    If we sum everything except 

, our sum is
.
If we sum everything except
, our sum is
.
If we sum everything except
, our sum is
.
If we sum everything except
, our sum is
.
If we sum everything except
, our sum is

    .

Hints: Beware of integer overflow! Use 64-bit Integer.
 * 
 *  
 */ 

console.log(`\n ... min max sum ... \n`);

function minMaxSum (arr) {

  // sort array so least is first
  arr.sort((a,b) => Number(a - b) );
  
  let minSumArr = arr.slice(0,arr.length-1);
  let maxSumArr = arr.slice(1);

  let maxResult = maxSumArr.reduce((prev, curr) => {
    return prev + curr;
  },0);

  let minResult = minSumArr.reduce((prev, curr) => {
    return prev + curr;
  },0);

  return [minResult, maxResult];
}

let result = minMaxSum([1,2,4,7,-1]);
console.log('expect 6, 14: ', result);

result = minMaxSum([1,3,5,4,2]);
console.log('expect 10, 14: ', result);

/**
 * here is a compact version of my general approach, from hackerrank js solutions:
 * https://www.hackerrank.com/rest/contests/master/challenges/mini-max-sum/hackers/MiLeung/download_solution?primary=true
 * 
 *     let arr = input.split(' ').sort((a, b) => b < a).map(val => parseInt(val));
    let min = arr.slice(0, 4).reduce((a, b) => a + b);
    let max = arr.slice(arr.length - 4, arr.length).reduce((a, b) => a + b);
    console.log(min + ' ' + max);
    
    Not sure why they treat the input as a string since it is already an array. Also, it looks like they handle 64 bit numbers via parseInt() ... will that work?

 * and this one is easy to follow, plus I like how they refactor out the sort callback:
 * https://www.hackerrank.com/rest/contests/master/challenges/mini-max-sum/hackers/tarik_courdy/download_solution?primary=true

 function processData(input_str){
    var int_arr = input_str.split(" ");

    for(var i = 0; i < int_arr.length; i++){
	int_arr[i] = parseInt(int_arr[i]);
    }
    
    int_arr.sort(sortNumber);

    var min = int_arr[0] + int_arr[1] + int_arr[2] + int_arr[3] ;
    var max = int_arr[4] + int_arr[3] + int_arr[2] + int_arr[1];

    console.log(min + " " + max);

}

function sortNumber(a,b) {
    return a - b;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

 */

console.log(`\n ... min max sum, more efficient version ... \n`);
/**
 * My solution here does not require sorting or splicing. 
 * https://www.hackerrank.com/challenges/mini-max-sum/leaderboard?filter=javascript&filter_on=language&page=1
 * 
 * @param {*} arr 
 */

function minMaxSum2 (arr) {

  let min = arr[0], max = arr[0];
  let minIdx = 0, maxIdx = 0;
  let minVal = 0, maxVal = 0;

  arr.map((e,i) => {
    if (e < min) {
      min = e;
      minIdx = i;
    }
    else if (e > max) {
      max = e;
      maxIdx = i;
    }
  });

  for (let i = 0; i < arr.length; i++) {
    if (i !== minIdx) {
      maxVal += Number(arr[i]);
    }
    if (i !== maxIdx) {
      minVal += Number(arr[i]);
    }
  }

  // for hackerrank, they don't want return statement, instead console.log(minVal, maxVal)
  return [minVal, maxVal];
}

result = minMaxSum2([1,2,4,7,-1]);
console.log('expect 6, 14: ', result);

result = minMaxSum2([1,3,5,4,2]);
console.log('expect 10, 14: ', result);

/**
 * find the number of birthday candles that can be blown out.
 * Basically, looking for a count of the highest num in an array.
 * array is the height of each candle. Return the count of the highest.
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 * 
 * 
 */

console.log(`\n ... how many birthday candles can be blown out? ...`);

function birthdayCakeCandles(ar) {

  let maxVal = ar[0];
  let count = 1;

  ar.forEach((val, idx) => {
    if (idx > 0) {
      if (val === maxVal) {
        count++;
      }
      else if (val > maxVal) {
        maxVal = val;
        count = 1;
      }
    }
  });

  return count;
}

arr = [3, 2, 1, 3];

console.log('expect 2: ', birthdayCakeCandles(arr));

/**
 * a hackerrank solution uses Math.max.apply to figure out the max value:
 * https://www.hackerrank.com/rest/contests/master/challenges/birthday-cake-candles/hackers/FSAiota/download_solution?primary=true
 *
 */

console.log('expect 3 to be max: ', Math.max.apply(null, arr));
/*
then they just iterate, upping the count when max is encountered:

var max = Math.max.apply(null, candles);
  var count = 0;
  for (let i = 0; i < n; i += 1) {
    if (candles[i] === max) { 
      count += 1;
    }
  }
  console.log(count);

* My solution is actually more efficient I believe, since it only iterates once.
*/


/**
 * Practice test question 2
 * 
 * Given 2 integers l and r, print all the odd numbers between l and r (l and r inclusive)
 * 
 */

console.log('\n ... odd nums ... \n');

function oddNums (l, r) {
  if (l > r) {return null;}

  const lIsOdd = (l % 2 !== 0);
  const risOdd = (r % 2 !== 0);
  let results = [];
  if (!lIsOdd) { l = l+1; }
  if (!risOdd) { r = r-1;}

  console.log(lIsOdd, risOdd, l, r);

  for (let i = l; i <= r; i += 2) {
    console.log({i});
    results.push(i);
  }

  console.log({results});
  return results;
}

console.log(oddNums(2,15));

/**
 * question three: which is more efficient, bubble sort, selection sort, heap sort, insertion sort.
 * 
 * It looks like heap sort is 0(log(n)) ...
 * https://www.geeksforgeeks.org/heap-sort/
 */



/*
 * My function passes their tests.
  * https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
  * 
  * Given a time in

-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

    s: a string representing time in 

    hour format

Input Format

A single string
containing a time in -hour clock format (i.e.: or ), where and

.

Constraints

    All input times are valid

Output Format

Convert and print the given time in
-hour format, where

.

Sample Input 0

07:05:45PM

Sample Output 0

19:05:45
*/

console.log(`\n ... time format converter - 12 hour to 24 hour format ... \n`);

let timeConverter = timeStr => {
  const amPm = timeStr.substring(timeStr.length - 2).toUpperCase();
  const twelveHourTime = timeStr.substring(0, timeStr.length - 2);
  const hour = twelveHourTime.substring(0,2);
  const minSecs = twelveHourTime.substring(2);

  if ( hour === '12' && amPm === 'AM') { 
    return '00'.concat(minSecs);
  }
  else if ( hour !== '12' && amPm === 'AM' ) { 
    return twelveHourTime; 
  }
  else if ( hour === '12' && amPm === 'PM' ) { 
    return twelveHourTime;
  }
  
  else if ( amPm === 'PM'){
    return `${parseInt(hour) + 12}`.concat(minSecs);
  }
};

let timeStr = '07:05:45PM';
console.log(' expecting 19:05:45 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '12:00:00PM';
timeConverter(timeStr);
console.log(' expecting 12:00:00 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '12:00:00AM';
timeConverter(timeStr);
console.log(' expecting 00:00:00 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '12:05:45PM';
timeConverter(timeStr);
console.log(' expecting 12:05:45 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '12:05:45AM';
timeConverter(timeStr);
console.log(' expecting 00:05:45 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '11:05:45AM';
timeConverter(timeStr);
console.log(' expecting 11:05:45 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '11:05:45PM';
timeConverter(timeStr);
console.log(' expecting 23:05:45 ', timeConverter(timeStr));
console.log('\n ... \n');
timeStr = '01:05:45PM';
timeConverter(timeStr);
console.log(' expecting 23:05:45 ', timeConverter(timeStr));
