/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let newArr = new Array(indices.length);
    s.split('');
    for (let i = 0; i < s.length; ++i) {
        newArr[indices[i]] = (s[i]);
    }
    return newArr.join('');
};