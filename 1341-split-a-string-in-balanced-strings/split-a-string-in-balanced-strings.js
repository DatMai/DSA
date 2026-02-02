/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0, sum = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] == 'L') sum++;
        if (s[i] == 'R') sum--;
        if (sum == 0) count++;
    }
    return count;
};