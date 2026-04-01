/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0;
    let totalSum = nums.reduce((a, b) => a + b);
    for (let i = 0; i < nums.length; ++i) {
        if (totalSum - leftSum - nums[i] == leftSum) return i;
        leftSum += nums[i];
    }
    return -1;
};