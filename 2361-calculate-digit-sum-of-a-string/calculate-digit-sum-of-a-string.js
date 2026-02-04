var digitSum = function (s, k) {
    while (s.length > k) {
        let res = '';
        for (let i = 0; i < s.length; i += k) {
            let sum = 0;
            for (let j = i; j < i + k && j < s.length; j++) {
                sum += s[j] - '0';
            }
            res += sum;
        }
        s = res;
    }
    return s;
};
