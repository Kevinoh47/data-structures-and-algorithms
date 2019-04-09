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
  let nodeDepth = 0;
  let targetDepth = null;

  let _myRecurse = node => {
    if (node) {

      // we need to use level order traversal to view the nodes as they were added...
      console.log({'current key': node.key});
      
      // parentAndChild.push([{'parent': node.key, 'leftChild':node.left, 'rightChild':node.right}]);

      nodeDepth++;

      if (node.key === target) {
        targetDepth = nodeDepth;
      }
      
      _myRecurse(node.left);
      _myRecurse(node.right);

    }
  };

  _myRecurse(tree.root);

  //return {'targetDepth': targetDepth, 'targetParent': targetParent};
  return targetDepth;
};

// create and populate a btree;
let myBTree = new BinaryTree();
[1,2,3,4].map(e => myBTree.add(e));

console.log({'myBTree root':myBTree.root});

console.log({'myBTree Breadth First': myBTree.levelOrder()});

console.log({'myBTree Breadth First With Levels': myBTree.levelOrderWithLevels()});

console.log({'myBTree Max Depth': myBTree.maxDepth()});

// console.log({'depthFinder should return 2': depthFinder(myBTree, 4)});

