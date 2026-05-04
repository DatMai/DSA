const rotate = mat => {
    let n = mat.length
    for (let i = 0; i < n >> 1; i++)
        for (let j = i; j < n - 1 - i; j++)
            [mat[i][j], mat[j][n - 1 - i], mat[n - 1 - i][n - 1 - j], mat[n - 1 - j][i]] =
            [mat[n - 1 - j][i], mat[i][j], mat[j][n - 1 - i], mat[n - 1 - i][n - 1 - j]]
}