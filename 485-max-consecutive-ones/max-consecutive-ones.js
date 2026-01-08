/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let counter = 0, result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            counter++;
        } else {
            counter = 0;
        }
        result = Math.max(counter, result);
    }

    return result;
};