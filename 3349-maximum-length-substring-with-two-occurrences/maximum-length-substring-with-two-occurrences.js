var maximumLengthSubstring = function (s) {
    const n = s.length;
    let res = 0;
    for (let left = 0; left < n; left++) {
        const count = new Array(26).fill(0);
        for (let right = left; right < n; right++) {
            const ch = s.charCodeAt(right) - 97;
            count[ch]++;
            if (count[ch] > 2) {
                break;
            }
            res = Math.max(res, right - left + 1);
        }
    }
    return res;
};