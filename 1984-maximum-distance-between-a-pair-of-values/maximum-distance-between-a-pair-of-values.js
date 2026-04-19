const maxDistance = (A, B) => {
    let i, j;

    for (i = 0, j = 0; i < A.length && j < B.length; j++)
        i += A[i] > B[j];

    return Math.max(0, j - i - 1);
};