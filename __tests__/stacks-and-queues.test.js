'use strict';

const StacksAndQueues = require('../StacksAndQueues/stacks-and-queues.js');
const Queue = StacksAndQueues.Queue;
const Stack = StacksAndQueues.Stack;

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

let myQueue = new Queue();
myQueue.enqueue(100);
myQueue.enqueue(200);
myQueue.enqueue(300);
myQueue.enqueue(400);

describe ('The queue peek method', () => {
  it('can see the front element on the queue', () => {
    let result = myQueue.peek();
    expect(result.value).toEqual(100);
  });
});

describe ('The queue enqueue method', () => {
  it('can add an element to the back of the queue', () => {
    myQueue.enqueue(500);
    let result = myQueue.linkedList.length;
    expect(result).toEqual(5);
  });
});

describe ('The queue dequeue method', () => {
  it('can remove an element from the front of the queue', () => {
    let result = myQueue.dequeue();
    expect(result.value).toEqual(100);
  });
});

describe ('The queue dequeue method', () => {
  it('can reset the front property of the queue to the correct node', () => {
    let result = myQueue.peek();
    expect(result.value).toEqual(200);
  });
});

describe ('The stack peek method', () => {
  it('can see the top element on the stack', () => {
    let result = myStack.peek();
    expect(result.value).toEqual(4);
  });
});

describe ('The stack push method', () => {
  it('can add an element to the top of the stack', () => {
    myStack.push(5);
    let result = myStack.peek();
    expect(result.value).toEqual(5);
  });
});

describe ('The stack pop method', () => {
  it('can remove an element from the top of the stack', () => {
    myStack.pop();
    let result = myStack.peek();
    expect(result.value).toEqual(4);
  });
});



