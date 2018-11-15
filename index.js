'use strict';

// const insertShiftArray = require('./array_shift.js');
// const binarySearch = require('./array_binary_search.js');

// const Node = require('./node.js');
// const StackAndQueue = require('./StacksAndQueues/stacks-and-queues.js');

// const {Queue} = require('./queueWithStacks/queue-with-stacks.js');

const {BinaryTree, BinarySearchTree} = require('./tree/tree.js');

let myBTree = new BinaryTree();

myBTree.insert(47);
myBTree.insert(23);
myBTree.insert(26);
myBTree.insert(49);
myBTree.insert(1);
myBTree.insert(0);
myBTree.insert(142);
myBTree.insert(99);
myBTree.insert(66);
myBTree.insert(33);
myBTree.insert(199);
myBTree.insert(102);
myBTree.insert(47); // regular BTree would allow dups

console.log('MyBTree', myBTree);

let myBSearchTree = new BinarySearchTree();
myBSearchTree.insert(47);
myBSearchTree.insert(23);
myBSearchTree.insert(26);
myBSearchTree.insert(49);
myBSearchTree.insert(1);
myBSearchTree.insert(0);
myBSearchTree.insert(142);
myBSearchTree.insert(99);
myBSearchTree.insert(66);
myBSearchTree.insert(33);
myBSearchTree.insert(199);
myBSearchTree.insert(102);
myBSearchTree.insert(47); //  BST should not allow dups

console.log('myBSearchTree', myBSearchTree);


// let myPseudoQueue = new Queue();

// myPseudoQueue.enqueue(1);
// myPseudoQueue.enqueue(2);
// myPseudoQueue.enqueue(3);
// myPseudoQueue.enqueue(4);
// myPseudoQueue.enqueue(5);
// myPseudoQueue.enqueue(6);
// myPseudoQueue.enqueue(7);

// console.log('MY PSEUDO CUEUE', myPseudoQueue.stack1);

// console.log('dequeue....', myPseudoQueue.dequeue());

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

