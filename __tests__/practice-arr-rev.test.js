const arrRev = require('../post_grad_practice/practice-arr-rev');

let t1 = [1,2,3,4,5];
let t2 = [100];
let t3 = [];

describe('The arrRev function', () => {

  it('can output an array that reverses the input array', () => {
    let result = arrRev(t1);
    expect(result).toEqual([5,4,3,2,1]);
  });

  it('can return an array with a single element', () => {
    let result = arrRev(t2);
    expect(result).toEqual([100]);
  });

  it('can return null if an empty array is input', () => {
    let result = arrRev(t3);
    expect(result).toBeNull();
  });
});