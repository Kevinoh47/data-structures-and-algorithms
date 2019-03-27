'use strict';

/* 
write a function that takes an array, a value, and an index and inserts the value in the proper index position. 
*/ 

let arrInsert = (arr, ...rest) => {
  let output = [];
  let inserted = 0;
  let [value, insertIndex] = rest;

  // no insert value returns input
  if (!value) {
    return arr;
  }
  // if empty array, output is an array with just the input value.
  if (arr.length === 0) {
    return [value];
  }
  // if insertIndex is negative or nonexistent, it behaves like unshift.
  if (!insertIndex || insertIndex < 0) {
    output.push(value);
    inserted = 1;
  }
  
  // map the new value to an output array along with the rest of the array.
  arr.map((e,i) => {

    // insert the value at prescribed index position
    if(i === insertIndex && inserted === 0) {
      output.push(value);
      inserted = 1;
    }
    output[i+inserted] = e;
  });

  // if inserting at the end of the array.
  if (arr.length && insertIndex >= arr.length) {
    output.push(value);
  }

  return output;

};



console.log({'test1 - regular insert' : arrInsert([1,2,4], 3, 2)});
console.log({'test2 - empty arr ' : arrInsert([], 3, 2)});
console.log({'test3 - no index' : arrInsert([1,2,4], 3)});
console.log({'test4 - neg index' : arrInsert([1,2,4], 3, -47)});
console.log({'test5 - index 0 same as unshift' : arrInsert([1,2,4], 3, 0)});
console.log({'test6 - index same as arr len tags it to end' : arrInsert([1,2,4], 3, 3)});
console.log({'test7 - index greater than arr len tags it to the end' : arrInsert([1,2,4], 3, 47)});
console.log({'test8 - null insert returns input as is' : arrInsert([1,2,4])});

module.exports = arrInsert;

