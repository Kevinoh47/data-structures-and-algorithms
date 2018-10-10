/**
 * array_binary_search.js
 * Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
 */

'use strict';

let array_binary_search = module.exports = {};

/**
  * BinarySearch takes a sorted array and the search key as input parameters, and returns the index of the search key if it exists; if it does not exist it returns -1;
  * @param  sortedArr
  * @param  searchKey
  * @return  array index || -1
  */
array_binary_search.binarySearch = function (sortedArr, searchKey) {
  let min = 0;
  let max = sortedArr.length;

  while (min <= max) {
    
    let mid = (min + max) / 2 | 0;
    
    if (searchKey === sortedArr[mid]) { return mid }
    
    else if (searchKey < sortedArr[mid]) {
      max = --mid;
    }
    
    else {
      min = ++mid; // once min is greater than max, we break out of loop and return -1
    }
  }
  return -1;
}

