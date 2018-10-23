'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // return the value of the nodethat is k from the END of the linked list
  ll_kth_from_end(k) {
    if (Number.isInteger(k) && k > -1) {
      let current = this.head;
      let valueArr = [];
      let index = -1;

      // find the last node, which will have a next value of null
      while (current.next) {

        valueArr.push(current.value);
        current = current.next;
        index++;
      }
      if (current.next === null) {
        valueArr.push(current.value);
        index++;
      }

      let finalIndex = (index - k);
      if (Number.isInteger(finalIndex) && finalIndex > -1) {
        return valueArr[finalIndex];
      }
      return false;
    }
  }

  // Append adds a new node to the end of the linked list
  // Big O for time: O(n) -- linear
  // Big O for space O(1)
  append(value) {
    let node = new Node(value);

    // first node for the linked list (e.g. empty ll)
    if (! this.head) {
      this.head = node;
      this.length ++;
      return this;
    }
    // appending subsequent nodes to the end of the linked list
    let current = this.head;

    // find the last node, which will have a next value of null
    while (current.next) {
      current = current.next;
    }

    // break out of the loop, and the current node's next is null. Set next to the new node
    current.next = node;
    this.length++;
    return this;
  }

  // insert newValue immediately before the node containing value
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;
    let previous;

    while(current.next) {
      if (current.value === value){
        // head 
        if (current === this.head) {
          newNode.next = current;
          this.head = newNode;
          this.length++;
          return this;
        }
        // inside
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }
      previous = current;
      current = current.next;
    }
    //tail
    if (current.next === null) {
      if (current.value === value){
        previous.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
      }
    }
    return null;
  }

  // insert newValue immediately after the node containing value
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    while(current.next) {
      if (current.value === value){
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    //tail
    if (current.next === null) {
      if (current.value === value){
        newNode.next = null;
        current.next = newNode;
        this.length++;
        return this;
      }
    }
    return null;
  }
}

module.exports = LinkedList;
