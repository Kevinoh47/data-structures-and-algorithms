'use strict';

const PseudoQueue = require('../queueWithStacks/queue-with-stacks.js');

let myPseudoQueue = new PseudoQueue();

myPseudoQueue.push(1);
myPseudoQueue.push(2);
myPseudoQueue.push(3);
myPseudoQueue.push(4);

describe ('The queue enqueue method', () => {
  it('can add an element to the back of the queue', () => {
    myPseudoQueue.enqueue(5);
    let result = myPseudoQueue.linkedList.length;
    expect(result).toEqual(5);
  });
});

describe ('The queue dequeue method', () => {
  it('can remove an element from the front of the queue', () => {
    let result = myPseudoQueue.dequeue();
    expect(result.value).toEqual(1);
  });
});






