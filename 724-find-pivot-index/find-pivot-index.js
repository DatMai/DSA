/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalSum = 0;
    let leftSum = 0;
    let pivotIndex = -1;
    for (let i = 0; i < nums.length; ++i) {
        totalSum += nums[i];
    }

    for (let i = 0; i < nums.length; ++i) {
        leftSum += nums[i - 1] ? nums[i - 1] : 0;
        if (leftSum == totalSum - nums[i] - leftSum) {
            pivotIndex = i;
            break;
        }
    }

    return pivotIndex;
};