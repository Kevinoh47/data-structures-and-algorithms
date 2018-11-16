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

//console.log('MyBTree', myBTree);
//let myRootNode = myBTree.getRootNode();
//console.log('Root, RootLeft, RootRight', myRootNode, myRootNode.left, myRootNode.right);

// console.log('INORDER BTree TRAVERSAL', myBTree.inOrder());

let bst2 = new BinarySearchTree();
let input = [11,7,15,5,3,9,8,10,13,12,14,20,18,25];
input.map(val =>bst2.add(val));
console.log('BST2 ORDERED RESULTS: ', bst2.inOrder());
console.log('BST2 PRE-ORDERED RESULTS: ', bst2.preOrder());
console.log('BST2 POST-ORDERED RESULTS: ', bst2.postOrder());


// notice dups are not allowed in a BST but are in a plain BT
let bst1 = new BinarySearchTree();
let bt1 = new BinaryTree();
input = [47,23,26,49,1,0,142,99,66,33,199,102,47];
input.map(val=>bst1.add(val));
input.map(val=>bt1.add(val));
// console.log('BST1 ordered results: ',bst1.inOrder());
// console.log('BST1 pre-ordered results: ',bst1.preOrder());

// console.log('BT1 ordered results: ',bt1.inOrder());
// console.log('BT1 pre-ordered results: ',bt1.preOrder());


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

