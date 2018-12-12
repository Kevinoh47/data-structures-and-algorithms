'use strict';

const repeatedWord = require('../repeatedWord/repeated-word.js');

const myStr = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only... of of... was was was';

let result = repeatedWord(myStr);

describe ('The repeatedWord function', () =>{

  it('can find the first repeated word in the string', () => {
    expect(result.firstDuplicate).toBe('it');
  });

  it('can count a word for the dup list that has punctuation mark next to it', () => {
    expect(result.it).toEqual(10);
  });

  it('can find all the words with the highest repeat count', () => {
    expect(result.highestDupWords[2]).toBe('was');
  });

  it('can count a word for the dup list that whether or not it is capitalized.', () => {
    expect(result.it).toEqual(10);
  });

  it('counts all the words that are duplicated.', () => {
    expect(result.dupWordCount).toEqual(20);
  });
  
});
