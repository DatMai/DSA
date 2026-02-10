/**
 * @param {number[]} nums
 */
let staticNumber = 0
var NumArray = function (nums) {
    staticNumber = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let total = 0;
    for (let i = left; i <= right; ++i) {
        total += staticNumber[i];
    }
    return total;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */