var isHappy = function (n) {
    const set = new Set();
    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = getNext(n);
    }
    return n === 1;
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
