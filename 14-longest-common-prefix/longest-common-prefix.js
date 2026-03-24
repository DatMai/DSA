/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    while (prefix.length > 0) {
        let ok = true;
        for (let i = 1; i < strs.length; ++i) {
            if (strs[i].indexOf(prefix) !== 0) {
                ok = false;
                break;
            }
        }
        if (ok) return prefix;
        prefix = prefix.slice(0, prefix.length - 1);
    }
    return '';
};