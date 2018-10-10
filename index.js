'use strict';

const insertShiftArray = require('./array_shift.js');
const binarySearch = require('./array_binary_search.js');

let myOrderedArr = [47, 49, 55, 56, 60, 70];
let mySearchKey = 56;

console.log('binarySearch', binarySearch(myOrderedArr, mySearchKey));
console.log('insertShiftArray', insertShiftArray(myOrderedArr, mySearchKey));