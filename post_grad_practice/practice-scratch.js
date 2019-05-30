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
 * My next solution after looking at a few clues...
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
 * Another attempt at Valid Parenthesis tester
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

console.log('\n ...  leetcode max profit ... \n');
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

console.log('\n ...  reverse integer tests, including handling overflows ... \n');

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
    } 
    else {
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

/**
 * refactor
 * Success
Details
Runtime: 84 ms, faster than 74.75% of JavaScript online submissions for Subdomain Visit Count.
Memory Usage: 38.8 MB, less than 35.00% of JavaScript online submissions for Subdomain Visit Count.

 */
var subdomainVisitsRefactor = function(cpdomains) {
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
    } 
    else {
      sub2 = myDomains.trim();
      sub3 = null;
    }

    let subTotal = (subdomains[sub1]) ? subdomains[sub1] : 0; 
    subTotal += myCount;
    subdomains[sub1]=subTotal;
    
    subTotal = (subdomains[sub2]) ? subdomains[sub2] : 0; 
    subTotal += myCount;
    subdomains[sub2]=subTotal;
    
    if (sub3 !== null) {
      subTotal = (subdomains[sub3]) ? subdomains[sub3] : 0; 
      subTotal += myCount;
      subdomains[sub3]=subTotal;
    }
  });

  Object.keys(subdomains).map((e)=>{
    output.push(`${subdomains[e]} ${e}`);
  });

  return output;
};


let t1 = ['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'];

console.log(subdomainVisits(t1));
console.log('\n ...  subdomain count refactor ... \n');
console.log(subdomainVisitsRefactor(t1));
console.log('\n ...  subdomain count leet code solution ... \n');
/**
 * here is a more elegant implementation along the same lines as mine:
 * https://leetcode.com/problems/subdomain-visit-count/discuss/285938/Javascript-solution-using-hash-map
 *  
 */

var subdomainVisits2 = function(cpdomains) {
  const map = {};
  const output = [];
  cpdomains.forEach(cpdomain => {
    const split = cpdomain.split(' ');
    const count = parseInt(split[0]);
    const subdomains = split[1].split('.');
    let subdomain = subdomains[subdomains.length - 1];
    for (let i = subdomains.length - 2; i >= -1; i --) {
      map[subdomain] = map[subdomain] + count || count;
      subdomain = `${subdomains[i]}.${subdomain}`;
    }
  });
  for (let key in map) {
    output.push(`${map[key]} ${key}`);
  }
  return output;
};

console.log(subdomainVisits2(t1));

/* me rewriting the above to make it a little clearer */
var subdomainVisits3 = function(domainslist) {
  const map = {};
  const output = [];
  domainslist.forEach(domain => {
    const currArr = domain.split(' ');
    const count = parseInt(currArr[0]); //to convert string to int
    console.log({count});
    const subdomains = currArr[1].split('.'); //will be either 2 or 3
    let currSubdomain = subdomains[subdomains.length - 1]; // start with the least precise one and then work backwards
    console.log({subdomains});
    console.log({currSubdomain});
    for (let i = subdomains.length - 2; i >= -1; i--) {
      map[currSubdomain] = map[currSubdomain] + count || count;
      currSubdomain = `${subdomains[i]}.${currSubdomain}`;
      console.log({currSubdomain});
    }

  });
  console.log({map});
  // for in ... 
  // for (let key in map) {
  //   output.push(`${map[key]} ${key}`);
  // }
  // or Object.keys...:
  Object.keys(map).map(e => {
    output.push(`${map[e]} ${e}`);
  });

  return output;
};

console.log('\n ...  checking out the subdomain count solution code ... \n');
console.log(subdomainVisits3(t1));

console.log(`\n ... jewels and stones ... \n`);
/**
 * jewels and stones
 * https://leetcode.com/problems/jewels-and-stones/
 * 
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Note:

    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.



 * whiteboarded a solution pretty fast -- let's test it.
 * 
 * Note that my code failed at first, because my reducer test was: 
 * if(myMap[curr])
 * But because i had set each hash map value to 0, that tested false due to the 0.
 * Fix:
 * if(myMap[curr] === 0)
 * 
 * Success
Details
Runtime: 56 ms, faster than 99.09% of JavaScript online submissions for Jewels and Stones.
Memory Usage: 34.5 MB, less than 28.34% of JavaScript online submissions for Jewels and Stones.
 */

let jewelCounter = (J, S) => {

  const myMap = {};
  const myStones = S.split('');
  const myTypes = J.split('');

  myTypes.forEach(e=>{myMap[e] = 0; }); 

  let counter = 0;
  myStones.reduce((accumulator, curr) => {
    if(myMap[curr] === 0) {
      counter++;
    }
  }, 0);

  return counter;
};

let J = 'aA',  S = 'aAAbbbb';
console.log(jewelCounter(J,S));
J = 'z',  S = 'ZZZ';
console.log(jewelCounter(J,S));


console.log(`\n ... palindrome number tester ... \n`);
/**
 * https://leetcode.com/problems/palindrome-number/
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true

Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?

Success
Details
Runtime: 200 ms, faster than 97.53% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45.3 MB, less than 73.06% of JavaScript online submissions for Palindrome Number.

*/

let palindromeNumTester = x => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {return false;}

  const numArr = JSON.stringify(x).split('');

  let left = 0, right = numArr.length-1;

  while (left < right) {

    if (numArr[left] !== numArr[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log('expect true', palindromeNumTester(0));
console.log('expect false', palindromeNumTester(10));
console.log('expect true', palindromeNumTester(2));
console.log('expect true', palindromeNumTester(121));
console.log('expect true', palindromeNumTester(1221));
console.log('expect false', palindromeNumTester(-121));
console.log('expect true', palindromeNumTester(12321));
console.log('expect false', palindromeNumTester(123421));

/**
 * solution evolved from /inspired by https://leetcode.com/problems/palindrome-number/discuss/234068/Intuitive-JavaScript-Solution
 * 
 * Success
Details
Runtime: 204 ms, faster than 97.33% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45.1 MB, less than 82.28% of JavaScript online submissions for Palindrome Number.
 * 
 */

let palindromeNumTester2 = x => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {return false;}

  if (x < 10) {return true;} // single digits are palindrome.

  // const reversed = parseInt(JSON.stringify(x).split('').reverse().join(''));
  // return x === reversed;

  // refactor of above two statements.
  return x === parseInt(JSON.stringify(x).split('').reverse().join(''));


};

console.log('\n ... palindrome number tester 2 ... \n');
console.log('expect true', palindromeNumTester2(0));
console.log('expect false', palindromeNumTester2(10));
console.log('expect true', palindromeNumTester2(2));
console.log('expect true', palindromeNumTester2(121));
console.log('expect true', palindromeNumTester2(1221));
console.log('expect false', palindromeNumTester2(-121));
console.log('expect true', palindromeNumTester2(12321));
console.log('expect false', palindromeNumTester2(123421));

/**
 * Leet Code reverse string (input is array) in place
 * https://leetcode.com/problems/reverse-string/
 * 
 * Success
Details
Runtime: 120 ms, faster than 92.46% of JavaScript online submissions for Reverse String.
Memory Usage: 46.6 MB, less than 93.13% of JavaScript online submissions for Reverse String.


 */

let reverseString = s => {
  if(s.length === 1) { return s;}

  let l = 0, r = s.length-1;
  while( l < r ) {

    let temp = s[r];
    s[r] = s[l];
    s[l] = temp;
    
    l++;
    r--;
  }
  return s;
};

console.log('\n ... reverse string using two pointers... \n');
console.log(reverseString(['h','e','l','l','o']));
console.log(reverseString(['h','e','l','l','o', ' ','w','o','r','l','d','!']));


/**
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 * 
 * Success Details 
 * Runtime: 96 ms, faster than 43.94% of JavaScript online submissions for Reverse Vowels of a String.
Memory Usage: 39.4 MB, less than 57.20% of JavaScript online submissions for Reverse Vowels of a String.
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let inputArr = s.split('');
  let len = inputArr.length;
  let vowels = [];

  let _vowelTest = inputChar => {
    if (
      inputChar === 'A' || 
      inputChar === 'a' || 
      inputChar === 'E' || 
      inputChar === 'e' || 
      inputChar === 'I' || 
      inputChar === 'i' || 
      inputChar === 'O' || 
      inputChar === 'o' || 
      inputChar === 'U' || 
      inputChar === 'u'  
    ) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < len; i++) {
    if ( _vowelTest(inputArr[i]) ) {
      vowels.push(inputArr[i]);
    }
  }

  vowels.reverse();

  for (let i = 0; i < len; i++) {
    if ( _vowelTest(inputArr[i]) ) {
      inputArr[i] = vowels.shift();
    }
  }

  return inputArr.join('');
};

console.log('\n ... leetcode reverseVowels,  my code ...\n');
console.log(reverseVowels('hello world'));

/**
 * here is the solution i was originally trying for, but got bogged down trying to manage independently moving left and right until they both match up with vowels:
 * https://leetcode.com/problems/reverse-vowels-of-a-string/discuss/81356/JavaScript-Solution
 * the inner whiles here are really elegant.
 */

var reverseVowels2 = function(s) {
  if(s === null || s.length === 0) {
    return s;
  }
  var chars = s.split('');
  var low = 0;
  var high = s.length - 1;
  var vowels = "aeiouAEIOU";
  var tmp;
  while(low < high) {
    while(low < high && vowels.indexOf(chars[low]) === -1) {
      low++;
    }
    
    while(low < high && vowels.indexOf(chars[high]) === -1) {
      high--;
    }
    
    tmp = chars[high];
    chars[high] = chars[low];
    chars[low] = tmp;
    low++;
    high--;
  }

  return chars.join('');
};
 
console.log('\n ... leetcode reverseVowels solution code ...\n');
console.log(reverseVowels('hello world'));

/**
 * Leet Code sorted array merge. A little different from the Interview Cake version above.
 * https://leetcode.com/problems/merge-sorted-array/
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// this version is only slightly refactored from 
// https://leetcode.com/problems/merge-sorted-array/discuss/155565/Javascript-64ms.

// Success
// Details
// Runtime: 64 ms, faster than 43.37% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 34.9 MB, less than 20.33% of JavaScript online submissions for Merge Sorted Array.


// var merge = function(nums1, m, nums2, n) {
//   // remove the extras. Start at length of good ones, remove the rest.
//   nums1.splice(m);

//   // push on all the num2 values.
//   nums1.push(...nums2);
  
//   // and sort.
//   nums1.sort((a,b)=>a-b);
// };



// My solution. It was difficult managing for all the edge cases where value was 0, thus requiring || x === 0 tests to be included. But performace is great:

// Success
// Details
// Runtime: 44 ms, faster than 99.83% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.7 MB, less than 93.76% of JavaScript online submissions for Merge Sorted Array.

// Time Complexity should be O(m+n); Space Complexity should be O(1);


var merge = function(nums1, m, nums2, n) {

  if (m === 0) {
    // remove everything, and copy in nums2.
    nums1.splice(0,nums1.length, ...nums2);

  }
  else {
    // remove the extras. Start at length of good ones, remove the rest.
    nums1.splice(m);
    console.log({'nums1 after truncating: ': nums1});

    for (var i = 0; i < m+n; i++) {

      // if we have passed m, just make curr1 the biggest possible number for easy comparison, since we are going to splice any real curr2 for that case.
      let curr1 = (nums1[i] === 0) ? 0 : ((nums1[i]) ? nums1[i] : Number.MAX_SAFE_INTEGER);

      //if we have already shifted everything off of num2, set curr2 to null.
      let curr2 = (nums2[0] === 0) ? 0 : ((nums2[0]) ? nums2[0] : null);
      console.log('curr1:', curr1, 'curr2:', curr2);

      if (curr2 !== null && curr2 <= curr1 ) {

        console.log(`splicing curr2 ${curr2} into curr1 at index ${i}`);

        nums1.splice(i, 0, curr2); 
        nums2.shift(); //get rid of current num2 value.
      }
    }
  }
};

console.log('\n ... LeetCode Merge Sorted Arrays ...');
console.log(' ... test 5 expects [ -1, -1, -1, 0, 0, 0 ] ... \n');


let nums1 = [-1,-1,0,0,0,0];
let m = 4;
let nums2 = [-1,0];
let n = 2;
console.log({nums1});
console.log({nums2});
console.log({'m': m, 'n': n});

merge(nums1, m, nums2, n);

console.log({'final num1:' : nums1});
console.log({nums2});

console.log('\n ... test 4 expects [ -1, 0, 0, 1, 2, 2, 3, 3, 3 ]... \n');

nums1 = [-1,0,0,3,3,3,0,0,0];
m = 6;
nums2 = [1,2,2];
n = 3;
console.log({nums1});
console.log({nums2});

merge(nums1, m, nums2, n);

console.log({'final num1:' : nums1});
console.log({nums2});

console.log('\n ... test 3 expects [ 1, 2 ] ... \n');

nums1 = [2,0];
m = 1;
nums2 = [1];
n = 1;
console.log({nums1});
console.log({nums2});

merge(nums1, m, nums2, n);

console.log({'final num1:' : nums1});
console.log({nums2});

console.log('\n ... test 2 expects [ 1 ] ...\n');

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
console.log({nums1});
console.log({nums2});

merge(nums1, m, nums2, n);

console.log({'final num1:' : nums1});
console.log({nums2});




console.log('\n ... test 1 expects [ 1, 2, 2, 3, 5, 6 ] ... \n');
nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;
console.log({nums1});
console.log({nums2});

merge(nums1, m, nums2, n);

console.log({'final num1:' : nums1});
console.log({nums2});

console.log('\n ... LeetCode FizzBuzz ... \n');

/**
 * https://leetcode.com/problems/fizz-buzz/
 * @param {*} n 
 * My solution was first try, and pretty fast to come by. I missed though that numbers are expected to be stringified.
 * 
 * Success
Details
Runtime: 60 ms, faster than 95.78% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 36.8 MB, less than 99.52% of JavaScript online submissions for Fizz Buzz.

 */
let fizzBuzz = n => {
  let output = [];

  let _test = (x, divisor) => {
    return (x % divisor === 0);
  }

  for (let i = 1; i <= n; i++) {
    let fizz = _test(i, 3);
    let buzz = _test(i, 5);

    let curr = (fizz && buzz) ? 'FizzBuzz' : ( fizz ? 'Fizz' : ( buzz ) ? 'Buzz' : JSON.stringify(i));

    output.push(curr);
  }
  return output;

};

console.log(fizzBuzz(15));

console.log('\n ... LeetCode FizzBuzz done using a hash ... \n');

/**
 * 
 * @param {*} n 
 * Success
Details
Runtime: 56 ms, faster than 98.55% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 37.7 MB, less than 5.23% of JavaScript online submissions for Fizz Buzz.

 */

let fizzBuzzWithHash = n => {
  let output = [];

  let myHash = {3 : 'Fizz', 5 : 'Buzz', 7 : 'Swee'};

  for (let i = 1; i <= n; i++) {
    let currStr = '';
    
    for (let currKey of Object.keys(myHash)) {

      if (i % currKey === 0) { currStr += myHash[currKey];}
    }

    if(currStr.length === 0) { currStr = `${i}`;}

    output.push(currStr);
  }
  return output;

};

console.log(fizzBuzzWithHash(35));

console.log('\n ... LeetCode MinStack ... \n');
/**
 * Leetcode Min Stack
 */

var MinStack = function() { 
  this.myStack = []; 
};

MinStack.prototype.push = function(x) {
  this.myStack.push(x);
};

MinStack.prototype.pop = function() { 
  this.myStack = this.myStack.slice(0,this.myStack.length-1); //slice end is not inclusive.
};

MinStack.prototype.top = function() { return this.myStack[this.myStack.length-1];};

MinStack.prototype.getMin = function() {
  const ordered = [...this.myStack];
  ordered.sort((a, b) => {return a - b;});
  // console.log({ordered});
  return ordered[0];
};

let myTest = new MinStack();
myTest.push(-2);
myTest.push(0);
myTest.push(-3);


console.log({myTest});
console.log('getMin:', myTest.getMin());
console.log('popping...'); 
myTest.pop();
console.log({myTest});
console.log('top:', myTest.top());
console.log('new min from getMin:', myTest.getMin());

