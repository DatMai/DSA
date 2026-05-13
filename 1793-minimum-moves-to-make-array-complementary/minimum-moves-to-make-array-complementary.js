var minMoves = function (nums, limit) {
    const n = nums.length;
    const diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        const a = Math.min(nums[i], nums[n - 1 - i]);
        const b = Math.max(nums[i], nums[n - 1 - i]);

        diff[2] += 2;
        diff[a + 1] -= 1;
        diff[a + b] -= 1;
        diff[a + b + 1] += 1;
        diff[b + limit + 1] += 1;
    }

    let minOps = n;
    let currentOps = 0;

    for (let c = 2; c <= 2 * limit; c++) {
        currentOps += diff[c];
        minOps = Math.min(minOps, currentOps);
    }

    return minOps;
};