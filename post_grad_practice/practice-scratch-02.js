console.log('\n ... Move Zeroes ... \n');

/***
 *  https://leetcode.com/problems/move-zeroes/
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   let removeIdxs =[];

//   nums.forEach((elem, idx) => {
//     if(!elem) {
//       removeIdxs.push(idx);
//     }
//   });

//   console.log({removeIdxs});

//   if (removeIdxs.length > 0) {
//     for (let i = 0; i < removeIdxs.length; i++) {
//       let splicer = removeIdxs[i];
//       nums.splice(splicer, 1);
//       nums.push(0);
//     }
//   }
//   return nums;
// };

// THis works for my environment but not LeetCode's. I suspect they are not letting me update nums...
// var moveZeroes = function(nums) {
//   let newOrder =[];
//   let numsLen = nums.length;
//   let zeroCount;
  
//   nums.forEach((elem) => {
//     if(elem !==0) {
//       newOrder.push(elem);
//     }
//   });

//   zeroCount = numsLen - newOrder.length;

//   if (zeroCount > 0) {
//     nums = [];
//     nums = [...newOrder];
//     while (zeroCount > 0) {
//       nums.push(0);
//       zeroCount--;
//     }
//   }
//   return nums;
// };

// THis ALSO works for my environment but not LeetCode's. I suspect they are not letting me update nums...

// var moveZeroes = function(nums) {
//   let newOrder =[];
//   let numsLen = nums.length;
//   let zeroCount;
  
//   nums.forEach((elem) => {
//     if(elem !==0) {
//       newOrder.push(elem);
//     }
//   });

//   zeroCount = numsLen - newOrder.length;

//   if (zeroCount > 0) {
//     while (zeroCount > 0) {
//       newOrder.push(0);
//       zeroCount--;
//     }
//     nums = [...newOrder];
//   }
//   return nums;
// };

// If i just change how nums is updated to old school, LeetCode is happy:
/**
 * https://leetcode.com/problems/move-zeroes/submissions/
 * Success
 * Runtime: 52 ms, faster than 99.00% of JavaScript online submissions for Move Zeroes.
   Memory Usage: 36.1 MB, less than 14.33% of JavaScript online submissions for Move Zeroes.
 */

var moveZeroes = function(nums) {
  let newOrder =[];
  let numsLen = nums.length;
  let zeroCount;
  
  nums.forEach((elem) => {
    if(elem !==0) {
      newOrder.push(elem);
    }
  });

  zeroCount = numsLen - newOrder.length;

  if (zeroCount > 0) {
    while (zeroCount > 0) {
      newOrder.push(0);
      zeroCount--;
    }

    for(let i = 0; i < nums.length; i++) {
      nums[i]=newOrder[i];
    }
  }

  return nums;
};




let myInput = [0,1,0,3,12];
console.log('expected output is [1,3,12,0,0]:', moveZeroes(myInput));
myInput = [0,0,0,0,0];
console.log('expected output is [0,0,0,0,0]:', moveZeroes(myInput));
myInput = [1,2,3,4,5];
console.log('expected output is [1,2,3,4,5]:', moveZeroes(myInput));
myInput = [1,2,3,4,0];
console.log('expected output is [1,2,3,4,0]:', moveZeroes(myInput));
