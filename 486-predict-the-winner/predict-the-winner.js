const predictTheWinner = A => {
    const maxDiff = _.memoize(
        (i, j) => {
            if (i === j) return A[i];
            return Math.max(A[i] - maxDiff(i + 1, j),
                            A[j] - maxDiff(i, j - 1));
        },
        (i, j) => (i << 16) | j
    );

    return maxDiff(0, A.length - 1) >= 0;
};