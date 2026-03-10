const MOD = 1000000007;

var numberOfStableArrays = function (zero, one, limit) {
    let dp = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => [0, 0]),
    );

    for (let i = 0; i <= zero; i++) {
        for (let j = 0; j <= one; j++) {
            for (let lastBit = 0; lastBit <= 1; lastBit++) {
                if (i === 0) {
                    if (lastBit === 0 || j > limit) {
                        dp[i][j][lastBit] = 0;
                    } else {
                        dp[i][j][lastBit] = 1;
                    }
                } else if (j === 0) {
                    if (lastBit === 1 || i > limit) {
                        dp[i][j][lastBit] = 0;
                    } else {
                        dp[i][j][lastBit] = 1;
                    }
                } else if (lastBit === 0) {
                    dp[i][j][lastBit] = dp[i - 1][j][0] + dp[i - 1][j][1];
                    if (i > limit) {
                        dp[i][j][lastBit] -= dp[i - limit - 1][j][1];
                    }
                } else {
                    dp[i][j][lastBit] = dp[i][j - 1][0] + dp[i][j - 1][1];
                    if (j > limit) {
                        dp[i][j][lastBit] -= dp[i][j - limit - 1][0];
                    }
                }
                dp[i][j][lastBit] %= MOD;
                if (dp[i][j][lastBit] < 0) {
                    dp[i][j][lastBit] += MOD;
                }
            }
        }
    }

    return (dp[zero][one][0] + dp[zero][one][1]) % MOD;
};