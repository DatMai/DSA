/**
 * @param {string} s
 * @return {number}
 */
myAtoi = (s) => {
    s = trimWhiteSpace(s);
    if (s.length === 0) return 0;

    if ((s[0] >= 'a' && s[0] <= 'z') || (s[0] >= 'A' && s[0] <= 'Z')) return 0;

    let { sign, str } = signedNess(s);

    str = conversion(str);

    let num = sign * Number(str);
    return clamp32(num);
};

trimWhiteSpace = (s) => {
    return s.trim();
}

signedNess = (s) => {
    let sign = 1;

    if (s[0] === '+' || s[0] === '-') {
        sign = s[0] === '-' ? -1 : 1;
        s = s.slice(1);
    }

    return { sign, str: s };
}

conversion = (s) => {
    let convertedString = '';
    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= '0' && s[i] <= '9') {
            convertedString += s[i];
        } else {
            break;
        }
    }
    return convertedString;
}

clamp32 = (num) => {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (num < INT_MIN) return INT_MIN;
    if (num > INT_MAX) return INT_MAX;
    return num;
}
