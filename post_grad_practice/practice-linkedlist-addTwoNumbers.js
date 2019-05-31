/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 *  You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

My first version worked for all but overflow integers. You can see the commented out bits below

This version uses BigInt to pass the tests:

Success
Details
Runtime: 136 ms, faster than 28.67% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 39.3 MB, less than 14.40% of JavaScript online submissions for Add Two Numbers.

 */
'use strict';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let num1 = [], num2 = [], n1, n2, mySum = [], mySumNodes = [];

  let _traverser = headNode => {
    let output = [], curr = headNode;

    while(curr.next) {
      output.push(curr.val);
      curr = curr.next;
    }
    output.push(curr.val);
    return output;
  };

  num1 = (l1 && l1.val >= -9 && l1.val <= 9) ? _traverser(l1).reverse() : 0;
  num2 = (l2 && l1.val >= -9 && l1.val <= 9) ? _traverser(l2).reverse() : 0; 

  //n1 = parseInt(num1.join(''));
  n1 = BigInt(num1.join(''));
  console.log({n1});
  //n2 = parseInt(num2.join(''));
  n2 = BigInt(num2.join(''));
  console.log({n2});
  console.log('sum:', n1 + n2);
  let myBigSum = n1 + n2;
  console.log({myBigSum});
  let myBigSumStr = `${myBigSum}`;
  console.log({myBigSumStr});
  // add the two numbers, then convert to string, then an array, then reverse
  //mySum = JSON.stringify(n1 + n2).split('').reverse();
  mySum = myBigSumStr.split('').reverse();

  // build the nodes for each digit
  for (let i = 0; i < mySum.length; i++) {
    mySumNodes[i] = new ListNode(mySum[i]);
  }
  // once nodes are all created, add next:
  for (let i = 0; i < mySum.length; i++) {
    mySumNodes[i].next = (mySumNodes[i+1]) ? mySumNodes[i+1] : null;

  }

  // return head of sum list
  return mySumNodes[0];
};

console.log('\n ... test 3 ... \n');
let input1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let myNodes1 = [];
input1.forEach((e,i) => {myNodes1[i] = new ListNode(e);});
myNodes1.forEach((e,i,myNodes1) => {myNodes1[i].next=(myNodes1[i+1]) ? myNodes1[i+1] : null; });

let input2 = [5,6,4];
let myNodes2 = [];
input2.forEach((e,i) => {myNodes2[i] = new ListNode(e);});
myNodes2.forEach((e,i,myNodes2) => {myNodes2[i].next=(myNodes2[i+1]) ? myNodes2[i+1] : null; });

console.log({myNodes1});
console.log({myNodes2});

console.log('\n ... ... \n');
// now test
let myResults = addTwoNumbers(myNodes1[0], myNodes2[0]);
console.log(myResults.val);

console.log('\n ... ... \n');

let resultsArr = [];
let curr = myResults;
while(curr.next) {
  console.log(curr.val);
  resultsArr.push(curr.val);
  curr = curr.next;
}
// tail:
console.log(curr.val);
resultsArr.push(curr.val);

let reversedArr = resultsArr.reverse();
console.log({reversedArr});
console.log('final integer: ', parseInt(reversedArr.join('')));

// create test nodes
console.log('\n ... test 2 ... \n');
const a10 = new ListNode(1);
const a20 = new ListNode(0);
const a30 = new ListNode(0);
const a40 = new ListNode(0);
const a50 = new ListNode(0);
const a60 = new ListNode(0);
const a70 = new ListNode(0);
const a80 = new ListNode(0);
const a90 = new ListNode(1);

const b10 = new ListNode(5);
const b20 = new ListNode(6);
const b30 = new ListNode(4);

// link them:
a10.next = a20;
a20.next = a30;
a30.next = a40;
a40.next = a50;
a50.next = a60;
a60.next = a70;
a70.next = a80;
a80.next = a90;

b10.next = b20;
b20.next = b30;

// now test
myResults = addTwoNumbers(a10, b10);
console.log(myResults.val);

console.log('\n ... ... \n');

resultsArr = [];
curr = myResults;
while(curr.next) {
  console.log(curr.val);
  resultsArr.push(curr.val);
  curr = curr.next;
}
// tail:
console.log(curr.val);
resultsArr.push(curr.val);

reversedArr = resultsArr.reverse();
console.log({reversedArr});
console.log('final integer: ', parseInt(reversedArr.join('')));

console.log('\n ... test 1 ... \n');
const a1 = new ListNode(2);
const a2 = new ListNode(4);
const a3 = new ListNode(3);

const b1 = new ListNode(5);
const b2 = new ListNode(6);
const b3 = new ListNode(4);

// link them:
a1.next = a2;
a2.next = a3;

b1.next = b2;
b2.next = b3;

// now test
myResults = addTwoNumbers(a1, b1);
console.log(myResults.val);

console.log('\n ... ... \n');

curr = myResults;
while(curr.next) {
  console.log(curr.val);
  curr = curr.next;
}
console.log(curr.val);

