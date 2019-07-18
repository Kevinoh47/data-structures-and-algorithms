'use strict';

/**
 * Interview whiteboarding question for Zonar Systems.
 * The manager also asked me two SQL questions: a SELECT something, MIN(time), MAX(time) + GROUP BY question, with variations for both inner and outer joins.
 * 
 * This question: given an ordered array of stock prices throughout the day, calculate the best profit potential.
 * If the trend is negative, then find the least loss.
 * 
 * We are buying first and selling later.
 * 
 * The approach I took was O(n2) because it involved a double loop. The hiring manager said that was his first approach as well, and he had to look at the answer to come up with a better approach, which he described in general terms: you don't just track the possible deltas, but you also track the lowest lows.  He didn't fault me for the approach I took. I will try to recreate it here:
 */

let prices = [45, 50, 55, 60, 60, 65, 60, 40, 60, 70, 70, 65];
let sinkingPrices = [100, 95, 90, 80, 70, 50, 20, 0];
let sinkingPrices2 = [100, 50, 50, 45, 40, 30, 20, 0];
let sinkingPrices3 = [100, 50, 50, 51, 40, 30, 20, 0];

let bestProfitForPurchaseAndSale = prices => {

  let largestDelta = prices[1] - prices[0];// first two positions
  let bestBuyIdx = 0;
  let bestSellIdx = 1;


  // outer loop is beginning of each possible delta
  // we can end the outer loop at the penultimate index spot because that is last available start for a delta.
  for (let i = 0; i < prices.length -1; i++) {

    // inner loops is the end of each possible delta
    // because the array is orderd, we don't have to test earlier values for the end.
    // we can start at index 1 because the first availabe end is index 1.
    for (let j = 1+i; j < prices.length; j++) {
      const currDeltaStart = prices[i];
      const currDeltaEnd = prices[j];
      const currentDelta = currDeltaEnd - currDeltaStart;

      if (currentDelta > largestDelta) {
        largestDelta = currentDelta;
        bestBuyIdx = i;
        bestSellIdx = j;
      }
    }
  }
  return {largestProfit:largestDelta, buyIdx:bestBuyIdx, sellIdx:bestSellIdx, buyPrice: prices[bestBuyIdx], sellPrice: prices[bestSellIdx]};
};

console.log(bestProfitForPurchaseAndSale(prices)); // expecting 30
console.log(bestProfitForPurchaseAndSale(sinkingPrices)); // expecting -5
console.log(bestProfitForPurchaseAndSale(sinkingPrices2)); // expecting 0
console.log(bestProfitForPurchaseAndSale(sinkingPrices3)); // expecting 1