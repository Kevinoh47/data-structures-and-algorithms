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



/**
* Attempting to do this in O(1) extra space
*/
console.log(`\n ... leetcode string compression 2... \n`);
var compress2 = function(chars) {
  
  let currCount = 1;

  for (let i=0; i < chars.length; i++) {
    const prevIdx = i-1;
    const currVal = chars[i];
    const prevVal = (chars[prevIdx]) ? chars[prevIdx] : null;

    // count up all the same values in a row
    if (prevVal !== null && prevVal === currVal) {
      currCount++;
    }
    // when we switch values and count is greater than one, replace last value with count
    if (currCount > 1 && prevVal !== null && prevVal !== currVal) {
      chars.splice(prevIdx,1,currCount.toString());
      currCount=1;
    }
    // for last element in array, if count > 1 replace last element with count
    if (currCount > 1 && i === chars.length -1) {
      chars.splice(i,1,currCount.toString());
    }
  }

  //now compress the string:
  let lastCharIdx = 0;
  for (let j = 0; j < chars.length; j++) {

    const curr = chars[j];
    const prev = (chars[j-1]) ? chars[j-1] : null;

    // find where current char starts
    if(isNaN(parseInt(curr)) && prev !== null && prev !== curr) {
      lastCharIdx = j;
    }
    // if current is number, delete any elements between the first instance of the char and the number
    if (!isNaN(parseInt(curr))) {

      const charCountIdx = lastCharIdx+1;
      const deleteCount = j-charCountIdx;

      chars.splice(charCountIdx, deleteCount);
      
      // reset current index to account for deleted elements:
      j -= deleteCount;

      // manage for numbers greater than a single digit
      if (parseInt(curr) > 9) {
        const countArr = curr.toString().split('');
        
        for (let k = 0; k < countArr.length; k++) {
          // replace the first one
          if (k === 0) {
            chars.splice(j+k, 1, countArr[k]);
          } 
          // insert subsequent digits 
          else {
            chars.splice(j+k, 0, countArr[k]);
          }
        }
        // reset current index to account for added elements:
        j += countArr.length-1; 
      }
    }
  }
  return chars;
};

// chars = ['a','a','b','b','c','c','c'];
// console.log({chars});
// console.log(compress2(chars));
// console.log(`\n ... \n`);
// chars = ['a'];
// console.log({chars});
// console.log(compress2(chars));
// console.log(`\n ... \n`);
// chars = ['a','b','b','b','b','b','b','b','b','b','b','b','b'];
// console.log({chars});
// console.log(compress2(chars));
// console.log(`\n ... \n`);

// bug:
// input
// ["a","a","a","b","b","a","a"]
// Output
// ["a","2","a","2"]
// Expected
// ["a","3","b","2","a","2"]

// chars = ['a','a','a','b','b','a','a'];
// console.log({chars});
// console.log(compress2(chars));
// console.log(`\n ... \n`);
// bug:
// Input
// ["a","b","c","d","e","f","g","g","g","g","g","g","g","g","g","g","g","g","a","b","c"]
// Output
// ["a","b","c","d","e","f","g","1","2","b","c"]
// Expected
// ["a","b","c","d","e","f","g","1","2","a","b","c"]

// chars = ["a","b","c","d","e","f","g","g","g","g","g","g","g","g","g","g","g","g","a","b","c"];
// console.log({chars});
// console.log(compress2(chars));
// console.log(`\n ... \n`);

// bug:
// well mine doesn't work if there are NUMBERS in the input....
// Not gonna solve this one right now...
// one possible approach: update counts as real numbers. Then on final pass, stringify them. This might work because the input for this bug is all stringified chars. 
// or a better approach may be:
// 1) for every char with count > 1, splice it out and increment the count.
// 2) when we get to the next char, splice in the count... managing also, of course, for double digit counts...

// Wrong Answer
// Details
// Input
// ["b","l","l","l","l","l","l","4","4","W","W","&","d","d","d","@","D","D",".",".",".","8","8","8","U","V",">","J","J","k","H","H","=","l","[","[","[","[","[","[","[","a","a","'","<","[","[","y","V","l","l","'","$","E","`","v","k","E","E","t","t","t","t","t","=","=","0","C","a","l","l","l","r","R","M","M","c","c","c","A","A","S","9","9","9","9",")",")","\\","s","\\","\\","y","W","W","W","J","J","J","J","6","6","<","<","E","u","e","e","e","e","e","e","e","e","e","9","9","9","9","R","8","?","F","3","&","&","&","&","f","%","%","2","2","2",")",")",")","J","p","|","D","D","D","s","t","V","V","?","^","^","S","3","3","3","3","h","*","|","|","b","b","a","a","a","r","r","r","r","J",".","^","^","~","g",":",":",":","(","4","4","4","4","w","w","w","w","w","w","w","C","?","=","d","L",":","0","0","c","w","w","w","w","w","w","{","{","t","k","k","k","&","&","&","h","j","j","j","0","3","l",";",";",";",";",";",".",".",".","%","1","1","1","l","9","?","?","?","t",">","E","N","N","@",">",".",".","I","a","a","a","a","B","7","7","{","o","o","-","+","+","+","+","o","o","}","B","B","r","r","r","q","4","4","4","9","W","W","W","W","W","'","'","'","g","J","(","(","(","(","t","t","?",";","g","g","g","0","]","]","]"]

// Output
// ["b","l","2","W","2","&","d","3","@","D","2",".","3","U","V",">","J","2","k","H","2","=","l","[","7","a","2","'","<","[","2","y","V","l","2","'","$","E","`","v","k","E","2","t","5","=","0","C","a","l","3","r","R","M","2","c","3","A","2","S","4",")","2","\\","s","\\","2","y","W","3","J","2","<","2","E","u","e","4","R","8","?","F","3","&","4","f","%","3",")","3","J","p","|","D","3","s","t","V","2","?","^","2","S","4","h","*","|","2","b","2","a","3","r","4","J",".","^","2","~","g",":","3","(","4","w","7","C","?","=","d","L",":","2","c","w","6","{","2","t","k","3","&","3","h","j","3","l",";","5",".","3","%","3","l","9","?","3","t",">","E","N","2","@",">",".","2","I","a","4","B","2","{","o","2","-","+","4","o","2","}","B","2","r","3","q","9","W","5","'","3","g","J","(","4","t","2","?",";","g","0","]","3"]
// Expected
// ["b","l","6","4","2","W","2","&","d","3","@","D","2",".","3","8","3","U","V",">","J","2","k","H","2","=","l","[","7","a","2","'","<","[","2","y","V","l","2","'","$","E","`","v","k","E","2","t","5","=","2","0","C","a","l","3","r","R","M","2","c","3","A","2","S","9","4",")","2","\\","s","\\","2","y","W","3","J","4","6","2","<","2","E","u","e","9","9","4","R","8","?","F","3","&","4","f","%","2","2","3",")","3","J","p","|","D","3","s","t","V","2","?","^","2","S","3","4","h","*","|","2","b","2","a","3","r","4","J",".","^","2","~","g",":","3","(","4","4","w","7","C","?","=","d","L",":","0","2","c","w","6","{","2","t","k","3","&","3","h","j","3","0","3","l",";","5",".","3","%","1","3","l","9","?","3","t",">","E","N","2","@",">",".","2","I","a","4","B","7","2","{","o","2","-","+","4","o","2","}","B","2","r","3","q","4","3","9","W","5","'","3","g","J","(","4","t","2","?",";","g","3","0","]","3"]

console.log(`\n ... leetcode string compression 2... \n`);
/**
Success
Details
Runtime: 72 ms, faster than 48.75% of JavaScript online submissions for String Compression.
Memory Usage: 37.7 MB, less than 8.27% of JavaScript online submissions for String Compression.
 */

var compress3 = function(chars) {
  
  let currCount = 1;
  const multipleDigitsIdxes = [];
  const singleDigitsIdxes = [];

  for (let i=1; i < chars.length; i++) {
    const prevIdx = i-1;
    const currVal = chars[i];
    const prevVal = chars[prevIdx];

    // count up all the same values in a row
    if (i > 0 && prevVal === currVal) {
      currCount++;
      // remove the current element.
      chars.splice(i,1);
      i -= 1; // set index back one
    }
    // when we switch values and count is greater than one, splice in the count:
    if (i > 0 && currCount > 1 && prevVal !== currVal) {
      chars.splice(i, 0, currCount);
      if (currCount > 9) {
        multipleDigitsIdxes.push(i);
      } else {
        singleDigitsIdxes.push(i);
      }
      currCount=1; // reset currCount
      i += 1; // sent index forward 1;
    }
    // for last element in array, if count > 1 splice in the count
    if (currCount > 1 &&  i === chars.length-1) {
      chars.splice(i+1, 0, currCount);
      if (currCount > 9) {
        multipleDigitsIdxes.push(i+1);
      } else {
        singleDigitsIdxes.push(i+1);
      }
      i += 1;
    }
  }

  // convert single digit numbers to chars
  if (singleDigitsIdxes.length) {
    singleDigitsIdxes.forEach((charsIdx) => {
      let stringified = chars[charsIdx].toString();
      chars.splice(charsIdx, 1, stringified);
    });
  }

  // convert numbers with multiple digits to multiple single digit chars
  if (multipleDigitsIdxes.length) {
    // go backwards, to avoid having to manage changing indexes on subsequent inserts.
    for (let j = multipleDigitsIdxes.length -1; j >= 0; j--) {
      let charsIndex = multipleDigitsIdxes[j];
      let charsVal = chars[charsIndex];
      let charsValArr = charsVal.toString().split('');

      for (let m = 0; m < charsValArr.length; m++) {
        let currDigit = charsValArr[m];
        if (m === 0) {
          chars.splice(charsIndex, 1, currDigit);
        }
        else {
          chars.splice(charsIndex+1, 0, currDigit);
        }
      }
    }
  }
  return chars;
};

console.log(`\n ... another attempt for O(1) space on compression: \n`);
chars = ['a','a','b','b','c','c','c'];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);
chars = ['a'];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);
chars = ['a','b','b','b','b','b','b','b','b','b','b','b','b'];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);

// bug:
// input
// ["a","a","a","b","b","a","a"]
// Output
// ["a","2","a","2"]
// Expected
// ["a","3","b","2","a","2"]

chars = ['a','a','a','b','b','a','a'];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);
// bug:
// Input
// ["a","b","c","d","e","f","g","g","g","g","g","g","g","g","g","g","g","g","a","b","c"]
// Output
// ["a","b","c","d","e","f","g","1","2","b","c"]
// Expected
// ["a","b","c","d","e","f","g","1","2","a","b","c"]

chars = ["a","b","c","d","e","f","g","g","g","g","g","g","g","g","g","g","g","g","a","b","c"];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);

/**
 * Bug...
 * Input
["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]
Output
["a","6","b","2","1","c",14]
Expected
["a","6","b","2","1","c","1","4"]
 */

 //added 2 more bs
chars = ["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"];
console.log({chars});
console.log(compress3(chars));
console.log(`\n ... \n`);

// if (multipleDigitsIdxes.length) {

//   console.log({chars});
//   console.log({multipleDigitsIdxes});

//   for (let m = 0; m < multipleDigitsIdxes.length; m++ ) {
//     let countArr = chars[m].toString().split('');

//     console.log('m: ', m, 'chars[m]: ', chars[m], 'countArr: ', countArr);

//     for (let j=0; j < countArr.length; j++) {
//       let currDigit = countArr[j];

//       console.log('j: ', j, 'currDigit: ', currDigit);

//       if (j === 0) {
//         chars.splice(m + j, 1, currDigit);
//       }
//       if (j > 0) {
//         chars.splice(m + j, 0, currDigit);
//       }
//       m += countArr.length-1; 
//     }
//   }
    
// }