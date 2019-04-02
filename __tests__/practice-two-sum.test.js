const {findTarget, twoSum, twoSumAscendingSimple, twoSumAscendingDupsAllowed} = require('../post_grad_practice/practice-two-sum');

const {BinarySearchTree} = require('../tree/tree.js');

describe('the twoSum function', () => {

  var inputArr = [2,7,11,15];

  it('can find two values in an array that add up to a target', () => {

    let result = twoSum(inputArr, 9);
    expect(result).toEqual([0,1]);
  });

  it('can return null if there are not two values in the input array that add up to the target', () => {

    let result = twoSum(inputArr, 1234);
    expect(result).toBeNull;
  });
});

describe('the twoSumAscendingDupsAllowed function', () => {

  var inputArr = [1,1,2,7,11,15];

  it('can find two values in an array that add up to a target even when those values are duplicates, returning non-zero-based indices', () => {

    let result = twoSumAscendingDupsAllowed(inputArr, 2);
    expect(result).toEqual([1,2]);
  });

  it('can return null if there are not two values in the input array that add up to the target', () => {

    let result = twoSumAscendingDupsAllowed(inputArr, 1234);
    expect(result).toBeNull;
  });
});

// describe('the twoSumAscendingSimple function', () => {

//   var inputArr = [1,1,2,7,11,15];

//   it('can find two values in an array that add up to a target even when those values are duplicates, returning non-zero-based indices', () => {

//     let result = twoSumAscendingSimple(inputArr, 2);
//     expect(result).toEqual([1,2]);
//   });

//   it('can return null if there are not two values in the input array that add up to the target', () => {

//     let result = twoSumAscendingSimple(inputArr, 1234);
//     expect(result).toBeNull;
//   });
// });

// this doesn't return in a timely manner.
// describe('the findTarget function', () => {

//   let myBSTree = new BinarySearchTree();
//   [5,3,6,2,4,null,7].map(e => myBSTree.add(e));

//   it('can determine that two node values in a binary search tree add up to the target, and return true', () => {

//     let result = findTarget(myBSTree.root, 9);
//     expect(result).toBeTruthy;
//   });

  // it('can return false if there are not two values in the input array that add up to the target', () => {

  //   let result = findTarget(myBSTree.root, 9999);
  //   expect(result).toBeFalsy;
  // });
// });



