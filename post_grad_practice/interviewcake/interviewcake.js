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

console.log(`\n ... Binary Search Tree Checker ... \n`);
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
        console.log('fail! we have a closer in front of any openner: ', curr, curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);
        return false; 
      
      }

      // this test is not necessary as the final test catches it.
      // if (i === myStr.length - 1 ) {
      //   if ( curlyCloseCt !== curlyOpenCt || bracketCloseCt !== bracketOpenCt || braceCloseCt !== braceOpenCt ) { 
      //     console.log('fail! counts arent matching at the end: ', curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);
      //     return false; 
      //   }
      // }

    }
  }

  console.log('fail! we are at the end and we have a mess: ', myStack, curlyCloseCt, curlyOpenCt, bracketCloseCt, bracketOpenCt, braceCloseCt, braceOpenCt);

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

console.log(`\n ... The Interview Cake Solution ... \n`);

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

      // Aha! from the first time we see a closer, it has to match the previous openner! And from there on all closers have to match openners.
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

console.log(`\n ... My Bracket Validator, refactored again ... \n`);
/**
 * 
 * Note: we finally realized that in all case, eventually there has to be an imbedded paren that matches, such as {}. Once you find the most embedded one (or possibly there are several separate instances of embedded ones), you can start peeling them back, until they are all matching or not. Thus, we always push starts onto the stack. For closers, we check if the previous one was a matching opener. If so, we pop it. If not, something is out of order and we can return ALWAYS false. 
 */

function bracketValidator3 (str) {
  const regEx = /[[\]{}()]/;
  const myStack = [];

  for (let i=0; i<str.length; i++) {
    const curr=str.charAt(i);
    
    if (curr.match(regEx)) {
      const lastStackItem = myStack[myStack.length-1];
      switch(curr) {
      case '{':
        myStack.push('{');
        break;

      case '}':
        if (lastStackItem === '{') {
          myStack.pop();
        } else { return false; }
        break;

      case '[':
        myStack.push('[');
        break;

      case ']':
        if (lastStackItem === '[') {
          myStack.pop();
        } else { return false; }
        break;

      case '(':
        myStack.push('(');
        break;

      case ')':
        if (lastStackItem === '(') {
          myStack.pop();
        } else { return false; }
        break;
      } 
    }
  }
  return myStack.length === 0;
}

str = 'the rain in spain stays {mainly} in (the) [p]lain'; 
console.log('expect true: ', bracketValidator3(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in (the [p]lain'; 
console.log('expect false (count mismatch): ', bracketValidator3(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly} in ) the [p]lain'; 
console.log('expect false (leading closer): ', bracketValidator3(str));
console.log(`\n ...  \n`);

str = 'the rain in spain stays {mainly(} in ) the [p]lain'; 
console.log('expect false (counts are good but mismatched): ', bracketValidator3(str));
console.log(`\n ...  \n`);


console.log(`\n ...  Sort unsorted scores with a max score provided ... \n`);
/**
 * https://www.interviewcake.com/question/javascript/top-scores?course=fc1&section=hashing-and-hash-tables
 * 
 * write a function that takes an unordered list of numbers and a top score, and returns an ordered list of numbers -- in better than O(nlog(n)) time.
 * 
 * 
Gotchas

Multiple players can have the same score! If 10 people got a score of 90, the number 90 should appear 10 times in our output array.

We can do this in O(n)O(n)O(n) time and space.
Breakdown

O(nlg⁡n)O(n\lg{n})O(nlgn) is the time to beat. Even if our array of scores were already sorted we'd have to do a full walk through the array to confirm that it was in fact fully sorted. So we have to spend at least O(n)O(n)O(n) time on our sorting function. If we're going to do better than O(nlg⁡n)O(n\lg{n})O(nlgn), we're probably going to do exactly O(n)O(n)O(n).

What are some common ways to get O(n)O(n)O(n) runtime?

 * 
 * My Approach: create an empty array with slots for each possible score (0-100).
 * Iterate the array, populating the array pushing values into corresponding indexes.
 * 
 * To handle duplicate scores, test for count and push a value for each instance to the results.
 */

const orderScores = ( arr, num ) => {
  let newOrder = new Array(num+1);

  arr.forEach(e => { 
    if(!isNaN(e)) {
      if (newOrder[e] === undefined) {
        newOrder[e] = 1;
      } else { 
        let currCount = newOrder[e];
        newOrder[e] = currCount + 1; }
    }
  });
  
  let filtered = [];
  for (const [idx, e] of newOrder.entries()) {
    if (!isNaN(e)) {
      if(e === 1) {
        filtered.push(idx);
      }
      else if(e > 1) {
        let count = e;
        while (count > 0 ) {
          filtered.push(idx);
          count--;
        }
      }
    }
  }
  
  return filtered.reverse();
};


let unsortedScores = [37, 89, 41, 65, 91, 53];

console.log(orderScores(unsortedScores, 100));

unsortedScores = [37, 89, 41, 65, 91, 41, 89, 53, 89];

console.log(orderScores(unsortedScores, 100));

unsortedScores = [37, 89, 41, 0, 65, 91, 41, 89, 53, 0, 89];

console.log(orderScores(unsortedScores, 100));

/**
 * the Interview Cake solution:
 * As usual, it is more elegant than mine... although my strategy is the same.
 * 
 * 
Complexity

O(n) time and O(n) space, where n is the number of scores.

Wait, aren't we nesting two loops towards the bottom? So shouldn't it be O(n2) time? Notice what those loops iterate over. The outer loop runs once for each unique number in the array. The inner loop runs once for each time that number occurred.

So in essence we're just looping through the nnn numbers from our input array, except we're splitting it into two steps: (1) each unique number, and (2) each time that number appeared.

Here's another way to think about it: in each iteration of our two nested loops, we append one item to sortedScores. How many numbers end up in sortedScores in the end? Exactly how many were in our input array! n.

If we didn't treat highestPossibleScore as a constant, we could call it k and say we have O(n+k) time and O(n+k) space.

 */
console.log(`\n ...  Inteview Cake Sorted Scores Solution ... \n`);
function sortScores(unorderedScores, highestPossibleScore) {

  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}


unsortedScores = [37, 89, 41, 65, 91, 53];

console.log(sortScores(unsortedScores, 100));

unsortedScores = [37, 89, 41, 65, 91, 41, 89, 53, 89];

console.log(sortScores(unsortedScores, 100));

unsortedScores = [37, 89, 41, 0, 65, 91, 41, 89, 53, 0, 89];

console.log(sortScores(unsortedScores, 100));

/**
 * Greedy Algorithm problem: 
 * https://www.interviewcake.com/concept/javascript/greedy?course=fc1&section=greedy
 * 
 *  A greedy algorithm builds up a solution by choosing the option that looks the best at every step.

Say you're a cashier and need to give someone 67 cents (US) using as few coins as possible. How would you do it?

Whenever picking which coin to use, you'd take the highest-value coin you could. A quarter, another quarter, then a dime, a nickel, and finally two pennies. That's a greedy algorithm, because you're always greedily choosing the coin that covers the biggest portion of the remaining amount.

Some other places where a greedy algorithm gets you the best solution:

    Trying to fit as many overlapping meetings as possible in a conference room? At each step, schedule the meeting that ends earliest.
    Looking for a minimum spanning tree in a graph? At each step, greedily pick the cheapest edge that reaches a new vertex.

Careful: sometimes a greedy algorithm doesn't give you an optimal solution:

    When filling a duffel bag with cakes of different weights and values, choosing the cake with the highest value per pound doesn't always produce the best haul.
    To find the cheapest route visiting a set of cities, choosing to visit the cheapest city you haven't been to yet doesn't produce the cheapest overall itinerary.

Validating that a greedy strategy always gets the best answer is tricky. Either prove that the answer produced by the greedy algorithm is as good as an optimal answer, or run through a rigorous set of test cases to convince your interviewer (and yourself) that its correct. 
 * 
 * Problem: At a dollar store, return change the most efficiently.
 * available coins: $1, $.50, $.25, $.10, $.05, $.01 
 */

console.log(`\n ...  Change Maker -- Greedy Algorithm problem ... \n`);
/**
 * 
 * Note: my first try was a recursive method... but it sometimes ran over. Was unable to solve the bug.
 */


console.log(`\n ...  Change Maker -- via array.map  ... \n`);
function changeMaker(makeChangeForThisAmount) {
  const denominations = [100.00, 50.00, 20.00, 10.00, 5.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
  let change = [];
  let currentValue = makeChangeForThisAmount;

  denominations.map((e) => {
    while(e <= currentValue) {
      const diff = (currentValue - e).toFixed(2);
      change.push(e);
      currentValue = diff;
    }
  });

  
  return change;
}

console.log('make change for $1.25: ', changeMaker(1.25));
console.log(`\n ... \n`);
console.log('make change for $1.27: ', changeMaker(1.27));
console.log(`\n ... \n`);
console.log('make change for $0.25: ', changeMaker(.25));
console.log(`\n ... \n`);
console.log('make change for $0.29: ', changeMaker(.29));
console.log(`\n ... \n`);
console.log('make change for $16.87: ', changeMaker(16.87));
console.log(`\n ... \n`);


/**
 * Best profits
 * https://www.interviewcake.com/question/javascript/stock-price?course=fc1&section=greedy
 * 
 * NOTE: A version of this question was the white boarding question for my Zonar Systems interview. I solved it in an inefficient way, by iterating, and checking deltas for all previous values. Worked, and was slightly more efficent than full on inner and outer loops (because the inner loop would only run for previous indices of the outer) but still not efficient. This time, I recalled something that the dev manager Tim suggested as an improvement: track the lows and highs.
 * 
 * Here is how IC frames the problem:
 * 
 *  First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

    The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    The values are the price (in US dollars) of one share of Apple stock at that time.

So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass. 

Note that i arrived at my solution before looking at gotchas (although it took a while):

Gotchas

You can't just take the difference between the highest price and the lowest price, because the highest price might come before the lowest price. And you have to buy before you can sell.

What if the price goes down all day? In that case, the best profit will be negative.

You can do this in O(n)O(n)O(n) time and O(1)O(1)O(1) space! ↴ 
 */

console.log(`\n ...  Max Profit on buying and selling ... \n`);
let getMaxProfit = arr => {

  let currLow = {val: arr[0], idx: 0};
  let currHigh = {val: arr[0], idx: 0};
  let minLossDelta = -Number.MAX_VALUE;
  let maxGainDelta = -Number.MAX_VALUE;

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < currLow.val) { 
      currLow.val = arr[i]; currLow.idx=i; 

      if ((arr[i] - currLow.val) > minLossDelta) {
        minLossDelta = arr[i] - currLow.val;
      }
    }

    else if (arr[i] >= currHigh.val) { 
      currHigh.val = arr[i]; currHigh.idx=i; 
      
      if ((currHigh.val - currLow.val) > maxGainDelta && currLow.idx < i) {
        maxGainDelta = currHigh.val - currLow.val;
      }

    }
  }

  return Math.max(minLossDelta, maxGainDelta);
};

console.log('expect 6 (11 - 5): ', getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(`\n ... \n`);
console.log('expect 0 (no variation): ', getMaxProfit([9, 9, 9, 9, 9, 9]));
console.log(`\n ... \n`);
console.log('expect -1 (least loss): ', getMaxProfit([10, 9, 7, 6, 3, 0]));
console.log(`\n ... \n`);
console.log('expect 0 (least loss): ', getMaxProfit([10, 9, 7, 7, 3, 0]));
console.log(`\n ... \n`);
console.log('expect 0 (least loss): ', getMaxProfit([9, 9, 9, 9, 9, 8]));
console.log(`\n ... \n`);
console.log('expect 2 (6-4): ', getMaxProfit([5, 4, 6, 3, 4]));
console.log(`\n ... \n`);
console.log('expect 3 (6-3): ', getMaxProfit([5, 3, 5, 4, 6]));
console.log(`\n ... \n`);
console.log('expect 2 (5-3): ', getMaxProfit([5, 3, 5, 2, 3]));
console.log(`\n ... \n`);
console.log('expect 3 (5-2): ', getMaxProfit([5, 3, 5, 2, 5]));
console.log(`\n ... \n`);

/**
 * As usual my solution was way more complex and less elegant than Interview Cake's:

 How can we adjust our function to return a negative profit if we can only lose money? Initializing maxProfit to 0 won’t work...

Well, we started our minPrice at the first price, so let’s start our maxProfit at the first profit we could get—if we buy at the first time and sell at the second time. 

 Ok, does that work?

No! maxProfit is still always 0. What’s happening?

If the price always goes down, minPrice is always set to the currentPrice. So currentPrice - minPrice comes out to 0, which of course will always be greater than a negative profit.

When we’re calculating the maxProfit, we need to make sure we never have a case where we try both buying and selling stocks at the currentPrice.

To make sure we’re always buying at an earlier price, never the currentPrice, let’s switch the order around so we calculate maxProfit before we update minPrice.

We'll also need to pay special attention to time 0. Make sure we don't try to buy and sell at time 0. 

Solution

We’ll greedily ↴ walk through the array to track the max profit and lowest price so far.

For every price, we check if:

    we can get a better profit by buying at minPrice and selling at the currentPrice
    we have a new minPrice

To start, we initialize:

    minPrice as the first price of the day
    maxProfit as the first profit we could get

We decided to return a negative profit if the price decreases all day and we can't make any money. We could have thrown an exception instead, but returning the negative profit is cleaner, makes our function less opinionated, and ensures we don't lose information. 


Complexity

O(n) time and O(1) space. ↴ We only loop through the array once.
What We Learned

This one's a good example of the greedy ↴ approach in action. Greedy approaches are great because they're fast (usually just one pass through the input). But they don't work for every problem.

How do you know if a problem will lend itself to a greedy approach? Best bet is to try it out and see if it works. Trying out a greedy approach should be one of the first ways you try to break down a new question.

To try it on a new problem, start by asking yourself:

"Suppose we could come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What additional values would we need to keep updated as we looked at each item in our input, in order to be able to update the 'best answer so far' in constant time?"

In this case:

The "best answer so far" is, of course, the max profit that we can get based on the prices we've seen so far.

The "additional value" is the minimum price we've seen so far. If we keep that updated, we can use it to calculate the new max profit so far in constant time. The max profit is the larger of:

    The previous max profit
    The max profit we can get by selling now (the current price minus the minimum price seen so far)


*/

console.log(`\n ...  Max Profit - IC solution ... \n`);
function getMaxProfit2(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // We'll greedily update minPrice and maxProfit, so we initialize
  // them to the first price and the first possible profit
  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  // Start at the second (index 1) time
  // We can't sell at the first time, since we must buy first,
  // and we can't buy and sell at the same time!
  // If we started at index 0, we'd try to buy *and* sell at time 0.
  // this would give a profit of 0, which is a problem if our
  // maxProfit is supposed to be *negative*--we'd return 0.
  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];

    // See what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // Update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);

    // Update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

console.log('expect 6 (11 - 5): ', getMaxProfit2([10, 7, 5, 8, 11, 9]));
console.log(`\n ... \n`);
console.log('expect 0 (no variation): ', getMaxProfit2([9, 9, 9, 9, 9, 9]));
console.log(`\n ... \n`);
console.log('expect -1 (least loss): ', getMaxProfit2([10, 9, 7, 6, 3, 0]));
console.log(`\n ... \n`);
console.log('expect 0 (least loss): ', getMaxProfit2([10, 9, 7, 7, 3, 0]));
console.log(`\n ... \n`);
console.log('expect 0 (least loss): ', getMaxProfit2([9, 9, 9, 9, 9, 8]));
console.log(`\n ... \n`);
console.log('expect 2 (6-4): ', getMaxProfit2([5, 4, 6, 3, 4]));
console.log(`\n ... \n`);
console.log('expect 3 (6-3): ', getMaxProfit2([5, 3, 5, 4, 6]));
console.log(`\n ... \n`);
console.log('expect 2 (5-3): ', getMaxProfit2([5, 3, 5, 2, 3]));
console.log(`\n ... \n`);
console.log('expect 3 (5-2): ', getMaxProfit2([5, 3, 5, 2, 5]));
console.log(`\n ... \n`);


/**
 * product of three highest integers in an array of ints
 */

console.log(`\n ...  Product of three highest numbers in an array of ints ... \n`);
function productOf3HighestValues(intsArr) { 
  let first = -Number.MAX_VALUE, second = -Number.MAX_VALUE, third = -Number.MAX_VALUE;

  // console.log('setup: ', first, second , third);

  intsArr.forEach((val) => {

    console.log({val});

    if (val >= first) {
      third = second;
      second = first;
      first = val;
    }
    else if (val >= second) {
      third = second;
      second = val;
    }
    else if (val >= third) {
      third = val;
    }

    console.log('iterating: ', first, second , third);
    
  });
  console.log(first, second,third);
  return first * second * third;
}

console.log('expect 60 (3 * 4 * 5): ', productOf3HighestValues([3,2,1,0,4,5]));
console.log(`\n ... \n`);
console.log('expect 27 (3 * 3 * 3): ', productOf3HighestValues([3,2,1,1,3,3]));
console.log(`\n ... \n`);
console.log('expect 0 (2 * 1 * 0): ', productOf3HighestValues([2,1,0,-3,-2]));
console.log(`\n ... \n`);
console.log('expect -6 (-1 * -2 * -3): ', productOf3HighestValues([-1,-4,-3,-2]));
console.log(`\n ... \n`);

/**
 * ooops! my function above answers the wrong question. 
 * The question IS NOT: return the product of the 3 highest integers.
 * The question IS: return the highest product available out of any 3 of the integers.
 * 
 * Thus:
 * Does your function work with negative numbers? If arrayOfInts is [−10,−10,1,3,2] we should return 300 (which we get by taking −10∗−10∗3). 
 * 
 * Try again!
 * 
 * 
 * Breakdown

To brute force ↴ an answer we could iterate through arrayOfInts and multiply each integer by each other integer, and then multiply that product by each other other integer. This would probably involve nesting 3 loops. But that would be an O(n3) runtime! We can definitely do better than that.

Because any integer in the array could potentially be part of the greatest product of three integers, we must at least look at each integer. So we're doomed to spend at least O(n) time.

Sorting the array would let us grab the highest numbers quickly, so it might be a good first step. Sorting takes O(n\lg{n}) time. That's better than the O(n3) time our brute force approach required, but we can still do better.

Since we know we must spend at least O(n) time, let's see if we can solve it in exactly O(n) time.

A great way to get O(n) runtime is to use a greedy ↴ approach. How can we keep track of the highestProductOf3 "so far" as we do one walk through the array?

Put differently, for each new current number during our iteration, how do we know if it gives us a new highestProductOf3? [NOTE: I solved it at this hint. Although, I am afraid my solution is NOT O(n), since we have to retest all the possibilities that come before. I think it is better than O(n3), but I think my solution is O(n2), which is not great.]

We have a new highestProductOf3 if the current number times two other numbers gives a product that's higher than our current highestProductOf3. What must we keep track of at each step so that we know if the current number times two other numbers gives us a new highestProductOf3?

 Our first guess might be:

    our current highestProductOf3
    the threeNumbersWhichGiveHighestProduct


 But consider this example:

  const arrayOfInts = [1, 10, -5, 1, -100];

Right before we hit −100-100−100 (so, in our second-to-last iteration), our highestProductOf3 was 101010, and the threeNumbersWhichGiveHighestProduct were [10,1,1]. But once we hit −100, suddenly we can take −100∗−5∗10 to get 5000. So we should have "held on to" that −5, even though it wasn't one of the threeNumbersWhichGiveHighestProduct.

We need something a little smarter than threeNumbersWhichGiveHighestProduct. What should we keep track of to make sure we can handle a case like this? 


There are at least two great answers:

  1  Keep track of the highest2 and lowest2 (most negative) numbers. If the current number times some combination of those is higher than the current highestProductOf3, we have a new highestProductOf3!

  2  Keep track of the highestProductOf2 and lowestProductOf2 (could be a low negative number). If the current number times one of those is higher than the current highestProductOf3, we have a new highestProductOf3!

We'll go with (2). It ends up being slightly cleaner than (1), though they both work just fine.

How do we keep track of the highestProductOf2 and lowestProductOf2 at each iteration? (Hint: we may need to also keep track of something else.)

We also keep track of the lowest number and highest number. If the current number times the current highest—or the current lowest, if current is negative—is greater than the current highestProductOf2, we have a new highestProductOf2. Same for lowestProductOf2.

So at each iteration we're keeping track of and updating:

    highestProductOf3
    highestProductOf2
    highest
    lowestProductOf2
    lowest

Can you implement this in code? Careful—make sure you update each of these variables in the right order, otherwise you might end up e.g. multiplying the current number by itself to get a new highestProductOf2. 

Solution

We use a greedy ↴ approach to solve the problem in one pass. At each iteration we keep track of:

    highestProductOf3
    highestProductOf2
    highest
    lowestProductOf2
    lowest

When we reach the end, the highestProductOf3 is our answer. We maintain the others because they're necessary for keeping the highestProductOf3 up to date as we walk through the array. At each iteration, the highestProductOf3 is the highest of:

    the current highestProductOf3
    current * highestProductOf2
    current * lowestProductOf2 (if current and lowestProductOf2 are both low negative numbers, this product is a high positive number).

...

  For this one, we built up our greedy algorithm exactly the same way we did for the Apple stocks question. By asking ourselves:

"Suppose we could come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What additional values would we need to keep updated as we looked at each item in our set, in order to be able to update the 'best answer so far' in constant time?"

For the Apple stocks question, the only "additional value" we needed was the min price so far.

For this one, we needed four things in order to calculate the new highestProductOf3 at each step:

    highestProductOf2
    highest
    lowestProductOf2
    lowest

 * 
 */
console.log(`\n ...  highest possible product of any 3 ints in array (which is a different question) ... \n`);
/**
 * NOTE: my first solution here is better than O(n3), but at O(n2) is not great.
 *
 */
function highestAvailableProductOfAnyThreeInts(intsArr) {
  let currentHighestProduct = intsArr[0] * intsArr[1] * intsArr[2];

  intsArr.forEach((val, idx) => {

    if (idx > 2) {
      let prev = idx-1; 
      let twoPrev = prev-1;

      while (prev >= 1 && twoPrev >= 0) {

        const testProduct = val * intsArr[prev] * intsArr[twoPrev];

        currentHighestProduct = Math.max(currentHighestProduct, testProduct);

        prev--;
        twoPrev--;
      }
    }
    
  });
  return currentHighestProduct;
}


let testArr = [-10,-10,1,3,2];
console.log('expect 300 (-10 *  -10 * 3): ', highestAvailableProductOfAnyThreeInts(testArr));
console.log(`\n ... \n`);

testArr = [-10,-10,-10,1,3,2];
console.log('expect 300 (-10 *  -10 * 3) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts(testArr));
console.log(`\n ... \n`);


testArr = [1, 10, -5, 1, -100];
console.log('expect 5000 (10 *  -5 * -100) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts(testArr));
console.log(`\n ... \n`);

// test long one for time
testArr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2, 1, 10, -5, 1, -100];
let start = new Date();
console.log('expect 5000 (10 *  -5 * -100) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts(testArr));
let end  = new Date();
console.log('time (SLOW...):', end.getTime() - start.getTime());
console.log(`\n ... \n`);

console.log(`\n ...  highest possible product of any 3 ints in array, version 2 ... \n`);

/**
 * NOTE: my second solution here after reading the IC hints.
 * Notice how much faster it is than the previous solution. For my timed tests, the previous returns in 11 ms, whereas this one returns in 1 ms!
 * 
 * My solution here is essentially the same as the IC solution.
 *
 */
function highestAvailableProductOfAnyThreeInts2(intsArr) {

  if (intsArr.length < 3) {
    throw new Error('Less than 3 items!');
  }

  let highestProductOf3 = intsArr[0] * intsArr[1] * intsArr[2];
  let highestProductOf2 = intsArr[0] * intsArr[1];
  let lowestProductOf2 = intsArr[0] * intsArr[1];
  let highest = intsArr[0];
  let lowest = intsArr[0];

  intsArr.forEach((val) => {

    // ordering is important.
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * val, lowestProductOf2 * val);

    highestProductOf2 = Math.max(highestProductOf2, highest * val, lowest * val);
    lowestProductOf2 = Math.min(lowestProductOf2, highest * val, lowest * val);

    lowest = Math.min(lowest, val);
    highest = Math.max(highest, val);
    
  });
  return highestProductOf3;
}


testArr = [-10,-10,1,3,2];
console.log('expect 300 (-10 *  -10 * 3): ', highestAvailableProductOfAnyThreeInts2(testArr));
console.log(`\n ... \n`);

testArr = [-10,-10,-10,1,3,2];
console.log('expect 300 (-10 *  -10 * 3) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts2(testArr));
console.log(`\n ... \n`);

testArr = [1, 10, -5, 1, -100];
console.log('expect 5000 (10 *  -5 * -100) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts2(testArr));
end  = new Date().getTime();
console.log(`\n ... \n`);

// test long one for time
testArr = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2, 1, 10, -5, 1, -100];
let start2 = new Date();
console.log('expect 5000 (10 *  -5 * -100) from array with 3 -10s: ', highestAvailableProductOfAnyThreeInts2(testArr));
let end2  = new Date();
console.log('time -- this one is MUCH faster: ', end2.getTime() - start2.getTime());
console.log(`\n ... \n`);

/**
 * 
 * https://www.interviewcake.com/question/javascript/product-of-other-numbers?course=fc1&section=greedy
 * 
 *  You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution! 

Breakdown

A brute force approach would use two loops to multiply the integer at every index by the integer at every nestedIndex, unless index === nestedIndex.

This would give us a runtime of O(n2). Can we do better?

Well, we’re wasting a lot of time doing the same calculations.  As an example, let's take: 

// input array
[1, 2, 6, 5, 9]

// array of the products of all integers
// except the integer at each index:
[540, 270, 90, 108, 60]  // [2 * 6 * 5 * 9,  1 * 6 * 5 * 9,  1 * 2 * 5 * 9,  1 * 2 * 6 * 9,  1 * 2 * 6 * 5]

We're doing some of the same multiplications two or three times! 

 We're doing some of the same multiplications two or three times!
When we calculate [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5], we're calculating 5*9 three times: at indices 0, 1, and 2.

Or look at this pattern:
When we calculate [2*6*5*9, 1*6*5*9, 1*2*5*9, 1*2*6*9, 1*2*6*5], we have 1 in index 1, and we calculate 1*2 at index 2, 1*2*6 at index 3, and 1*2*6*5 at index 4.

We’re redoing multiplications when instead we could be storing the results! This would be a great time to use a greedy ↴ approach. We could store the results of each multiplication highlighted in blue, then just multiply by one new integer each time.

So in the last highlighted multiplication, for example, we wouldn’t have to multiply 1∗2∗6 again. If we stored that value (12) from the previous multiplication, we could just multiply 12∗5.

Can we break our problem down into subproblems so we can use a greedy approach?

Solution

To find the products of all the integers except the integer at each index, we'll go through our array greedily twice. First we get the products of all the integers before each index, and then we go backwards to get the products of all the integers after each index.

When we multiply all the products before and after each index, we get our answer—the products of all the integers except the integer at each index! 

 */

console.log(`\n ...  return array of all products of all but current i ... \n`);
let productOfAllButCurrent = arrayOfInts => {
  
  let _getProductsBefore = arrayOfInts => {
    const productsBefore = [1];
    for (let i = 0; i < arrayOfInts.length-1; i++) {
      const currentTotalOfBefore = productsBefore[i] * arrayOfInts[i];
      productsBefore.push(currentTotalOfBefore);
    }
    return productsBefore;
  };

  let productsBefore = _getProductsBefore(arrayOfInts);
  let productsAfter = _getProductsBefore(arrayOfInts.reverse()).reverse(); // boo ... we cost ourselves a lot here.

  // console.log({productsBefore});
  // console.log({productsAfter});

  const output = productsBefore.map((val, idx) => {
    return val * productsAfter[idx];
  });

  // console.log({output});
  return output;
};

let inputArr = [3, 1, 2, 5, 6, 4];
console.log(productOfAllButCurrent(inputArr));
console.log(`\n ... \n`);
console.log(productOfAllButCurrent([1, 2, 6, 5, 9]));
console.log(`\n ... \n`);
console.log(productOfAllButCurrent([1, 2, 6, 5, 0]));
console.log(`\n ... \n`);
console.log(productOfAllButCurrent([1, 2, 0, 5, 9]));
console.log(`\n ... \n`);
console.log(productOfAllButCurrent([0, 2, 6, 5, 9]));



console.log(`\n ...  return array of products of all but current i, version 2 ... \n`);
let getProductsOfAllIntsExceptAtIndex = intArr => {

  const productsOfAllBeforeIndex = [];
  let productsSoFar = 1;


  for (let i = 0; i < intArr.length; i++) {
    productsOfAllBeforeIndex.push(productsSoFar);
    productsSoFar *= intArr[i];
  }
  
  // console.log(productsOfAllBeforeIndex);

  const productsOfAllAfterIndex = [];

  productsSoFar = 1;

  const results = new Array(intArr.length);
  for (let i = intArr.length - 1; i >= 0; i--) {
    productsOfAllAfterIndex[i] = productsSoFar;
    productsSoFar *= intArr[i];

    results[i] = productsOfAllAfterIndex[i] * productsOfAllBeforeIndex[i];
  }

  // console.log(productsOfAllAfterIndex);
  // console.log(results);
  return results;
};

inputArr = [3, 1, 2, 5, 6, 4];
console.log(getProductsOfAllIntsExceptAtIndex(inputArr));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 6, 5, 0]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex([1, 2, 0, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex([0, 2, 6, 5, 9]));

console.log(`\n ...  return array of products of all but current i, version 3 (refactored to save space)... \n`);
let getProductsOfAllIntsExceptAtIndex3 = intArr => {

  const productsOfAllBeforeIndex = [];
  let productsSoFar = 1;

  for (let i = 0; i < intArr.length; i++) {
    productsOfAllBeforeIndex.push(productsSoFar);
    productsSoFar *= intArr[i];
  }

  productsSoFar = 1;

  const results = new Array(intArr.length);
  for (let i = intArr.length - 1; i >= 0; i--) {
    results[i] = productsSoFar * productsOfAllBeforeIndex[i];
    productsSoFar *= intArr[i];
  }

  // console.log(productsOfAllBeforeIndex);
  // console.log(results);
  return results;
};

inputArr = [3, 1, 2, 5, 6, 4];
console.log(getProductsOfAllIntsExceptAtIndex3(inputArr));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex3([1, 2, 6, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex3([1, 2, 6, 5, 0]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex3([1, 2, 0, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex3([0, 2, 6, 5, 9]));


console.log(`\n ...  return array of products of all but current i, version 4 (refactored further to save MORE space)... \n`);
let getProductsOfAllIntsExceptAtIndex4 = intArr => {

  const results = new Array(intArr.length);
  let productsSoFar = 1;

  for (let i = 0; i < intArr.length; i++) {
    results[i] = productsSoFar;
    productsSoFar *= intArr[i];
  }

  productsSoFar = 1;
  
  for (let i = intArr.length - 1; i >= 0; i--) {
    results[i] = productsSoFar * results[i];
    productsSoFar *= intArr[i];
  }

  return results;
};

inputArr = [3, 1, 2, 5, 6, 4];
console.log(getProductsOfAllIntsExceptAtIndex4(inputArr));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex4([1, 2, 6, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex4([1, 2, 6, 5, 0]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex4([1, 2, 0, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex4([0, 2, 6, 5, 9]));

console.log(`\n ...  return array of products of all but current i, version 5 (refactored further to use array.reduce)... \n`);
let getProductsOfAllIntsExceptAtIndex5 = intArr => {

  const results = new Array(intArr.length);

  intArr.reduce((prev, curr, i)=> {
    results[i] = prev;
    return prev *= curr;
  }, 1);

  let productsSoFar = 1;
  
  for (let i = intArr.length - 1; i >= 0; i--) {
    results[i] = productsSoFar * results[i];
    productsSoFar *= intArr[i];
  }

  return results;
};

inputArr = [3, 1, 2, 5, 6, 4];
console.log(getProductsOfAllIntsExceptAtIndex5(inputArr));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex5([1, 2, 6, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex5([1, 2, 6, 5, 0]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex5([1, 2, 0, 5, 9]));
console.log(`\n ... \n`);
console.log(getProductsOfAllIntsExceptAtIndex5([0, 2, 6, 5, 9]));


/**
 * https://www.interviewcake.com/question/javascript/cafe-order-checker?course=fc1&section=array-and-string-manipulation
 * 
 * Also see earlier work on this problem in practice-scratch-02.js 
 * 
 * Note the solution there is similar, but instead of checking that the indexes are in order (as i do here), it checks whether servedOrders[i]  === either takeOut[currentTakeOutIdx] or dineIn[currentDineInIdx] if it finds one or the equal, it increments the specific currentTakeOutIdx or currentDineInIdx. and iterates again. Any case of not equalling one of the two above, returns a false.
 * 
 * Gotchas

Watch out for bugs because your index is outside an array! Will your function ever try to grab the 0th item from an empty array, or the nth item from an array with n elements (where the last index would be n−1)?

We can do this in O(n) time and O(1) additional space.

*/

console.log(`\n ...  first come, first served, inside and outside, but not merged... \n`);

function firstComeFirstServed(takeOut, dineIn, servedOrders) {

  // the problem seems to be to make sure that to check origin of any given order in servedOrders. All previous orders from the same origin, must already be accounted for in servedOrders.

  let testedTakeOutIdx = 0, testedDineInIdx = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    const currVal = servedOrders[i];

    // takeOut
    if (takeOut.indexOf(currVal) >= 0) {
      // console.log('takeOut - val: ', currVal, 'idx: ', takeOut.indexOf(currVal), 'testedTakeOutIdx: ', testedTakeOutIdx);
      if (takeOut.indexOf(currVal) < testedTakeOutIdx) {
        return false;
      }
      testedTakeOutIdx++;
    }
    // dineIn
    else if (dineIn.indexOf(currVal)) {
      if (dineIn.indexOf(currVal) < testedDineInIdx) {
        return false;
      }
      testedDineInIdx++;
    }
  }

  return true;

}

let takeOut = [1,3,5];
let dineIn = [2,4,6];
let servedOrders = [1, 2, 3, 5, 4, 6];

console.log('expect true: ', firstComeFirstServed(takeOut, dineIn, servedOrders));

servedOrders = [1, 2, 4, 6, 5, 3];
console.log('expect false: ', firstComeFirstServed(takeOut, dineIn, servedOrders));

takeOut = [1,3,5,9];
dineIn = [0,2,4,6,7,8,10];
servedOrders = [0,1,2,4,3,5,6,7,8,9,10];

//true
console.log('expect true: ', firstComeFirstServed(takeOut, dineIn, servedOrders));

//true
servedOrders = [0,1,2,3,4,5,6,7,8,9,10];
console.log('expect true: ', firstComeFirstServed(takeOut, dineIn, servedOrders));

// this should fail:
servedOrders = [0,1,2,4,5,3,6,7,8,9,10];
console.log('expect false: ', firstComeFirstServed(takeOut, dineIn, servedOrders));

/**
 * IC Solution:
 *  We walk through servedOrders, seeing if each customer order so far matches a customer order from one of the two registers. To check this, we:

    Keep pointers to the current index in takeOutOrders, dineInOrders, and servedOrders.
    Walk through servedOrders from beginning to end.
    If the current order in servedOrders is the same as the current customer order in takeOutOrders, increment takeOutOrdersIndex and keep going. This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders, reducing the problem to the remaining customer orders in the arrays.
    Same as above with dineInOrders.
    If the current order isn't the same as the customer order at the front of takeOutOrders or dineInOrders, we know something's gone wrong and we're not serving food first-come, first-served.
    If we make it all the way to the end of servedOrders, we'll check that we've reached the end of takeOutOrders and dineInOrders. If every customer order checks out, that means we're serving food first-come, first-served.

 * 
 */
console.log(`\n ...  first come, first served, IC Solution... \n`);

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
    var order = servedOrders[i];

    // if we still have orders in takeOutOrders and the current order in takeOutOrders is the same
    // as the current order in servedOrders
    if (takeOutOrdersIndex <= takeOutOrdersMaxIndex && order === takeOutOrders[takeOutOrdersIndex]) {
      takeOutOrdersIndex++;

      // if we still have orders in dineInOrders and the current order in dineInOrders is the same
      // as the current order in servedOrders
    } else if (dineInOrdersIndex <= dineInOrdersMaxIndex && order === dineInOrders[dineInOrdersIndex]) {
      dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current order in takeOutOrders or dineInOrders, 
      // then we're not serving first-come, first-served
    } else {
      return false;
    }
  }

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (dineInOrdersIndex != dineInOrders.length || takeOutOrdersIndex != takeOutOrders.length) {
    return false;
  }

  // all orders in servedOrders have been "accounted for" so we're serving first-come, first-served!
  return true;
}

takeOut = [1,3,5];
dineIn = [2,4,6];
servedOrders = [1, 2, 3, 5, 4, 6];

console.log('expect true: ', isFirstComeFirstServed(takeOut, dineIn, servedOrders));

servedOrders = [1, 2, 4, 6, 5, 3];
console.log('expect false: ', isFirstComeFirstServed(takeOut, dineIn, servedOrders));

takeOut = [1,3,5,9];
dineIn = [0,2,4,6,7,8,10];
servedOrders = [0,1,2,4,3,5,6,7,8,9,10];

//true
console.log('expect true: ', isFirstComeFirstServed(takeOut, dineIn, servedOrders));

//true
servedOrders = [0,1,2,3,4,5,6,7,8,9,10];
console.log('expect true: ', isFirstComeFirstServed(takeOut, dineIn, servedOrders));

// this should fail:
servedOrders = [0,1,2,4,5,3,6,7,8,9,10];
console.log('expect false: ', isFirstComeFirstServed(takeOut, dineIn, servedOrders));


console.log(`\n ...  shuffle an array... \n`);
/**
 * Shuffle an array
 *  Fisher-Yates shuffle algorithm / Knuth shuffle
 * https://www.interviewcake.com/question/javascript/shuffle?course=fc1&section=greedy
 * 
 */

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`\n ...  first, just some examples of random ints generated by the isRandom functin... \n`);
console.log(getRandom(0,1));
console.log(getRandom(1,1));
console.log(getRandom(2,2));
console.log(getRandom(2,3));
console.log(getRandom(1,5));
console.log(getRandom(1,9));
console.log(getRandom(1,9));
console.log(getRandom(1,1000));

/**
 * 
 * My solution appears to be correct, with the only difference being the IC solution does not permit an item to be swapped with itself, whereas mine does. (Which, to my mind, seems more correct -- since if you shuffle a deck of cards, it is at least possible for any given card to end up in the same place it started...)
 * 
 * However, I can't say that I fully follow the discussion on IC about this problem. But I did intuit this:
 * 
 * "Crucially, once an item is placed at an index it can't be moved. So for the first index, we choose from nnn items, for the second index we choose from n−1n-1n−1 items, etc."
 * 
 * If we let them be moved multiple times, there would not be an equal change per item to be shuffled.
 */
const arrayShuffleInPlace = arr => {

  if (arr.length <= 1) return;

  for (let i = 0; i < arr.length; i++) {
    const tradeIdx = getRandom(i, arr.length-1);
    const currValue = arr[i];
    const currTradeValue = arr[tradeIdx];
    arr[i] = currTradeValue;
    arr[tradeIdx] = currValue;
  }
};

console.log(`\n ...  next, testing my array shuffler... \n`);

let myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);

myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);

myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);

myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);

myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);

myArr = [1,2,3];
arrayShuffleInPlace(myArr);
console.log(myArr);


console.log(`\n ...  shuffle an array, IC solution... \n`);
/**
 * IC solution
 */

function shuffle(array) {

  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (let indexWeAreChoosingFor = 0;
    indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {

    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

    // Place our random choice in the spot by swapping
    if (randomChoiceIndex !== indexWeAreChoosingFor) {
      const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
  }
}


myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);

myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);

myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);

myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);

myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);

myArr = [1,2,3];
shuffle(myArr);
console.log(myArr);



