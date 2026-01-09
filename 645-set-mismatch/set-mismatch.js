/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let cache = new Map();
    let result = [];
    let twice = 0;
    let lossNumber = 0;
    for (let i = 0; i < nums.length; i++) {
        cache.set(nums[i], cache.get(nums[i]) ? cache.get(nums[i]) + 1 : 1);
    }

    for (let i = 0; i < nums.length; i++) {
        if (cache.get(nums[i]) == 2) {
            twice = nums[i];
        }

        if (!cache.has(i + 1)) {
            lossNumber = i + 1;
        }
    }
    result = [twice, lossNumber];
    return result;
};