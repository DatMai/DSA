/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        r = ((sum % k) + k) % k;
        
        if (map.has(r)) {
            count += map.get(r);
        }
        map.set(r, (map.get(r) ? map.get(r) : 0) + 1);
    }
    return count;
};

// // prefixSum(i) - k = prefixSum(j) => prefixSum(j) % k === 0 -> correct
//   0  1  2  3  4 5 
//   4  5  0 -2 -3 1   , k=5 
// 0 4  9  9  7  4 5
// 1 1  1  2  1  2 1