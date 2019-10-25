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
 * 
 * GOTCHA:    
 * 
 *            50
 *      30
 * 20       60
 * 
 * Note that checking against the immediate parent is correct, but that is insufficient.
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

/**
 * This approach just outputs the array from an inOrder traversal, then checks that the output is indeed ordered
 * 
 * Note this works but it must iterate the entire array rather than exit on encountering false;
 */
// const BSTChecker2 = rootNode => {
//   let output = inOrder(rootNode);
//   console.log({output});

//   let orderTest = output.reduce((summary, current) => {
//     console.log(summary, current);

//     if (!summary || summary > current) {
//       summary = false; 
//       return summary;
//     }
//     else if (summary) {
//       summary = current;
//       return summary;
//     }
//   }, output[0] - 1 );

//   return (orderTest) ? true : false;
// };

// console.log(`\n ... test new BSTChecker that should manage for errors where grandparent order is incorrect  ... \n`);
// console.log('expect true: ', BSTChecker2(firstN));

// // immediate parents are correct, but ordering for grandparents is now incorrect
// secondN.right = sixthN;
// thirdN.left = fifthN;
// console.log('expect false: ', BSTChecker2(firstN));


/**
 * This version works, and is more efficient than the previous, commented out version BSTChecker2. Furthermore, it is the easiest to understand. 
 * 
 * However, it is unlikely to be the most efficient, since I have to extract all then nodes, flatten them into an array, and then iterate until either we find disorder or the entire array is ordered as expected.
 * 
 * See final  isBinarySearchTree function below taken from interview cake solution. But note that IC also says:
 * 
 * "Checking if an in-order traversal of the tree is sorted is a great answer too, especially if you're able to implement it without storing a full list of nodes". 
 * 
 */
// const BSTChecker2 = rootNode => {
//   let output = inOrder(rootNode);
//   console.log({output});

//   const disordered = output.some((value, index) => {
//     if (index > 0) {
//       const a = output[index-1];
//       const b = value;

//       return a > b;
//     }
//   });

//   console.log({disordered});
//   return !disordered;
// };

/**
 * one more time, this time using the inOrder traversal to test ordering in time, as suggested by IC solution, rather than having to fully traverse an incorrectly ordered Binary Tree:
 */

const BSTChecker2 = rootNode => {

  let inOrderValues = [];

  const _comparer = node => {
    inOrderValues.push(node.value);
    const len = inOrderValues.length;

    if (len > 1) {
      const [a, b] = [inOrderValues[len - 2], inOrderValues[len - 1]];

      if (a > b) return false;
    }
    return true;
  };

  const _inOrderTraverser = node => {
    
    if(node.left) { _inOrderTraverser(node.left); }

    if(!_comparer(node)) {return false;}

    if(node.right) {  _inOrderTraverser(node.right); }

    return true;
  };

  return _inOrderTraverser(rootNode);

};

console.log(`\n ... test new BSTChecker that should manage for errors where grandparent order is incorrect  ... \n`);
console.log('expect true: ', BSTChecker2(firstN));

// immediate parents are correct, but ordering for grandparents is now incorrect
secondN.right = sixthN;
thirdN.left = fifthN;

console.log('expect false: ', BSTChecker2(firstN));

/**
 * Attempting to modify the first version using upper and lower bounds 
 * 
 * https://www.interviewcake.com/question/javascript/bst-checker?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23262:%20Binary%20Search%20Tree%20Checker&utm_medium=email&utm_medium=email
 * 
 */

function isBinarySearchTree(treeRoot) {

  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {

      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}

console.log(`\n ... Bracket Validator  ... \n`);
/**
 * bracket validator
 * https://www.interviewcake.com/question/javascript/bracket-validator?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23252:%202nd%20Largest%20Item%20in%20a%20Binary%20Search%20Tree&utm_medium=email&utm_medium=email
 */

function bracketValidator (str) {
  const myStr = [...str];
  const regEx = /[[\]{}()]/;
  const myStack = [];

  let curlyOpenCt = 0, curlyCloseCt = 0, bracketOpenCt = 0, bracketCloseCt = 0, braceOpenCt = 0, braceCloseCt = 0;

  for (let i=0; i<myStr.length; i++) {
    let curr=myStr[i];
    
    if (curr.match(regEx)) {
      const lastStackItem = myStack[myStack.length-1];
      switch(curr) {
      case '{':
        curlyOpenCt++;
        myStack.push('{');
        break;
      case '}':
        if (lastStackItem === '{') {
          myStack.pop();
          curlyOpenCt--;
        }
        else {
          curlyCloseCt++;
          myStack.push('}');
        }
        break;
      case '[':
        bracketOpenCt++;
        myStack.push('[');
        break;
      case ']':
        if (lastStackItem === '[') {
          myStack.pop();
          bracketOpenCt--;
        }
        else {
          bracketCloseCt++;
          myStack.push(']');
        }
        break;
      case '(':
        braceOpenCt++;
        myStack.push('(');
        break;
      case ')':
        if (lastStackItem === '(') {
          myStack.pop();
          braceOpenCt--;
        }
        else {
          braceCloseCt++;
          myStack.push(')');
        }
        break;
      } 

      if ( curlyCloseCt > curlyOpenCt || bracketCloseCt > bracketOpenCt || braceCloseCt > braceOpenCt ) { 
        console.log('oops we have a closer in front of any openner: ', curr, curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);
        return false; 
      
      }

      // this test is not necessary as the final test catches it.
      // if (i === myStr.length - 1 ) {
      //   if ( curlyCloseCt !== curlyOpenCt || bracketCloseCt !== bracketOpenCt || braceCloseCt !== braceOpenCt ) { 
      //     console.log('oops counts arent matching at the end: ', curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);
      //     return false; 
      //   }
      // }

    }
  }

  console.log('oops we are at the end and we have a mess: ', myStack, curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);

  // Stack should be empty
  return myStack.length === 0;
}


let str = 'the rain in spain stays {mainly} in (the) [p]lain'; 
console.log('expect true: ', bracketValidator(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in (the [p]lain'; 
console.log('expect false (count mismatch): ', bracketValidator(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in ) the [p]lain'; 
console.log('expect false (leading closer): ', bracketValidator(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly(} in ) the [p]lain'; 
console.log('expect false (counts are good but mismatched): ', bracketValidator(str));
console.log(`\n ...  \n`);

/**
 * My approach is very similar, but not as clean (or clever), as the provided solution:
 */

function isValid(code) {

  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } 
    else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }
      const lastUnclosedOpener = openersStack.pop();

      // If this closer doesn't correspond to the most recently
      // seen unclosed opener, short-circuit, returning false
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}

str = 'the rain in spain stays {mainly} in (the) [p]lain'; 
console.log('expect true: ', isValid(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in (the [p]lain'; 
console.log('expect false (count mismatch): ', isValid(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in ) the [p]lain'; 
console.log('expect false (leading closer): ', isValid(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly(} in ) the [p]lain'; 
console.log('expect false (counts are good but mismatched): ', isValid(str));
console.log(`\n ...  \n`);

console.log(`\n ... My Bracket Validator, refactored a bit ... \n`);
/**
 * bracket validator
 * https://www.interviewcake.com/question/javascript/bracket-validator?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23252:%202nd%20Largest%20Item%20in%20a%20Binary%20Search%20Tree&utm_medium=email&utm_medium=email
 */

function bracketValidator2 (str) {
  const regEx = /[[\]{}()]/;
  const myStack = [];

  let curlyOpenCt = 0, curlyCloseCt = 0, bracketOpenCt = 0, bracketCloseCt = 0, braceOpenCt = 0, braceCloseCt = 0;

  for (let i=0; i<str.length; i++) {
    const curr=str.charAt(i);
    
    if (curr.match(regEx)) {
      const lastStackItem = myStack[myStack.length-1];
      switch(curr) {
      case '{':
        curlyOpenCt++;
        myStack.push('{');
        break;
      case '}':
        if (lastStackItem === '{') {
          myStack.pop();
          curlyOpenCt--;
        }
        else {
          curlyCloseCt++;
          myStack.push('}');
        }
        break;
      case '[':
        bracketOpenCt++;
        myStack.push('[');
        break;
      case ']':
        if (lastStackItem === '[') {
          myStack.pop();
          bracketOpenCt--;
        }
        else {
          bracketCloseCt++;
          myStack.push(']');
        }
        break;
      case '(':
        braceOpenCt++;
        myStack.push('(');
        break;
      case ')':
        if (lastStackItem === '(') {
          myStack.pop();
          braceOpenCt--;
        }
        else {
          braceCloseCt++;
          myStack.push(')');
        }
        break;
      } 

      if ( curlyCloseCt > curlyOpenCt || bracketCloseCt > bracketOpenCt || braceCloseCt > braceOpenCt ) {  return false;  }
    }
  }
  // Stack should be empty
  return myStack.length === 0;
}

str = 'the rain in spain stays {mainly} in (the) [p]lain'; 
console.log('expect true: ', bracketValidator2(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in (the [p]lain'; 
console.log('expect false (count mismatch): ', bracketValidator2(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in ) the [p]lain'; 
console.log('expect false (leading closer): ', bracketValidator2(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly(} in ) the [p]lain'; 
console.log('expect false (counts are good but mismatched): ', bracketValidator2(str));
console.log(`\n ...  \n`);