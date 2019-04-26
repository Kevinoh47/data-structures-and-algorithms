/**
 * https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list
 */

'use strict';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * my solution is O(n) time, because although we have to reverse the array, constants drop out. It is also o(n) space... Interview Cake solutions both do O(1) space, because they only use the LL I guess, not any other data structure.
 * @param {*} k 
 * @param {*} headOfLL 
 */
let kthToLastNode = (k, headOfLL) => {

  let myArr = [], current = headOfLL;

  if (!headOfLL) { return null;}

  if (k < 1) {return null;}

  while(current.next) {
    myArr.push(current);
    current = current.next;
  }
  myArr.push(current);

  if (k > myArr.length) {return null;}

  //return myArr.reverse()[k-1];
  return myArr[myArr.length-k];
};

let kthToLastNodeIC1 = (k, head) => {

  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  let listLength = 1;
  let currentNode = head;

  while (currentNode.next){
    currentNode = currentNode.next;
    listLength +=1;
  }

  if (k > listLength) {
    throw new Error(`k is larger than the length of the linked list: ${k}`);
  }

  const howFarToGo = listLength - k;

  currentNode = head;
  for (let i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

// const a = new LinkedListNode('Angel Food');
// const b = new LinkedListNode('Bundt');
// const c = new LinkedListNode('Cheese');
// const d = new LinkedListNode("Devil's Food");
// const e = new LinkedListNode('Eccles');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log({a});

// let results = kthToLastNode(2, a);

// console.log(`\n ... 2 should return Devil's Food ... \n`);
// console.log({results});

// results = kthToLastNodeIC1(2, a);

// console.log({results});

// console.log(`\n ... 1 should return Eccles ... \n`);
// results = kthToLastNode(1, a);

// console.log({results});

// results = kthToLastNodeIC1(1, a);

// console.log({results});

// console.log(`\n ... 5 should return Angel Food ... \n`);
// results = kthToLastNode(5, a);

// console.log({results});

// results = kthToLastNodeIC1(5, a);

// console.log({results});

// // console.log(`\n ... 6 should return null for mine, throw error for IC1 ... \n`);
// // results = kthToLastNode(6, a);

// // console.log({results});

// // results = kthToLastNodeIC1(6, a);

// // console.log({results});

// console.log(`\n ... 0 should return null for mine, throw error for IC1 ... \n`);
// results = kthToLastNode(0, a);

// console.log({results});

// results = kthToLastNodeIC1(0, a);

// console.log({results});

module.exports = {LinkedListNode, kthToLastNode};
