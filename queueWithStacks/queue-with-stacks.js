'use strict';

const {Stack} = require('../StacksAndQueues/stacks-and-queues.js');

class Queue {
  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue1(value) { this.stack1.push(value);}
  enqueue2(value) { this.stack2.push(value);}

  dequeue1() { return this.stack1.pop(); }
  dequeue2() { return this.stack2.pop(); }

  enqueue(value) {
    this.enqueue1(value);
  }

  dequeue() {

    // pops stack 1 and enqueues stack 2 until at base.
    let len1 = this.stack1.linkedList.length;
    while ( len1 > 1) {
      let current = this.dequeue1();
      this.enqueue2(current);
      len1--;
    }
    // Once at base, pops base and store for return, leaving stack 1 empty.
    const dequeued = this.dequeue1();

    // Now, pops stack 2, and enqueue stack 1 again until stack 2 is empty.

    let len2 = this.stack2.linkedList.length;
    while (len2 > 0) {
      let current = this.dequeue2();
      this.enqueue1(current);
      len2--;
    }
    // now return what we dequeued from stack 1, above.
    return dequeued;
  }

  peek() {
    return this.stack1.linkedList.head;
  }
  
}

module.exports = {Queue};

