'use strict';

const {BinaryTree} = require('../tree/tree.js');

const myHash = {};

// traverse tree1, populating the hash table with keys named for the node values, with source tree1 + a counter for the key value (remember that regular binary trees can have duplicate values)

// traverse tree2, pushing values into the hash. If the value already has a key in the hash table, then we signify in the value that it is part of the intersection. Or possibly we write it to a result array

function tree_intersection(tree1, tree2) {
  let tree1vals = tree1.inOrder();
  let tree2vals = tree2.inOrder();
  let myHash = {};
  let results = [];
  // https://stackoverflow.com/questions/16227197/compute-intersection-of-two-arrays-in-javascript
  // but the big O here will be O(n2)
  // const result = tree1vals.filter(function(n) {
  //   return tree2vals.indexOf(n) > -1;
  // });

  // i think Big O here will be O(3n), or rather O(n)
  tree1vals.forEach(function(e) {
    //strip duplicates
    if (myHash[e] === undefined) {
      myHash[e] = 'tree1';
    }
  });

  tree2vals.forEach(function(e){
    if (myHash[e] === 'tree1') {
      results.push(e);
    }
  });

  return results;
}

module.exports = {tree_intersection};
