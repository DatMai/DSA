/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let seen = new Set();
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            if (board[i][j] === '.') continue;

            let row = `num ${board[i][j]} in row ${i}`;
            let col = `num ${board[i][j]} in col ${j}`;
            let box = `num ${board[i][j]} in box (${Math.floor(i / 3)},${Math.floor(j / 3)})`;

            if (seen.has(row) || seen.has(col) || seen.has(box)) return false;

            seen.add(row);
            seen.add(col);
            seen.add(box);
        }
    }

    return true;
};