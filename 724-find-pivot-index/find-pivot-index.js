/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sumLeft = 0;
    let pivotIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        sumLeft += nums[i - 1] ? nums[i - 1] : 0;
        let sumRight = 0;
        for (let j = i + 1; j < nums.length; j++) {
            sumRight += nums[j];
        }
        if (sumLeft == sumRight) {
            pivotIndex = i;
            break;
        }

    }
    return pivotIndex;
};
