/**
 * https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Notes for this solution from leetcode:
Runtime: 172 ms, faster than 20.35% of JavaScript online submissions for Two Sum.
Memory Usage: 34.9 MB, less than 40.44% of JavaScript online submissions for Two Sum.
*/

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

var inputArr = [2,7,11,15];
console.log({'TEST1':twoSum(inputArr, 9)});
console.log({'TEST2':twoSum(inputArr, 18)});
console.log({'TEST3':twoSum(inputArr, 26)});
console.log({'TEST4':twoSum(inputArr, 17)});
console.log({'TEST5':twoSum(inputArr, 13)});
console.log({'TEST6':twoSum(inputArr, 18)});
console.log({'TEST7':twoSum(inputArr, 1881)});
console.log({'TEST8':twoSum(inputArr, 22)});
console.log({'TEST9':twoSum(inputArr, 14)}); 

var inputArr2 = [1,3,4,2];
console.log({'TEST10':twoSum(inputArr2, 6)}); 
console.log({'TEST11':twoSum(inputArr2, 8)}); 

var inputArr3 = [3,3];
console.log({'TEST10':twoSum(inputArr3, 6)}); 

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

var inputArrAscending3 = [3,3]; // not sure if this is permitted or not by the question
console.log({'TEST120 expects null ':twoSumAscending(inputArrAscending3, 6)}); 


/**
 *  Attempting a similar one with a sort of hash table implementation allowing multiple values per indice.
 */

var twoSumAscendingDupsAllowed = function(arr, target) {
  let output = [];
  let myMap = new Map(); 
  let currDiff;
  
  arr.map((e,i) => { 
    
    if (!myMap[e]) {
      myMap[e] = [];

    }
    myMap[e].push(i);
    
  });

  arr.map((e,i) => {

    currDiff = target - e;

    // if we have not yet populated output, and if currDiff has been added, we need to test.
    if ( !output.length && !!myMap[currDiff] ) {

      // dup value test
      if (myMap[e].length > 1) {
        if (2 * e === target) {
          output.push(myMap[e][0]+1, myMap[e][1]+1);
        }
      }
      // single value test
      else if (
        myMap[e].length === 1 &&
        myMap[currDiff][0] !== myMap[e][0] // dont  test index against itself
      ) {
        output.push(i+1, myMap[currDiff][0]+1);
      }
    }
    
  });
  return output.length > 0 ? output : null;

};

console.log('\n ... \n');
var ascendingDupsIncluded = [1,1,2,7,11,15];
console.log({'TEST900 expects 1,2':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 2)});
console.log({'TEST1000 expects 3,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 9)});
console.log({'TEST2000 expects 4,5':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 18)});
var ascendingDupsIncluded2 = [0,0,11,15];
console.log({'TEST3000 expects 1,2':twoSumAscendingDupsAllowed(ascendingDupsIncluded2, 0)});

// console.log({'TEST30 expects 3,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 26)});
// console.log({'TEST40 expects 1,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 17)});
// console.log({'TEST50 expects 1,3':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 13)});
// console.log({'TEST60 expects 2,3':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 18)});
// console.log({'TEST70 expects null':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 1881)});
// console.log({'TEST80 expects 2,4':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 22)});
// console.log({'TEST90 expects null':twoSumAscendingDupsAllowed(ascendingDupsIncluded, 14)}); 


/*
 * first attempt...
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


// var inputArr = [2,7,11,15];
// console.log({'TEST1':twoSum(inputArr, 9)});
// console.log({'TEST2':twoSum(inputArr, 18)});
// console.log({'TEST3':twoSum(inputArr, 26)});
// console.log({'TEST4':twoSum(inputArr, 17)});
// console.log({'TEST5':twoSum(inputArr, 13)});
// console.log({'TEST6':twoSum(inputArr, 18)});
// console.log({'TEST7':twoSum(inputArr, 1881)});
//console.log({'TEST7b':twoSum(inputArr, 22)});
// console.log({'TEST7c':twoSum(inputArr, 14)}); // edge case oops FIXED
// var inputArr2 = [1,3,4,2];
// console.log({'TEST8':twoSum(inputArr2, 6)}); // edge case oops FIXED
// console.log({'TEST9':twoSum(inputArr2, 8)}); // edge case oops FIXED
// var inputArr3 = [3,3]; // oops using a SET does not work for dup values. Possibly a HashTable instead?
// console.log({'TEST10':twoSum(inputArr3, 6)}); 