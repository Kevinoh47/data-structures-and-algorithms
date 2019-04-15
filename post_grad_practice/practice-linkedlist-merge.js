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


