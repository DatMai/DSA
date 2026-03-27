/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;
    let n = s.length;

    // skip leading whitespace;
    while (i < n && s[i] === ' ') i++;

    // check sign;
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') sign = -1;
        i++;
    }

    let result = 0;
    const INT_MAX = (2 ** 31) - 1;
    const INT_MIN = -(2 ** 31)
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        // check overflow before adding digit
        const MAX_DIV_10 = Math.floor(INT_MAX / 10);
        const MAX_LAST_DIGIT = INT_MAX % 10; // = 7
        if (result > MAX_DIV_10 || (result === MAX_DIV_10 && digit > MAX_LAST_DIGIT)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};