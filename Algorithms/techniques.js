function power(x, n) {
  if (n == 0) {
    return 1;
  }
  var pow = power(x, parseInt(n / 2, 10));
  if (n % 2 == 0) {
    return pow * pow;
  } else {
    return x * pow * pow;
  }
}
console.log(power(2, 5));
/**-----DIVIDE AND CONQUER ALGORITHM----- */
/** 
 *? How to solve the 0-1 knapsack problem using a dynamic bottom up approach. 
 ** The knapsack problem states that given the weight of n items, and a knapsack that can hold a 
 ** weight w, determine the maximum total item weight the knapsack can hold. 
 ** The 0-1 knapsack problem means you can either take an item, or not take an item, 
 ** there is no ability to take a fraction of an item.
 
 *TODO To solve problem efficently,have to save results to ensure we don’t do any redundant calculations. 
 ** Redundant calculations occur in situations where we take a subset of items, 
 **and add one to it. For example, suppose item 1 has a weight of 3, item 2 has a weight of 5, 
 **item three has a weight of 4, and item four has a weight of 8. If we know item 1 + item 2, 
 **we can use it to calculate both item 1 + item 2 + item 3 and item 1 + item 2 + item 4, 
 **which saves us two calculations. 
 */
function zeroOneKnapsack(W, wt, val, n) {
  var i = 0;
  var w = 0;
  var k = new Array(n + 1);
  for (i = 0; i <= n; i++) {
    k[i] = new Array(W + 1);
    for (w = 0; w <= W; w++) {
      if (i == 0 || w == 0) {
        k[i][w] = 0;
      } else if (wt[i - 1] <= w) {
        k[i][w] = Math.max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w]);
      } else {
        k[i][w] = k[i - 1][w];
      }
    }
  }
  return k[n][W];
}
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
let n = val.length;
console.log(zeroOneKnapsack(W, wt, val, n));

/**-----DYNAMIC PROGRAMMING----- */
/**
 *? How to solve the 0-1 knapsack problem using a dynamic top down approach.
 * This differs from the bottom up approach in a few key ways:
 ** It uses recursion to calculate the values
 ** It memorizes the values within a 2D array
 */
function knapsackRec(W2, wt2, val2, n2, dp) {
  if (n2 == 0 || W2 == 0) {
    return 0;
  }

  if (dp[n2][W2] != -1) {
    return dp[n2][W2];
  }

  if (wt2[n2 - 1] > W2) {
    return (dp[n2][W2] = knapsackRec(W2, wt2, val2, n2 - 1, dp));
  } else {
    return (dp[n2][W2] = Math.max(
      val2[n2 - 1] + knapsackRec(W2 - wt2[n2 - 1], wt2, val2, n2 - 1, dp),
      knapsackRec(W2, wt2, val2, n2 - 1, dp)
    ));
  }
}

function zeroOneKnapsack(w2, wt2, val2, n2) {
  var dp = new Array(n2 + 1);
  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(w2 + 1);
  }
  for (var i = 0; i < n2 + 1; i++) {
    for (var j = 0; j < w2 + 1; j++) {
      dp[i][j] = -1;
    }
  }
  return knapsackRec(w2, wt2, val2, n2, dp);
}
let val2 = [60, 100, 120];
let wt2 = [10, 20, 30];
let W2 = 50;
let n2 = val2.length;
console.log(zeroOneKnapsack(W2, wt2, val2, n2));
/**-----GREEDY ALGORITHM----- */
/**we will take a look at a variation of the knapsack problem known as the fractional knapsack problem. In this variation, we are allowed to take a whole item, or a fraction of the item. In this situation, there is a simple greedy algorithm approach that can be used. The idea is that we take the largest possible valued items until our weight is small enough. We then take the largest fractional items possible until we exhaust the weight. 
 */
function fractionKnapsack(wt3, val3, capacity) {
  var iVal = [];

  for (var i = 0; i < wt3.length; i++) {
    iVal.push([parseInt(val3[i] / wt3[i], 10), wt3[i], val3[i], i]);
  }
  iVal.sort((a, b) => b - a);
  var totalValue = 0;
  for (var i = 0; i < iVal.length; i++) {
    var curWt = iVal[i][1];
    var curVal = iVal[i][2];
    if (capacity - curWt >= 0) {
      capacity -= curWt;
      totalValue += curVal;
    } else {
      var fraction = capacity / curWt;
      totalValue += curVal * fraction;
      capacity = parseInt(capacity - curWt * fraction, 10);
      break;
    }
  }
  return totalValue;
}
let wt3 = [10, 40, 20, 30];
let val3 = [60, 40, 100, 120];
let W3 = 50;
console.log(fractionKnapsack(wt3, val3, W3));
/**-----BACKTRACKING ALGORITHM----- */
