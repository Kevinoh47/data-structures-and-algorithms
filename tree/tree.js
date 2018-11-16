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

  getTreeCount() {
    return this.count;
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

  inOrder (callback = null) {
    let results = [];

    let _pushResults = function (node) {
      results.push(node.key);
    };

    if (!callback) {callback = _pushResults;}

    let _traversal = (node, callback) => {

      if (node.left) {  _traversal(node.left, callback); }

      callback(node);

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

  search(key){

    let _searchNode = function(node, key) {

      if (node === null) {return false; }

      if (key < node.key) {
        return _searchNode(node.left, key);
      }

      else if (key > node.key) {
        return _searchNode(node.right, key);
      }

      else {
        return node;
      }
    };

    return _searchNode(this.root, key);
  }
}

module.exports = {BtNode, BinaryTree, BinarySearchTree};