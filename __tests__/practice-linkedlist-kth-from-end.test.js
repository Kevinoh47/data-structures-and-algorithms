'use strict';

const {LinkedListNode, kthToLastNode} = require('../post_grad_practice/practice-linkedlist-kth-from-end');

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode(`Devil's Food`);
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

describe ('The kthToLastNode method', () => {
  it('can find the kth node from the end of a linked list', () => {
    let results = kthToLastNode(2, a);
    expect(results.value).toEqual(`Devil's Food`);
  });

  it('can find the first node of a linked list', () => {
    let results = kthToLastNode(5, a);
    expect(results.value).toEqual(`Angel Food`);
  });

  it('can find the last node of a linked list', () => {
    let results = kthToLastNode(1, a);
    expect(results.value).toEqual(`Eccles`);
  });

  it('returns null if k is 0', () => {
    let results = kthToLastNode(0, a);
    console.log({results});
    expect(results).toBeNull;
  });

  it('returns null if k is larger than linked list count', () => {
    let results = kthToLastNode(6, a);
    console.log({results});
    expect(results).toBeNull;
  });

});