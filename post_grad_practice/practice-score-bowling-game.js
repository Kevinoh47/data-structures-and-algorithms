/* eslint-disable brace-style */
/* eslint-disable strict */
/* eslint-disable no-console */

'use strict';

/**
 * Score a Bowling Game
 * 10 frames
 * two rolls per frame
 * per frame: 2,3 = 5
 * Strike: get 10 + next two rolls from next frame
 * Spare: 2 rolls equalling 10 in the frame. Get 10 + next single roll.
 *
 * If you get a follow a strike with a strike you still get the next two added to that score.
 * So that would be two frames.
 *
 *
 * Perfect game is 300 points
 *
 * Frames 9 and 10: if you get a strike, you get to roll again for whichever frame...
 *
 * on the 9th frame, if you get a strike, to get a bonus role,
 * you have to get a strike on the 10 frame too.
 * Because otherwise your 10th frame takes your two rolls.
 *
 * Test Cases:
 * 1) all zeroes. (20 rolls)
 * 2) no spares or strikes but combinations of numbers.
 * 3) 1 + spares.
 * 4) 1+ strikes
 * 5) consecutive spare + spare, strike + strike, strike + spare.
 * 6) Bonus rolls.
 * 7) Perfect game.
 */


const rolls0Score0 = [0, 0, 0, 0];
const rolls1Score16 = [4, 3, 5, 4];
const rolls2Score15 = [10, null, 1, 1, 1]; // 15? 1 strike
const rolls3Score13 = [5, 5, 1, 1]; // 13? spare
const rolls4Score21 = [0, 10, 5, 1]; // 21? spare edge case....
const rolls5Score38 = [0, 10, 10, null, 1, 3]; // 38? spare followed by strike.
// Spare gets another 10 points for the follow on strike,
// and the strike gets extra 4 points (the next two rolls).
const rolls6Score300PerfectGame = [10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, 10];

const roll7AllSpares = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10];


const computeBowlingScore = (arr) => {
  const output = arr.reduce((accum, curr, idx, arr) => {
    if (idx <= 19) {
      const currVal = (curr === null) ? 0 : curr;
      let additional = arr[idx + 2];
      // strike:
      if (currVal === 10 && arr[idx + 1] === null) {
        // last possible test for nextIsStrike is frame 9
        const nextIsStrike = (idx <= 16 && arr[idx + 2] === 10);

        if (nextIsStrike) {
          additional += arr[idx + 4];
        } else {
          additional += arr[idx + 3];
        }
        return accum + currVal + additional;
      }
      // spare (using first pin only to calculate extra points):
      else if (curr !== null && idx % 2 === 0 && currVal + arr[idx + 1] === 10) {
        return accum + currVal + additional;
      }
      // regular scores (and 2nd pin in a spare):
      return accum + currVal;
    }
    return accum;
  }, 0);
  return output;
};

console.log(computeBowlingScore(rolls0Score0));
console.log(computeBowlingScore(rolls1Score16));
console.log(computeBowlingScore(rolls2Score15));
console.log(computeBowlingScore(rolls3Score13));
console.log(computeBowlingScore(rolls4Score21));
console.log(computeBowlingScore(rolls5Score38));
console.log(computeBowlingScore(rolls6Score300PerfectGame));
console.log(computeBowlingScore(roll7AllSpares));

