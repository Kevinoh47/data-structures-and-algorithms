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

  return `${posFrac}\n${negFrac}\n${zeroFrac}`;
};

arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));

console.log(`\n ...  \n`);

arr = [1, 2, 3, -1, -2, -3, 0, 0];
console.log(plusMinus(arr));
