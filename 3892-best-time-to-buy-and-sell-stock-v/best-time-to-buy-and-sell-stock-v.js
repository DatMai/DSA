var maximumProfit = function (prices, k) {
    const n = prices.length;
    const dp = Array(k + 1)
        .fill()
        .map(() => [0, 0, 0]);
    // initialize the state on day 0
    for (let j = 1; j <= k; j++) {
        dp[j][1] = -prices[0];
        dp[j][2] = prices[0];
    }

    for (let i = 1; i < n; i++) {
        for (let j = k; j > 0; j--) {
            dp[j][0] = Math.max(
                dp[j][0],
                Math.max(dp[j][1] + prices[i], dp[j][2] - prices[i]),
            );
            dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i]);
            dp[j][2] = Math.max(dp[j][2], dp[j - 1][0] + prices[i]);
        }
    }

    return dp[k][0];
};