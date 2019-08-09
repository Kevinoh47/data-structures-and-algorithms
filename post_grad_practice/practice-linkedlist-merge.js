/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Merge Two Sorted Lists
Easy

2089

288

Favorite

Share
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */


 // TODO This one can't be right. See comments for versions below. This one merges linked lists, but doesn't preserve order. 
'use strict';

const LinkedList = require('../linked-list');

let mergedLL = (list1, list2) => {

  let output = new LinkedList();
  let current1 = list1.head, current2 = list2.head;

  if (list1 === null && list2 !== null) {return list2;}
  else if (list1 !== null && list2 === null) {return list1;}
  else if (list1 === null && list2 === null) {return null;}
  

  while (current1.next) {
    output.append(current1.value);
    
    if(current2.value) {
      output.append(current2.value);
    }

    current1 = current1.next;
    current2 = current2.next;
  }
  // tail of 1:
  output.append(current1.value);
    
  if(current2.value) {
    while (current2.next) {
      output.append(current2.value);
      current2 = current2.next;
    }
    output.append(current2.value);
  }

  return output;
};

let myList1 = new LinkedList(), myList2 = new LinkedList();
[1,2,4].map(e => myList1.append(e));
[1,3,4].map(e => myList2.append(e));

let myOutput = mergedLL(myList1, myList2);

let finalCurrent = myOutput.head;

while(finalCurrent.next){
  console.log(finalCurrent.value);
  finalCurrent = finalCurrent.next;
}
console.log(finalCurrent.value);

/**
 * Hmmm the version used on Leet Code uses appears to use a list definition with no methods, just properties.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// lets make some lists of these nodes:

let myList1Node1 = new ListNode(1);
let myList1Node2 = new ListNode(2);
let myList1Node3 = new ListNode(4);

myList1Node1.next = myList1Node2;
myList1Node2.next = myList1Node3;


let myList2Node1 = new ListNode(1);
let myList2Node2 = new ListNode(3);
let myList2Node3 = new ListNode(4);

myList2Node1.next = myList2Node2;
myList2Node2.next = myList2Node3;


function leetCodeListIterator(headListNode){
  let current = headListNode;
  while(current.next){
    console.log(current.val);
    current = current.next;
  }
  console.log(current.val);
}

console.log('\n ... iterate a LeetCode list ... \n');
leetCodeListIterator(myList1Node1);
console.log('\n ...  \n');
leetCodeListIterator(myList2Node1);

/***
 * This version manages for nulls and for different lengths. It passes these inputs:
 * 
 * []
 * []
 * and
 * [-10,-10,-9,-4,1,6,6]
 * [-7]

 * Although this version works, it still fails on this input case:
 * l1 = 2, l2 = 1
 * Output is expected to be 1, 2, but my output is not ordering the output. so its output is 2, 1. Requirements just said to merge the two ordered lists. I guess we also want the merged list to be ordered.
 */

var mergeTwoLists = function(l1, l2) {
  let currentA = l1, currentB = l2, tempANext, tempBNext;

  if (l1 === null && l2 !== null) { return l2;}
  else if (l1 !== null && l2 === null) { return l1;}
  else if (l1 === null && l2 === null) {return null;}

  while (currentA.next) {

    if (currentB.next) {
      tempANext = currentA.next; 
      tempBNext = currentB.next;
  
      currentA.next = currentB; 
      currentB.next = tempANext; 
    
      // now switch and iterate
      currentA = currentB.next;
      currentB = tempBNext;
    }
  }

  // tail:
  if (currentB) {
    currentA.next = currentB; 
  }
};

console.log('\n ... try to merge the lists ... \n');
mergeTwoLists(myList1Node1, myList2Node1);
leetCodeListIterator(myList1Node1);
console.log('\n ...  \n');

/**
 * I had to look at the LeetCode solution. 
 * @param {*} l1 
 * @param {*} l2 
 */
var mergeTwoOrderedLists = function(l1, l2) {
  
  if (l1 === null && l2 !== null) { return l2;}
  else if (l1 !== null && l2 === null) { return l1;}
  else if (l1 === null && l2 === null) {return null;}

  else if (l1.val < l2.val) {
    l1.next = mergeTwoOrderedLists(l1.next, l2);
    return l1;
  }
  else {
    l2.next = mergeTwoOrderedLists(l1, l2.next);
    return l2;
  }
};

/**
 * type it out again:
 */

console.log(`\n .... recursive version from leet code solution ... \n`);

let mergeTwoOrderedLists2 = (l1Node, l2Node) => {
  if (l1Node === null &&  l2Node !== null) {return l2Node; }
  else if (l2Node === null && l1Node !== null) {return l1Node; }
  else if (l2Node === null && l1Node === null) {return null; }
  else if (l1Node < l2Node) {
    l1Node.next = mergeTwoOrderedLists2(l1Node.next, l2Node);
    return l1Node;
  }
  else {
    l2Node.next = mergeTwoOrderedLists2(l1Node, l2Node.next);
    return l2Node;
  }
};

let output = mergeTwoOrderedLists2(myList1Node1, myList2Node1);

console.log({output});

// TODO Fix. The merge doesn't seem to work...
// leetCodeListIterator(output);



