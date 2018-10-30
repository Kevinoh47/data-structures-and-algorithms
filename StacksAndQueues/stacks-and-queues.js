'use strict';

const linkedList = require('../linked-list.js');

class Stack {
  constructor () {
    this.top = null;
    this.linkedList = new linkedList();
  }

  push(node) {
    let current = (this.linkedList.head) ? this.linkedList.head : null;

    if (!current) {
      this.linkedList.head = node;
      this.top = node;
      return this;
    }

    while(current.next) {
      current = current.next;
    }
    if (!current.next) {
      current.next = node;
      this.top = node;
      return this;
    }
  }

  pop() {
    let current = (this.linkedList.head) ? this.linkedList.head : null;
    let previous;
    if (!current) {return null;}

    while (current.next) {
      previous = current;
      current = current.next;
    }
    if(previous && !current.next) {
      previous.next = null; 
      this.top = previous;
    }
    else if (!previous && current) {
      this.top = null;
      this.linkedList.head = null;
    }
    return current;
  }

}

module.exports = Stack;
