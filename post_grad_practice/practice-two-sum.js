/**
 * https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/




/*
Notes for this solution from leetcode:
Runtime: 172 ms, faster than 20.35% of JavaScript online submissions for Two Sum.
Memory Usage: 34.9 MB, less than 40.44% of JavaScript online submissions for Two Sum.
*/
const {BinarySearchTree} = require('../tree/tree.js');

var twoSum = function(arr, target) {

  let outerVal, innerVal, output = [];

  loop1:
  for (var i=0; i < arr.length; i++) {

    outerVal = arr[i];
  
    for (var j=0; j < arr.length; j++) {
      if (j !== i ) {

        innerVal = arr[j];
        
        if (outerVal + innerVal === target) {
          output.push(i,j);
          break loop1;
        }
      }
    }
  }
  return output.length > 0 ? output : null;
};

console.log('\n ... two sum with inner loop works but is expensive O(n2) ... \n');

var inputArr = [2,7,11,15];
console.log({'TEST1 expects 0,1':twoSum(inputArr, 9)});
console.log({'TEST2 expects 1,2':twoSum(inputArr, 18)});
console.log({'TEST3 expects 2,3':twoSum(inputArr, 26)});
console.log({'TEST4 expects 0,3':twoSum(inputArr, 17)});
console.log({'TEST5 expects 0,2':twoSum(inputArr, 13)});
console.log({'TEST6 expects 1,2':twoSum(inputArr, 18)});
console.log({'TEST7 expects null':twoSum(inputArr, 1881)});
console.log({'TEST8 expects 1,3':twoSum(inputArr, 22)});
console.log({'TEST9 expects null':twoSum(inputArr, 14)}); 

var inputArr2 = [1,3,4,2];
console.log({'TEST10 expects 2,3':twoSum(inputArr2, 6)}); 
console.log({'TEST11 expects null':twoSum(inputArr2, 8)}); 

var inputArr3 = [3,3];
console.log({'TEST10 expects 0,1':twoSum(inputArr3, 6)}); 

/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *  167. Two Sum II - Input array is sorted
 * 
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

From the directions, i can't tell whether this question allows for duplicate values or not. If not, this will fail because of using Map object indice only allows for a single entry per value.

When I ran this on LeetCode it failed when the test had dups: run for [0,0,3,4], 0;

So this one only would work for no dups in input array...
 * 
 */

var twoSumAscending = function(arr, target) {
  let output = [];
  let myMap = new Map(); 
  let currDiff;
  
  arr.map((e,i) => { 
    
    myMap[e] = i;
    
  });
  
  // console.log({'keys':Object.keys(myMap)});
  // console.log({'values': Object.values(myMap)});
  // console.log({'entries': Object.entries(myMap)});

  arr.map((e,i) => {

    currDiff = target - e;
    
    // console.log({e});
    // console.log({currDiff});

    if (
      !output.length && 
      !!myMap[currDiff] && 
      myMap[currDiff] !== myMap[e]
    ) {

      // console.log({'MYMAP[CURRDIFF]': myMap[currDiff]});

      output.push(i+1, myMap[currDiff]+1);
    }
    
  });
  return output.length > 0 ? output : null;

};

console.log('\n ... this solution for ascending does NOT support dups  ... \n');
var inputArrAscending = [2,7,11,15];
console.log({'TEST10 expects 1,2':twoSumAscending(inputArrAscending, 9)});
console.log({'TEST20 expects 2,3':twoSumAscending(inputArrAscending, 18)});
console.log({'TEST30 expects 3,4':twoSumAscending(inputArrAscending, 26)});
console.log({'TEST40 expects 1,4':twoSumAscending(inputArrAscending, 17)});
console.log({'TEST50 expects 1,3':twoSumAscending(inputArrAscending, 13)});
console.log({'TEST60 expects 2,3':twoSumAscending(inputArrAscending, 18)});
console.log({'TEST70 expects null':twoSumAscending(inputArrAscending, 1881)});
console.log({'TEST80 expects 2,4':twoSumAscending(inputArrAscending, 22)});
console.log({'TEST90 expects null':twoSumAscending(inputArrAscending, 14)}); 

var inputArrAscending2 = [1,30,40,200];
console.log({'TEST100 expects 1,2':twoSumAscending(inputArrAscending2, 31)}); 
console.log({'TEST110 expects 2,3':twoSumAscending(inputArrAscending2, 70)}); 

var inputArrAscending3 = [3,3]; // the original question permits dups so this approach fails because it does not support duplicate values.
console.log({'TEST120 expects 1,2 but returns null because this approach does not support duplicate values':twoSumAscending(inputArrAscending3, 6)}); 


/**
 *  Attempting a similar one with a sort of map implementation allowing multiple values per indice.
 * 
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
 * 
 * Runtime: 68 ms, faster than 63.51% of JavaScript online submissions for Two Sum II - Input array is sorted.
Memory Usage: 37.2 MB, less than 5.51% of JavaScript online submissions for Two Sum II - Input array is sorted.
 */

var twoSumAscendingDupsAllowed = function(arr, target) {
  let output = [];
  let myMap = new Map(); 
  let currDiff;
  
  arr.map((e,i) => { 
    // supports multiple indexes for the same value
    if (!myMap[e]) {
      myMap[e] = [];
    }
    myMap[e].push(i);
  });

  arr.map((e,i) => {

    currDiff = target - e;

    // if we have not yet populated output, and if currDiff has been added to the Map, we need to test for dups.
    if ( !output.length && !!myMap[currDiff] ) {

      // dup value test
      if (myMap[e].length > 1) {
        if (2 * e === target) {
          // non-zero-based index expected.
          output.push(myMap[e][0]+1, myMap[e][1]+1);
        }
      }
      // single value test
      else if (
        myMap[e].length === 1 &&
        myMap[currDiff][0] !== myMap[e][0] // dont  test index against itself
      ) {
        // non-zero-based index expected.
        output.push(i+1, myMap[currDiff][0]+1);
      }
    }
    
  });
  return output.length > 0 ? output : null;

};

console.log('\n ... this solution for ascending DOES support dups and was accepted by LeetCode \n');
var ascendingDupsIncluded = [1,1,2,7,11,15];
console.log({'TEST900 expects 1,2':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 2)});
console.log({'TEST1000 expects 3,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 9)});
console.log({'TEST2000 expects 4,5':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 18)});
var ascendingDupsIncluded2 = [0,0,11,15];
console.log({'TEST3000 expects 1,2':twoSumAscendingDupsAllowed(ascendingDupsIncluded2, 0)});
ascendingDupsIncluded2 = [1,1,1,1];
console.log({'TEST4000 expects 1,2':twoSumAscendingDupsAllowed(ascendingDupsIncluded2, 2)});
ascendingDupsIncluded2 = [1,2,100,100];
console.log({'TEST4000 expects 3,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded2, 200)});


/*
* two sum ascending with a single loop
* from https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
* if sum is less than target, increase i; otherwise decrease j.
*/

let twoSumAscendingSimple = (arr, target) => {
  let l = arr.length, i = 0, j = l -1;

  while (arr[i] + arr[j] !== target) {
    arr[i] + arr[j] < target ? i++ : j--;
  }
  return [i+1,j+1]; // +1 for non-zero-based index
};

console.log('\n ... from solution in LeetCode comments ...  \n');
ascendingDupsIncluded = [2,7,11,15];
console.log({'TEST901 expects 1,2':twoSumAscendingSimple(ascendingDupsIncluded, 9)});
ascendingDupsIncluded = [0,0,2,7,11,15];
console.log({'TEST902 expects 1,2':twoSumAscendingSimple(ascendingDupsIncluded, 0)});

/*
 * first attempt at two sum ...
 * 
*/

var twoSumNoDups = function(arr, target) {
  let output = [];
  let mySet = {}; // oops i can't use this approach if duplicate values such as [3,3] are allowed, because a set has no dups...
  let currDiff;
  
  arr.map((e,i) => { 
    
    mySet[e] = i;
    
  });
  
  // console.log({'keys':Object.keys(mySet)});
  // console.log({'values': Object.values(mySet)});
  // console.log({'entries': Object.entries(mySet)});

  arr.map((e,i) => {

    currDiff = target - e;
    
    // console.log({e});
    // console.log({currDiff});

    if (
      !output.length && 
      !!mySet[currDiff] && 
      currDiff + e == target &&
      mySet[currDiff] !== mySet[e]
    ) {

      // console.log({'MYSET[CURRDIFF]': mySet[currDiff]});

      output.push(i, mySet[currDiff]);
    }
    
  });
  return output.length > 0 ? output : null;

};

console.log('\n ... first attempt for two sum does NOT support dups...  \n');
inputArr = [2,7,11,15];
console.log({'TEST11 expects 1,2':twoSumNoDups(inputArr, 9)});
console.log({'TEST21 expects 2,3':twoSumNoDups(inputArr, 18)});
console.log({'TEST31 expects 3,4':twoSumNoDups(inputArr, 26)});
console.log({'TEST41 expects 1,4':twoSumNoDups(inputArr, 17)});
console.log({'TEST51 expects 1,3':twoSumNoDups(inputArr, 13)});
console.log({'TEST61 expects 2,3':twoSumNoDups(inputArr, 18)});
console.log({'TEST71 expects null':twoSumNoDups(inputArr, 1881)});
console.log({'TEST71b expects 2,4':twoSumNoDups(inputArr, 22)});
console.log({'TEST71c':twoSumNoDups(inputArr, 14)}); // edge case oops FIXED
inputArr = [1,3,4,2];
console.log({'TEST81 expects 3,4':twoSumNoDups(inputArr2, 6)}); // edge case oops FIXED
console.log({'TEST91 expects null':twoSumNoDups(inputArr2, 8)}); // edge case oops FIXED
inputArr = [3,3]; // oops using a SET does not work for dup values. Possibly a HashTable instead?
console.log({'TEST101 expects 1,2 but returns null because this solution does not support duplicate values':twoSumNoDups(inputArr3, 6)}); 

/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * hmmm... this solution tests correctly for me, using the same call as on LeetCode. But on LeetCode it produces false rather than true and fails. On LeetCode it is node.val rather than node.key ...  if I change it to orderedArr.push(node.val) it returns true as expected, but if i submit this, LeetCode reports  Time Limit Exceeded for their suite of tests.
 */

let myBSTree = new BinarySearchTree();

console.log('\n ... Building a Binary Search Tree...  \n');

[5,3,6,2,4,null,7].map(e => myBSTree.add(e));

console.log({'myBSTree inOrder traversal': myBSTree.inOrder()});

var findTarget = function(root, k) {
    
  let orderedArr = [];
  
  let _myOrderedTraversal = (node) => {
    
    if (node.left) {
      _myOrderedTraversal(node.left);
    }
    
    orderedArr.push(node.key);
    
    if (node.right) {
      _myOrderedTraversal(node.right);
    }   
  };
  
  let _orderedTwoSum = (arr, target) => {
    let i = 0, l = arr.length, j = l-1;
    while (arr[i] + arr[j] !== target) {
      arr[i] + arr[j] < target ? i++ : j--;
        
      if (i === j && arr[i] + arr[j] !== target) {
        return false;
      }
    }
    return true;
  };
  
  _myOrderedTraversal(root);

  return _orderedTwoSum(orderedArr, k);
};

console.log({'findTarget for arr, 9 expects true': findTarget(myBSTree.root,9)});


