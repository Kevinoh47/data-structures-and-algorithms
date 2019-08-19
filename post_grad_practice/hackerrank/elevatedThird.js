'use strict';
/**
 * Hacker rank mid-level back-end developer test.
 * Took this test for Elevated Third on 8/15.
 * 4 questions, 90 minutes.
 * In the first question I floundered with the HackerRank STDIN/STDOUT -- i thought they wanted me to convert a string from STDIN to an array, but they didn't. Not sure why HackerRank introduces that confusion.
 * I got something partially working for all 4 questions.
 * Unfortunately the unit tests only show anything when they pass, they are hidden when you fail, so they weren't any use for debugging. 
 * By keeping notes here, and photographing the screens, coming back to the tests I could see at least in a couple spots some things I misinterpreted. I put notes in below. Will come back and fix these later.
 */

/**
 * Question 1: Write-in ballots
 * given an array of names, count for each name. If one name has most votes, that name wins. If more than one name has the highest count, order those alphabetically ascending, and choose the last one.
 * thus if [A, B, C] all have the highest count, return C.
 */

console.log(`\n ... write in ballot ...`);
function writeIn(ballot) {
  let voteCount = {};
  let maxCount = 0;
  let maxCountVals = [];

  for (let i = 0; i < ballot.length;i++) {
    let currVote = ballot[i];
    voteCount[currVote]  = (voteCount[currVote])? voteCount[currVote] + 1 : 1;

    if (voteCount[currVote] > maxCount) {
      maxCount++;
    }
  }

  // console.log({voteCount});

  for (let i = 0; i < ballot.length; i++) {
    let currVote = ballot[i];
    // console.log('i:', 'currVote: ', currVote, 'maxCount: ', maxCount, 'vC: ', voteCount[ballot[i]]);

    if (voteCount[currVote] === maxCount && maxCountVals.indexOf(currVote) === -1) {
      maxCountVals.push(ballot[i]);
    }
  }

  maxCountVals.sort();

  // console.log({maxCountVals});
  
  return maxCountVals[maxCountVals.length-1];


}
let ballot = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];


console.log(writeIn(ballot));

/**
 * Question 2: Maximum occuring character
 * Given a string, return the character that appears the maximum number of times in the string. The string will contain only ASCII characters, from the ranges(a-z,A-Z,0-9) and case matters. If there is a tie in the maximum number of times a character appears, return the character that appears first in the string.
 * 
 * The last sentence was my mistake. I read it as return the character that is higher in alphanuneric sorting, rather than the first that occurs in the array. Boo!
 */
// passes 2 of 15 tests
console.log(`\n ... maximum occuring character ...`);
// fixed version
function maximumOccurringCharacter(text) {

  let strArr = text.split('');
  let maxCount = 0;
  let charWinnerIdx = strArr.length; // one beyond
  let charCounter = {};

  for (let i = 0; i < strArr.length; i++) {
    let currChar = strArr[i];
    charCounter[currChar] = (charCounter[currChar]) ? charCounter[currChar] + 1 : 1;

    if (charCounter[currChar] > maxCount) {
      maxCount = charCounter[currChar];
    }
  }

  Object.entries(charCounter).forEach((e) => {
    // pick the first of all with max count
    if ( e[1] === maxCount && strArr.indexOf(e[0]) < charWinnerIdx) {
      charWinnerIdx = strArr.indexOf(e[0]);
    }
  });
  
  return strArr[charWinnerIdx];
}

// this version compares multipe max versions for alpha order and returns the first alpha order...
// function maximumOccurringCharacter(text) {

//   let strArr = text.split('');
//   let maxCount = 0;
//   let maxChar = strArr[0];
//   let charCounter = {};

//   for (let i = 0; i < strArr.length; i++) {
//     let currChar = strArr[i];
//     console.log({currChar});
//     charCounter[currChar] = (charCounter[currChar]) ? charCounter[currChar] + 1 : 1;

//     if (charCounter[currChar] >= maxCount) {
//       let compare = [maxChar, currChar].sort();
//       let winner = compare[0];
//       console.log({winner});
//       maxChar = winner;
//       maxCount = charCounter[currChar];
//     }
//   }
  
//   return maxChar;
// }


let text = 'abbbaacc';

console.log('expects a (tied with b but first in string):', maximumOccurringCharacter(text));

text = 'abbb11111aacc99999';

console.log('expects 1: ', maximumOccurringCharacter(text));

text = 'abbb11111aacc99999AAAAA';

console.log('expects 1: ', maximumOccurringCharacter(text));


// Question 3: Maximum Difference in an array
// Given an array of integers, compute the maximum difference between any element in the array and any lower indexed smaller items.
// passes 5 of 14 tests
// i missed "lower indexed SMALLER items" -- so i need to exclude lower indexed EQUAL or GREATER items.
console.log('\n ... max difference \n');
function maxDifference(arr) {

  let maxDiff = arr[1]-arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currVal = arr[i];

    let counter = i-1;
    while (counter >= 0) {
      const testMe = arr[counter];
      if (testMe < currVal) {
        if (currVal - testMe > maxDiff) {
          maxDiff = Math.abs(currVal - testMe);
        }
      }
      counter--;
    }
  }
  return maxDiff;
}

let arr = [1,2,3,1,4,3];
console.log('expecting 3 (4-1): ', maxDifference(arr));


arr = [1,2,3,1,4,-47,0];
console.log('expecting 47 (0-47): ', maxDifference(arr));

arr = [1,2,3,2,48,-47,0];
console.log('expecting 47 (0-47): ', maxDifference(arr));

// Question 4: Minimum unique Array Sum:
// Given an array, increment any duplicate elements unil all elements are unique. Return the sum of all the elements.
// 3 of 15 test cases
// i am guessing the problem is that i am only handle duplicates, but they may be doing triplicates or more... so I need to handle more than 1 possible duplicate.
console.log('\n ... getMinimumUniqueSum ...\n');

// this one handles a single duplicate:
function getMinimumUniqueSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currVal = arr[i];
    if (arr.lastIndexOf(currVal) !== i) {
      let increment = currVal;
      while (arr.includes(increment)) {
        increment++;
      }
      let updateMe = arr.lastIndexOf(currVal);
      arr[updateMe] = increment;
    }
  }

  let result = arr.reduce((prev, curr) => { return prev + curr;},0);
  return result;
}

arr = [1,2,3,4,2];
console.log('expects 15 (1+2+3+4+5): ', getMinimumUniqueSum(arr));

// this one fails because there is are three 2s...
arr = [1,2,3,4,2,2];
console.log('expects 21 (1+2+3+4+5,6): ', getMinimumUniqueSum(arr));

console.log('\n ... getMinimumUniqueSum2 handles multiple dups of the same.\n');

// this one handles multiple dups, and only has to iterate once.
function getMinimumUniqueSum2(arr) {

  let dups = {};

  for (let i = 0; i < arr.length; i++) {
    const currVal = arr[i];

    dups[currVal] = (dups[currVal]) ? 2 : 1;

    if ( dups[currVal] === 2) {
      let increment = currVal;
      while (arr.includes(increment)) {
        increment++;
      }
      arr[i] = increment;
      // decrease back to one.
      dups[currVal] = 1;
    }
  }

  let result = arr.reduce((prev, curr) => { return prev + curr;},0);
  return result;
}

arr = [1,2,3,4,2];
console.log('expects 15 (1+2+3+4+5): ', getMinimumUniqueSum2(arr));

// this one fails because there is are three 2s...
arr = [1,2,3,4,2,2];
console.log('expects 21 (1+2+3+4+5+6): ', getMinimumUniqueSum2(arr));

module.exports = {writeIn, maximumOccurringCharacter, maxDifference, getMinimumUniqueSum, getMinimumUniqueSum2};
