/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true;
        map.add(nums[i]);
    }
    return false;
};