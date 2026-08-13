/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let cache = new Map();
    let newList = [];

    for (let i = 0; i < strs.length; ++i) {
        let sortedString = strs[i].split('').sort().join('');
        if (!cache.has(sortedString)) {
            newList = [];
            newList.push(strs[i]);
            cache.set(sortedString, newList);
        } else {
            newList = cache.get(sortedString)
            newList.push(strs[i]);
        }
    }


    return [...cache.values()];
};