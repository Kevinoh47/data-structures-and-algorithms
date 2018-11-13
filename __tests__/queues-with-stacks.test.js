'use strict';

const {Queue} = require('../queueWithStacks/queue-with-stacks.js');

let myPseudoQueue = new Queue();

myPseudoQueue.enqueue(1);
myPseudoQueue.enqueue(2);
myPseudoQueue.enqueue(3);
myPseudoQueue.enqueue(4);

describe ('The queue enqueue method', () => {
  it('can add an element to the back of the queue', () => {
    myPseudoQueue.enqueue(5);
    let result = myPseudoQueue.stack1.linkedList.length;
    expect(result).toEqual(5);
  });
});

describe ('The queue peek method', () => {
  it('can show the value of the first node in the queue', () => {
    let result = myPseudoQueue.peek();
    expect(result.value).toEqual(1);
  });
});

describe ('The queue dequeue method', () => {
  it('can remove an element from the front of the queue', () => {
    let result = myPseudoQueue.dequeue();
    expect(result.value).toEqual(1);
  });
});






