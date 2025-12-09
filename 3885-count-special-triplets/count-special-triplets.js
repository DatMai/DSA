const MOD = 1e9 + 7;

var specialTriplets = function (nums) {
    const pos = new Map();

    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (pos.has(v)) {
            pos.get(v).push(i);
        } else {
            pos.set(v, [i]);
        }
    }

    const upperBound = (arr, i) => {
        let l = 0,
            r = arr.length - 1;

        while (l < r) {
            const mid = l + ((r - l + 1) >> 1);
            if (i >= arr[mid]) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return [l + 1, arr.length - 1 - l];
    };

    let ans = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        const targetPos = pos.get(nums[i] * 2);
        if (targetPos && targetPos.length > 1 && targetPos[0] < i) {
            let [l, r] = upperBound(targetPos, i);
            if (nums[i] === 0) {
                l--;
            }
            ans += (l * r) % MOD;
            ans %= MOD;
        }
    }
    return ans;
};