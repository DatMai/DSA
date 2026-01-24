/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let newIndex = Math.abs(nums[i]) - 1;
        if (nums[newIndex] > 0) {
            nums[newIndex] = -nums[newIndex];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};