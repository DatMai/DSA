/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let topK = [];
    let result = [];
    let cache = new Map();

    for (let i = 0; i < nums.length; ++i) {
        cache.set(nums[i], cache.get(nums[i]) + 1 || 1);
    }

    topK = [...cache.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);

    for (let i = 0; i < k; ++i) {
        result.push(topK[i][0]);
    }

    return result;
};