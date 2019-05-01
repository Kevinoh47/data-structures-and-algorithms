'use strict';



const myArr = [1,2,3];

function sumOfPairs(numbers) {

  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log({'curr1':firstNumber, 'curr2':secondNumber, 'sum': firstNumber + secondNumber});
    });
  });
}
sumOfPairs(myArr);

console.log('\n ... ... \n');

let largest = -Number.MAX_VALUE;
console.log(largest);
let smallest = -Number.MIN_VALUE;
console.log(smallest);

largest = Number.MAX_VALUE;
console.log(largest);
smallest = Number.MIN_VALUE;
console.log(smallest);

console.log('\n ... ... \n');

/**
 * https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation
 * Write a function that takes an array of characters and reverses the letters in place
 * My solution is O(2n) thus O(n) for time and space. 
 * Their solution is (On) time O(1) space
 */

// my solution:
let inplaceReverser = arr => {
  let myQ = [];
  while (arr.length) {
    myQ.push(arr.pop());
  }
  while(myQ.length){
    arr.push(myQ.shift());
  }

  return arr;
};

console.log(inplaceReverser(['a','b','c','d']));
console.log(inplaceReverser(['a','b','c','d','f']));

console.log('\n ... \n');

// their solution swaps characters until the middle is reached:
let inplaceReverserIC = arr => {
  let leftIndex = 0, rightIndex = arr.length-1;

  while(leftIndex < rightIndex) {
    let oldLeft = arr[leftIndex];
    let oldRight = arr[rightIndex];
    arr[leftIndex] = oldRight;
    arr[rightIndex] = oldLeft;
    leftIndex++;
    rightIndex--;
  }
  return arr;
};
console.log(inplaceReverserIC(['a','b','c','d']));
console.log(inplaceReverserIC(['a','b','c','d','f']));
