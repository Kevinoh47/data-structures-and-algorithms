'use strict';

const fs = require('fs');
const path = require('path');
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
promises.push(rfp('./mytext2.txt'));
promises.push(rfp('./mytext3.txt'));

Promise.all(promises)
  .then(data => {
    //console.log( {data} );
    //console.log( 'promise has resolved and the data deserialized:', data.toString().trim());

    for(let i = 0; i < data.length; i++) {
      let currBuf = data[i];
      console.log(currBuf.toString()); // strings are read into console in order 
    }
  })
  .catch( error => { throw error;});

// read files
/**
 * https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
 * https://stackoverflow.com/questions/32511789/looping-through-files-in-a-folder-node-js
 * https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback
 * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
 * 
 * 
 */

fs.readdir('./', function (err, files) {
  if (err) {
    console.error('could not list the directory.', err);
    process.exit(1);
  }
  files.forEach(function(file, index) {
    console.log(index, file);
  });
});