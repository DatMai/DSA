/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let n = s.length;
    let i = 0;

    while (i< n && s[i] === ' ') {
        ++i;
    }

    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') { sign = -1; }
        ++i;
    }

    let result = 0;
    let MAX_INT = (2 ** 31) - 1;
    let MIN_INT = -(2 ** 31);
    let MAX_DIV_10 = Math.floor(MAX_INT / 10);
    let MAX_LAST_DIGIT = MAX_INT % 10;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';
        if (result > MAX_DIV_10 || (result === MAX_DIV_10 && digit > MAX_LAST_DIGIT)) {
            return sign === 1 ? MAX_INT : MIN_INT;
        }
        result = result * 10 + digit;
        ++i;
    }

    return result * sign;
};