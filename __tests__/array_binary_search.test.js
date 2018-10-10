'use strict';

const array_binary_search = require('../array_binary_search.js');
const faker = require('faker');

let orderedArr = [1, 3, 5, 6, 7, 8, 9, 11, 13, 17, 23, 29, 31];

describe ('Ordred array binary search', () => {
  it('can find the first element', () => {
    let searchKey = 1;
    let result = array_binary_search.binarySearch(orderedArr, searchKey);
    let expectedIndex = 0;
    expect(result).toEqual(expectedIndex);
  });

  it('can find the last element', () => {
    let searchKey = 31;
    let result = array_binary_search.binarySearch(orderedArr, searchKey);
    let expectedIndex = 12;
    expect(result).toEqual(expectedIndex);
  });

  it('it can find a random element', () => {
    let expectedValue = faker.random.arrayElement(orderedArr);
    let expectedIndex = orderedArr.indexOf(expectedValue);
    let expectedValue = faker.random.arrayElement(orderedArr);
    let result = array_binary_search.binarySearch(orderedArr, searchKey);
    expect(result).toEqual(expectedIndex);
  });

  it('returns a -1 if the search key is not in the ordered array', () => {
    let searchKey = 999;
    let result = array_binary_search.binarySearch(orderedArr, searchKey);
    expect(result).toEqual(-1);
  });
});






