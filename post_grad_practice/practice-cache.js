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

  _setKeyToLatest(key) {
    const keyIndex = (this.usedOrder.indexOf(key) >= 0) ? this.usedOrder.indexOf(key) : null;

    if (keyIndex !== null) {
      this.usedOrder.splice(keyIndex, 1);
    }
    this.usedOrder.push(key);
  }

  // really an "upsert"
  insertKeyValuePair(key, value) {

    if (!this.cache[key] && this.usedOrder.length === this.maxSize){
      const oldestKey = this.usedOrder[0];
      delete this.cache[oldestKey];
      this.usedOrder.shift();
    }

    this.cache[key] = value; //insert or update
    this._setKeyToLatest(key);
  }

  getMostRecentKey() {
    return this.usedOrder[this.usedOrder.length - 1];
  }

  getValueFromKey(key) {
    if (this.cache[key]) {
      this._setKeyToLatest(key);
    }
    return (this.cache[key]) ? this.cache[key] : null;
  }

}

const myCache = new LRUCache(3);
myCache.insertKeyValuePair('a',1);
myCache.insertKeyValuePair('b',2);
myCache.insertKeyValuePair('c',3);
myCache.insertKeyValuePair('d',4);
console.log({myCache});
console.log('used order should be b, c, d: ', myCache.usedOrder);
console.log('most recent key should be d: ' , myCache.getMostRecentKey());
console.log('key value for b should be 2: ' , myCache.getValueFromKey('b'));
console.log('most recent key should now be b:' , myCache.getMostRecentKey());
console.log('used order should now be c, d, b: ', myCache.usedOrder);

console.log(`\n ... now inserting key a back again with a value of 5 ... \n`);

myCache.insertKeyValuePair('a', 5);
//console.log({myCache});
console.log('most recent key should now be a:' , myCache.getMostRecentKey());
console.log('used order should now be d, b, a: ', myCache.usedOrder);
console.log('key value for a should be 5: ' , myCache.getValueFromKey('a'));


console.log(`\n ... now updating a with a new value of 6 \n`);

myCache.insertKeyValuePair('a', 6);
console.log('most recent key should now be a:' , myCache.getMostRecentKey());
console.log('used order should now be d, b, a: ', myCache.usedOrder);
console.log('key value for a should be 6: ' , myCache.getValueFromKey('a'));

console.log(`\n ... now updating d with a new value of 7 \n`);

myCache.insertKeyValuePair('d', 7);
console.log('most recent key should now be d:' , myCache.getMostRecentKey());
console.log('used order should now be b, a, d: ', myCache.usedOrder);
console.log('key value for d should be 7: ' , myCache.getValueFromKey('d'));


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

