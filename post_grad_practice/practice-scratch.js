'use strict';



const myArr = [1,2,3];

function sumOfPairs(numbers) {

  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log({'curr1':firstNumber, 'curr2':secondNumber, 'sum': firstNumber + secondNumber});
    });
  });
}
sumOfPairs(myArr);

console.log('\n ... ... \n');

let largest = -Number.MAX_VALUE;
console.log(largest);
let smallest = -Number.MIN_VALUE;
console.log(smallest);

largest = Number.MAX_VALUE;
console.log(largest);
smallest = Number.MIN_VALUE;
console.log(smallest);

console.log('\n ... ... \n');

/**
 * https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation
 * Write a function that takes an array of characters and reverses the letters in place
 * My solution is O(2n) thus O(n) for time and space. 
 * Their solution is (On) time O(1) space
 */

// my solution:
let inplaceReverser = arr => {
  let myQ = [];
  while (arr.length) {
    myQ.push(arr.pop());
  }
  while(myQ.length){
    arr.push(myQ.shift());
  }

  return arr;
};

console.log(inplaceReverser(['a','b','c','d']));
console.log(inplaceReverser(['a','b','c','d','f']));

console.log('\n ... \n');

// their solution swaps characters until the middle is reached:
let inplaceReverserIC = arr => {
  let leftIndex = 0, rightIndex = arr.length-1;

  while(leftIndex < rightIndex) {
    let oldLeft = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = oldLeft;
    leftIndex++;
    rightIndex--;
  }
  return arr;
};
console.log(inplaceReverserIC(['a','b','c','d']));
console.log(inplaceReverserIC(['a','b','c','d','f']));

console.log('\n ... ... \n');
function squareArrayInPlace(intArray) {

  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: we could make this function return undefined,
  // since we modify intArray in place.
  return intArray;
}

console.log(squareArrayInPlace([1,2,3,4,5]));

console.log('\n ... ... \n');


/**
 * https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation
 * Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place
 * My solution  and the IC solution are both (On) time O(1) space
 */

// my solution:
let reverseWords = arr => {

  // first just reverse all the characters
  inplaceReverser(arr);
  console.log({arr});

  // now, we re-reverse all the characters inside each substring marked by an empty space.

  let spaceIndices = []; 
  for (let i = 0; i < arr.length; i++){
    if( arr[i] === ' '){spaceIndices.push(i);}
  }

  console.log({spaceIndices});

  let leftIndex, rightIndex;

  for( let i = 0; i <= spaceIndices.length; i++) {

    leftIndex = (i === 0) ? 0 : spaceIndices[i-1]+1;
    rightIndex = (spaceIndices[i]) ? (spaceIndices[i]-1) : arr.length-1;

    console.log('left', leftIndex, 'right', rightIndex);

    while(leftIndex < rightIndex) {
      let oldLeft = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = oldLeft;
      leftIndex++;
      rightIndex--;
    }
  }

  return arr;
};

console.log(reverseWords(['p','a','n','t','s',' ','h','o','t',' ','p','i','n','k']));
console.log(reverseWords(['l','a','n','d','e','d',' ','h','a','s',' ','e','a','g','l','e',' ','t','h','e']));

console.log('\n ... InterviewCake solution ... \n');

function reverseWordsIC(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  // oops IC wasn't returning anything... I guess since the work is being done in place it doesn't have to...
  // return message;
}

function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

let test1 = ['p','a','n','t','s',' ','h','o','t',' ','p','i','n','k'];
reverseWordsIC(test1);

console.log({test1});
let test2 = ['l','a','n','d','e','d',' ','h','a','s',' ','e','a','g','l','e',' ','t','h','e'];
reverseWordsIC(test2);
console.log({test2});

console.log('\n ... Merge sorted arrays ... \n');

/**
 * https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
 * input two sorted arrays, merge them into one sorted array
 * My solution is probably O(n lg n) ... IC claims O(n) for time and space.
 * 
 *  "What would the time cost be? O(nlg⁡n)O(n\lg{n})O(nlgn), where n is the total length of our output array (the sum of the lengths of our inputs). We can do better. With this algorithm, we're not really taking advantage of the fact that the input arrays are themselves already sorted. How can we save time by using this fact?""

 */

let mergeSortedArrays = (arr1, arr2) => {
  let newArr = arr1.concat(arr2);

  newArr.sort((a,b) => {return a - b;});
  return newArr;
};

let arr1 = [3,4,6,10,11,15];
let arr2 = [1,5,8,12,14,19];

console.log(mergeSortedArrays(arr1, arr2));

console.log('\n ...  ... \n');

/**
 * My solution after looking at a few clues...
 * @param {*} a1 
 * @param {*} a2 
 */
let mergeSortedArraysMoreEfficiently = (a1, a2) => {
  let a1Copy = [...a1];
  let a2Copy = [...a2];

  let totalLength = a1.length + a2.length;
  const results = [];

  while (totalLength > 0) {
    if (a1Copy[0] <= a2Copy[0]) {
      results.push(a1Copy[0]);
      a1Copy.shift();
    }
    else if (a1Copy[0] > a2Copy[0]){
      results.push(a2Copy[0]);
      a2Copy.shift();
    }
    else if (a1Copy.length > 0 && a2Copy.length === 0) {
      results.push(a1Copy[0]);
      a1Copy.shift();
    }
    else if (a1Copy.length === 0 && a2Copy.length > 0) {
      results.push(a2Copy[0]);
      a2Copy.shift();
    }
    totalLength--;
  }
  return results;
};

console.log(mergeSortedArraysMoreEfficiently(arr1, arr2));

let arr3 = [1,5,8,12,14,19,21,23,29];
let arr0 = [3,4,6,10,11,15,16,17,19,21,22,25,30,35,40,45];
console.log(mergeSortedArraysMoreEfficiently(arr1, arr3));
console.log(mergeSortedArraysMoreEfficiently(arr0, arr3));

console.log('\n ...  ... \n');

/**
 * Interview Cake solution. Logically it is similar to mine, but i believe mine to be easier to understand.
 * However, mine uses copies of the input arrays as queues. It wouldn't have to, but if we used the input arrays, we would be adding side effects.
 * Theirs just uses pointers so no copies are necessary.
 * @param {*} myArray 
 * @param {*} alicesArray 
 */
function mergeArraysIC(myArray, alicesArray) {

  const mergedArray = [];
  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {

    const isMyArrayExhausted = currentIndexMine >= myArray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {

      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
}

console.log(mergeArraysIC(arr1, arr3));
console.log(mergeArraysIC(arr0, arr3));

/**
 * My practice version of IC solution. This is same logic, just a little clearer via better names.
 */

let mergeOrderedArraysIC2 = (a1, a2) => {
  let results = [];
  let currentA1Idx = 0, currentA2Idx = 0, currentResultsIdx = 0;

  while(currentResultsIdx < (a1.length + a2.length)) {
    let a1IsFinished = currentA1Idx >= a1.length;
    let a2IsFinished = currentA2Idx >= a2.length;

    if(!a1IsFinished && (a2IsFinished || a1[currentA1Idx] < a2[currentA2Idx])) {
      results[currentResultsIdx] = a1[currentA1Idx];
      currentA1Idx++;
    }
    else {
      results[currentResultsIdx] = a2[currentA2Idx];
      currentA2Idx++;
    }
    currentResultsIdx++;
  }
  return results;
};

console.log('\n ...  My version of IC solution... \n');

let arr4 = [1,5,8,12,14,19,21,23,29];
let arr5 = [3,4,6,10,11,15,16,17,19,21,22,25,30,35,40,45];
console.log(mergeOrderedArraysIC2(arr4, arr5));

console.log('\n ...  Another attempt at brackets matcher ... \n');
/**
 * Another attempt at Valid Parenthesis
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * Hints
 * An interesting property about a valid parenthesis expression is that a sub-expression of a valid expression should also be a valid expression. (Not every sub-expression) e.g.

{ { } [ ] [ [ [ ] ] ] } is VALID expression
          [ [ [ ] ] ]    is VALID sub-expression
  { } [ ]                is VALID sub-expression

Can we exploit this recursive structure somehow?
What if whenever we encounter a matching pair of parenthesis in the expression, we simply remove it from the expression? This would keep on shortening the expression. e.g.

{ { ( { } ) } }
      |_|

{ { (      ) } }
    |______|

{ {          } }
  |__________|

{                }
|________________|

VALID EXPRESSION!

The stack data structure can come in handy here in representing this recursive structure of the problem. We can't really process this from the inside out because we don't have an idea about the overall structure. But, the stack can help us process this recursively i.e. from outside to inwards.


 * Success
Details
Runtime: 52 ms, faster than 99.88% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 34.6 MB, less than 32.50% of JavaScript online submissions for Valid Parentheses.
 */

var isValid = function(s) {
  let myArr = s.split('');
  let myStack = [];

  while (myArr.length) { 
    let curr = myArr.pop();

    let prev = myStack.length ? myStack[myStack.length-1] : 'nope';

    // if previous and current are a matching pair...
    if (
      ( prev === ')' && curr === '(') ||
      ( prev === '}' && curr === '{') ||
      ( prev === ']' && curr === '[') 
    ) {
      myStack.pop(); // pop previous and swallow current.
    }
    else {
      myStack.push(curr);
    }
  }
  
  return (myStack.length === 0);
};

console.log(isValid('[()[][{}]]'));

console.log('\n ...  Max profit ... \n');
/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * Success
Details
Runtime: 596 ms, faster than 6.16% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 35.2 MB, less than 93.93% of JavaScript online submissions for Best Time to Buy and Sell Stock.

 * 
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {
  let maxProfit = 0;

  prices.reduce((prev, curr, currIndex) => {
    while(currIndex >= 0) {
      let currProfit = curr - prices[currIndex];
      
      maxProfit = (currProfit > maxProfit) ? currProfit: maxProfit;

      currIndex--;
    }
  }, maxProfit);

  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

console.log('\n ...  reverse integer digits ... \n');

/**
 * https://leetcode.com/problems/reverse-integer/
 * 
 * Check this: https://stackoverflow.com/questions/47600096/what-is-32-bit-integer-in-javascript
 * 
 * Also check the Solution tab to see much more elegant (and harder to understand) solutions.
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Notes:

    The length of cpdomains will not exceed 100. 
    The length of each domain name will not exceed 100.
    Each address will have either 1 or 2 "." characters.
    The input count in any count-paired domain will not exceed 10000.
    The answer output can be returned in any order.

    
Success
Details
Runtime: 76 ms, faster than 99.09% of JavaScript online submissions for Reverse Integer.
Memory Usage: 35.8 MB, less than 63.66% of JavaScript online submissions for Reverse Integer.

 */

/**
 * @param {number} x
 * @return {number}
 */

var reverseInt = function(x) {

  let posNum = (x >= 0);
  let myString = JSON.stringify(x);
  let arr = myString.split('');
  if (arr[0] === '-') {arr = arr.slice(1);}

  let leftIdx = 0, rightIdx = arr.length-1;

  while(leftIdx < rightIdx) {
    let temp = arr[leftIdx];
    arr[leftIdx] = arr[rightIdx];
    arr[rightIdx] = temp;

    leftIdx++;
    rightIdx--;
  }

  let newString = (posNum) ? arr.join('') : '-' + arr.join('');

  let myNum = Number(newString);

  return (Math.abs(myNum) > 0x7FFFFFFF ) ? 0 : myNum;

};

console.log(reverseInt(321));
console.log(reverseInt(-321));
console.log(reverseInt(320));
console.log(reverseInt(3200));
console.log(reverseInt(32000));
console.log(reverseInt(3201));
console.log(Number.MAX_SAFE_INTEGER);
console.log(reverseInt(1534236469)); // should be 0
console.log(reverseInt(-2147483648));
//should be 0

console.log('\n ...  subdomain count ... \n');
/**
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 * Success
Details
Runtime: 76 ms, faster than 98.29% of JavaScript online submissions for Subdomain Visit Count.
Memory Usage: 38.9 MB, less than 35.00% of JavaScript online submissions for Subdomain Visit Count.

 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let subdomains = {};
  let output = [];
  
  cpdomains.map((e) => {
    let myCount = Number(e.substring(0, e.indexOf(' ')));
    let myDomains = e.substring(e.indexOf(' '));

    let sub1 = myDomains.substring(myDomains.lastIndexOf('.')+1).trim();
    let sub2, sub3;

    if (myDomains.indexOf('.') !== myDomains.lastIndexOf('.')) {

      sub2 = myDomains.substring(myDomains.indexOf('.')+1).trim();
      sub3 = myDomains.trim();
    } else {
      sub2 = myDomains.trim();
      sub3 = null;
    }

    if (!subdomains[sub1]) {
      subdomains[sub1]=myCount;
    }
    else if (subdomains[sub1]) {
      
      let subTotal = subdomains[sub1]; 
      subTotal += myCount;

      subdomains[sub1]=subTotal;
    }
    if (!subdomains[sub2]) {
      subdomains[sub2]=myCount;
    }
    else if (subdomains[sub2]) {
      let subTotal = subdomains[sub2] + myCount;
      subdomains[sub2]=subTotal;
    }
    if (sub3 !== null) {
      if (!subdomains[sub3]) {
        subdomains[sub3]=myCount;
      }
      else if (subdomains[sub3]) {
        let subTotal = subdomains[sub3] + myCount;
        subdomains[sub3]=subTotal;
      }
    }
  });

  Object.keys(subdomains).map((e)=>{
    output.push(`${subdomains[e]} ${e}`);
  });

  return output;
};

let t1 = ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'];

console.log(subdomainVisits(t1));
