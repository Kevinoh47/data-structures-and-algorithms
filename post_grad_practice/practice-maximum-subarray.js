'use strict';

/**
 * https://leetcode.com/problems/maximum-subarray/submissions/
 * Runtime: 1404 ms, faster than 5.17% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 35.4 MB, less than 22.18% of JavaScript online submissions for Maximum Subarray.
 * @param {*} nums 
 */
let maxSubArray = nums => {

  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentIndex = i;
    //console.log({currentIndex});
    let currentSum = nums[currentIndex];
    //console.log({currentSum});
    while (currentIndex >= 0) {
      if (currentSum > max) {
        max = currentSum;
      }
      currentIndex--;
      currentSum = currentSum + nums[currentIndex];
    }
  }
  return max;
};

let input = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(input));

input = [-2,1,0];
console.log(maxSubArray(input));