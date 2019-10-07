/**
 * https://leetcode.com/problems/add-two-numbers/
 * https://leetcode.com/articles/add-two-numbers/127833
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

  // NOTE that l1 and l2 are actually head nodes, rather than list Objects...
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


//////////////////////////////////////////
console.log(`\n ... a new approach ... \n`);
/**
 * 
Success
Details

currDigit = Number(currSum.toString().split('')[1]);
Runtime: 112 ms, faster than 75.07% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 38.5 MB, less than 48.61% of JavaScript online submissions for Add Two Numbers.

currDigit = currSum % 10; 
Runtime: 104 ms, faster than 94.08% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 38.6 MB, less than 34.72% of JavaScript online submissions for Add Two Numbers.
 */

let add2Nums = (l1, l2) =>{
  let sumHeadNode = new ListNode('0');
  let currSumNode = sumHeadNode;
  let prevNode;
  let curr1 = l1, curr2 = l2;
  let carry = 0;

  while (curr1 != null || curr2 != null) {
    
    const x = (curr1 != null) ? curr1.val : 0;
    const y = (curr2 != null) ? curr2.val : 0;

    const currSum = x + y + carry;
    let currDigit;

    if (currSum > 9) {
      carry = 1;
      // currDigit = Number(currSum.toString().split('')[1]); // this is slower but uses less memory than the next line.
      currDigit = currSum % 10; // this is faster but uses more memory than the previous line.

    } else {
      carry = 0;
      currDigit = currSum;
    }

    prevNode = currSumNode;
    currSumNode = new ListNode(currDigit);
    prevNode.next = currSumNode;
    curr1 = (curr1) ? curr1.next : null; 
    curr2 = (curr2) ? curr2.next : null;
  }

  // last carry
  if (carry > 0) {
    prevNode = currSumNode;
    currSumNode = new ListNode(carry);
    prevNode.next = currSumNode;
  }

  // the solution head node is actually the second node because the first node is a dummy node.
  return sumHeadNode.next;

};



console.log(`\n ... 342 + 465 = 807 ( output in reverse order: 7,0,8) ... \n`);
myResults = add2Nums(a1, b1);
//console.log(myResults);
console.log(myResults.val, myResults.next.val, myResults.next.next.val);

// let currRes = myResults;
// while (currRes.next) {
//   console.log(currRes.val);
//   currRes = currRes.next;
// }
// console.log(currRes.val);

let currRes = myResults;
while (currRes != null) {
  console.log(currRes.val);
  currRes = (currRes) ? currRes.next : null;
}

console.log(`\n ... 342 + 9 = 351 ( output in reverse order: 1,5,3)... \n`);
const c1 = new ListNode(9);
myResults = add2Nums(a1, c1);
//console.log(myResults);
console.log(myResults.val, myResults.next.val, myResults.next.next.val);
currRes = myResults;
while (currRes != null) {
  console.log(currRes.val);
  currRes = (currRes) ? currRes.next : null;
}

console.log(`\n ... 342 + 465 = 807 (output in reverse order: 7,0,8 ... \n`);
let d1 = new ListNode(5);
let d2 = new ListNode(6);
let d3 = new ListNode(4);
d1.next = d2;
d2.next = d3;

myResults = add2Nums(a1, d1);
//console.log(myResults);
console.log(myResults.val, myResults.next.val, myResults.next.next.val);
currRes = myResults;
while (currRes != null) {
  console.log(currRes.val);
  currRes = (currRes) ? currRes.next : null;
}

console.log(`\n ... 5 + 5 = 10 (output in reverse order: 0,1 ... \n`);
let e1 = new ListNode(5);
let f1 = new ListNode(5);

myResults = add2Nums(e1, f1);
//console.log(myResults);
console.log(myResults.val, myResults.next.val);
currRes = myResults;
while (currRes != null) {
  console.log(currRes.val);
  currRes = (currRes) ? currRes.next : null;
}

 




