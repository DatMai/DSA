/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let ans = [];
    let x = [];
    let y = [];
    for (let i = 0; i < n; i++) {
        x.push(nums[i])
    };
    for (let i = n; i < n * 2; i++) {
        y.push(nums[i])
    };

    for (let i = 0; i < n; i++) {
        ans.push(x[i]);
        ans.push(y[i]);
    };

    return ans;
};