/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    let count = 0;
    if (n === 1) return 1;
    for (let i = 1; i <= n; ++i) {
        let r = Math.floor(Math.sqrt(i));
        if (r * r == i) count++;
    }
    return count;
}