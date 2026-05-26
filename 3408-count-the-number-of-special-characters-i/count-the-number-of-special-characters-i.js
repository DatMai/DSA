var numberOfSpecialChars = function (word) {
    const s = new Set(word);
    let ans = 0;
    for (let i = 0; i < 26; i++) {
        const lo = String.fromCharCode(97 + i);
        const up = String.fromCharCode(65 + i);
        if (s.has(lo) && s.has(up)) {
            ans++;
        }
    }
    return ans;
};