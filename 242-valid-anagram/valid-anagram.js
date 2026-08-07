/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (t.length != s.length) return false;

    let myMap = new Map();
    for (let i = 0; i < s.length; i++) {
        myMap.set(s[i], (myMap.get(s[i]) ? myMap.get(s[i]) : 0) + 1);

    }

    for (let i = 0; i < t.length; i++) {
        if (myMap.has(t[i])) {
            myMap.set(t[i], myMap.get(t[i]) - 1);
        }
    }

    for (const count of myMap.values()) {
        if (count !== 0) return false;
    }
    
    return true;
};