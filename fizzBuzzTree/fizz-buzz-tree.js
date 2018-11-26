'use strict';

const {BinaryTree} = require('../tree/tree.js');

let fizzBuzzTree = (tree) => {
  let resultTree = new BinaryTree();
  let treeKeys = tree.inOrder();

  treeKeys.forEach(e =>  {

    if (e % 3 === 0 && e % 5 === 0) {
      return  resultTree.add(`FizzBuzz: ${e}`);
    }
    
    else if(e % 3 === 0) { 
      return resultTree.add(`Fizz: ${e}`);
    }

    else if(e % 5 === 0) { 
      return resultTree.add(`Buzz: ${e}`);
    }

    return  resultTree.add(e);
  });

  return resultTree;
};

module.exports = {fizzBuzzTree};
