'use strict';

const {BinarySearchTree} = require('../tree/tree.js');

let myBst = new BinarySearchTree();
let input = [11,7,15,5,3,9,8,10,13,12,14,20,18,25];
input.map(val =>myBst.add(val));

describe('The BinarySearchTree', () => {
  it('can return the root', () => {
    let result = myBst.getRootNode();
    expect(result.key).toEqual(11);
  });

  it('can return a count of nodes', () => {
    let result = myBst.getTreeCount();
    expect(result).toEqual(14);
  });
});


