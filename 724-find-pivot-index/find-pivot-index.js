/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let totalSum = 0, leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - leftSum - nums[i] == leftSum) {
            return i;
        }
        leftSum += nums[i]

    }

    return -1;
};