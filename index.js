'use strict';

const binarySearch = require('./array_binary_search.js');

const Node = require('./node.js');
const Stack = require('./StacksAndQueues/stacks-and-queues.js');

// let myOrderedArr = [47, 49, 55, 56, 60, 70];
// let mySearchKey = 56;

// console.log(binarySearch(myOrderedArr, mySearchKey));

let myStack = new Stack();

myStack.push(new Node(1));
myStack.push(new Node(2));
myStack.push(new Node(3));
myStack.push(new Node(4));
myStack.push(new Node(5));


console.log(myStack);

console.log(myStack.pop(), myStack.top);
console.log(myStack.pop(), myStack.top);
console.log(myStack.pop(), myStack.top);
console.log(myStack.pop(), myStack.top);
console.log(myStack.pop(), myStack.top);
console.log(myStack.pop(), myStack.top);



