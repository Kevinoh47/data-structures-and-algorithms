/**
 * https://leetcode.com/problems/valid-palindrome/submissions/
 * Success
Details
Runtime: 76 ms, faster than 51.83% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 41.3 MB, less than 18.37% of JavaScript online submissions for Valid Palindrome.
 */


var isPalindrome = function(s) {

  // NOTE: /\s/ replaces all white space characters
  // const myStrArr = s.replace(/[.,/#!$%^&*;:{}=\-_`~()–/\s/]/g,'').toLowerCase().split('');
  // const myStrArr = s.replace(/[/\s/]/g,'').toLowerCase().split('');
  const myStrArr = s.toLowerCase().split('');
  const whiteListRegEx =  /[a-z0-9]/;

  let filteredArr = myStrArr.filter((curr) => {
    if (curr.match(whiteListRegEx)) { return curr; }
  });

  //console.log({filteredArr});

  //iterate from both directions
  let left = 0, right = filteredArr.length-1, palindrome = true;



  while (left + 1 <= right) {

    // console.log({left: left, right: right, leftVal: filteredArr[left], rightVal: filteredArr[right] });

    if (filteredArr[left] !== filteredArr[right]) { 
      palindrome = false;
      return palindrome;
    }
    left++;
    right--;
  }

  return palindrome;
};

let myStr = 'A man, a plan,  Panama!';
console.log(isPalindrome(myStr)); //false


myStr = 'A man, a plan, a canal: Panama!';
console.log(isPalindrome(myStr)); //true


myStr = 'ab@a';
console.log(isPalindrome(myStr)); //true

// slightly refactored based on a similar answer:
/**
 * 
 * Success
Details
Runtime: 68 ms, faster than 81.34% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 37.2 MB, less than 69.39% of JavaScript online submissions for Valid Palindrome.
 */

let isPalindrome2 = s => {

  const sArr = s.replace(/[^0-9a-zA-Z]+/gmi,'').toLowerCase();

  let left = 0, right = sArr.length-1;

  while (left < right) {

    if (sArr.charAt(left) !== sArr.charAt(right)) { 
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log('\n ... refactored slightly ... \n');

myStr = 'A man, a plan,  Panama!';
console.log(isPalindrome2(myStr)); //false


myStr = 'A man, a plan, a canal: Panama!';
console.log(isPalindrome2(myStr)); //true


myStr = 'ab@a';
console.log(isPalindrome2(myStr)); //true