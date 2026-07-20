var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const total = m * n;
    k %= total;

    const res = Array.from({ length: m }, () => new Array(n));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const idx = (i * n + j + k) % total;
            res[Math.floor(idx / n)][idx % n] = grid[i][j];
        }
    }

    return res;
};