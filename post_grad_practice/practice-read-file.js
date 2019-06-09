'use strict';

const fs = require('fs');
const util = require('util');

const rfp = util.promisify(fs.readFile);

console.log('\n ... callback ... \n');
fs.readFile('./mytext.txt', (err, data) => {
  if (err) { throw err; }
  console.log('data is a buffer: ', data);
  let actualContents = data.toString().trim();
  console.log('deserialized data: ', actualContents);
});

console.log('\n ... promise ... \n');

// promise reather than callback
rfp('./mytext.txt')
  .then(data => console.log( 'promise has resolved and the data deserialized:', data.toString().trim()))
  .catch( error => { throw error;});

// promise.all:

let promises = [];
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));
promises.push(rfp('./mytext.txt'));

Promise.all(promises)
  .then(data => console.log( 'promise has resolved and the data deserialized:', data.toString().trim()))
  .catch( error => { throw error;});