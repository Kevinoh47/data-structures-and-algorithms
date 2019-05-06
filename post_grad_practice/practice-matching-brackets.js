'use strict';

let bracketTester = str => {
  let leftB1Count = 0, rightB1Count = 0, leftB2Count = 0, rightB2Count = 0,leftB3Count = 0, rightB3Count = 0, looksGood = true;

  let myArr = str.split('');

  myArr.map((e,i,myArr)=> {

    // previous char to a right bracket must be either the left bracket of the same type or another right bracket:
    if (e === ')') {
      if (i === 0) { looksGood = false; }
      else if (myArr[i-1] === '[' || myArr[i-1] === '{') { looksGood = false;}
    }
    else if (e === '}') {
      if (i === 0) {return false;}
      else if (myArr[i-1] === '(' || myArr[i-1] === '[') { looksGood = false;}
    }
    else if (e === ']') {
      if (i === 0) {looksGood = false;}
      else if (myArr[i-1] === '(' || myArr[i-1] === '{') { looksGood = false;}
    }

    switch(e) {
    case '(':
      leftB1Count++;
      break;
    case ')':
      rightB1Count++;
      break;
    case '{':
      leftB2Count++;
      break;
    case '}':
      rightB2Count++;
      break;
    case '[':
      leftB3Count++;
      break;
    case ']':
      rightB3Count++;
      break;
    }

    // right count greater is always bad:
    if (rightB1Count < leftB1Count ||
      rightB2Count < leftB2Count ||
      rightB3Count < leftB3Count
    ) {
      return false;
    } 
  });

  // final counts have to be equal:
  if (rightB1Count !== leftB1Count ||
    rightB2Count !== leftB2Count ||
    rightB3Count !== leftB3Count
  ) {
    return false;
  }
  return looksGood;
};

const strNeg1=']', str0 = '{[]}', str1 = '()', str2='(){}[]', str3='((()))', str4='(()))';

// how to test for these?
const str5='{[}]', str6='(([)])', str7='[([]])';

console.log({'strNeg1 should return false': bracketTester(strNeg1)});
console.log({'str0 should return true': bracketTester(str0)});
console.log({'str1 should return true': bracketTester(str1)});
console.log({'str2 should return true': bracketTester(str2)});
console.log({'str3 should return true': bracketTester(str3)});
console.log({'str4 should return false': bracketTester(str4)});
console.log({'str5 should return false': bracketTester(str5)});
console.log({'str6 should return false': bracketTester(str6)});
console.log({'str6 should return false': bracketTester(str7)});



