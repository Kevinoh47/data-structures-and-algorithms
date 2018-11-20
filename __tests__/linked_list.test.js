'use strict';

const LinkedList = require('../linked-list.js');
const mergeLists = require('../llMerge/ll-merge.js');

let myLL = new LinkedList();
myLL.append('The');
myLL.append('quick');
myLL.append('brown');
myLL.append('fox');
myLL.append('jumped');
myLL.append('over');
myLL.append('the');
myLL.append('lazy');

describe ('The Linked List mergeLists method', () => {

  it('can take two lists of equal length and zip them', () => {
    let input1 = [1,3,5,7];
    let input2 = [2,4,6,8];
    let myLl1 = new LinkedList();
    let myLl2 = new LinkedList();
    input1.map(i => myLl1.append(i));
    input2.map(i => myLl2.append(i));

    let result = mergeLists(myLl1, myLl2);

    expect(result.length).toEqual(8);
    expect(result.head.value).toEqual(1);
    expect(result.tail.value).toEqual(8);
  });

  it('can take a short list and a long list and zip them', () => {

    let input1 = [1,3,5,7];
    let input2 = [2,4,6,8, 10,12];
    let myLl1 = new LinkedList();
    let myLl2 = new LinkedList();
    input1.map(i => myLl1.append(i));
    input2.map(i => myLl2.append(i));

    let result = mergeLists(myLl1, myLl2);

    expect(result.length).toEqual(10);
    expect(result.head.value).toEqual(1);
    expect(result.tail.value).toEqual(12);

  });

  it('can take a long list and a short list and zip them', () => {
    let input1 = [1,3,5,7,9,11];
    let input2 = [2,4,6,8];
    let myLl1 = new LinkedList();
    let myLl2 = new LinkedList();
    input1.map(i => myLl1.append(i));
    input2.map(i => myLl2.append(i));

    let result = mergeLists(myLl1, myLl2);

    expect(result.length).toEqual(10);
    expect(result.head.value).toEqual(1);
    expect(result.tail.value).toEqual(11);
  });
});
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

describe ('The linked list shift method', () => {

  let testLL = new LinkedList();
  testLL.append(100);
  testLL.append(200);
  testLL.append(300);
  testLL.append(400);
  let shifted = testLL.shift();
  let newLen = testLL.length;
  it('can remove a node from the front of a linked list', () => {
    expect(testLL.head.value).toEqual(200);
  });

  it('can return a node from the front of a linked list', () => {
    expect(shifted.value).toEqual(100); 
  });

  it('decrements the length property of a linked list', () => {
    expect(newLen).toEqual(3);
  });
});

describe ('The linked list prepend method', () => {

  let testLL = new LinkedList();

  it('can add a node to an empty linked list', () => {
    testLL.prepend(100);
    expect(testLL.length).toEqual(1);
  });

  it('can add nodes to the front of a linked list', () => {
    testLL.prepend(200);
    expect(testLL.head.value).toEqual(200);
  });

  it('increments the length property of a linked list', () => {
    expect(testLL.length).toEqual(2);
  });
});

describe ('The linked list peek method', () => {

  let testLL = new LinkedList();
  testLL.append(100);
  testLL.append(200);
  testLL.append(300);
  testLL.append(400);

  let result = testLL.peek();

  it('can show the tail value of the linked list', () => {
    expect(result.value).toEqual(400);
  });
  it('leaves the length property of a linked list', () => {
    expect(testLL.length).toEqual(4);
  });
  it('the tail of the linked list is unchanged', () => {
    expect(testLL.tail.value).toEqual(400);
  });
});

describe ('The linked list delete method', () => {

  let testLL = new LinkedList();

  it('returns null if we attempt to delete from an empty linked list', () => {

    let result = testLL.delete();
    expect(result).toBeNull();
  });

  it('can delete the head of a linked list if there is only one element', () => {
    testLL.append(100);
    testLL.delete();
    expect(testLL.length).toEqual(0);
  });
  it('removes the tail of a linked list', () => {

    testLL.append(100);
    testLL.append(200);
    testLL.append(300);
    testLL.append(400);
    let result = testLL.delete();

    expect(result.value).toEqual(400);
  });
  it('decrements the length property of the linked list', () => {
    expect(testLL.length).toEqual(3);
  });
});

