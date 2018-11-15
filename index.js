'use strict';

// const insertShiftArray = require('./array_shift.js');
// const binarySearch = require('./array_binary_search.js');

// const Node = require('./node.js');
// const StackAndQueue = require('./StacksAndQueues/stacks-and-queues.js');

// const {Queue} = require('./queueWithStacks/queue-with-stacks.js');

const {BtNode, BinaryTree, BinarySearchTree} = require('./tree/tree.js');

let myBTree = new BinaryTree();

myBTree.add(47);
myBTree.add(23);
myBTree.add(26);
myBTree.add(49);
myBTree.add(1);
myBTree.add(0);
myBTree.add(142);
myBTree.add(99);
myBTree.add(66);
myBTree.add(33);
myBTree.add(199);
myBTree.add(102);
myBTree.add(47); // regular BTree would allow dups

console.log('MyBTree', myBTree);

let myBSearchTree = new BinarySearchTree();
myBSearchTree.add(47);
myBSearchTree.add(23);
myBSearchTree.add(26);
myBSearchTree.add(49);
myBSearchTree.add(1);
myBSearchTree.add(0);
myBSearchTree.add(142);
myBSearchTree.add(99);
myBSearchTree.add(66);
myBSearchTree.add(33);
myBSearchTree.add(199);
myBSearchTree.add(102);
myBSearchTree.add(47); //  BST should not allow dups

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

