/**
 * @param {number[]} nums
 */
 let staticNums;
var NumArray = function(nums) {
    staticNums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0;
    for (let i = left; i <= right; ++i) {
        sum += staticNums[i];
        }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */