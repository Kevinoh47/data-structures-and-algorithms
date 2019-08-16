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



function writeIn(ballot) {
  // Write your code here
  let voteCount = {};
  let maxCount = 0;
  let maxCountVals = [];

  // convert ballot str to array ?
  //let ballotArr = ballot.split(','); // i think the input is separated by string?
  for (let i = 0; i < ballot.length;i++) {

      voteCount[ballot[i]]  = (voteCount[ballot[i]])? voteCount[ballot[i]] + 1 : 1;

      if (voteCount[ballot[i]] > maxCount) {
          maxCount++;
      }
  }

  console.log({voteCount});

  for (let i = 0; i < ballot.length; i++) {
      console.log(ballot[i], maxCount, voteCount[ballot[i]]);

      // TODO add test as to whether ballot[i] already exists on maxCountVotes. we only need it once.
      if (voteCount[ballot[i]] === maxCount) {
          maxCountVals.push(ballot[i]);
      }
  }

  maxCountVals.sort();

  console.log({maxCountVals});
  
  return maxCountVals[maxCountVals.length-1];


}
let ballot = ['Alex', 'Michael', 'Harry','Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];


/**
 * Question 2: Maximum occuring character
 * Given a string, return the character that appears the maximum number of times in the string. The string will contain only ASCII characters, from the ranges(a-z,A-Z,0-9) and case matters. If there is a tie in the maximum number of times a character appears, return the character that appears first in the string.
 * 
 * The last sentence was my mistake. I read it as return the character that is higher in alphanuneric sorting, rather than the first that occurs in the array. Boo!
 */
// passes 2 of 15 tests

function maximumOccurringCharacter(text) {
  // Write your code here
  let strArr = text.split('');
  let maxCount = 0;
  let maxChar = strArr[0];
  let charCounter = {};

  for (let i = 0; i < strArr.length; i++) {
      let currChar = strArr[i];
      console.log({currChar});
      charCounter[currChar] = (charCounter[currChar]) ? charCounter[currChar] + 1 : 1;

      if (charCounter[currChar] >= maxCount) {
          
          let compare = [maxChar, currChar].sort();
          let winner = compare[0];
          console.log({winner});
          maxChar = winner;
          maxCount = charCounter[currChar];
      }
  }
  
  return maxChar;
}


let text = 'abbbaacc';

console.log(maximumOccurringCharacter(text));

text = 'abbb11111aacc99999';

console.log(maximumOccurringCharacter(text));

text = 'abbb11111aacc99999AAAAA';

console.log(maximumOccurringCharacter(text));


// Question 3: Maximum Difference in an array
// Given an array of integers, compute the maximum difference between any element in the array and any lower indexed smaller items.
// passes 5 of 14 tests
// i missed "lower indexed SMALLER items" -- so i need to exclude lower indexed EQUAL or GREATER items.

function maxDifference(arr) {
  // Write your code here
  let maxDiff = arr[1]-arr[0];
  for (let i = 1; i < arr.length; i++) {
      const currVal = arr[i];
      // let lowerVals = [];
      let counter = i;
      while (counter >= 0) {
          // lowerVals.push(arr[counter-1]);
          if (currVal - arr[counter-1] > maxDiff) {
              maxDiff = currVal - arr[counter-1];
          }
          counter--;
      }
  }

  return maxDiff;


// Question 4: Minimum unique Array Sum:
// Given an array, increment any duplicate elements unil all elements are unique. Return the sum of all the elements.
// 3 of 15 test cases
// i am guessing the problem is that i am only handle duplicates, but they may be doing triplicates or more... so I need to handle more than 1 possible duplicate.

  function getMinimumUniqueSum(arr) {
    // Write your code here
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
    };

    let result = arr.reduce((prev, curr) => { return prev + curr;},0);
    return result;
}