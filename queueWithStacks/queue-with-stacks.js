'use strict';

const StacksAndQueues = require('../StacksAndQueues/stacks-and-queues.js');

const Stack = new StacksAndQueues.Stack();

class PseudoQueue {
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
    let dequeued;
    // pops stack 1 and enqueues stack 2 until at base.
    let s1count = this.stack1.linkedList.length;
    while (s1count > 0) {
      let current = this.dequeue1();
      this.enqueue2(current);
      s1count--;
    }
    // Once at base, pops base storing for return, leaving stack 1 empty.
    dequeued = this.dequeue1();

    s1count = 0;

    // Then, pops stack 2, and enqueues stack 1 again until stack 2 is empty.
    let s2count = this.stack2.linkedList.length;
    while (s2count >=0) {
      let current = this.dequeue2();
      this.enqueue1(current);
      s2count--;
    }
    // now return what we dequeued from stack 1, above.
    return dequeued;
  }
  
}

module.exports = {PseudoQueue};
