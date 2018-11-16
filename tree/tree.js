'use strict';

class BtNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  getRootNode() {
    return this.root;
  }

  add(key) {
    let newNode = new BtNode(key);

    if (this.root === null) {
      this.root = newNode;
      this.count = 1;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {

    if (node.left === null) {
      node.left = newNode;
      this.count++;
    }
    else if (node.right === null) {
      node.right = newNode;
      this.count++;
    }
    else  {
      // https://coderwall.com/p/vcom6g/quick-coin-flip-heads-tails-function-in-javascript
      // if the node is full, pick right or left and continue looking for an available leaf spot.
      const leftOrRight = ((Math.floor(Math.random() * 2) == 0)) ? node.left : node.right;

      this.insertNode(leftOrRight, newNode);
    }
  }

  // orders from smallest to largest in a BST (but not for regular BT)


  // search (value) {
  //   let results = this.inOrder();
  //   if (results.includes(value)) {
  //     let foundNode = this.inOrder(pushNodeResults);
  //     return foundNode;
  //   } 
  //   else {
  //     return null;
  //   }

  // }

  inOrder (callback = null) {
    let results = [];

    let pushResults = function (value) {
      results.push(value);
    };

    // let pushNodeResults = function(node) {
    //   results.push(node);
    // };

    if (!callback) {callback = pushResults;}

    let _traversal = (node, callback) => {

      if (node.left) {  _traversal(node.left, callback); }

      //results.push(node.key);
      callback(node.key);

      if (node.right) {  _traversal(node.right, callback); }

    };

    _traversal(this.root, callback);

    return results;
  }

  preOrder () {
    let results = [];

    let _traversal = (node) => {

      results.push(node.key);

      if (node.left) { _traversal(node.left); }

      if (node.right) { _traversal(node.right); }
    };

    _traversal(this.root);

    return results;
  }

  postOrder () {
    let results = [];

    let _traversal = (node) => {
      
      if (node.left) { _traversal(node.left);}

      if (node.right) { _traversal(node.right);}

      results.push(node.key);
    };

    _traversal(this.root);

    return results;
  }

}

class BinarySearchTree extends BinaryTree{

  insertNode(node, newNode) {
    if (node.key === newNode.key) {
      return;
    }
    else if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.left, newNode);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
        this.count++;
      }
      else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

module.exports = {BtNode, BinaryTree, BinarySearchTree};