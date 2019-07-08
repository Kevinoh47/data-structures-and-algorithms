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

  // cache.put(1, 1);
  // cache.put(2, 2);
  // cache.get(1);       // returns 1
  // cache.put(3, 3);    // evicts key 2
  // cache.get(2);       // returns -1 (not found)
  // cache.put(4, 4);    // evicts key 1
  // cache.get(1);       // returns -1 (not found)
  // cache.get(3);       // returns 3
  // cache.get(4);       // returns 4
// * 
// */

class LRUCacheLeetCode {
  constructor(capacity){
    this.capacity = capacity;
    this.cache = {};
    this.cacheOrder = [];
  }
  
  get(key) {
    if (this.cache[key]) {
      this._maintainOrder(key);
      return this.cache[key];
    }
    return  -1;
  }

  put(key, value) {
    // value will always be positive.
    if (!value || value <= 0) { return; }
    this._maintainOrder(key);
    this.cache[key] = value;
  }
  
  _maintainOrder(key) {
    const keyIndex = this.cacheOrder.indexOf(key);
    const orderLen = this.cacheOrder.length;

    if(keyIndex > -1) {
      this.cacheOrder.splice(keyIndex,1);
    } 

    if(orderLen === this.capacity){

      // new key
      if (keyIndex === -1) {
        const oldestKey = this.cacheOrder[0];
        delete this.cache[oldestKey];
        this.cacheOrder.shift();
      }
    }
    this.cacheOrder.push(key);
  }
}

console.log(`\n ... second version, for leetcode \n`);

const myLeetCodeCacheClass = new LRUCacheLeetCode(2);
myLeetCodeCacheClass.put(1,1);
myLeetCodeCacheClass.put(2,2);

console.log('cache should be 1,2:' , myLeetCodeCacheClass.cache);
console.log('cacheOrder should now be 1,2: ', myLeetCodeCacheClass.cacheOrder);
console.log('get 1 returns 1: ', myLeetCodeCacheClass.get(1));
console.log('cacheOrder should now be changed to 2, 1: ', myLeetCodeCacheClass.cacheOrder);
console.log('but cache should still be 1,2:' , myLeetCodeCacheClass.cache);
myLeetCodeCacheClass.put(3,3);
console.log('after adding 3, cacheOrder should now be 1,3: ', myLeetCodeCacheClass.cacheOrder);
console.log('cache should now be 1, 3: ' , myLeetCodeCacheClass.cache);
console.log('getting ejected key 2 now should return -1: ', myLeetCodeCacheClass.get(2));

// for failed leet code test -- bug fixed in _maintainOrder().
const mLCC = new LRUCacheLeetCode(10);
mLCC.put(10,13);
mLCC.put(3,17);
mLCC.put(6,11);
mLCC.put(10,5);
mLCC.put(9,10);
mLCC.get(13); //expected -1;
mLCC.put(2,19);
mLCC.get(2);
mLCC.get(3);
mLCC.put(5,25);
mLCC.get(8);
mLCC.put(9,22);
mLCC.put(5,5);
mLCC.put(1,30);
mLCC.get(11);
mLCC.put(9,12);
mLCC.get(7);
mLCC.get(5);
mLCC.get(8);
mLCC.get(9);
mLCC.put(4,30);
mLCC.put(9,3);
mLCC.get(9);
console.log('get 10 should return 5 not -1:', mLCC.get(10));
console.log('get 10 should return 5 not -1:', mLCC.get(10));
console.log(mLCC.cache);

/**
 * https://leetcode.com/problems/lru-cache/submissions/
 * Success
 * The following version is created per leet code template.
Details
Runtime: 248 ms, faster than 20.74% of JavaScript online submissions for LRU Cache.
Memory Usage: 58.6 MB, less than 82.20% of JavaScript online submissions for LRU Cache.

Note: these solutions from the discussion is very similar to my solution, maybe a bit more concise:
https://leetcode.com/problems/lru-cache/discuss/45981/Almighty-javascript!-%3A)
https://leetcode.com/problems/lru-cache/discuss/116201/JavaScript-Solution-Concise

 */


/**
 * @param {number} capacity
 */
var LRUCache2 = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.cacheOrder = [];
  
};
LRUCache2.prototype._maintainOrder=function(key) {
  const keyIndex = this.cacheOrder.indexOf(key);
  const orderLen = this.cacheOrder.length;

  // if key exists, we splice out the current key regardless. We could refactor to not do this if it is already in last place, bue we would also have to have logic for the .push() below.
  if(keyIndex > -1) {
    this.cacheOrder.splice(keyIndex,1);
  } 

  if(orderLen === this.capacity){

    // new key
    if (keyIndex === -1) {
      const oldestKey = this.cacheOrder[0];
      delete this.cache[oldestKey];
      this.cacheOrder.shift();
    }
  }
  this.cacheOrder.push(key);
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache2.prototype.get = function(key) {
  if (this.cache[key]) {
    this._maintainOrder(key);
    return this.cache[key];
  }
  return  -1;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache2.prototype.put = function(key, value) {
  if (!value || value <= 0) { 
    console.log(`attempt to put in key ${key} with incorrect value: ${value}`);
    return; 
  }
  this._maintainOrder(key);
  this.cache[key] = value;
  console.log(Object.keys(this.cache));
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

console.log(`\n ... LeetCode version, using LeetCode template ... \n`);

const mLCC1 = new LRUCache2(2);
mLCC1.put(1,1);
mLCC1.put(2,2);

console.log('cache should be 1,2:' , mLCC1.cache);
console.log('cacheOrder should now be 1,2: ', mLCC1.cacheOrder);
console.log('get 1 returns 1: ', mLCC1.get(1));
console.log('cacheOrder should now be changed to 2, 1: ', mLCC1.cacheOrder);
console.log('but cache should still be 1,2:' , mLCC1.cache);
mLCC1.put(3,3);
console.log('after adding 3, cacheOrder should now be 1,3: ', mLCC1.cacheOrder);
console.log('cache should now be 1, 3: ' , mLCC1.cache);
console.log('getting ejected key 2 now should return -1: ', mLCC1.get(2));

// test bad input:
mLCC1.put(47);
mLCC1.put(48,0);
mLCC1.put(49,-1);

// for failed leetcode test:
const mLCC2 = new LRUCache2(10);

// the below test failed until i fixed bug in _maintainOrder:
// documenting the inputs, outputs, and expecteds on the leetcode test up to incorrect values.
//"put","put","put","put","put"
//[10,13],[3,17],[6,11],[10,5],[9,10]
//"get",
//13
//expected: -1;
//put
//[2,19]
//"get","get"
//[2],[3]
//expected: ...
//put
//[5,25]
//get
//8
//"put","put","put",
//[9,22],[5,5],[1,30]
//get
//11
//put
//[9,12]
//"get","get","get","get"
//[7],[5],[8],[9],
//"put","put"
//[4,30],[9,3]
//"get","get","get"
//[9],[10],[10] -- output: 3,-1,-1 but expected: 3,5,5,

mLCC2.put(10,13);
mLCC2.put(3,17);
mLCC2.put(6,11);
mLCC2.put(10,5);
mLCC2.put(9,10);
mLCC2.get(13); //expected -1;
mLCC2.put(2,19);
mLCC2.get(2);
mLCC2.get(3);
mLCC2.put(5,25);
mLCC2.get(8);
mLCC2.put(9,22);
mLCC2.put(5,5);
mLCC2.put(1,30);
mLCC2.get(11);
mLCC2.put(9,12);
mLCC2.get(7);
mLCC2.get(5);
mLCC2.get(8);
mLCC2.get(9);
mLCC2.put(4,30);
mLCC2.put(9,3);
mLCC2.get(9);
console.log('get 10 should return 5 not -1:', mLCC2.get(10));
console.log('get 10 should return 5 not -1:', mLCC2.get(10));
console.log(mLCC2.cache);





