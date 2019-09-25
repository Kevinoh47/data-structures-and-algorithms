/**
 * https://www.interviewcake.com/question/javascript/bst-checker?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23262:%20Binary%20Search%20Tree%20Checker&utm_medium=email&utm_medium=email
 */

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const firstN = new BinaryTreeNode(50);
const secondN = new BinaryTreeNode(25);
const thirdN = new BinaryTreeNode(75);
const fourthN = new BinaryTreeNode(10);
const fifthN = new BinaryTreeNode(32);
const sixthN = new BinaryTreeNode(62);
const seventhN = new BinaryTreeNode(100);


/**
 * add our own wrapper tree class:
 */

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }
// }

/***
 *                   firstN
 *        secondN               thirdN
 * fourthN     fifthN     sixthN        seventhN
 */

firstN.left = secondN;
firstN.right = thirdN;
secondN.left = fourthN;
secondN.right = fifthN;
thirdN.left = sixthN;
thirdN.right = seventhN;

// console.log({firstN});
// console.log({secondN});
// console.log({thirdN});
// console.log({fourthN});
// console.log({fifthN});
// console.log({sixthN});
// console.log({seventhN});

// const myBTree = new BinaryTree();
// myBTree.root = firstN;

/**
 * Write a function to check if is our Binary Tree is a true BST.
 * I have used an inOrder depth-first strategy here.
 */

const bSTChecker = keyNode => {

  let isBST = true;

  const _checker = node => {
    
    if(isBST && node.left) {
      if(node.value > node.left.value) {
        _checker(node.left);
      }  
      else {
        isBST = false;
      }
    }

    
    if(isBST && node.right) {
      if (node.value < node.right.value) {
        _checker(node.right);
      } 
      else {
        isBST = false;
      }
    }

    return isBST;
  };
  return _checker(keyNode);
};

console.log(`\n ... testing for true ... \n`);
console.log('expect true: ', bSTChecker(firstN));

console.log(`\n ... test for false  ... \n`);

secondN.left = fifthN; // switched
secondN.right = fourthN; // switched

console.log('switched left and right on second node: ', secondN);
console.log('expect false: ', bSTChecker(firstN));

/**
 * NOTES
 * https://www.interviewcake.com/concept/javascript/dfs?utm_source=drip&utm_medium=email&utm_campaign=Interview+Cake+Weekly+Problem+%23262%3A+Binary+Search+Tree+Checker
 * 
 *  Depth-first search (DFS) is a method for exploring a tree or graph. In a DFS, you go as deep as possible down one path before backing up and trying a different one.

Depth-first search is like walking through a corn maze. You explore one path, hit a dead end, and go back and try a different one.

Here's a how a DFS would traverse this tree, starting with the root: 

We'd go down the first path we find until we hit a dead end ... then do it again, again...

 Until we reach the end.

Depth-first search is often compared with breadth-first search.

Advantages:

    Depth-first search on a binary tree generally requires less memory than breadth-first.
    Depth-first search can be easily implemented with recursion.

Disadvantages

    A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.

 */


/**
 * now write a basic in Order depth-first traverser:
 *
 */

const inOrder = keyNode => {

  let inOrderValues = [];

  const _traverser = node => {
    
    if(node.left) { _traverser(node.left); }

    inOrderValues.push(node.value);

    if(node.right) {  _traverser(node.right); }
  };
  _traverser(keyNode);
  return inOrderValues;
};

console.log(`\n ... test inOrder traversal for correct BST  ... \n`);

secondN.left = fourthN; // switched back
secondN.right = fifthN; // switched back

console.log('switched back children on second node: ', secondN);
console.log('expect ordered array: ', inOrder(firstN));