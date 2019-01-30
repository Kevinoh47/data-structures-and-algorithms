'use strict';
const util = require('util');
const HashTable = require('../hashtable/hashtable.js');

let myHashTable1 = new HashTable(20);
let myHashTable2 = new HashTable(10);

let input1 = ['Abba', 'Aabb','bbAa','bbaA','babA','abAb'];

let input2 = ['Aaron','Bob','Carla','Dougie','Frederika','Geoffrey'];

input1.map(i => myHashTable1.add(i, 'my Test Value'));
input2.map(i => myHashTable2.add(i, 'my Test Value'));

// console.log(util.inspect(myHashTable1,{showHidden:false,depth:null}));
// console.log(util.inspect(myHashTable2,{showHidden:false,depth:null}));

describe ('The HashTable ', () => {

  it('is created with the proper size', () => {
    let size1 = myHashTable1.size;
    let size2 = myHashTable2.size;
    expect(size1).toEqual(20);
    expect(size2).toEqual(10);

  });

  it('adds values to the hash table', () => {
    let result = myHashTable1.map[3].head.value;
    expect(result).toHaveProperty('Abba');
  });

  it('hashes the same value into the same key multiple times, as long as the hashtables are of the same size', () => {

    let myHashTable3 = new HashTable(20);
    myHashTable3.add('bbAa', 'thisShouldHashTo17');
    let result = myHashTable3.map[17].head.value.bbAa;

    expect(result).toEqual('thisShouldHashTo17');
  });

  it('uses the contains method to correctly discover whether a key exists in a hashtable', () => {
    let result = myHashTable2.contains('Carla');
    expect(result).toBeTruthy();
  });

  it('uses the contains method to correctly discover whether a key does NOT exist in a hashtable', () => {
    let result = myHashTable2.contains('Caesar Zamboni');
    expect(result).toBeFalsy();
  });

  it('uses the find method to return a node at a particular key', () => {
    let result = myHashTable2.find('Bob');
    
    expect(result).toHaveProperty('Bob');
  });

  it('uses the getHash method to find the index of a supplied key', () => {
    let result = myHashTable2.getHash('Aaron');
    expect(result).toEqual(5);
  });

  it('uses the delete method to delete a particular key', () => {
    let result = myHashTable2.delete('Aaron');
    let result2 = myHashTable2.contains('Aaron');
    expect(result2).toBeFalsy();
  });

  it('uses the delete method to delete a particular key even when it has to find the key among more than one collision victims', () => {

    let myHashTable4 = new HashTable(1); // they all go to the same slot.

    let input4 = ['Abba', 'Aabb','bbAa','bbaA','babA','abAb'];
    input4.map(i => myHashTable4.add(i, 'my Test Value'));
    let result = myHashTable4.delete('Aabb');
    let result2 = myHashTable4.contains('Aabb');
    expect(result2).toBeFalsy();

  });
});