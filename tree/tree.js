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

  insert(key) {
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
      // if the node is full, pick right or left and continue looking for an available leaf spot.
      const leftOrRight = ((Math.floor(Math.random() * 2) == 0)) ? node.left : node.right;

      this.insertNode(leftOrRight, newNode);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(key) {
    let newNode = new BtNode(key);

    if (this.root === null) {
      this.root = newNode;
      this.count = 1;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

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

module.exports = {BinaryTree, BinarySearchTree};