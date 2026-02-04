/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
    let size = s.length;
    let arr = [];
    if (s.length <= k) return s;
    while (size > k) {
        let a = arr.length > 0 ? arr : s;
        arr = divine(a, k);
        size = arr.length;
    }
    let sum = arr.reduce((a, b) => String(a) + String(b));
    return sum;
};

divine = (s, k) => {
    let arr = [];
    for (let i = 0; i < s.length; ++i) {
        let subArr = [];
        for (let j = i; j < i + k; ++j) {
            if (s[j]) subArr.push(s[j]);
        }

        arr.push(subArr);
        i = i + k - 1;
    }

    arr = merge(arr);
    arr = arr.join('').split('');
    console.log('checking arr', arr);
    return arr;
}

merge = (arr) => {
    console.log('checking arr', arr)
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].reduce((e, v) => Number(e) + Number(v), 0);
    }
    return arr;
}