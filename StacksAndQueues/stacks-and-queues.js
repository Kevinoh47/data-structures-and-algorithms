'use strict';

const Node = require('../node.js');
const linkedList = require('../linked-list.js');

class Stack {
  constructor () {
    this.top = null;
    this.linkedList = new linkedList();
  }

  push(value) {
    this.linkedList.append(value);
    this.top = new Node(value);
    return this;
  }

  pop() {
    let popped = this.linkedList.delete();
    this.top = this.linkedList.tail;
    return popped;
  }

  peek2() {
    return this.linkedList.peek();
  }

}

module.exports = Stack;
