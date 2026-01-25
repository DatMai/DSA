/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let n = nums.length;
    let sortedNums = nums.sort((a, b) => { return a - b });
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n - k + 1; i++) {
        ans = Math.min(ans, nums[i + k - 1] - nums[i]);
    }

    return ans;
};