/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
    console.log('checking recursion(n)[k]', recursion(n), recursion(n)[k + 1])
    return recursion(n)[k - 1];
};

recursion = (n) => {
    let s = '0'
    for (let i = 1; i < n; ++i) {
        s += '1' + invert(s);
    }
    return s;
}

invert = (s) => {
    let res = '';
    for (let c of s) {
        res += c === '0' ? '1' : '0';
    }
    return res.split('').reverse().join('');
}
