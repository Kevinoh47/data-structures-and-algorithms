'use strict';

// const insertShiftArray = require('./array_shift.js');
// const binarySearch = require('./array_binary_search.js');

// const Node = require('./node.js');
// const StackAndQueue = require('./StacksAndQueues/stacks-and-queues.js');


const {Queue} = require('./queueWithStacks/queue-with-stacks.js');

let myPseudoQueue = new Queue();

myPseudoQueue.enqueue(1);
myPseudoQueue.enqueue(2);
myPseudoQueue.enqueue(3);
myPseudoQueue.enqueue(4);
myPseudoQueue.enqueue(5);
myPseudoQueue.enqueue(6);
myPseudoQueue.enqueue(7);

console.log('MY PSEUDO CUEUE', myPseudoQueue.stack1);

console.log('dequeue....', myPseudoQueue.dequeue());

// let myOrderedArr = [47, 49, 55, 56, 60, 70];
// let mySearchKey = 56;

// console.log(binarySearch(myOrderedArr, mySearchKey));

// let myStack = new StackAndQueue.Stack();
// myStack.push(100);
// //console.log(myStack);
// myStack.push(200);
// //console.log(myStack);
// myStack.push(300);
// //console.log(myStack);
// myStack.push(400);
// //console.log(myStack);
// myStack.push(500);
// //console.log(myStack);
// myStack.pop();
// //console.log(myStack);
// console.log(myStack.peek());
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.pop();
// console.log(myStack);

// let myStack = new Stack();
// myStack.push(new Node(1));
// myStack.push(new Node(2));
// myStack.push(new Node(3));
// myStack.push(new Node(4));
// myStack.push(new Node(5));


// console.log(myStack);

// console.log(myStack.pop(), myStack.top);
// console.log(myStack.pop(), myStack.top);
// console.log(myStack.pop(), myStack.top);
// console.log(myStack.pop(), myStack.top);
// console.log(myStack.pop(), myStack.top);
// console.log(myStack.pop(), myStack.top);

// console.log(myStack);

// myStack.push(new Node(11));
// myStack.push(new Node(12));
// myStack.push(new Node(13));
// myStack.push(new Node(14));
// myStack.push(new Node(15));

// console.log(myStack);
// console.log(myStack.pop(), myStack.top);
// console.log(myStack.peek(), myStack.top);

// console.log('binarySearch', binarySearch(myOrderedArr, mySearchKey));
// console.log('insertShiftArray', insertShiftArray(myOrderedArr, mySearchKey));

