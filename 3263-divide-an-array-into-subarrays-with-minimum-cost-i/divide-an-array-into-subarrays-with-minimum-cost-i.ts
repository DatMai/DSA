function minimumCost(nums: number[]): number {
    nums = [nums[0], ...nums.slice(1).sort((a, b) => a - b)];
    return nums[0] + nums[1] + nums[2];
};