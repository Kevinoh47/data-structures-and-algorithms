'use strict';

let longRunning = cb => {
  let cbText = 'this text will go to the callback...';
  console.log('long running is running...');
  cb( undefined, cbText );
  console.log( 'after calling cb...');
};

let errorFirstCB = ( err, data ) => {
  if ( err ) { throw err; }
  console.log('got some data from the originating function : ', data)
};

longRunning(errorFirstCB);

console.log('\n ... \n');

//callback hell:
longRunning( (err,data) => {
  if ( err ) { throw err; }

  // nested call...
  longRunning( (err, data) => {
    console.log('second iteration, called from inside first callback...', data);
  });
});

console.log('\n ... promise ... \n');

let longTask = (foo) => {
  return new Promise( (resolve,reject)=> { 
    if(foo) {
      resolve('ok');
    } else { reject('whoops')}
  });
};

longTask(true)
  .then(data => {console.log('Got', data);})
  .catch( error => {
    console.error(error); 
    return error;
  } );
console.log(longTask);

longTask(false)
  .then(data => {console.log('Got', data);})
  .catch( error => console.error(error) );
console.log(longTask);