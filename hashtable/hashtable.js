'use strict';
const util = require('util');
const LinkedList = require('../linked-list.js');

class HashTable {
  constructor(size) {
    this.size = size,
    this.map = new Array(size);
  }

  hash(key){
   
    let hashedIndex = key.split('').reduce(function(p, c, i){ return p + (c.charCodeAt(0) + (c.charCodeAt(0) * i)); }, 0) % this.size;

    return hashedIndex;
  }

  // usually named 'set' but requirements specify 'add
  add(key, value) {
    let hash = this.hash(key);

    if (! this.map[hash] ) {
      let ll = new LinkedList();
      this.map[hash] = ll;
    }

    this.map[hash].append({[key]:value});

  }

  contains(key) {
    let hash = this.hash(key);
    let foundLL = this.map[hash];

    if (!foundLL) {
      return false;
    }

    let current = foundLL.head;

    while(current.next) {
      if(current.value[key]) {
        return true;
      }
      current = current.next;
    }
    if(current.value[key]) {
      return true;
    }
    return false;
  }

  find(key) {
    let hash = this.hash(key);
    let foundLL = this.map[hash];
    if (!foundLL) {
      return false;
    }

    for (let i = 0; i < foundLL.length; i++) {
      let currentNode = foundLL.find(i);

      if (currentNode.value[key]) {
        return currentNode.value;
      }
    }

    return false;
  }

  // takes in a key, returns the index (or hash) where that key is stored. Note that this does not indicate whether or not any other keys are stored at that index due to collisions.
  getHash(key) {
    let hash = this.hash(key);
    if(hash) {
      return hash;
    }
    return false;
  }

  delete(key) {
    let hash = this.hash(key);
    let foundLL = this.map[hash];

    if(!foundLL) {
      return false;
    }

    let current = foundLL.head;
    let index = 0;

    while(current.next) {
      if(current.value[key]) {
        foundLL.remove(index);
        return;
      }
      current = current.next;
      index++;
    }

    if(current.value[key]) {
      foundLL.remove(index);
      return;
    }
    else {
      return false;
    }
  }

}

module.exports = HashTable;
