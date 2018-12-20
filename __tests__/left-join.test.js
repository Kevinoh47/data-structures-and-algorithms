'use strict';

const hashLeftJoin = require ('../leftJoin/left-join.js');

// hash left join
let synonyms = {
  fond:'enamored', 
  wrath:'anger', 
  diligent:'employed',
  outfit:'garb',
  guide:'usher',
};
let antonyms = {
  fond:'averse', 
  wrath:'delight', 
  diligent:'idle',
  guide:'follow',
  flow:'jam',
};

const result = hashLeftJoin(synonyms, antonyms);
let stringifiedResults = JSON.stringify(result);
let stringifiedResultsIndex3 = JSON.stringify(result[3]);
let stringifiedResultsIndex4 = JSON.stringify(result[4]);

describe ('the hashLeftJoin function', () => {
  it('outputs one row for each hash property on the left', () => {
    expect(result.length).toEqual(5);
  });

  it('does not output rows for any keys in the right hash that do not exist in the left hash', () => {
    expect(stringifiedResults).not.toContain('flow');
  });

  it('appends NULL to the result when a right hash does not have a value for the left hash key', () => {
    expect(stringifiedResultsIndex3).toContain('NULL');
  });

  it('appends the right value to the result when a right hash has a value for the left hash key', () => {
    expect(stringifiedResultsIndex4).toContain('follow');
  });




});