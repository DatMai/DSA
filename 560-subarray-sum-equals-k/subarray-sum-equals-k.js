/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let cache = new Map();
    let sum = 0;
    cache.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (cache.has(sum - k)) {
            count += cache.get(sum - k);
        }

        cache.set(sum, (cache.get(sum) ? cache.get(sum) : 0) + 1)
    }
    return count;
};