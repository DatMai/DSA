var isHappy = function (n, seen = new Set()) {
    if (n === 1) return true;
    if (seen.has(n)) return false;

    seen.add(n);
    return isHappy(getNext(n), seen);
};

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        sum += digit * digit;
    }
    return sum;
}
