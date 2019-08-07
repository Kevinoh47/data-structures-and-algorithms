/**
 * https://leetcode.com/problems/max-stack/
 * 
 * Success
Details
Runtime: 172 ms, faster than 28.00% of JavaScript online submissions for Max Stack.
Memory Usage: 43.1 MB, less than 100.00% of JavaScript online submissions for Max Stack.


 */

/**
 * initialize your data structure here.
 */
var MaxStack = function() {
  this.myStack = [];
  this.maxVal = null;
  this.maxValIndex = null;

  this._setNewMax = function() {
  
    let currMax = this.myStack[0];
    let currMaxIndex = 0;
  
    // this.myStack.forEach( (val, idx) => {
    //   // use >= because if equal we want popMax to remove the last one
    //   if (val >= currMax) {
    //     currMax = val;
    //     currMaxIndex = idx;
    //   }
    // });

    // old school (LeetCode doesn't seem to support forEach ????):
    for (let i = 0; i < this.myStack.length; i++) {
      let myVal = this.myStack[i];
      if (myVal >= currMax) {
        currMax = myVal;
        currMaxIndex = i;
      }
    }

    this.maxVal = currMax;
    this.maxValIndex = currMaxIndex;
  };
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.myStack.push(x);

  // use >= because if equal we want popMax to remove the last one
  if (x >= this.maxVal || this.maxVal === undefined || this.maxVal === null) {
    this.maxVal = x;
    this.maxValIndex = this.myStack.length-1;
  }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  if (this.myStack.length === 0) {return null;}

  const poppedVal = this.myStack.pop();

  this._setNewMax();

  return poppedVal;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  if (this.myStack.length === 0) {return null;}

  return this.myStack[this.myStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {

  console.log(this.myStack);
  console.log(this.maxVal);

  return this.maxVal;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {

  if (this.myStack.length === 0) {return null;}

  const popMaxVal = this.myStack.splice(this.maxValIndex, 1);

  this._setNewMax();

  return popMaxVal[0];
};



/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

const myMaxStack = new MaxStack();
myMaxStack.push(5);
myMaxStack.push(1);
myMaxStack.push(5);

const top1 = myMaxStack.top(); // -> 5
const popMax1 = myMaxStack.popMax(); // -> 5
const top2 = myMaxStack.top(); // -> 1
const peekMax1 = myMaxStack.peekMax(); //-> 5
const pop1 = myMaxStack.pop(); // -> 1
const top3 = myMaxStack.top(); // -> 5

console.log({top1: top1, popMax1: popMax1, top2: top2, peekMax1: peekMax1, pop1, top3:top3});


/**
 * originally failed this test:
 * 
 * Input
["MaxStack",
"push",
"popMax",
"push",
"push",
"popMax",
"pop",
"push",
"push",
"peekMax",
"popMax",
"push",
"pop",
"push",
"push"]

[[],
[74],
[],
[89],
[67],
[],
[],
[61],
[-77],
[],
[],
[81],
[],
[-71],
[32]]

output
[null,null,74,null,null,89,67,null,null,undefined,61,null,81,null,null]

expected
[null,null,74,null,null,89,67,null,null,61,61,null,81,null,null]
 */

const step0_maxStack2 = new MaxStack();
let step1 = step0_maxStack2.push(74);
let step2 = step0_maxStack2.popMax();  //74
let step3 = step0_maxStack2.push(89);
let step4 = step0_maxStack2.push(67);
let step5 = step0_maxStack2.popMax(); // 89
let step6 = step0_maxStack2.pop();  //67
let step7 = step0_maxStack2.push(61);
let step8 = step0_maxStack2.push(-77);
let step9 = step0_maxStack2.peekMax(); // should be 61 but is undefined
let step10 = step0_maxStack2.popMax();
let step11 = step0_maxStack2.push(81);
let step12 = step0_maxStack2.pop();
let step13 = step0_maxStack2.push(-71);
let step14 = step0_maxStack2.push(32);

console.log(`\n .... \n`);

console.log(step1, step2,step3,step4,step5,step6,step7,step8,step9,step10,step11,step12,step13,step14);

// originally failed this test as well:
const step0_maxStack3 = new MaxStack();
step1 = step0_maxStack3.push(-23);
step2 = step0_maxStack3.peekMax();  // -23


console.log(`\n .... \n`);

console.log(step1, step2, step3);