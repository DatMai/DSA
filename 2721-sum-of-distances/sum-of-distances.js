var distance = function (nums) {
    const n = nums.length;
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        if (!groups.has(nums[i])) {
            groups.set(nums[i], []);
        }
        groups.get(nums[i]).push(i);
    }
    const res = new Array(n).fill(0);
    for (const group of groups.values()) {
        let total = 0;
        for (const idx of group) {
            total += idx;
        }
        let prefixTotal = 0;
        const sz = group.length;
        for (let i = 0; i < sz; i++) {
            const idx = group[i];
            res[idx] = total - prefixTotal * 2 + idx * (2 * i - sz);
            prefixTotal += idx;
        }
    }
    return res;
};