/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let leftSum = 0;
    let total = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
    for (let i = 0; i < nums.length; ++i) {
        leftSum += nums[i - 1] ? nums[i - 1] : 0;

        if (total - leftSum - nums[i] == leftSum) {
            return i;
        }

    }
    return -1;
};