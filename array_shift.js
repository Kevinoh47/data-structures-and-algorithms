/**
 * Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.
 */
'use strict';

function insertShiftArray(arr, val) {
  let midIdx = Math.round(arr.length/2);
  let i = arr.length -1;
  for (i; i >= midIdx; i--) {
     let currVal = arr[i];
     arr[i+1] = currVal;
  }
   arr[midIdx] = val;
  return arr;
 }