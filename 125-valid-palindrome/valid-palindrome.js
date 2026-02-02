/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newString = '';
    for (let c of s) {
        if (c >= '0' && c <= '9' || c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
            newString += c.toLowerCase();
        };
    }
    let reversedString = newString.split('').reverse().join('')
    return newString === reversedString;;
};