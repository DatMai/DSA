var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // chuyển về chỉ số (0-based)
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // đánh dấu là đã thấy
        }
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // index + 1 = số bị thiếu
        }
    }
    return result;
};
