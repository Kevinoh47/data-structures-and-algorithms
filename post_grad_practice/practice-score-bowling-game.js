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

const roll7AllSpares = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10]; // 155 i think...


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

/**
 * Let's try a class-based solution
 */

class BowlingSummary {
  constructor(bowler, pointsArr) {
    this.bowler = bowler;
    this.pointsArr = pointsArr;
  }

  getRegularPoints(){
    const results = this.pointsArr.reduce((prev, curr, idx) => {
      if (idx < 20) {
        const currVal = (curr === null) ? 0 : curr;
        return prev + currVal;
      } 
      return prev;
    }, 0);
    return results;
  }

  getExtraPoints() {
    const results = this.pointsArr.reduce((prev, curr, idx, arr) => {
      // calculate Extra Points from the 1st throw per frame. For strikes, the following throw must be null in the arr.
      if (idx % 2 === 0 && idx <= 18) {
        
        const currVal = (curr === null) ? 0 : curr;
        const isStrike = (currVal === 10);
        const isSpare = (currVal + arr[idx + 1] === 10);

        if (isStrike) {
          if (idx <= 16) {
            // nextIsStrike only important through frame 9 (idx 16):
            const nextIsStrike = (arr[idx + 2] === 10);
            if (nextIsStrike) {
              return prev + arr[idx + 2] + arr[idx + 4];
            }
            else {
              return prev + arr[idx + 2] + arr[idx + 3];
            }
          }
          // strike on frame 10:
          else if (idx === 18) {
            return prev + arr[20] + arr[21];
          }
        }
        else if (isSpare) {
          return prev + arr[idx + 2];
        }
      }
      return prev;
    }, 0);
    return results;
  }

  getTotalPoints() {
    return this.getRegularPoints() + this.getExtraPoints();
  }
}

console.log(`\n ... \n`);

let joesGame = new BowlingSummary('joe', roll7AllSpares);
console.log({joesGame});

let joesRegPoints = joesGame.getRegularPoints();
console.log({joesRegPoints});

let joesExtraPoints = joesGame.getExtraPoints();
console.log({joesExtraPoints});

let joesTotalPoints = joesGame.getTotalPoints();
console.log({joesTotalPoints});

let annesGame = new BowlingSummary('anne', rolls6Score300PerfectGame);
console.log({annesGame});

let annesRegPoints = annesGame.getRegularPoints();
console.log({annesRegPoints});

let annesExtraPoints = annesGame.getExtraPoints();
console.log({annesExtraPoints});

let annesTotalPoints = annesGame.getTotalPoints();
console.log({annesTotalPoints});

// frames:                 1   2   3   4   5   6   7   8   9   10
const noSparesOrStrikes = [8,1,9,0,0,9,4,5,5,4,8,1,9,0,0,9,4,5,5,4];

let jillsGame = new BowlingSummary('jill', noSparesOrStrikes);
console.log({jillsGame});

let jillsRegPoints = jillsGame.getRegularPoints();
console.log({jillsRegPoints});

let jillsExtraPoints = jillsGame.getExtraPoints();
console.log({jillsExtraPoints});

let jillsTotalPoints = jillsGame.getTotalPoints();
console.log({jillsTotalPoints});


class BowlingFrame extends BowlingSummary {
  constructor(bowler, pointsArr, frameNumber) {
    super(bowler, pointsArr);
    this.frameNumber = frameNumber;
    // this.throw1 = this.getThrow1();
    // this.throw2 = this.getThrow2();
    // this.isStrike = this.frameIsStrike();
    // this.isSpare = this.frameIsSpare();
    // this.frameBasePoints = this.getFrameBasePoints();
    // this.frameExtraPoints = this.getFrameExtraPoints();
  }
  
  getThrow1() {
 
    switch (this.frameNumber) {
    case 1:
      return this.pointsArr[0];
    case 2:
      return this.pointsArr[2];
    case 3:
      return this.pointsArr[4];  
    case 4:
      return this.pointsArr[6]; 
    case 5:
      return this.pointsArr[8]; 
    case 6:
      return this.pointsArr[10];    
    case 7:
      return this.pointsArr[12];    
    case 8:
      return this.pointsArr[14];     
    case 9:
      return this.pointsArr[16];     
    case 10:
      return this.pointsArr[18];
    }
  }

  getThrow2() {
    switch (this.frameNumber) {
    case 1:
      return this.pointsArr[1];
    case 2:
      return this.pointsArr[3];
    case 3:
      return this.pointsArr[5];    
    case 4:
      return this.pointsArr[7];   
    case 5:
      return this.pointsArr[9];   
    case 6:
      return this.pointsArr[11];     
    case 7:
      return this.pointsArr[13];     
    case 8:
      return this.pointsArr[15];      
    case 9:
      return this.pointsArr[17];   
    case 10:
      return this.pointsArr[19];
    }
  }

  frameIsStrike() {
    return (this.getThrow1() === 10);
  }

  frameIsSpare() {
    const throw1 = this.getThrow1();
    const throw2 = this.getThrow2();
    return (throw2 !== null && throw1 !== 10 && throw1 + throw2 === 10);
  }
  
  getFrameBasePoints() {
    const throw1 = this.getThrow1();
    let throw2 = this.getThrow2();
    if (throw2 === null) throw2 = 0;
    return throw1 + throw2;
  }

  getFrameExtraPoints() {
    if (this.frameIsStrike()) {
      switch (this.frameNumber) {
      case 1:
        return this.pointsArr[2] + (this.pointsArr[2] === 10) ? this.pointsArr[4] : this.pointsArr[3];
      case 2:
        return this.pointsArr[4] + (this.pointsArr[4] === 10) ? this.pointsArr[6] : this.pointsArr[5];
      case 3:
        return this.pointsArr[6] + (this.pointsArr[6] === 10) ? this.pointsArr[8] : this.pointsArr[7];    
      case 4:
        return this.pointsArr[8] + (this.pointsArr[8] === 10) ? this.pointsArr[10] : this.pointsArr[9];   
      case 5:
        return this.pointsArr[10] + (this.pointsArr[10] === 10) ? this.pointsArr[12] : this.pointsArr[11];  
      case 6:
        return this.pointsArr[12] + (this.pointsArr[12] === 10) ? this.pointsArr[14] : this.pointsArr[13];   
      case 7:
        return this.pointsArr[14] + (this.pointsArr[14] === 10) ? this.pointsArr[16] : this.pointsArr[15];     
      case 8:
        return this.pointsArr[16] + (this.pointsArr[16] === 10) ? this.pointsArr[18] : this.pointsArr[17];     
      case 9:
        return this.pointsArr[18] + (this.pointsArr[18] === 10) ? this.pointsArr[20] : this.pointsArr[19];   
      case 10:
        return this.pointsArr[20] + this.pointsArr[21];
      } 
    }
    else if (this.frameIsSpare()) {
      switch (this.frameNumber) {
      case 1:
        return this.pointsArr[2];
      case 2:
        return this.pointsArr[4];
      case 3:
        return this.pointsArr[6];    
      case 4:
        return this.pointsArr[8];   
      case 5:
        return this.pointsArr[10];   
      case 6:
        return this.pointsArr[12];     
      case 7:
        return this.pointsArr[14];     
      case 8:
        return this.pointsArr[16];      
      case 9:
        return this.pointsArr[18];   
      case 10:
        return this.pointsArr[20];
      }
    }
    else return 0;
  }

  getFrameTotalPoints() {
    return this.getFrameBasePoints() + this.getFrameExtraPoints();
  }
}

console.log(`\n ... frame information ... \n`);
const joesFrame10 = new BowlingFrame('joe', roll7AllSpares, 10);
console.log({joesFrame10});
console.log('throw1: ', joesFrame10.getThrow1());
console.log('throw2: ', joesFrame10.getThrow2());
console.log('strike? ', joesFrame10.frameIsStrike());
console.log('spare? ', joesFrame10.frameIsSpare());
console.log('frame base points: ', joesFrame10.getFrameBasePoints());
console.log('frame extra points: ', joesFrame10.getFrameExtraPoints());
console.log('frame total points: ', joesFrame10.getFrameTotalPoints());
console.log('game total points: ', joesFrame10.getTotalPoints()); // inherited from BowlingSummary prototype chain
console.log('game total base points: ', joesFrame10.getRegularPoints()); // inherited from BowlingSummary prototype chain
console.log('game total extra points: ', joesFrame10.getExtraPoints()); // inherited from BowlingSummary prototype chain

console.log(`\n ... \n`);
const annesFrame10 = new BowlingFrame('anne', rolls6Score300PerfectGame, 10);
console.log({annesFrame10});
console.log('throw1: ', annesFrame10.getThrow1());
console.log('throw2: ', annesFrame10.getThrow2());
console.log('strike? ', annesFrame10.frameIsStrike());
console.log('spare? ', annesFrame10.frameIsSpare());
console.log('frame base points: ', annesFrame10.getFrameBasePoints());
console.log('frame extra points: ', annesFrame10.getFrameExtraPoints());
console.log('frame total points: ', annesFrame10.getFrameTotalPoints());
console.log('game total points: ', annesFrame10.getTotalPoints()); // inherited from BowlingSummary prototype chain
console.log('game total base points: ', annesFrame10.getRegularPoints()); // inherited from BowlingSummary prototype chain
console.log('game total extra points: ', annesFrame10.getExtraPoints()); // inherited from BowlingSummary prototype chain

console.log(`\n ... \n`);
const jillsFrame10 = new BowlingFrame('jill', noSparesOrStrikes, 10);
console.log({jillsFrame10});
console.log('throw1: ', jillsFrame10.getThrow1());
console.log('throw2: ', jillsFrame10.getThrow2());
console.log('strike? ', jillsFrame10.frameIsStrike());
console.log('spare? ', jillsFrame10.frameIsSpare());
console.log('frame base points: ', jillsFrame10.getFrameBasePoints());
console.log('frame extra points: ', jillsFrame10.getFrameExtraPoints());
console.log('frame total points: ', jillsFrame10.getFrameTotalPoints());
console.log('game total points: ', jillsFrame10.getTotalPoints()); // inherited from BowlingSummary prototype chain
console.log('game total base points: ', jillsFrame10.getRegularPoints()); // inherited from BowlingSummary prototype chain
console.log('game total extra points: ', jillsFrame10.getExtraPoints()); // inherited from BowlingSummary prototype chain




