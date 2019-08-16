/**
 * https://www.interviewcake.com/question/javascript/inflight-entertainment?course=fc1&section=hashing-and-hash-tables
 * basically, checking if two numbers inside the array add up to the expected sum.
 * 
 *  Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

    Assume your users will watch exactly two movies
    Don't make your users watch the same movie twice
    Optimize for runtime over memory

 * 
 We can do this in O(n)O(n)O(n) time, where nnn is the length of movieLengths. 
 */
'use strict';

let movieTimesEqualFlightTime = (flightLen, movieTimes) => {
  let movietimesSet = new Set(movieTimes);

  // dont use arr.forEach because there is no way to exit immediately when test = true;
  for (let i = 0; i < movieTimes.length; i++) {
    if (movieTimes[i] === flightLen / 2) { return false;}

    const otherMovieTime = flightLen - movieTimes[i];

    if (movietimesSet.has(otherMovieTime)) {
      return true;
    }
  }
  return false;
}

console.log(`\n ... do two movie times equal the flight time? ....`);

let flightLen = 150;
let movieTimes = [147, 200, 100, 80, 130, 70];

console.log('expect true: ', movieTimesEqualFlightTime(flightLen, movieTimes));


flightLen = 148;
movieTimes = [147, 200, 100, 80, 130, 70];

console.log('expect false: ', movieTimesEqualFlightTime(flightLen, movieTimes));

/**
 * permutation palindrome
 * https://www.interviewcake.com/question/javascript/permutation-palindrome?course=fc1&section=hashing-and-hash-tables
 * 
 *  Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

    "civic" should return true
    "ivicc" should return true
    "civil" should return false
    "livci" should return false


 * We can do this in O(n)O(n)O(n) time. 
 * 
 * algorithm: 
 * if there is more than one letter that has a count of one, return false.
 * if there are any letters with a count greater than one that is not even, return false.
 * else return true.
 */

const permutationPalindrome = function(str) {
  const charCount = {};

  const strArr = str.split('');

  let countOfOneCount = 0;

  strArr.forEach(e => {
    charCount[e] = (charCount[e]) ? charCount[e] + 1 : 1;
  });

  for (let i = 0; i < strArr.length; i++) {
    const currCount = charCount[strArr[i]];

    if (currCount === 1) {
      countOfOneCount++;
      if (countOfOneCount > 1) { 
        console.log('more than one letter with a count of one!');
        return false; 
      }
    }
    if (currCount > 1 && !(currCount % 2 === 0)) {
      console.log('a letter with an odd count!');
      return false;
    }
  }

  return true;
};

console.log(`\n ... permutation palindrome ....`);

let str = 'ivicc';
console.log('expect true: ', permutationPalindrome(str));

str = 'civil';
console.log('expect false: ', permutationPalindrome(str));

str = 'iviccvv';
console.log('expect false: ', permutationPalindrome(str));

/**
 * Interview Cake solution is muey elegante :
 * https://www.interviewcake.com/question/javascript/permutation-palindrome?course=fc1&section=hashing-and-hash-tables
 */

function hasPalindromePermutation(str) {
  const unpairedChars = new Set();

  for (let char of str) {
    if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    }
    else { unpairedChars.add(char); }
  }

  // string has a palindrome permutation if there is only one or zero chars without a pair:
  return unpairedChars.size <= 1;
}

console.log(`\n ... permutation palindrome IC solution: ....`);

str = 'ivicc';
console.log('expect true: ', hasPalindromePermutation(str));

str = 'civil';
console.log('expect false: ', hasPalindromePermutation(str));

str = 'iviccvv';
console.log('expect false: ', hasPalindromePermutation(str));


/***
 * links to more hashing questions:
 * https://www.interviewcake.com/concept/javascript/hash-map?#related_questions
 * 
 * O(n) space and time.
 * 
 * The final map we return should be the only data structure whose length is tied to n. 
 * 
 * We should only iterate through our input string once. 
 * 
 * From reading the notes, it appears they want to split words on hyphens and em-dashes as well
 */


// https://www.interviewcake.com/question/javascript/word-cloud

// first attempt. I have a wordArr so I don't match criteria 'The final map we return should be the only data structure whose length is tied to n. ' or criteria 'We should only iterate through our input string once.'

// function wordCount(str) {

//   function _isLCLetter(char) {
//     return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) >= 0;
//   }

//   function _wordFix(word) {
//     let currWord = ''; 
//     console.log({currWord});
//     for (let char of word) {
//       if (_isLCLetter(char)) {
//         currWord = currWord + char;
//       }
//     }
//     return currWord;
//   }

//   const wordArr = str.toLowerCase().split(' ');

//   const wordMap = new Map();

//   wordArr.map(e => {
//     const currWord = _wordFix(e);
//     wordMap[currWord] = (wordMap[currWord]) ? wordMap[currWord] + 1 : 1;
//   });

//   return wordMap;
// }

// version 2:
function wordCount(str) {

  function _isLCLetter(char) {
    return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) >= 0;
  }

  function _wordFix(word) {
    let currWord = ''; 
    for (let char of word) {
      if (_isLCLetter(char)) {
        currWord = currWord + char;
      }
    }
    return currWord;
  }

  const wordMap = new Map();

  // split on space, em-dash or hypen
  str.toLowerCase().split(/\s|--|-/).map(e => {
    const currWord = _wordFix(e);
    wordMap[currWord] = (wordMap[currWord]) ? wordMap[currWord] + 1 : 1;
  });

  return wordMap;
}


console.log(`\n ... word count: ....`);

str = 'The quick, brown fox jumped over the lazy dog dog Dog Lazy DOG oh-boy em--dash!';
console.log(wordCount(str));

/**
 * The solution on Interview Cake is way too involved, but we can practice adapting the above into a class-based solution somewhat like theirs:
 */

class WordCloud {
  constructor(inputStr) {
    this.wordMap = new Map();
    this.populateWordMap(inputStr);
  }

  populateWordMap(inputStr) {
    function _isLCLetter(char) {
      return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) >= 0;
    }
  
    function _wordFix(word) {
      let currWord = ''; 
      for (let char of word) {
        if (_isLCLetter(char)) {
          currWord = currWord + char;
        }
      }
      return currWord;
    }

    // the input for split is a regex. split on space, em-dash or hypen
    inputStr.toLowerCase().split(/\s|--|-/).map(e => {
      const currWord = _wordFix(e);
      this.wordMap[currWord] = (this.wordMap[currWord]) ? this.wordMap[currWord] + 1 : 1;
    });
  }
}

console.log(`\n ... word count (class version): ....`);

let myWordCloud = new WordCloud(str);
console.log('my class instance: ', myWordCloud);


/**
 * sort scores
 */

function sortScores(scores) {
  scores.sort((a,b) => {
    if (a >= b) {return -1;}
    else {return 1;}
  });
  return scores;
}

function sortScores2(scores) {
  scores.sort((a,b) => {
    return b - a;
  });
  return scores;
}

function sortScores3(scores) {
  scores.sort((a,b) => b - a );
  return scores;
}

console.log(`\n ... sorted game scores: ....`);
console.log(sortScores([47, 32, 99, 89, 44, 22, 77]));
console.log(sortScores2([47, 32, 99, 89, 44, 22, 77]));
console.log(sortScores3([47, 32, 99, 89, 44, 22, 77]));

/**
 * sort game scores
 * the following solution does NOT keep track of multiple same values:
 * "Multiple players can have the same score! If 10 people got a score of 90, the number 90 should appear 10 times in our output array. "
 */

function sortGameScores (maxPoints, scores) {
  let results = new Array(maxPoints);

  // use the indices of results for game score values.
  scores.forEach(e => results[e] = e);

  let finalResults = results.filter((e,i) => {
    // .filter() is only called on assigned elements of the array so we don't have to worry about the empty elements.
    return i; 
  });

  return finalResults.reverse();
}

console.log(`\n ... first solution to the sorted game scores problem: ....`);
console.log(sortGameScores(100, [47, 32, 99, 89, 44, 22, 77]));

/**
 * sort game scores
 * the following solution DOES keep track of multiple same values:
 * "Multiple players can have the same score! If 10 people got a score of 90, the number 90 should appear 10 times in our output array. "
 */

function sortGameScores2 (maxPoints, scores) {
  // empty array which we will use as a "dictionary," indices being the keys
  let results = new Array(maxPoints);

  // use the indices of results for game score values, and set the value to be the count.
  scores.forEach(e => results[e] = (results[e])? results[e] + 1 : 1);

  let finalResults = []; 
  results.map((e,i) => {
    let currVal = i;
    let numberOfTimes = e;
    for (let j = 0; j < numberOfTimes; j++) {
      finalResults.push(currVal);
    }
  });

  return finalResults.reverse();
}

console.log(`\n ... 2nd solution to the sorted game scores problem (manages for duplicate scores): ....`);
console.log(`expect [ 99, 89, 89, 77, 47, 44, 32, 32, 22, 22, 22 ] :`, sortGameScores2(100, [47, 32, 99, 89, 44, 22, 77, 89, 22, 32, 22]));