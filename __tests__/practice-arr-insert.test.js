const arrInsert = require('../post_grad_practice/practice-arr-insert');

let t1 = [1,2,4];
let t2 = [];

describe('The arrInsert function', () => {

  it('can output an array that includes a value at a prescribed index in the middle of the array', () => {
    let result = arrInsert(t1, 3, 2);

    expect(result).toEqual([1,2,3,4]);
  });

  it('can return an array with a single element if the insert array is empty', () => {
    let result = arrInsert(t2, 3, 2);
    expect(result).toEqual([3]);
  });

  it('can return just the input array if no value is also input', () => {
    let result = arrInsert(t1);
    expect(result).toEqual([1,2,4]);
  });

  it('can return an array with the input value "pushed" on the end if the index is equal to the array length', () => {
    let result = arrInsert(t1,5,3);
    expect(result).toEqual([1,2,4,5]);
  });

  it('can return an array with the input value "pushed" on the end if the index is greater than the array length', () => {
    let result = arrInsert(t1,5,300);
    expect(result).toEqual([1,2,4,5]);
  });

  it('can return an array with the input value "unshifted" to the front if the index is non existent', () => {
    let result = arrInsert(t1,5);
    expect(result).toEqual([5,1,2,4]);
  });

  it('can return an array with the input value "unshifted" to the front if the index is zero', () => {
    let result = arrInsert(t1,5,0);
    expect(result).toEqual([5,1,2,4]);
  });

  it('can return an array with the input value "unshifted" to the front if the index is negative', () => {
    let result = arrInsert(t1,5,-74);
    expect(result).toEqual([5,1,2,4]);
  });
});