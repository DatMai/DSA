let staticNum = [];
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    staticNum = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let total = 0;
    for (let i = left; i <= right; ++i) {
        total += staticNum[i];
    }
    return total;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */