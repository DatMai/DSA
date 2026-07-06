const removeCoveredIntervals = A => {
    A.sort(([u, v], [x, y]) => (u - x) || (y - v));
    let res = 0, lo = 0;

    for (const [_, b] of A) {
        res += (b > lo);
        lo = Math.max(lo, b);
    }

    return res;
};