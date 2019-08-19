'use strict';

const ElevatedThird = require('../../post_grad_practice/hackerrank/elevatedThird.js');

const writeIn = ElevatedThird.writeIn;
const maximumOccurringCharacter = ElevatedThird.maximumOccurringCharacter;
const maxDifference = ElevatedThird.maxDifference;
const getMinimumUniqueSum2 = ElevatedThird.getMinimumUniqueSum2;
const getMinimumUniqueSum = ElevatedThird.getMinimumUniqueSum;


describe ('writeIn', () => {

  it('can find return the string with the most entries:', () => {
    
    let ballot = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary', 'Harry'];
    let result = writeIn(ballot);

    // expects Harry - 3 votes 
    expect(result).toEqual('Harry');
  });

  it('can return the last alphanumeric entry of any ties for most votes:', () => {
    
    let ballot = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];
    let result = writeIn(ballot);

    // expects Michael - 2 votes, tie with Alex Harry and Mary, but last in alpha listing of tie for most votes
    expect(result).toEqual('Michael');
  });
});

describe ('maximumOccurringCharacter', () => {

  it('can find the maximum occurring character:', () => {
    const arr = 'abbbcccacccacc';
    
    let result = maximumOccurringCharacter(arr);

    // expects c: 
    expect(result).toEqual('c');
  });

  it('can find the maximum occurring , and if there is a tie, return the first one of the tied values that occurs in the string:', () => {
    const arr = 'abbbaacc';
    
    let result = maximumOccurringCharacter(arr);

    // expects a (tied with b but first in string): 
    expect(result).toEqual('a');
  });
});

describe ('maxDifference', () => {

  it('can find the maximum difference between an array element, and lower indexed, smaller valules:', () => {
    const arr = [1,2,3,1,4,3];
    
    let result = maxDifference(arr);
    // 'expecting 3 (4-1): ', maxDifference(arr));
    expect(result).toEqual(3);
    
  });

  it('can find the maximum difference between an array element, and lower indexed, smaller valules:', () => {
    const arr = [1,2,3,1,4,-47,0];
    
    let result = maxDifference(arr);

    // 'expecting 47 (0-47);
    expect(result).toEqual(47);
  });
});

describe ('getMinimumUniqueSum', () => {

  it('can make a single duplicate of any value unique by incrementing them, and then sum the results:', () => {
    let arr = [1,2,3,4,2];
    let result = getMinimumUniqueSum(arr);

    // expects 15 (1+2+3+4+5): 
    expect(result).toEqual(15);
  });
});

describe ('getMinimumUniqueSum2', () => {

  it('can make multiple duplicates of any value unique by incrementng them, and then sum the results', () => {
    let arr = [1,2,3,4,2,2];
    let result = getMinimumUniqueSum2(arr);

    // expects 21 (1+2+3+4+5+6): 
    expect(result).toEqual(21);
  });
});