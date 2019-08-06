/**
 * https://leetcode.com/problems/max-stack/
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

    // old school:
    for (let i = 0; i < this.myStack.length; i++) {
      let myVal = this.myStack[i];
      if (myVal >= currMax) {
        currMax = myVal;
        currMaxIndex = i;
      }
  }

  
    // console.log({currMax});
    // console.log({currMaxIndex});

    this.maxVal = currMax;
    this.maxValIndex = currMaxIndex;

    // console.log({newMaxVal:this.maxVal});
    // console.log({newMaxValIdx:this.maxValIndex});

  };
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.myStack.push(x);

  // use >= because if equal we want popMax to remove the last one
  if (x >= this.maxVal) {
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
  return this.maxVal;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {

  if (this.myStack.length === 0) {return null;}

  // console.log('pre popMax stack: ', this.myStack);

  const popMaxVal = this.myStack.splice(this.maxValIndex, 1);

  this._setNewMax();

  // console.log('poppedMax: ', popMaxVal[0], 'currentStack: ', this.myStack);

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