/**
 * 
 * LRU Cache
Implement a class for a Least Recently Used (LRU) Cache. The cache should support:

 inserting key / value pairs (the insertKeyValuePair() method), 

 retrieving a key's value (the getValueFromKey() method), and 

 retrieving the most recently "active" key (the getMostRecentKey() method); 

 each of these methods should run in constant time. 

 When a key / value pair is inserted or a key's value is retrieved, the key in question should become the most recent key. 
 
 Also, the LRUCache class should store a maxSize property set to the size of the cache, which is passed in as an argument during instantiation. This size represents the maximum number of key / value pairs that the cache can hold at once. 
 
 If a key / value pair is added to the cache when it has reached maximum capacity, the least recently used ("active") key / value pair should be evicted from the cache and no longer retrievable; the newly added key / value pair should effectively replace it. 
 
 Inserting a key / value pair with an already existing key should simply replace the key's value in the cache with the new value and should not evict a key / value pair if the cache is full. 
 
 Attempting to retrieve a value from a key that is not in the cache should return the None (null) value.

Sample input: (for an LRU Cache of size 3)
insertKeyValuePair("a", 1)
insertKeyValuePair("b", 2)
insertKeyValuePair("c", 3)
getMostRecentKey()
getValueFromKey("a")
getMostRecentKey()
insertKeyValuePair("d", 4)
getValueFromKey("b")
insertKeyValuePair("a", 5)
getValueFromKey("a")
Sample output:
-
-
-
"c"
1
"a"
-
None
-
5
**/

'use strict';

class LRUCache {
  
  constructor(maxSize){
    this.maxSize = maxSize;
    this.currentLastUsedKey = null;
    this.cache = {}; 
    this.usedOrder = []; 
  }

  _moveKeyToLatest(key) {
    const keyIndex = this.usedOrder.indexOf(key);
    const newUsedOrder = this.usedOrder.slice(keyIndex, keyIndex+1);
    this.usedOrder = [...newUsedOrder, key];

  }

  // really an "upsert"
  insertKeyValuePair(key, value) {
    // key already exists
    if (this.cache.key) {
      // find key in usedOrder Array, slice it out.
      // const keyIndex = this.usedOrder.indexOf(key);
      // const newUsedOrder = this.usedOrder.slice(keyIndex, keyIndex+1);
      // this.usedOrder = newUsedOrder;

      this._moveKeyToLatest(key);
    }
    else {
      // a new key added to the cache below capacity
      if (this.usedOrder.length === this.maxSize){
        this.usedOrder.shift();
      }
    }

    this.cache[key] = value;
    //this.usedOrder.push(key); // always push key (whether new or updated) to the end of the Order list.
  }

  getMostRecentKey() {
    return this.usedOrder[this.usedOrder.length - 1];
  }

  getValueFromKey(key) {
    // if key exists, update the cache access list
    if (this.cache[key]) {
      this._moveKeyToLatest(key);
    }
    return (this.cache[key]) ? this.cache[key] : null;
  }


}

/**
 * https://leetcode.com/problems/lru-cache/
 * 
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

  // get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
  // put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

  // The cache is initialized with a positive capacity.

  // Follow up:
  // Could you do both operations in O(1) time complexity?

  // Example:

  // LRUCache cache = new LRUCache( 2) /* capacity */ 

  // // cache.put(1, 1);
  // // cache.put(2, 2);
  // // cache.get(1);       // returns 1
  // // cache.put(3, 3);    // evicts key 2
  // // cache.get(2);       // returns -1 (not found)
  // // cache.put(4, 4);    // evicts key 1
  // // cache.get(1);       // returns -1 (not found)
  // // cache.get(3);       // returns 3
  // // cache.get(4);       // returns 4
// * 
// */

