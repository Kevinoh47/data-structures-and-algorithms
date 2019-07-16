'use strict';

const {Stack} = require('../StacksAndQueues/stacks-and-queues');

let arrRev = arr => {
  if (!arr.length) { return null;}
  if (arr.length === 1) {return arr;}

  let myStack = new Stack();
  let curr, output = [];

  arr.map(e => myStack.push(e));

  while (myStack.top) {
    curr = myStack.pop().value;
    output.push(curr);
  }

  return output;
};

let t1 = [1,2,3,4,5];
let t2 = [100];
let t3 = [];

console.log({'normal array': arrRev(t1)});
console.log({'array with only one element': arrRev(t2)});
console.log({'empty array': arrRev(t3)});

/**
 * version using a pseudo Stack
 * 
 */

var arrRev2 = function (arr) {
  if (!arr.length) { return null;}
  if (arr.length === 1) {return arr;}

  let myStack = [...arr];
  let results = [];

  while (myStack.length) {
    const curr = myStack.splice(myStack.length-1,1);
    results.push(curr[0]);
  }
  return results;
};

console.log(`\n ... version2 ...\n`);
console.log({'normal array': arrRev2(t1)});
console.log({'array with only one element': arrRev2(t2)});
console.log({'empty array': arrRev2(t3)});

/**
 * Version swapping from both ends in place
 * 
 */

var arrRev3 = function (arr) { 
  const arrLen = arr.length;
  let left = 0, right = arr.length-1;


  while (left + 1 <= right) {

    let currLeft = arr[left];
    let currRight = arr[right];

    arr[left] = currRight;
    arr[right] = currLeft;

    console.log('currL: ', currLeft, 'currR: ', currRight);
    
    left++;
    right--;
  }

  return arr;
};

console.log(`\n ... version3 swapping in place ...\n`);
t1 = [1,2,3,4,5,6,7];
console.log({'normal array 1': arrRev3(t1)});
t1 = [1,2,3,4,5,6,7,8];
console.log({'normal array 2': arrRev3(t1)});

// console.log({'array with only one element': arrRev3(t2)});
// console.log({'empty array': arrRev3(t3)});

/**
 * export the original function
 */
module.exports = arrRev;
