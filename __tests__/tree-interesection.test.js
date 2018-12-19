'use strict';

const {BinaryTree} = require('../tree/tree.js');

const {tree_intersection} = require('../treeIntersection/tree-intersection.js');

let myTree1 = new BinaryTree();
let myTree2 = new BinaryTree();

// intersection = 11, 15, 3, 10
let input1 = [11,7,15,5,3,9,8,10,13,12,14,20,18,25];
let input2 = [11,6,15,4,3,10,17,33,2];


input1.map(val => myTree1.add(val));
input2.map(val => myTree2.add(val));

describe ('the tree_intersection function', () =>{
  it('finds the correct intersection of values from two trees of unequal length', () => {
    const result = tree_intersection(myTree1, myTree2);
    expect(result).toContain(11);
    expect(result).toContain(15);
    expect(result).toContain(3);
    expect(result).toContain(10);
  });

  it('finds the correct intersection of values from two trees of same length', () => {

    let input3 = [11,66,15,77,3,100,77,33,222];
    let myTree3 = new BinaryTree();
    input3.map(val => myTree3.add(val));

    // intersection of 2 & 3: 11,15,3,33

    const result = tree_intersection(myTree2, myTree3);
    expect(result).toContain(11);
    expect(result).toContain(15);
    expect(result).toContain(3);
    expect(result).toContain(33);
  });

  it('finds the correct intersection of values from two trees with all the same values', () => {

    let input4 = [2,33,17,10,3,4,15,6,11];
    let myTree4 = new BinaryTree();
    input4.map(val => myTree4.add(val));

    const result = tree_intersection(myTree2, myTree4);
    expect(result.length).toEqual(9);
  });

  it('does not add values that do not partake of the intersection.', () => {

    let input5 = [11,6,15,4,3,10,17,33,222];
    let myTree5 = new BinaryTree();
    input5.map(val => myTree5.add(val));
    
    const result = tree_intersection(myTree2, myTree5);
    expect(result).not.toContain(222);
  });
});

