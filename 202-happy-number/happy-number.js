var isHappy = function (n) {
    return dfs(n, getNext(n));
};

function dfs(slow, fast) {
    if (fast === 1) return true;
    if (slow === fast) return false;
    return dfs(getNext(slow), getNext(getNext(fast)));
}

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        sum += digit * digit;
    }
    return sum;
}
