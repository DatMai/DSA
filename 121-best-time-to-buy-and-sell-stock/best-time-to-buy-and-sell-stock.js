/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let profit = 0;
    for (let i in prices) {
        if (min > prices[i]) min = prices[i];
        if (prices[i] - min > profit) profit = prices[i] - min;
    }
    return profit;
};