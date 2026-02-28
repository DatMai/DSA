/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    let count = 0;
    for (let i = 1; i <= n; ++i) {
        let r = Math.floor(Math.sqrt(i));
        if (r * r == i) count++;
        if (r * r > n) break;
    }
    return count;
}