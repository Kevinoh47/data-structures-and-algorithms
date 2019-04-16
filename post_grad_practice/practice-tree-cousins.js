'use strict';

const {BinaryTree} = require('../tree/tree.js');

/**
 * In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Examples:

Input: root = [1,2,3,4], x = 4, y = 3

              1
          2        3
        4
Output: false



Input: root = [1,2,3,null,4,null,5], x = 5, y = 4

                1
          2           3
            4             5
Output: true

Input: root = [1,2,3,null,4], x = 2, y = 3
              1
          2        3
            4
Output: false (because of same parent)

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.

*/

let depthFinder = (tree, target) => {

  let levels = [], nodeQueue = [];

  nodeQueue.push(tree.root);

  while (nodeQueue.length) {

    levels.push([]);
    let levelLength = nodeQueue.length;

    for (let i = 0; i < levelLength; ++i) {
      let currentNode = nodeQueue.shift();
      let currentLevel = levels.length-1;
      levels[currentLevel].push(currentNode.key);

      if (currentNode.key === target) {
        return currentLevel;
      }
      if(currentNode.left){
        nodeQueue.push(currentNode.left);
      }
      if(currentNode.right){
        nodeQueue.push(currentNode.right);
      }
    }
  }

  return null;
};

// create and populate a btree;
let myBTree = new BinaryTree();
[1,2,3,4].map(e => myBTree.add(e));

console.log({'myBTree root':myBTree.root});

console.log({'myBTree Breadth First': myBTree.levelOrder()});

console.log({'myBTree Breadth First With Levels': myBTree.levelOrderWithLevels()});

// console.log({'myBTree Breadth First With Levels, Recursive Version': myBTree.levelOrderWithLevelsRecursive()});

console.log({'myBTree Max Depth': myBTree.maxDepth()});

console.log({'depthFinder for 1 should return 0': depthFinder(myBTree, 1)});
console.log({'depthFinder for 2 should return 1': depthFinder(myBTree, 2)});
console.log({'depthFinder for 3 should return 1': depthFinder(myBTree, 3)});
console.log({'depthFinder for 4 should return 2': depthFinder(myBTree, 4)});

