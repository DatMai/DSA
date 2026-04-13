var getMinDistance = function (nums, target, start) {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res = Math.min(res, Math.abs(i - start));
        }
    }
    return res;
};