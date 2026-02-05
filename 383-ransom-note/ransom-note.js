/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; ++i) {
        let index = magazine.indexOf(ransomNote[i]);
        if (index == -1) {
            return false;
        }
        else {
            magazine = magazine.slice(0, index) + magazine.slice(index + 1);
        };
    }

    return true;
};