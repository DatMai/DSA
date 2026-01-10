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
    console.log('log to see why we need to use a long expression instead of sum % k', -1 % 2, ((-1 % 2) + 2) % 2)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        r = ((sum % k) + k) % k;
        console.log('checking r', r, sum % k);
        if (map.has(r)) {
            count += map.get(r);
        }
        map.set(r, (map.get(r) ? map.get(r) : 0) + 1);
    }
    return count;
};