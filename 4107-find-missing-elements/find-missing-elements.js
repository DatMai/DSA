var findMissingElements = function (nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
            ans.push(j);
        }
    }
    return ans;
};