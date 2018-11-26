'use strict';

const {BinaryTree} = require('../tree/tree.js');

let fizzBuzzTree = (tree) => {
  let resultTree = new BinaryTree();
  let treeKeys = tree.inOrder();

  let transform = treeKeys.map(e =>  {

    if (e % 3 === 0 && e % 5 === 0) {
      return `FizzBuzz: ${e}`;
    }
    
    else if(e % 3 === 0) { return `Fizz: ${e}`; }

    else if(e % 5 === 0) { return `Buzz: ${e}`; }

    return e;
  });

  transform.forEach(j => { resultTree.add(j); });

  return resultTree;
};

module.exports = {fizzBuzzTree};
