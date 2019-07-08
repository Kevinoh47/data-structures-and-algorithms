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

/**
 * here is an elegant solution, faster than 98%:
 * https://leetcode.com/problems/move-zeroes/discuss/307169/Javascript-O(N)-solution-faster-than-98
 * 
 * var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i<nums.length; i++){
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            if (i>j) nums[i] = 0;
            j++;
        }
    }
    return nums;
};

And here is a solution which manages the index after splicing:
https://leetcode.com/problems/move-zeroes/discuss/320105/Very-simple-JS-solution

var moveZeroes = function(nums) {
    //keeps track of number of 0's encountered 
    let count = 0;
    
    let len = nums.length;
    
    for(let i=0; i<len; i++) {
        
      //if element in nums is 0; splice it from array and decrement counter i (so that i points to correct array element)
      if(nums[i] === 0) {
          nums.splice(i, 1);
          i -= 1;
          count += 1;
      }
    }
    
    //push in nums the number of 0 encountered
    while(count > 0) {
        nums.push(0);
        count -=1;
    }
};
 */

console.log(`\n ... remove element in place ... \n`);
/**
* https://leetcode.com/problems/remove-element/

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

* Success
Details
Runtime: 52 ms, faster than 89.43% of JavaScript online submissions for Remove Element.
Memory Usage: 33.8 MB, less than 48.91% of JavaScript online submissions for Remove Element.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i,1);
      i--; 
    }
  }
  console.log({nums});
  return nums.length;
};

let numsArr = [3,2,2,3];

console.log( removeElement(numsArr, 3));

numsArr = [0,1,2,2,3,0,4,2];

console.log( removeElement(numsArr, 2));


console.log(`\n ... leetcode string compression ... \n`);

/**
 * https://leetcode.com/problems/string-compression/submissions/
 * Success
Details
Runtime: 64 ms, faster than 84.40% of JavaScript online submissions for String Compression.
Memory Usage: 38 MB, less than 5.64% of JavaScript online submissions for String Compression.

 * @param {*} chars 
 */

var compress = function(chars) {

  let counter = 0, current, compressedArr = [];
  const maxIdx = chars.length-1;

  chars.map((e,idx) => {

    // set up:
    if (idx === 0) { current = e; counter = 0; }

    //same value encountered:
    if (e === current) {
      counter++;
    }
    // new value encountered:
    else if (e !== current ) {

      compressedArr.push(current);

      // Manage current, before resetting...
      if (counter > 1) {
        const counterArr = counter.toString().split('');
        counterArr.forEach(j=>{compressedArr.push(j);});
      }
      // now reset
      counter = 1;
      current = e;
    }
    
    // write final value:
    if (idx === maxIdx) {
      compressedArr.push(current);
      if (counter > 1) {
        const counterArr = counter.toString().split('');
        counterArr.forEach(j=>{compressedArr.push(j);});
      }
    }
  });

  // sigh... destructuring assignment works here, but not on LeetCode:
  // chars = [...compressedArr];
  // to satisfy LeetCode, replace the above single line with the following for loop and while loop:
  for (let i = 0; i < compressedArr.length; i++) {
    chars[i] = compressedArr[i];
  }
  while (chars.length > compressedArr.length) {
    chars.pop();
  }
  // leetCode wants only chars.length returned, but it is useful here to see both:
  return { 'len' : chars.length, 'chars': chars};
};

let chars = ['a','a','b','b','c','c','c'];
console.log(compress(chars));
chars = ['a'];
console.log(compress(chars));
chars = ['a','b','b','b','b','b','b','b','b','b','b','b','b'];
console.log(compress(chars));



 
