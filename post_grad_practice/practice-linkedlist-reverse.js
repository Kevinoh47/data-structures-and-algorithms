/**
 * https://www.interviewcake.com/question/javascript/reverse-linked-list?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23240:%20Reverse%20A%20Linked%20List&utm_medium=email&utm_medium=email&__s=qawx3defqcsp8oc8uzqz
 * 
 *  Write a function for reversing a linked list. ↴ Do it in place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
 */
'use strict';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myListIterator = LLN => {

  let current = LLN;

  while (current.next) {
    // console.log({current});
    console.log(current.value);

    current = current.next;
  }
  // console.log({current});
  console.log(current.value);
};

let myListReverser = LLN => {

  if (!LLN) {
    return null;
  }
  if (LLN.next === null) {
    return LLN;
  }

  let current = LLN;
  let temp = {}, previous = null;

  while (current && current.next) {
    temp = {...current} ;
    
    current.next = previous;
    previous = current;
    current = temp.next;
  }
  // old tail is the new head;
  current.next = previous;
  return current;
};

const one = new LinkedListNode(1);
const two = new LinkedListNode(2);
const three = new LinkedListNode(3);
const four = new LinkedListNode(4);

one.next = two;
two.next = three;
three.next = four;

myListIterator(one);
console.log('\n ... \n');

let myNewHead = myListReverser(one);
console.log({myNewHead});

console.log({one});
console.log({two});
console.log({three});
console.log({four});

console.log('\n ... \n');
myListIterator(myNewHead);


/** 
 * Interview Cake solution, which is a little simpler:
 * https://www.interviewcake.com/question/javascript/reverse-linked-list?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23240:%20Reverse%20A%20Linked%20List&utm_medium=email&utm_medium=email&__s=qawx3defqcsp8oc8uzqz
 */

function reverse(headOfList) {
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  // Until we have 'fallen off' the end of the list
  while (currentNode) {

    // Copy a pointer to the next element
    // before we overwrite currentNode.next
    nextNode = currentNode.next;

    // Reverse the 'next' pointer
    currentNode.next = previousNode;

    // Step forward in the list
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

/**
 * 
Bonus

This in-place ↴ reversal destroys the input linked list. What if we wanted to keep a copy of the original linked list? Write a function for reversing a linked list out-of-place.

*/

function reverseOutOfPlace(headOfList) {

  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;
  let newCurrent;

  while(currentNode) {
    nextNode = currentNode.next;

    newCurrent = new LinkedListNode(currentNode.value);
    newCurrent.next = previousNode;

    previousNode = newCurrent;
    
    currentNode = nextNode;
  }
  return newCurrent;
}

console.log('\n ... \n');

let five = new LinkedListNode(5);
let six = new LinkedListNode(6);
let seven = new LinkedListNode(7);
let eight = new LinkedListNode(8);

five.next = six;
six.next = seven;
seven.next = eight;

console.log({five});
console.log({six});
console.log({seven});
console.log({eight});

console.log('\n ... iterate new ll ... \n');
myListIterator(five);
console.log('\n ... reverseOutOfPlace ... \n');

myNewHead = reverseOutOfPlace(five);
console.log({myNewHead});

console.log('\n ... reverseOutOfPlace ... \n');
myListIterator(myNewHead);




