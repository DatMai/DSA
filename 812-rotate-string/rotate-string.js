/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let copiedS = s+s;
    return copiedS.includes(goal) && s.length === goal.length;
};