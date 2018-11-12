/**
 * Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
 */

'use strict';

let array_shift = module.exports = {};

/**
 * function insertShiftArray
 * @param  arr an array to which a new element will be added in the middle.
 * @param  val a value to be input into the middle of the array
 * @return array  
 */
array_shift.insertShiftArray = function (arr, val) {
  let midIdx = Math.round(arr.length/2);
  let i = arr.length -1;
  for (i; i >= midIdx; i--) {
    let currVal = arr[i];
    arr[i+1] = currVal;
  }
  arr[midIdx] = val;
  return arr;
};
