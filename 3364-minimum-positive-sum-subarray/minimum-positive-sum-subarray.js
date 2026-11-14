var minimumSumSubarray = function(nums, l, r) {
    let best = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let s = 0;
        for (let j = i; j < Math.min(i + r, nums.length); j++) {  // nums[i..j], at most r long
            s += nums[j];
            if (j - i + 1 >= l && 0 < s && s < best) best = s;
        }
    }
    return best === Infinity ? -1 : best;
};
