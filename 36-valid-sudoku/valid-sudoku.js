/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let sodokuSet = new Set();
    for (let i = 0; i < 9; ++i) {
        for (j = 0; j < 9; ++j) {
            if (board[i][j] === '.') continue;

            let row = `${board[i][j]} in row ${i}`;
            let column = `${board[i][j]} in column ${j}`;
            let box = `${board[i][j]} in box (${Math.floor(i / 3)},${Math.floor(j / 3)})`;

            if (sodokuSet.has(row) || sodokuSet.has(column) || sodokuSet.has(box)) {
                return false;
            }

            sodokuSet.add(row);
            sodokuSet.add(column);
            sodokuSet.add(box);
        }

    }
    return true;
};