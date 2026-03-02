/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; ++i) {
        if (prices[i] < minPrice) minPrice = prices[i];
        profit = Math.max(profit, prices[i] - minPrice);
    }

    return profit;
};