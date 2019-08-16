'use strict';

const getMinimumUniqueSum2 = require('../../post_grad_practice/hackerrank/test.js');

let arr = [1,2,3,4,2,2];


describe ('getMinimumUniqueSum2', () => {

  it('can manage more than one duplicate', () => {

    let result = getMinimumUniqueSum2(arr);
    expect(result).toEqual(21);
  });
});