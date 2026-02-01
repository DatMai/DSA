function minimumCost(nums: number[]): number {
    const tail = nums.slice(1).sort((a, b) => a - b);
    nums.splice(1, nums.length - 1, ...tail);
    return nums[0] + nums[1] + nums[2];
}
