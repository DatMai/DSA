var minMoves = function (nums) {
    let mx = nums[0];
    for (const x of nums) {
        mx = Math.max(mx, x);
    }
    let ans = 0;
    for (const x of nums) {
        ans += mx - x;
    }
    return ans;
};
