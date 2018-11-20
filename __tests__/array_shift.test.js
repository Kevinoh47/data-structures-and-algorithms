'use strict';

const arrayShift = require('../array_shift.js');

let evenArr = [1, 3, 5, 6, 7, 11];
let oddArr = [1, 3, 5, 6, 7];


describe ('insertShiftArray', () => {

  it('can insert an element in the middle of an array with an even number of elements', () => {

    let result = arrayShift.insertShiftArray(evenArr, 47);
    expect(result).toEqual([1, 3, 5, 47, 6, 7, 11]);
  });

  it('can insert an element in the middle  of an array with an odd number of elements', () => {
    let result = arrayShift.insertShiftArray(oddArr, 47);
    expect(result).toEqual([1, 3, 5, 47, 6, 7]);
  });
});






