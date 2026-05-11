var maximumJumps = function (nums, target) {
    const n = nums.length;
    const memo = new Array(n).fill(Number.MIN_SAFE_INTEGER);

    const dfs = (i) => {
        if (i === n - 1) {
            return 0;
        }
        if (memo[i] !== Number.MIN_SAFE_INTEGER) {
            return memo[i];
        }

        let res = Number.MIN_SAFE_INTEGER;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) <= target) {
                res = Math.max(res, dfs(j) + 1);
            }
        }
        memo[i] = res;
        return res;
    };

    const ans = dfs(0);
    return ans < 0 ? -1 : ans;
};