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
    console.log({current});
    current = current.next;
  }
  console.log({current});
};

let myListReverser = LLN => {

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


