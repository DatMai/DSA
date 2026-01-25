/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let arrS = [], arrT = [];

    if (s.length != t.length) return false;
    
    for (let i = 0; i < s.length; i++) {
        arrS.push(s[i]);
        arrT.push(t[i]);
    }

    arrS = arrS.sort();
    arrT = arrT.sort();
    for (let i in arrS) {
        if (arrS[i] != arrT[i]) {
            return false
        }
    }
    return true;
};