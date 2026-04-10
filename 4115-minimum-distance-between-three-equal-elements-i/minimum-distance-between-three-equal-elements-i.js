var minimumDistance = function (nums) {
    let ans = nums.length + 1;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            if (nums[i] !== nums[j]) {
                continue;
            }
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[j] === nums[k]) {
                    ans = Math.min(ans, k - i);
                    break;
                }
            }
        }
    }

    if (ans === nums.length + 1) {
        return -1;
    } else {
        return ans * 2;
    }
};