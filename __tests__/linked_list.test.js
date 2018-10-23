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

describe ('The linked list insertBefore method', () => {
  it('can insert an element at the beginning of the linked list', () => {
    myLL.insertBefore('The', '>>>>');
    let result = myLL.ll_kth_from_end(9);
    expect(result).toEqual('>>>>');
  });

  it('can insert an element before the last element of the linked list', () => {
    myLL.insertBefore('dog', '...');
    let result = myLL.ll_kth_from_end(1);
    expect(result).toEqual('...');
  });
});

describe ('The linked list insertAfter method', () => {
  it('can insert an element after the beginning of the linked list', () => {
    myLL.insertAfter('>>>>', '!!!');
    let result = myLL.ll_kth_from_end(10);
    expect(result).toEqual('!!!');
  });

  it('can insert a new last element into the linked list', () => {
    myLL.insertAfter('dog', '!!!!!!!');
    let result = myLL.ll_kth_from_end(0);
    expect(result).toEqual('!!!!!!!');
  });
});
