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

module.exports = arrRev;