const { AvlTree } = require("datastructures-js");

var countPartitions = function (nums, k) {
    const n = nums.length;
    const mod = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    const prefix = new Array(n + 1).fill(0);
    const cnt = new AvlTree();
    const freq = new Map();

    dp[0] = 1;
    prefix[0] = 1;

    for (let i = 0, j = 0; i < nums.length; i++) {
        const currentFreq = freq.get(nums[i]) || 0;
        freq.set(nums[i], currentFreq + 1);
        if (currentFreq === 0) {
            cnt.insert(nums[i]);
        }
        // adjust window
        while (j <= i && cnt.max().getValue() - cnt.min().getValue() > k) {
            const leftFreq = freq.get(nums[j]) || 0;
            freq.set(nums[j], leftFreq - 1);
            if (leftFreq === 1) {
                cnt.remove(nums[j]);
            }
            j++;
        }

        dp[i + 1] = (prefix[i] - (j > 0 ? prefix[j - 1] : 0) + mod) % mod;
        prefix[i + 1] = (prefix[i] + dp[i + 1]) % mod;
    }
    return dp[n];
};