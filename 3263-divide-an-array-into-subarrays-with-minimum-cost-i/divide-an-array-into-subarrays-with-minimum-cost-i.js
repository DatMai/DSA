/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let min1 = 51, min2 = 52;
    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] < min1) {
            min2 = min1;
            min1 = nums[i];
        } else if (min2 > nums[i]) {
            min2 = nums[i];
        }
    }
    return nums[0] + min1 + min2;
};