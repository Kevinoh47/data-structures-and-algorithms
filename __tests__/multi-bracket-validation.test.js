'use strict';

const bV = require('../multi_bracket_validation/multi-bracket-validation.js');

describe ('Multi Bracket Validation', () => {
  it('can determine that a string has matched brackets', () => {
    let myStr = `({}([{{cheese}}pies])[])`;
    let result = bV.multiBracketValidation(myStr);
    console.log('RESULT:', result);
    expect(result).toBeTruthy;
  });

  it('can determine that a string has unmatched brackets', () => {
    let myStr = `({}([{{cheese}}pies])[]{)`;
    let result = bV.multiBracketValidation(myStr);
    expect(result).toBeFalsy;
  });
});






