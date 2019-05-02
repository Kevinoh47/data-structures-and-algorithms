'use strict';



const myArr = [1,2,3];

function sumOfPairs(numbers) {

  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log({'curr1':firstNumber, 'curr2':secondNumber, 'sum': firstNumber + secondNumber});
    });
  });
}
sumOfPairs(myArr);

console.log('\n ... ... \n');

let largest = -Number.MAX_VALUE;
console.log(largest);
let smallest = -Number.MIN_VALUE;
console.log(smallest);

largest = Number.MAX_VALUE;
console.log(largest);
smallest = Number.MIN_VALUE;
console.log(smallest);

console.log('\n ... ... \n');

/**
 * https://www.interviewcake.com/question/javascript/reverse-string-in-place?course=fc1&section=array-and-string-manipulation
 * Write a function that takes an array of characters and reverses the letters in place
 * My solution is O(2n) thus O(n) for time and space. 
 * Their solution is (On) time O(1) space
 */

// my solution:
let inplaceReverser = arr => {
  let myQ = [];
  while (arr.length) {
    myQ.push(arr.pop());
  }
  while(myQ.length){
    arr.push(myQ.shift());
  }

  return arr;
};

console.log(inplaceReverser(['a','b','c','d']));
console.log(inplaceReverser(['a','b','c','d','f']));

console.log('\n ... \n');

// their solution swaps characters until the middle is reached:
let inplaceReverserIC = arr => {
  let leftIndex = 0, rightIndex = arr.length-1;

  while(leftIndex < rightIndex) {
    let oldLeft = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = oldLeft;
    leftIndex++;
    rightIndex--;
  }
  return arr;
};
console.log(inplaceReverserIC(['a','b','c','d']));
console.log(inplaceReverserIC(['a','b','c','d','f']));

console.log('\n ... ... \n');
function squareArrayInPlace(intArray) {

  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: we could make this function return undefined,
  // since we modify intArray in place.
  return intArray;
}

console.log(squareArrayInPlace([1,2,3,4,5]));

console.log('\n ... ... \n');

console.log('\n ... ... \n');

/**
 * https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation
 * Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place
 * My solution  and the IC solution are both (On) time O(1) space
 */

// my solution:
let reverseWords = arr => {

  // first just reverse all the characters
  inplaceReverser(arr);
  console.log({arr});

  // now, we re-reverse all the characters inside each substring marked by an empty space.

  let spaceIndices = []; 
  for (let i = 0; i < arr.length; i++){
    if( arr[i] === ' '){spaceIndices.push(i);}
  }

  console.log({spaceIndices});

  let leftIndex, rightIndex;

  for( let i = 0; i <= spaceIndices.length; i++) {

    leftIndex = (i === 0) ? 0 : spaceIndices[i-1]+1;
    rightIndex = (spaceIndices[i]) ? (spaceIndices[i]-1) : arr.length-1;

    console.log('left', leftIndex, 'right', rightIndex);

    while(leftIndex < rightIndex) {
      let oldLeft = arr[leftIndex];
      arr[leftIndex] = arr[rightIndex];
      arr[rightIndex] = oldLeft;
      leftIndex++;
      rightIndex--;
    }
  }

  return arr;
};

console.log(reverseWords(['p','a','n','t','s',' ','h','o','t',' ','p','i','n','k']));
console.log(reverseWords(['l','a','n','d','e','d',' ','h','a','s',' ','e','a','g','l','e',' ','t','h','e']));

console.log('\n ... InterviewCake solution ... \n');

function reverseWordsIC(message) {

  // First we reverse all the characters in the entire message
  reverseCharacters(message, 0, message.length - 1);
  // This gives us the right word order
  // but with each word backward

  // Now we'll make the words forward again
  // by reversing each word's characters

  // We hold the index of the *start* of the current word
  // as we look for the *end* of the current word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {

    // Found the end of the current word!
    if (i === message.length || message[i] === ' ') {

      // If we haven't exhausted the string our
      // next word's start is one character ahead
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  // oops IC wasn't returning anything... I guess since the work is being done in place it doesn't have to...
  // return message;
}

function reverseCharacters(message, leftIndex, rightIndex) {

  // Walk towards the middle, from both sides
  while (leftIndex < rightIndex) {

    // Swap the left char and right char
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

let test1 = ['p','a','n','t','s',' ','h','o','t',' ','p','i','n','k'];
reverseWordsIC(test1);
console.log({test1});
let test2 = ['l','a','n','d','e','d',' ','h','a','s',' ','e','a','g','l','e',' ','t','h','e'];
reverseWordsIC(test2);
console.log({test2});