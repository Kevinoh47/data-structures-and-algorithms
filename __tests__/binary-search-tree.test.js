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

  it('can add a node', () => {
    myBst.add(19);
    let result = myBst.getTreeCount();
    expect(result).toEqual(15);
  });

  it('can search for a node', () => {
    let result = myBst.search(13);
    expect(result.key).toEqual(13);
  });

  it('can return false if a searched for node does not exist', () => {
    let result = myBst.search(9999);
    expect(result.key).toBeFalsy;
  });

  it('can return an ordered list of BST node values', () => {
    let result = myBst.inOrder();
    let expected = [3,5,7,8,9,10,11,12,13,14,15,18,19,20,25];
    expect(result).toEqual(expected);
  });

  it('can return an pre-ordered list of BST node values', () => {
    let result = myBst.preOrder();
    expect(result[0]).toEqual(11);
    expect(result.length).toEqual(15);
    expect(result[14]).toEqual(25);
  });

  it('can return an post-ordered list of BST node values', () => {
    let result = myBst.postOrder();
    expect(result[0]).toEqual(3);
    expect(result.length).toEqual(15);
    expect(result[14]).toEqual(11);
  });
});


