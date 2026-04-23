/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let convertedString = '';
    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z' || s[i] >= '0' && s[i] <= '9') convertedString += s[i];
    }
    let reversedString = convertedString.split('').reverse().join('');
    return reversedString.toLowerCase() === convertedString.toLowerCase();
};