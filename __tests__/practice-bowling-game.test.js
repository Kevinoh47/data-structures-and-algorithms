const {computeBowlingScore, BowlingSummary, BowlingFrame} = require('../post_grad_practice/practice-bowling-game');

const rolls0Score0 = [0, 0, 0, 0];
const rolls1Score16 = [4, 3, 5, 4];
const rolls2Score15 = [10, null, 1, 1, 1]; // 15 - 1 strike
const rolls3Score13 = [5, 5, 1, 1]; // 13 - spare
const rolls4Score21 = [0, 10, 5, 1]; // 21 - spare edge case....
const rolls5Score38 = [0, 10, 10, null, 1, 3]; // 38 - spare followed by strike.
// Spare gets another 10 points for the follow on strike,
// and the strike gets extra 4 points (the next two rolls).
const rolls6Score300PerfectGame = [10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, null, 10, 10];

const roll7AllSpares = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10]; // 155 

// frames:                 1   2   3   4   5   6   7   8   9   10
const noSparesOrStrikes = [8,1,9,0,0,9,4,5,5,4,8,1,9,0,0,9,4,5,5,4];

const joesGame = new BowlingSummary('joe', roll7AllSpares);

const annesGame = new BowlingSummary('anne', rolls6Score300PerfectGame);

const jillsGame = new BowlingSummary('jill', noSparesOrStrikes);

const annesFrame10 = new BowlingFrame('anne', rolls6Score300PerfectGame, 10);


describe('The computeBowlingScore function', () => {

  
  it('can compute the output of a mini-game that rolls all gutter balls', () => {
    const result = computeBowlingScore(rolls0Score0);
    expect(result).toEqual(0);
  });

  it('can compute the output of a mini-game that rolls two frames', () => {
    const result = computeBowlingScore(rolls1Score16);
    expect(result).toEqual(16);
  });

  it('can compute the output of a mini-game that rolls two frames including 1 strike', () => {
    let result = computeBowlingScore(rolls2Score15);
    expect(result).toEqual(15);
  });

  it('can compute the output of a mini-game that rolls two frames including 1 spare', () => {
    let result = computeBowlingScore(rolls3Score13);
    expect(result).toEqual(13);
  });

  it('can compute the output of a mini-game that rolls two frames including 1 spare, rolling a 0 then a 10', () => {
    let result = computeBowlingScore(rolls4Score21);
    expect(result).toEqual(21);
  });

  it('can compute the output of a mini-game that rolls two frames including spare followed by a strike.', () => {
    let result = computeBowlingScore(rolls5Score38);
    expect(result).toEqual(38);
  });

  it('can compute the output of a perfect game.', () => {
    let result = computeBowlingScore(rolls6Score300PerfectGame);
    expect(result).toEqual(300);
  });

  it('can compute the output of all spares + 10 pins for the extra throw.', () => {
    let result = computeBowlingScore(roll7AllSpares);
    expect(result).toEqual(155);
  });

  it('can compute the output of complete game of 9 points per frame.', () => {
    let result = computeBowlingScore(noSparesOrStrikes);
    expect(result).toEqual(90);
  });

});

describe('The BowlingSummary class', () => {


  it('can compute the total points of a perfect game.', () => {
    let result = annesGame.getTotalPoints();
    expect(result).toEqual(300);
  });

  it('can compute the regular points of a perfect game.', () => {
    let result = annesGame.getRegularPoints();
    expect(result).toEqual(100);
  });

  it('can compute the extra points of a perfect game.', () => {
    let result = annesGame.getExtraPoints();
    expect(result).toEqual(200);
  });





  it('can compute the total points of all spares + 10 pins for the extra throw.', () => {
    let result = joesGame.getTotalPoints();
    expect(result).toEqual(155);
  });

  it('can compute the regular points of an all spares game.', () => {
    let result = joesGame.getRegularPoints();
    expect(result).toEqual(100);
  });

  it('can compute the extra points of an all spares game.', () => {
    let result = joesGame.getExtraPoints();
    expect(result).toEqual(55);
  });




  it('can compute the total points of a complete game of 9 points per frame.', () => {
    let result = jillsGame.getTotalPoints();
    expect(result).toEqual(90);
  });

  it('can compute the regular points of a complete game of 9 points per frame.', () => {
    let result = jillsGame.getRegularPoints();
    expect(result).toEqual(90);
  });

  it('can compute the extra points of a complete game of 9 points per frame', () => {
    let result = jillsGame.getExtraPoints();
    expect(result).toEqual(0);
  });

});

describe('The BowlingFrame class', () => {


  it('can get throw 1 of a frame when that frame is a strike.', () => {
    let result = annesFrame10.getThrow1();
    expect(result).toEqual(10);
  });

  it('can get throw 2 of a frame when that frame is a strike.', () => {
    let result = annesFrame10.getThrow2();
    expect(result).toBeNull();
  });

  it('can get tell when a frame is a strike.', () => {
    let result = annesFrame10.frameIsStrike();
    expect(result).toBeTruthy();
  });

  it('can get tell when a frame is a spare.', () => {
    let result = annesFrame10.frameIsSpare();
    expect(result).toBeFalsy();
  });

  it('can get get the frame base points.', () => {
    let result = annesFrame10.getFrameBasePoints();
    expect(result).toEqual(10);
  });

  it('can get get the frame extra points.', () => {
    let result = annesFrame10.getFrameExtraPoints();
    expect(result).toEqual(20);
  });

  it('can get get the frame total points.', () => {
    let result = annesFrame10.getFrameTotalPoints();
    expect(result).toEqual(30);
  });

  it('can get get the game total points.', () => {
    let result = annesFrame10.getTotalPoints();
    expect(result).toEqual(300);
  });

  it('can get get the game extra points.', () => {
    let result = annesFrame10.getExtraPoints();
    expect(result).toEqual(200);
  });

  it('can get get the game regular points.', () => {
    let result = annesFrame10.getRegularPoints();
    expect(result).toEqual(100);
  });

});