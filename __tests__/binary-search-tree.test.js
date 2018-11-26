'use strict';

const {BinaryTree, BinarySearchTree} = require('../tree/tree.js');

const {fizzBuzzTree} = require('../fizzBuzzTree/fizz-buzz-tree.js');


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

  it('can return an ordered list of BST nodes', () => {
    let result = myBst.inOrder('__pushNodeResults');
    let extractedKyes = result.map(node => node.key);
    let expected = [3,5,7,8,9,10,11,12,13,14,15,18,19,20,25];
    expect(extractedKyes).toEqual(expected);
  });

  it('can return an pre-ordered list of BST node values', () => {
    let result = myBst.preOrder();

    expect.assertions(3);

    expect(result[0]).toEqual(11);
    expect(result.length).toEqual(15);
    expect(result[14]).toEqual(25);
  });

  it('can return an post-ordered list of BST node values', () => {
    let result = myBst.postOrder();

    expect.assertions(3);

    expect(result[0]).toEqual(3);
    expect(result.length).toEqual(15);
    expect(result[14]).toEqual(11);
  });

  it ('can do a breadth-first traveral', () => {
    let result = myBst.levelOrder();
    expect(result.length).toEqual(15);
  });

  it ('can find the maximum value in the BST search tree', () => {
    let result = myBst.findMaximumValue();
    let expected = 25;
    expect(result).toEqual(expected);
  });

  it ('can find the minimum value in the BST search tree', () => {
    let result = myBst.findMinimumValue();
    let expected = 3;
    expect(result).toEqual(expected);
  });

});

/** Binary Tree Class */
let myBt = new BinaryTree();
let input2 = [11,7,15,5,3,9,8,10,13,12,14,20,18,25];
input2.map(val =>myBt.add(val));

describe('The BinaryTree', () => {
  it('can return the root', () => {
    let result = myBt.getRootNode();
    expect(result.key).toEqual(11);
  });

  it('can return a count of nodes', () => {
    let result = myBt.getTreeCount();
    expect(result).toEqual(14);
  });

  it('can add a node', () => {
    myBt.add(19);
    let result = myBt.getTreeCount();
    expect(result).toEqual(15);
  });

  it ('can do a breadth-first traveral', () => {
    let result = myBt.levelOrder();

    expect.assertions(3);

    expect(result.length).toEqual(15);
    expect(result[0]).toEqual(11);
    expect(result).toContain(20);
  });
  it ('can print the values to console in a breadth-first traversal', () => {
    let result = myBt.levelOrder(true);

    expect.assertions(3);

    expect(result.length).toEqual(15);
    expect(result[0]).toEqual(11);
    expect(result).toContain(20);
  });

  it ('can find the max value of the BT', () =>{
    let result = myBt.maxVal();
    expect(result).toEqual(25);
  });

  it ('can find the minimum value of the BT', () => {
    let result = myBt.minVal();
    expect(result).toEqual(3);
  });
});

/** Fizz Buzz Tree */


describe('The Fizz Buzz Tree function', () => {
 
  let myFancyBST = new BinaryTree();
  let input3 = [11,7,15,5,3,9,12,20,27,45];
  
  input3.forEach(e => { myFancyBST.add(e);});
  
  let myFizzBuzzTree = fizzBuzzTree(myFancyBST);
  let results = myFizzBuzzTree.inOrder();

  it('returns a tree with the proper count.', () => {
    expect(myFizzBuzzTree.count).toEqual(10);
  });
  
  it('does not transform values that are not divisible by 3 or 5.', () => {
    expect(results).toContain(7);
  });

  it('correctly transforms values that are divisible by 3', () => {
    expect(results).toContain('Fizz: 9');
  });

  it('correctly transforms values that are divisible by 5', () => {
    expect(results).toContain('Buzz: 20');
  });

  it('correctly transforms values that are divisible by both 3 and 5', () => {
    expect(results).toContain('FizzBuzz: 15');
  });

});
