'use strict';

const linkedList = require('../linked-list.js');

let myLL = new linkedList();
myLL.append('The');
myLL.append('quick');
myLL.append('brown');
myLL.append('fox');
myLL.append('jumped');
myLL.append('over');
myLL.append('the');
myLL.append('lazy');

describe ('The linked list kth from end method', () => {
  it('can find the first element of the Linked List', () => {
    let result = myLL.ll_kth_from_end(7);
    expect(result).toEqual('The');
  });
  it('can find the last element of the Linked List', () => {
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('lazy');
  });
  it('can find an element in the middle of the Linked List', () => {
    let result = myLL.ll_kth_from_end(3);
    expect(result).toEqual('jumped');
  });
  it('returns false for a bad input value', () => {
    let result = myLL.ll_kth_from_end(-47);
    expect(result).toBeFalsy;
  });
});

describe ('The linked list append method', () => {
  it('can add an element to the end of the linked list', () => {
    myLL.append('dog');
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('dog');
  });
});

